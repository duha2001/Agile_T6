import { useNavigate } from "react-router-dom";
const Member = () => {
  const navigate = useNavigate();
  const handleOver = () => {
    navigate("/");
  };
  return (
    <>
      <h3>Thành viên nhóm:</h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Huỳnh Anh Dự</span>
        <span>Nguyễn Văn Giàu</span>
        <span>Ngô Nguyễn Thanh Tâm</span>
        <span>Nguyễn Thị Thu Hải</span>
        <span>Huỳnh Lưu Vĩnh Thuận</span>
        <span>Hồ Nhật Tình</span>
        <span>Lê Chí Hải</span>
        <span>Trương Quốc Hiệp</span>
      </div>
      <button onClick={handleOver}>Home</button>
    </>
  );
};

export default Member;
