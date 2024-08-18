import { useForm } from "react-hook-form";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="item name" {...register("name")} />
      <input
        type="number"
        name=""
        id=""
        placeholder="item price"
        {...register("price")}
      />
      {/* <input type="submit" /> */}
      <button type="reset"> reset</button>
      <button>Add</button>
    </form>
  );
};

export default AddNewItem;
