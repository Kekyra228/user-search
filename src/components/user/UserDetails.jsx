import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Modal } from "./UserDetails.styled";

const UserDetails = () => {
  let { login } = useParams();
  const { state } = useLocation(); // Получаем переданные данные через state

  const user = state?.user;

  console.log("Компонент рендерится", login);
  if (!user) {
    return <div>Пользователь не найден</div>;
  }
  return (
    <Modal>
      <h2>Подробности о пользователе {user.login}</h2>
      <p>ID: {user.id}</p>
      <p>Ссылка на пользователя:{user.html_url}</p>
    </Modal>
  );
};

export default UserDetails;
