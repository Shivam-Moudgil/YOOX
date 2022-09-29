import {Switch} from "@chakra-ui/react";
import {Route, Routes, useLocation} from "react-router-dom";
import { Signup } from "../componets/Register/Signup";
import Navbar from "../Navbar";
import Footertop from "../SmallNav/FooterTop";
import Home from "./Home";
import { Login } from "./Login";
import MainP from "./MainP";
function AllRoutes() {
  // const location = useLocation;
  return (
    <>
      {/* {location.path == "/login" || location.path == "/signup" ? null :<Navbar/>} */}
{/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<MainP />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/home/:name" element={<Home />}></Route>
      </Routes>
      {/* <Footertop/> */}
    </>
  );
}

export {AllRoutes};
