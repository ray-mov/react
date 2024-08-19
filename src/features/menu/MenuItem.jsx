import AddToCartButton from "./AddToCartButton";


const MenuItem = ({item}) => {
  const {name} = item;
  return (
    <li>
      <img src="" alt="item" />
      <div>
        <p>{name}</p>
        <AddToCartButton />
      </div>
    </li>
  )
}

export default MenuItem