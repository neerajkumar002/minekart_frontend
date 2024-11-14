import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex justify-center ">
      <div className="bg-white shadow-lg w-[400px] rounded-lg mt-40 p-5">
        <h1 className="text-center font-bold uppercase text-3xl mb-3">
          Add New Products
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              id="name"
              className="border-2 border-gray-400/20 rounded py-1 px-2"
              placeholder="Product Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700">Product name is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              {...register("price", { required: true })}
              id="price"
              className="border-2 border-gray-400/20 rounded py-1 px-2"
              placeholder="Price"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700">Product Price is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="stock">Stock</label>
            <input
              type="number"
              {...register("stock", { required: true })}
              id="stock"
              className="border-2 border-gray-400/20 rounded py-1 px-2"
              placeholder="stock"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700">Product stock is required</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="image">Product Image</label>
            <input
              type="file"
              {...register("image", { required: true })}
              id="image"
              className="border-2 border-gray-400/20 rounded py-1 px-2"
              placeholder="Product Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-700">Product Image is required</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500/50 text-white rounded py-2 hover:bg-blue-500 transition-all"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
