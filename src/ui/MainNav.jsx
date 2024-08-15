import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  HiHome,
  HiClipboardDocumentList,
  HiMiniUserGroup,
  HiMiniUserCircle,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: aliceblue;
    background-color: antiquewhite;
    border-radius: 5px;
  }
`;
const MainNav = () => {
  return (
    <nav>
      <NavList>
        <StyledNavLink to="/dashboard">
          <HiHome />
          <span>Home</span>
        </StyledNavLink>
        <li></li>
        <li>
          <StyledNavLink to="/orders">
            <HiClipboardDocumentList />
            <span>Orders</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/customers">
            <HiMiniUserGroup />
            <span>Customers</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <HiMiniUserCircle />
            <span>Users</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
