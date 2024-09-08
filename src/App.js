import "./App.css";
import Main from "./components/main/Main";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/user/UserDetails";
import MainPage from "./pages/MainPage";

function App() {
  const paths = {
    ERROR: "*",
    MAIN: "/",
    USER: "/user/:login",
  };

  return (
    <>
      <Routes>
        <Route path={paths.MAIN} element={<MainPage />}>
          <Route path={paths.USER} element={<UserDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
