import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { Pagination, UserItem, Wrapper } from "./UsersList.styled";
import { useState } from "react";
import UserDetails from "../user/UserDetails";

const UsersList = ({ users, isLoading }) => {
  const [selectedUser, setSelectedUser] = useState(null); //выбранный пользователь при клике
  const [isOpen, setIsOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  const indexOfLastUser = currentPage * usersPerPage; // Последний пользователь на странице
  const indexOfFirstUser = indexOfLastUser - usersPerPage; // Первый пользователь на странице
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser); // пользователи для текущей страницы
  // Изменяем страницу
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
