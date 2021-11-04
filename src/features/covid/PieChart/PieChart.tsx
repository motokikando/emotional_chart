import React from 'react'
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import { useSelector } from "react-redux";
import { selectData } from "../covidSlice";



const PieChart = () => {
    const data = useSelector(selectData);
    const motality =
        data.confirmed && (100 * data.deaths.value) / data.confirmed.value;

        const pieChart = data && (
            <Doughnut
              data={{
                labels: ["Positive", "Negatibe", "Neutral"],
                datasets: [
                  {
                    data: [
                      40,
                      50,
                      10,
                    ],
                    backgroundColor: [
                      "rgba(255,140,0, 0.5)",
                      "rgba(0, 0, 255, 0.5)",
                      "#008080",
                    ],
                    hoverBackgroundColor: ["#36A2EB", "#3cb371", "#FF6384"],
                    borderColor: ["transparent", "transparent", "transparent"],
                  },
                ],
              }}
              options={{
                legend: {
                  position: "bottom",
                  labels: {
                    boxWidth: 15,
                  },
                },
              }}
            />
          );

    return (
        <>
      {data.confirmed && (
        <Typography align="center" color="textSecondary" gutterBottom>
           {data.confirmed && motality.toFixed(2)} [%]
        </Typography>
      )}
      {pieChart}
    </>
    );
};

export default PieChart
