import React, { useState } from "react";
import { getUsers } from "../../api/getUsers";
import { Button, InputLogin } from "./SearchBar.styled";

const SearchBar = ({ searchResult, setIsLoading }) => {
  const [searchValue, setSearchValue] = useState("");
  async function searchUser() {
    setIsLoading(true);
    try {
      const foundUsers = await getUsers(searchValue);
      searchResult(foundUsers);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <div>
        <InputLogin
          type="search"
          value={searchValue}
          placeholder="Введите имя пользователя"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button onClick={searchUser}>Найти</Button>
      </div>
    </div>
  );
};

export default SearchBar;
