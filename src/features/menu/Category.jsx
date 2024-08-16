import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  console.log(category);
  
  return (
    <div className=" max-w-[700px] border-2 rounded-3xl bg-orange-50">
      {
        
      }
    </div>
  );
};

export default Category;
