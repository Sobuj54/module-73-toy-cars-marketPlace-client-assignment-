import { FaPen, FaTrashAlt } from "react-icons/fa";

const MyToyTable = ({ loadedToy, count }) => {
  const { _id, seller, toy, subCategory, price, quantity, email } = loadedToy;

  return (
    <>
      {/* row 1 */}
      <tr>
        <th>{count}</th>
        <td>{toy}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{quantity}</td>
        <td>{seller}</td>
        <td>{email}</td>
        <td className=" w-2/12 space-x-2">
          <button className="btn btn-success text-white">
            <FaPen />
          </button>
          <button className="btn btn-error text-white">
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;
