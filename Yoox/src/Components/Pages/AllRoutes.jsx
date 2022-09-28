import {Switch} from "@chakra-ui/react";
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "../Navbar";
import Home from "./Home";
import Login from "./Login";
import MainP from "./MainP";
import Register from "./Register";

function AllRoutes() {
  // const location = useLocation;
  return (
    <>
      {/* {location.path == "/login" || location.path == "/signup" ? null :<Navbar/>} */}

      <Routes>
        <Route path="/" element={<MainP />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home/:name" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export {AllRoutes};
