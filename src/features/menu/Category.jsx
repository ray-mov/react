import { useNavigate} from "react-router-dom";
import { useGetCategoriesQuery } from "./categorySlice";


const Category = () => {
  
  const { data: categories, error, isLoading } = useGetCategoriesQuery();
  console.log(categories);

  const navigate = useNavigate();

  // useEffect(() => {
  //   redirect("menu/1");
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // description: "Delicious, juicy burgers with fresh toppings and perfectly grilled patties. ";
  // id: 1;
  // image: "https://xoebjbjgqsazizhmbnol.supabase.co/storage/v1/object/public/category/icons8-burger-100.png";
  // name: "Burgers";

  return (
    <div className=" max-w-[700px] border-2 rounded-[100px] bg-orange-50 flex justify-evenly mt-10 gap-5 px-12 py-2">
      {categories && categories.length > 0 ? (
        categories.map((category) => (
          <button
            key={category.id}
            className="py-2 flex flex-col justify-center items-center hover:bg-orange-100 rounded-full w-24 h-24"
            onClick={() => navigate(`menu/:${category.id}`)}
          >
            <div>
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16"
              />
            </div>
            <div>
              <h3 className="text-md ">{category.name}</h3>
            </div>
          </button>
        ))
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default Category;
