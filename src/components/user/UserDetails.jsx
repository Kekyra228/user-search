import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CloseButton, Modal, ModalOverlay } from "./UserDetails.styled";
import { paths } from "../../lib/paths";
import { getUserDetails } from "../../api/getUsers";
import { useEffect, useState } from "react";

const UserDetails = () => {
  let { login } = useParams();
  const { state } = useLocation(); // Получаем переданные данные через state
  const nav = useNavigate();

  const [details, setDetails] = useState(null);
  useEffect(() => {
    async function getDetails() {
      try {
        const details = await getUserDetails(login);
        setDetails(details);
      } catch (error) {
        console.log(error);
      }
    }
    getDetails();
  }, [login]);

  const user = state?.user;
  if (!user) {
    return <div>Пользователь не найден</div>;
  }
  if (!details) {
    return <div>Пользователь не найден</div>;
  }

  function closeModal() {
    nav(paths.MAIN);
  }
  return (
    <ModalOverlay>
      <Modal>
        <h3>Подробности о {user.login}</h3>
        <p>ID: {user.id}</p>
        <p>Подписчики: {details.followers}</p>
        <p>Описание: {details.bio || "Нет описания"}</p>
        <p>
          Ссылка на профиль: <a href={details.html_url}>{details.html_url}</a>
        </p>
        <CloseButton data-testid="close-button" onClick={closeModal}>
          ⛔
        </CloseButton>
      </Modal>
    </ModalOverlay>
  );
};

export default UserDetails;
