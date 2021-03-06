import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
};

export default Pages;
