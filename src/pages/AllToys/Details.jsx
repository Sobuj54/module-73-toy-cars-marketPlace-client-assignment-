import { Rating, Star } from "@smastrom/react-rating";
import { useLoaderData } from "react-router-dom";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

const Details = () => {
  const cars = useLoaderData();

  const { seller, email, rating, description, toy, price, quantity, photo } =
    cars;

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 ">
      <div className="hero min-h-screen bg-inherit">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={photo}
            className="max-w-lg rounded-lg shadow-2xl shadow-zinc-800"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">{toy}</h1>
            <p className="py-1 font-semibold">Seller : {seller}</p>
            <p className="py-1 font-semibold">Seller email : {email}</p>
            <p className="py-1 font-semibold">Price : {"$ " + price}</p>
            <p className="py-1 font-semibold flex gap-3">
              <span>Rating :</span>
              <Rating
                readOnly
                style={{ maxWidth: 120 }}
                value={rating}
                itemStyles={myStyles}
              />
            </p>
            <p className="py-1 font-semibold">Quantity : {quantity}</p>
            <p className="py-1 font-semibold">Description : {description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;