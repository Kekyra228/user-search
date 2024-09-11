import { Outlet } from "react-router-dom";
import Main from "../components/main/Main";

const MainPage = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
};

export default MainPage;
