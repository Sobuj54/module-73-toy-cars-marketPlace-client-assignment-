import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import MyToyTable from "./MyToyTable";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/addedToys", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllToys(data);
      });
  }, []);

  const myToys = allToys.filter((toy) => toy.email === user.email);

  let count = 1;

  return (
    <div className="overflow-x-auto lg:px-5 bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100 py-14 lg:py-20">
      <h2 className="text-4xl font-bold text-center mb-14">My Toys</h2>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((loadedToy) => (
            <MyToyTable
              key={loadedToy._id}
              loadedToy={loadedToy}
              count={count++}
              allToys={allToys}
              setAllToys={setAllToys}></MyToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
