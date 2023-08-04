import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default LayOut;
