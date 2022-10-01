import {Switch} from "@chakra-ui/react";
import {Route, Routes, useLocation} from "react-router-dom";
import DesignComponent from "../componets/DesignComponent";
import MenProducts from "../componets/MenProducts";

import { Signup } from "../componets/Register/Signup";
import Home from "./Home";
import { Login } from "./Login";
import MainP from "./MainP";
function AllRoutes() {
  // const location = useLocation;
  return (
    <>

      <Routes>
        <Route path="/" element={<MainP />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/home/:name" element={<Home />}></Route>
        <Route path="/menPage" element={<MenProducts/>}></Route>
        <Route path="/home/arts&design" element={
          <DesignComponent/>}></Route>
      </Routes>
      {/* <Footertop/> */}
    </>
  );
}

export {AllRoutes};
