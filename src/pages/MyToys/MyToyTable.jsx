import { EmailAuthProvider } from "firebase/auth";
import { Link } from "react-router-dom";

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
        <td className=" w-2/12">
          <Link className="btn btn-primary">Edit</Link>
          <Link className="btn btn-primary">Delete</Link>
        </td>
      </tr>
    </>
  );
};

export default MyToyTable;
