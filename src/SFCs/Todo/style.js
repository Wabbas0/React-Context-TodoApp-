import styled from "styled-components";

export const Li = styled.li`
  color: #3e3737;
  background: #fff;
  padding: 15px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  span {
    text-decoration: ${props =>
      props.strikeThrough ? "line-through" : "none"};
  }
`;
