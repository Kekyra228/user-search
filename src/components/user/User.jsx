import React from "react";
import { UserAvatar, UserInfo, UserInfoContain, Wrapper } from "./User.styled";

const User = ({ user }) => {
  console.log(user);
  return (
    <Wrapper>
      <UserInfoContain>
        <UserAvatar src={user.avatar_url} alt={user.login} />
        <UserInfo>
          <h3>{user.login}</h3>
          <p>{user.id}</p>
        </UserInfo>
      </UserInfoContain>
    </Wrapper>
  );
};

export default User;
