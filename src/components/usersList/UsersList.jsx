import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { Pagination, UserItem, Wrapper } from "./UsersList.styled";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../api/getUsers";

const UsersList = ({ users, isLoading, sortOrder }) => {
  const [selectedUser, setSelectedUser] = useState(null); //выбранный пользователь при клике
  const [detailedUsers, setDetailedUsers] = useState([]); // Состояние для хранения пользователей с полной информацией

  useEffect(() => {
    async function fetchDetails() {
      const usersWithDetails = await Promise.all(
        //делаем запрос на каждого пользователя параллельно
        users.map(async (user) => {
          const details = await getUserDetails(user.login);
          return { ...user, ...details }; //получаем базовые данные и детализацию по юзеру и объединяем
        })
      );
      setDetailedUsers(usersWithDetails);
    }

    if (users.length > 0) {
      fetchDetails();
    }
  }, [users]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const sortedUsers = [...detailedUsers].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.public_repos - b.public_repos; // Сортировка по возрастанию
    } else {
      return b.public_repos - a.public_repos; // Сортировка по убыванию
    }
  });

  const indexOfLastUser = currentPage * usersPerPage; // Последний пользователь на странице
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Первый пользователь на странице
  const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber); // Изменяем страницу

  // общее количество страниц
  const totalPages = Math.ceil(users.length / usersPerPage);
  const nav = useNavigate();
  if (isLoading) {
    return <p>Загрузка...</p>;
  }
  const paths = {
    USER: "/user",
  };
  function clickUser(user) {
    if (user) {
      setSelectedUser(user);
      nav(`${paths.USER}/${user.login}`, { state: { user } });
    }
  }

  return (
    <Wrapper>
      {Array.isArray(users) && users.length === 0
        ? "Не найдено пользователей"
        : ""}
      {Array.isArray(users) &&
        currentUsers.map((user) => (
          <UserItem
            onClick={() => clickUser(user)}
            isSelected={selectedUser?.id === user.id}
          >
            <User key={user.id} user={user} />
          </UserItem>
        ))}
      <Pagination>
        {/* Кнопка "Предыдущая" */}
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Предыдущая
        </button>
        <span>
          {currentPage} из {totalPages}
        </span>

        {/* Кнопка "Следующая" */}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages} // Отключаем, если на последней странице
        >
          Следующая
        </button>
      </Pagination>
    </Wrapper>
  );
};

export default UsersList;
