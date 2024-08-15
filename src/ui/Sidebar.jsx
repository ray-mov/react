import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: #f0f0f0;
  grid-row: 1 / -1;
  text-align: center;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <h1>BingBurgers</h1>
      <MainNav />
    </StyledSidebar>
  );
};

export default Sidebar;
