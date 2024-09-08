import User from "../user/User";
import { UserItem, Wrapper } from "./UsersList.styled";

const UsersList = ({ users, isLoading }) => {
  if (isLoading) {
    return <p>Загрузка...</p>;
  }
  return (
    <Wrapper>
      {Array.isArray(users) && users.length === 0
        ? "Не найдено пользователей"
        : ""}
      {Array.isArray(users) &&
        users.map((user) => (
          <UserItem>
            <User key={user.id} user={user} />
          </UserItem>
        ))}
    </Wrapper>
  );
};

export default UsersList;
