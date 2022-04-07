import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { dataFake } from "../../data/fakeData";
const ChartByYear = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: dataFake.map((item) => item.year),
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  const [series, setSeries] = useState([
    {
      name: "Expen",
      data: dataFake.map((item) => item.totalExpen),
    },
    {
      name: "Revenue",
      data: dataFake.map((item) => item.totalRevenue),
    },
  ]);

  return (
    <>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </>
  );
};

export default ChartByYear;
