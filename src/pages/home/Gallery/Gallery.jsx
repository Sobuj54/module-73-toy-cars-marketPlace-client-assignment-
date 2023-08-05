const Gallery = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 px-5 py-2 lg:px-auto pt-10 lg:pt-14 ">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Our Toy Gallery</h2>
        <p className="text-xl mt-2">Few Toy Images From Our Toys.</p>
      </div>
      <div className="-m-1 flex flex-wrap md:-m-2 w-full">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/14823946/pexels-photo-14823946.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/16361066/pexels-photo-16361066/free-photo-of-wood-cars-traffic-nature.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/385997/pexels-photo-385997.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://images.pexels.com/photos/1522185/pexels-photo-1522185.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
