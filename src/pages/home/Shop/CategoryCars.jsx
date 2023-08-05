const CategoryCars = ({ car }) => {
  const { name, picture, price, rating } = car;
  return (
    <div className="card card-compact w-full  bg-base-100 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{price}</p>
        <p>{rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCars;
