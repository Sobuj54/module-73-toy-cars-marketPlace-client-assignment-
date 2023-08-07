import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const handleAddAToy = (event) => {
    event.preventDefault();
  };

  return (
    <div className="py-14 lg:py-20 bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
      {/* form */}
      <form
        onSubmit={handleAddAToy}
        className="w-11/12 lg:w-7/12 mx-auto px-7 lg:px-10 py-16 rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-slate-200 shadow-lg shadow-gray-700">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Add A Toy
        </h2>
        {/* input field row 1 */}
        <div className="w-full lg:w-11/12 mx-auto lg:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Seller Name"
              defaultValue={user.displayName}
              name="seller"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Seller Email"
              defaultValue={user.email}
              name="email"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* input field row 2 */}
        <div className="w-full lg:w-11/12  mx-auto lg:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Toy Name"
              name="Toy"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Sub Category</span>
            </label>
            <input
              type="text"
              placeholder="Toy Sub Category"
              name="subCategory"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* input field row 3 */}
        <div className="w-full lg:w-11/12  mx-auto lg:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Toy Price"
              name="price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Toy Rating"
              name="rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* input field row 4 */}
        <div className="w-full lg:w-11/12  mx-auto lg:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              name="quantity"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-11/12  mx-auto">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-bordered w-full h-20"
          />
        </div>
        {/* submit */}
        <div className="w-full lg:w-11/12 mx-auto mt-7">
          <input
            type="submit"
            value="Add"
            className=" btn btn-primary w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
