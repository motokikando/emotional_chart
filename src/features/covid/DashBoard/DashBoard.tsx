import React, { useEffect } from "react";
import styles from "./DashBoard.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAsyncGet, fetchAsyncGetDaily, selectData } from "../covidSlice";
import Cards from "../Cards/Cards";
import Chart from "../Chart/Chart";
import PieChart from "../PieChart/PieChart";
import SwithCountry from "../SwitchCountry/SwitchCountry";
import SearchField from "../SwitchCountry/Search";
import ModalText from "../Modal/Modal";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    marginTop: 85,
  },
}));

const DashBoard: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  //APIにアクセスしてデータを取得
  useEffect(() => {
    dispatch(fetchAsyncGet());
    dispatch(fetchAsyncGetDaily());
  }, [dispatch]); //第二引数にはdispatchを定義

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Twitter感情分析ダッシュボード
          </Typography>
          {data && <Typography variant="body1">{new Date(data.lastUpdate).toDateString()}</Typography>}
        </Toolbar>
      </AppBar>
      <Container className={classes.content}>
        <div className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={5}>
              <SearchField />
            </Grid>
            <Grid item xs={6} md={3}>
            <SwithCountry />
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>

          <Grid item xs={12} md={5}>
            <PieChart />
            <ModalText/>
          </Grid>

          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default DashBoard;
