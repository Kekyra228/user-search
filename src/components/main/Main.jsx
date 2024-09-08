import React, { useEffect, useState } from "react";
import UsersList from "../usersList/UsersList";
import SearchBar from "../searchBar/SearchBar";

// const Main = () => {
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {}, []);
//   return <>{isLoading ? <p></p> : <UsersList />}</>;
// };

// export default Main;

const Main = () => {
  const [users, setUsers] = useState([]);

  //в параметры передаем резултат поиска из апи и обновляем состояние
  function showFoundUsers(searchResult) {
    setUsers(searchResult.items);
  }
  console.log(users);
  return (
    <>
      <SearchBar searchResult={showFoundUsers} />
      <UsersList users={users} />
    </>
  );
};

export default Main;
