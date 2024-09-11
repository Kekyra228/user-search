export async function getUsers(searchValue) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}`
  );
  if (!response.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const usersData = await response.json();
  return usersData;
}

export async function getUserDetails(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(
        `Ошибка при получении данных пользователя: ${response.statusText}`
      );
    }

    const userDetails = await response.json();
    return userDetails;
  } catch (error) {
    console.error("Ошибка при выполнении запроса к API GitHub:", error);
    throw error;
  }
}
