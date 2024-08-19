import { Link } from "react-router-dom";
import BurgerLogo from "/burgerlogo.png";
import { HiShoppingCart } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between items-center ">
      <Link to="/">
        <img src={BurgerLogo} alt="Bing Burgers" />
      </Link>
      <ul className="text-md flex gap-14">
        <li className="">
          <Link to="/user" className="flex gap-2 items-center">
            <HiOutlineUser />
            <span>My Account</span>
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex gap-2 items-center">
            <HiShoppingCart />
            <span>Cart</span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
