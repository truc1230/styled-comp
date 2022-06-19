import styled from "styled-components";
interface SidebarItemProps{
  primary?: boolean;
}
export const SideBarWrapper = styled.div`
  height: 100%;
  width: 250px;
  background-color: pink;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const SideBarItem = styled.div<SidebarItemProps>`
  width: 100%;
  padding: 20px;
  background-color: ${props => props.primary?"blue":"white"};
`;

