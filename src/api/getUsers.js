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
