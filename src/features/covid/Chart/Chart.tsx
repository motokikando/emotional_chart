import React from "react";
import styles from "./Chart.module.css";
import { Line } from "react-chartjs-2";

// import { useSelector } from "react-redux";
// import { selectData, selectDailyData, selectCountry } from "../covidSlice";

const Chart: React.FC = () => {
  // const data = useSelector(selectData);
  // const dailyData = useSelector(selectDailyData);
  // const country = useSelector(selectCountry);

  // barChart
  // const barChart = data && (
  //   <Bar
  //     data={{
  //       labels: ["Positive", "Mixed", "Negative"],
  //       datasets: [
  //         {
  //           backgroundColor: ["rgba(0, 0, 255, 0.5)", "#008080", "rgba(255, 0, 0, 0.5)"],
  //           data: [data.confirmed.value, data.recovered.value, data.deaths.value],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Latest status in ${country}` },
  //     }}
  //   />
  // );

  // lineChart;
  // const lineChart = dailyData[0] && (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ reportDate }) => reportDate),
  //       datasets: [
  //         {
  //           data: dailyData.map((data) => data.confirmed.total),
  //           label: "Positive",
  //           borderColor: "#3333ff",
  //           fill: true,
  //         },
  //         {
  //           data: dailyData.map((data) => data.deaths.total),
  //           label: "Negative",
  //           borderColor: "#ff3370",
  //           fill: true,
  //         },
  //       ],
  //     }}
  //   />
  // );
  const SentimentLineChart = (
    <Line
      data={{
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        datasets: [
          {
            data: [10, 20, 30, 40, 20, 34, 30, 20, 10, 40, 20, 50],
            label: "Positive",
            borderColor: "#ff3370",
            backgroundColor: "rgba(255,140,0, 0.5)",
            fill: "origin",
            stack: 1,
          },
          {
            data: [44, 44, 33, 55, 44, 55, 44, 33, 55, 33, 44, 44],
            label: "Negative",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: "-1",
            stack: 1,
          },
          {
            data: [5, 24, 20, 30, 40, 24, 30, 10, 29, 20, 10, 20],
            label: "Neutral",
            borderColor: "rgba(85,107,47)",
            backgroundColor: "rgba(85,107,47, 0.5)",
            fill: "-1",
            stack: 1,
          },
        ],
      }}
      options={{
        tooltips: {
          callbacks: {},
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              stacked: true,
            },
          ],
        },
        plugins: {
          filler: {
            propagate: true,
          },
        },
      }}
    />
  );

  // return <div className={styles.container}>{country.length ? barChart : lineChart}</div>;
  return <div className={styles.container}>{SentimentLineChart}</div>;
};

export default Chart;
