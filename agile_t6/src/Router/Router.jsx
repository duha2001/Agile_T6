import { Routes, Route } from "react-router-dom";
import Home from "../component/Home/Home";
import Member from "../component/Member";
import ReChart from "../component/ReChart/ReChart";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Rechart" element={<ReChart />} />
      <Route path="/member" element={<Member />} />
    </Routes>
  );
};

export default Router;
