import React, { useState } from "react";
import { getUsers } from "../../api/getUsers";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  async function searchUser() {
    const searchResult = await getUsers(searchValue);
    console.log(searchResult);
  }
  return (
    <div>
      <div>
        <input
          type="search"
          value={searchValue}
          placeholder="Введите имя пользователя"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchUser}>Найти</button>
      </div>
    </div>
  );
};

export default SearchBar;
