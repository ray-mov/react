import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);

  return <ul>
    {menu.map(item => <MenuItem item={item} key={item.id}/>)}
    </ul>

}




export default Menu;