import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { dataFake } from "../../data/fakeData";
const ChartByMonth = () => {
  const [selectedYear, setSelectedYear] = useState(
    dataFake.map((item) => item.months)[0]
  );
  const options = {
    chart: {
      type: "line",
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
      data: [76, 85, 101, 98, 87, 72, 91, 81, 94, 91, 33, 94],
    },
    {
      name: "Revenue",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 52, 53, 41],
    },
  ]);
  //chart Line
  const option = {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Doanh thu",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "$ Thousand",
      },
      min: 5,
      max: dataFake.reduce((acc, i) => acc + i.totalExpen, 0),
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };
  const [serie, setSerie] = useState([
    {
      name: "Expen",
      data: [28, 29, 33, 36, 32, 32, 33, 79, 11, 53],
    },
    {
      name: "Revenue",
      data: [12, 11, 14, 18, 17, 13, 13, 32, 32, 33],
    },
  ]);
  useEffect(() => {
    let data = dataFake.find((i) => i.year === Number(selectedYear));
    if (data) {
      setSeries([
        {
          name: "Expen",
          data: data.months.map((re) => re.totalExpen),
        },
        {
          name: "Revenue",
          data: data.months.map((fe) => fe.totalRevenue),
        },
      ]);
      setSerie([
        {
          name: "Expen",
          data: data.months.map((re) => re.totalExpen),
        },
        {
          name: "Revenue",
          data: data.months.map((fe) => fe.totalRevenue),
        },
      ]);
    }
  }, [selectedYear]);

  return (
    <>
      <select onChange={(e) => setSelectedYear(e.target.value)}>
        <option value="">Năm</option>
        {dataFake.map((item, i) => (
          <option key={i} value={item.year}>
            {item.year}
          </option>
        ))}
      </select>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
      <ReactApexChart
        options={option}
        series={serie}
        type="line"
        height={350}
      />
    </>
  );
};
export default ChartByMonth;
