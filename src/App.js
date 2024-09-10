import "./App.css";
import Main from "./components/main/Main";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./components/user/UserDetails";
import MainPage from "./pages/MainPage";
import { paths } from "./lib/paths";

function App() {
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
