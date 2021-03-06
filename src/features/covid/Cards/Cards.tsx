import React from "react";
// import CountUp from "react-countup/build/CountUp";
//css import
import styles from "./Cards.module.css";
//material-ui import
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import ModalText from "../Modal/Modal";
//Reactのアイコン
import { MdLocalHospital } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
//dataのstateの取得したい
// import { useSelector } from "react-redux";
// import { selectData } from "../covidSlice";

const Cards:React.FC = () => {
  //dataの値を読み取り
  // const data = useSelector(selectData)

  return (
    <div className={styles.container}>
    <Grid container spacing={1} justify="center">
      <Grid item xs={12} md={3} component={Card} className={styles.infected}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <MdLocalHospital />
            Positive
          </Typography>
          <Typography variant="h5">
            {/* {data.confirmed.value} */}
            96.31%
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <AiFillLike /> Negative
          </Typography>
          <Typography variant="h5">
            {/* {data.recovered.value} */}
            9.07%
          </Typography>
        </CardContent>
      </Grid>
      <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>

          </Typography>
          <Typography variant="h4">
            {/* {data.deaths.value} */}
            <ModalText/>
          </Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
  );
};

export default Cards;
