import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { dataFake } from "../../data/fakeData";
const ChartByDay = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("");
  const [month, setSelectedMonth] = useState(
    dataFake.map((item) => item.months)[0]
  );
  const [day, setSelectedDay] = useState([]);
  // const [series, setSeries] = useState([
  //   {
  //     name: "PRODUCT A",
  //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   },
  //   {
  //     name: "PRODUCT B",
  //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   },
  //   {
  //     name: "PRODUCT C",
  //     data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   },
  // ]);
  // const options = {
  //   chart: {
  //     type: "area",
  //     stacked: false,
  //     height: 350,
  //     zoom: {
  //       enabled: false,
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shadeIntensity: 1,
  //       inverseColors: false,
  //       opacityFrom: 0.45,
  //       opacityTo: 0.05,
  //       stops: [20, 100, 100, 100],
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       style: {
  //         colors: "#8e8da4",
  //       },
  //       offsetX: 0,
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(2);
  //       },
  //     },
  //     axisBorder: {
  //       show: false,
  //     },
  //     axisTicks: {
  //       show: false,
  //     },
  //   },
  //   xaxis: {
  //     type: "datetime",
  //     tickAmount: 8,
  //     min: new Date("01/01/2000").getTime(),
  //     max: new Date("01/30/2014").getTime(),
  //     labels: {
  //       rotate: -15,
  //       rotateAlways: true,
  //       formatter: function (val, timestamp) {
  //         return moment(new Date(timestamp)).format("DD MMM YYYY");
  //       },
  //     },
  //   },
  //   title: {
  //     text: "Irregular Data in Time Series",
  //     align: "left",
  //     offsetX: 14,
  //   },
  //   tooltip: {
  //     shared: true,
  //   },
  //   legend: {
  //     position: "top",
  //     horizontalAlign: "right",
  //     offsetX: -10,
  //   },
  // };
  useEffect(() => {
    let result = dataFake.find((item) => item.year === Number(selectedYear));
    let i = [];
    if (result !== undefined) {
      i = result.months;
    } else if (result === undefined) {
      result = undefined;
    }
    setSelectedMonth(i);
    alert("Chức năng không thể sử dụng, Mời bạn quay lại sau");
    navigate("/");
  }, [selectedYear]);
  useEffect(() => {
    let tmp = dataFake.map((item) => item.months)[0];
    let tmp1 = tmp[0].days;
    let tmp2 = tmp1.map((day) => day.dayName);
    let result = [];
    if (tmp2 !== []) {
      result.push(tmp2);
    } else if (tmp2 === undefined) {
      result = [];
    }
    setSelectedDay(result);
  }, []);
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
      <select>
        <option value="">Tháng</option>
        {month.map((item, i) => (
          <option key={i} value={item.monthName}>
            {item.monthName}
          </option>
        ))}
      </select>
    </>
  );
};
export default ChartByDay;
