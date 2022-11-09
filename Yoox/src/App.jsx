import "./App.css";
import SmFooter from "./Components/Footer/SmFooter";
import { SmNavbar } from "./Components/Navbars/Navbar";

import {AllRoutes} from "./Components/Pages/AllRoutes";

function App() {
  return (
    <>
      <div className="yrop"
      >
        <SmNavbar />
        <AllRoutes />
        <SmFooter />
      </div>
    </>
  );
}

export default App;
