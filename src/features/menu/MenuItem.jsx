import AddToCartButton from "./AddToCartButton";
import NonVeg from "/nonveg.png";
import Veg from "/veg.png";
import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const {
    name,
    description,
    image,
    is_veg,
    discount_price,
    regular_price,
    available,
  } = item;

  const handleAddToCart = () => {};
  return (
    <li>
      <div className="border max-w-[300px]  bg-orange-50 p-3 rounded-lg flex flex-col gap-4 drop-shadow-xl hover:scale-105 delay-200 transition-transform ease-in-out ">
        <img src={image} alt="burger image" className="h-60 w-68" />
        <div className="flex  justify-between">
          <p className="text-lg md:text-xl font-bold text-orange-500">{name}</p>
          {is_veg ? (
            <img src={Veg} alt="veg" />
          ) : (
            <img src={NonVeg} alt="non veg" />
          )}
        </div>
        <p>{description}</p>
        <div className="flex justify-between items-center gap-10 ">
          <p className="text-lg font-semibold">₹ {discount_price}</p>
          <AddToCartButton handleCart={handleAddToCart} />
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  is_veg: PropTypes.bool,
  price: PropTypes.number,
  discount_price: PropTypes.number,
  regular_price: PropTypes.number,
  available: PropTypes.bool,
};

export default MenuItem;
