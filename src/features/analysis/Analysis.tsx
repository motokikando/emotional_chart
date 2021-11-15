// import React, { useState } from "react";
import styles from "./Analysis.module.css";
import { makeStyles, Button, Theme } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { AppDispatch } from "../../app/store";
// import {
//   toggleMode,
//   fetchAsyncLogin,
//   fetchAsyncRegister,
//   fetchAsyncCreateProf,
//   selectIsLoginView,
// } from "./authSlice";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    margin: theme.spacing(3),
  },
  textfield: {
    background: "rgba( 255, 255, 255, 0.8 )",
  },
}));

const Analysis: React.FC = () => {
  const classes = useStyles();
  //   const dispatch: AppDispatch = useDispatch();
  //   const isLoginView = useSelector(selectIsLoginView);
  // const [credential, setCredential] = useState({ username: "", password: "" });

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setCredential({ ...credential, [name]: value });
  // };

  //ログイン処理
  //   const login = async () => {
  //     if (isLoginView) {
  //       await dispatch(fetchAsyncLogin(credential));
  //     } else {
  //       const result = await dispatch(fetchAsyncRegister(credential));
  //       if (fetchAsyncRegister.fulfilled.match(result)) {
  //         await dispatch(fetchAsyncLogin(credential));
  //         await dispatch(fetchAsyncCreateProf());
  //       }
  //     }
  //   };

  return (
    <>
      <div className={styles.container}>
        <img src="home_1.jpg" alt="" className={styles.image} />

        <div className={styles.content}>
          <h1>感情分析アプリ</h1>

          {/* <h1>{isLoginView ? "Login" : "Register"}</h1> */}
          <br />
          <TextField id="filled-basic" label="twitter_id" variant="filled" className={classes.textfield} />

          {/* <TextField
            InputLabelProps={{
              shrink: true,
            }}
            label="twitter_id"
            type="text"
            name="username"
            value={credential.username}
            onChange={handleInputChange}
            className={classes.textfield} */}
          {/* /> */}
          <br />
          <Button
            variant="contained"
            color="primary"
            size="medium"
            className={classes.button}
            component={Link}
            to="/dash"
          >
            START
          </Button>

          {/* <span onClick={() => dispatch(toggleMode())}>
          {isLoginView ? "Create new account ?" : "Back to Login"}
        </span> */}
        </div>
      </div>
    </>
  );
};

export default Analysis;
