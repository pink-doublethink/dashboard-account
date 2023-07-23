import styled from "styled-components";

export const MenuItemContainer = styled.a`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  justify-content: space-between;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
