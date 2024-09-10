import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 20px;
`;
export const UserItem = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  background-color: #fff;
  background-color: ${(props) => (props.isSelected ? "#cceeff" : "white")};
  border-color: ${(props) => (props.isSelected ? "#0077cc" : "transparent")};
`;

export const Pagination = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  & button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
  }
`;
