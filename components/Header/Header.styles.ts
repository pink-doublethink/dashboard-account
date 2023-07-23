import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  margin: auto;
`;
