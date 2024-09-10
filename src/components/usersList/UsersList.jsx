import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { UserItem, Wrapper } from "./UsersList.styled";
import { useState } from "react";
import UserDetails from "../user/UserDetails";

const UsersList = ({ users, isLoading }) => {
  const [selectedUser, setSelectedUser] = useState(null); //выбранный пользователь при клике
  const [isOpen, setIsOpen] = useState(false);

  //закрытие модалки с детализацей

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
        users.map((user) => (
          <UserItem
            onClick={() => clickUser(user)}
            isSelected={selectedUser?.id === user.id}
          >
            <User key={user.id} user={user} />
          </UserItem>
        ))}
      {/* {isOpen && <UserDetails user={selectedUser} onClose={closeModal} />} */}
    </Wrapper>
  );
};

export default UsersList;
