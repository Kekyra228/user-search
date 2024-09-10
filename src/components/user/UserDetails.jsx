import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Modal, ModalOverlay } from "./UserDetails.styled";
import { paths } from "../../lib/paths";

const UserDetails = () => {
  let { login } = useParams();
  const { state } = useLocation(); // Получаем переданные данные через state
  const nav = useNavigate();

  const user = state?.user;
  if (!user) {
    return <div>Пользователь не найден</div>;
  }
  function closeModal() {
    nav(paths.MAIN);
  }
  return (
    <ModalOverlay>
      <Modal>
        <h3>Подробности о пользователе {user.login}</h3>
        <p>ID: {user.id}</p>
        <p>{user.description}</p>
        <p>Ссылка на пользователя:{user.html_url}</p>
        <button onClick={closeModal}>закрыть</button>
      </Modal>
    </ModalOverlay>
  );
};

export default UserDetails;
