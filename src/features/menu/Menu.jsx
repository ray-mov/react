import { useState } from "react";
import { useGetMenuQuery } from "./menuSlice";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [catId, setCatId] = useState(1);

  const { data: menu, error, isLoading } = useGetMenuQuery(catId);
  console.log(menu);

  return (
    <ul className="flex gap-8 flex-wrap">
      {error ? (
        <li>{error}</li>
      ) : (
        menu?.map((item) => <MenuItem item={item} key={item.id} />)
      )}
    </ul>
  );
};

export default Menu;
