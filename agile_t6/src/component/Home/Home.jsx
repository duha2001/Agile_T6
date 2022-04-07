import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <>
      <h1>Link Chart</h1>
      <div className="d-flex flex-dec">
        <Link to="Rechart">ReChart</Link>
        <Link to="member">Thành viên nhóm "agile_t6"</Link>
      </div>
    </>
  );
};

export default Home;
