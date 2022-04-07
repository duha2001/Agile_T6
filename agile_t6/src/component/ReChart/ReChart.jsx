import React from "react";
import { useNavigate } from "react-router-dom";
import "./chart.css";
import ChartRev from "./ChartRev";
const ReChart = () => {
  const navigation = useNavigate();
  const handleOver = () => {
    navigation("/");
  };
  return (
    <>
      <button onClick={handleOver}>Home</button>
      <div className="chart">
        <div className="chart-view">
          <ChartRev />
        </div>
      </div>
    </>
  );
};

export default ReChart;
