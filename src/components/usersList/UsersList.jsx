import User from "../user/User";

const UsersList = ({ users }) => {
  return (
    <div>
      {Array.isArray(users) && users.length === 0
        ? "Не найдено пользователей"
        : ""}
      {Array.isArray(users) &&
        users.map((user) => <User key={user.id} user={user} />)}
    </div>
  );
};

export default UsersList;
