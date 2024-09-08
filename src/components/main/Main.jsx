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
  return (
    <>
      <SearchBar />
      <UsersList />
    </>
  );
};

export default Main;
