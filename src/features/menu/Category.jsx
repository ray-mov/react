import { useGetCategoriesQuery } from "./categorySlice";

const Category = () => {
  

   const { data: categories, error, isLoading } = useGetCategoriesQuery();
   console.log(categories);
   

   if (isLoading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>;
   
// description: "Delicious, juicy burgers with fresh toppings and perfectly grilled patties. ";
// id: 1;
// image: "https://xoebjbjgqsazizhmbnol.supabase.co/storage/v1/object/public/category/icons8-burger-100.png";
// name: "Burgers";
  
  return (
    <div className=" max-w-[700px] border-2 rounded-3xl bg-orange-50">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <div
            key={category.id}
            className="p-4 border-b last:border-none flex items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default Category;
