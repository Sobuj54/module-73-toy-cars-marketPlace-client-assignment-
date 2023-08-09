import Banner from "../Banner/Banner";
import FeedBack from "../FeedBack/FeedBack";
import Gallery from "../Gallery/Gallery";
import OpenTime from "../OpenTime/OpenTime";
import ShopByCategory from "../Shop/ShopByCategory";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <OpenTime></OpenTime>
      <FeedBack></FeedBack>
    </>
  );
};

export default Home;
