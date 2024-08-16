import { Link } from "react-router-dom";
import BurgerLogo from "/burgerlogo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <Link to="/">
        <img src={BurgerLogo} alt="Bing Burgers" />
      </Link>
      <ul className="text-md flex gap-14">
        <li className="">
          <Link to="/user">My Account</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
