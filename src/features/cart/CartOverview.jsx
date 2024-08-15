import { Link } from "react-router-dom"


const CartOverview = () => {
  return (
    <div>
      <p>
      <span>2 Item</span>
      <span>2313</span>
      </p>
      <Link to="/cart">Open Cart</Link>
    </div>
  )
}

export default CartOverview