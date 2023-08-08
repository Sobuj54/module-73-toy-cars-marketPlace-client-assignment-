import { useLoaderData } from "react-router-dom";
import ToyTable from "./ToyTable";

const AllToys = () => {
  const toys = useLoaderData();

  let count = 1;

  return (
    <div className="overflow-x-auto lg:px-5 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-14 lg:py-20">
      <h2 className="text-4xl font-bold text-center mb-14">All Toys</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-[16px]">
            <th></th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((loadedToy) => (
            <ToyTable
              key={loadedToy._id}
              loadedToy={loadedToy}
              count={count++}></ToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
