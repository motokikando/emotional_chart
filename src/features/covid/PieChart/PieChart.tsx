import React from 'react'
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";



const PieChart = () => {
    const data = useSelector(selectData);
    // const motality =
    //     data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

        const pieChart = data && (
            <Doughnut
              data={{
                labels: ["喜び", "嫌", "好き", "安心", "驚き"],
                datasets: [
                  {
                    data: [
                      38.5,
                      23.1,
                      15.4,
                      15.4,
                      7.7,
                    ],

                    backgroundColor: ["#ffa500", "rgba(0, 0, 255, 0.5)", "#ff6347", "#7cfc00", "#ffa07a"],
                    borderColor: ["transparent", "transparent", "transparent", "transparent", "transparent" ],
                  },
                ],
              }}
              options={{
                legend: {
                  display: true,

                  position: "bottom",
                  labels: {
                    boxWidth: 15,
                  },
                },
                plugins: {
                  datalabels: {
                      align: "end",
                      anchor: "end",
                      offset: -100,
                      color: "#000",
                      font: {
                          weight: "bold",
                          size: 20,
                      },
                      // formatter: (value, ctx) => {
                      //     let label = ctx.chart.data.labels[ctx.dataIndex];
                      //     return label + '\n' + value + '%';
                      // },
                  }
              },
              }}
            />
          );

    return (
        <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
           {/* {data.confirmed && motality.toFixed(2)} [%] */}
           感情分類
        </Typography>
      )}
      {pieChart}
    </>
    );
};

export default PieChart
