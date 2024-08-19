import { useDispatch } from "react-redux";
import { fetchAddressByGeolocation } from "../user/geolocationSlice";



const Cart = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button className="border-2 p-3 bg-orange-400" onClick={()=> dispatch(fetchAddressByGeolocation())}>Get Position</button>
    </div>
  );
};

export default Cart;
