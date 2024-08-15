

const MenuItem = ({item}) => {
  const {name} = item;
  return (
    <li>
      <img src="" alt="item" />
      <div>
        <p>{name}</p>
      </div>
    </li>
  )
}

export default MenuItem