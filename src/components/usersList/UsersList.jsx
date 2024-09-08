import { useNavigate } from "react-router-dom";
import User from "../user/User";
import { UserItem, Wrapper } from "./UsersList.styled";

const UsersList = ({ users, isLoading }) => {
  const nav = useNavigate();
  if (isLoading) {
    return <p>Загрузка...</p>;
  }
  const paths = {
    USER: "/user", // Можно использовать уже определенный путь
  };
  function clickUser(user) {
    if (user) {
      console.log(user);
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
          <UserItem onClick={() => clickUser(user)}>
            <User key={user.id} user={user} />
          </UserItem>
        ))}
    </Wrapper>
  );
};

export default UsersList;
