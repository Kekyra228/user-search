import React from "react";
import { UserAvatar, UserInfo, UserInfoContain, Wrapper } from "./User.styled";

const User = ({ user }) => {
  return (
    <Wrapper>
      <UserInfoContain>
        <UserAvatar src={user.avatar_url} alt={user.login} />
        <UserInfo>
          <h3>{user.login}</h3>
        </UserInfo>
      </UserInfoContain>
    </Wrapper>
  );
};

export default User;
