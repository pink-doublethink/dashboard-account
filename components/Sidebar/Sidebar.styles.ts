import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
