import React from "react";
import { UserAvatar, UserInfoContain, Wrapper } from "./User.styled";

const User = ({ user }) => {
  console.log(user);
  return (
    <Wrapper>
      <UserInfoContain>
        <UserAvatar src={user.avatar_url} alt={user.login} />
        <h3>{user.login}</h3>
      </UserInfoContain>
    </Wrapper>
  );
};

export default User;
