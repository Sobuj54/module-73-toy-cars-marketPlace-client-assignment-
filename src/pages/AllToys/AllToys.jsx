import ToyTable from "./ToyTable";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(
      `https://toy-cars-market-place-server.vercel.app/addedToys?limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [limit]);

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
      <div className="text-center mt-10 w-2/4 mx-auto">
        {limit < 21 ? (
          <button
            onClick={() => setLimit(50)}
            className="btn btn-accent w-full">
            show more
          </button>
        ) : (
          <button
            onClick={() => setLimit(20)}
            className="btn btn-neutral w-full">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default AllToys;
