import React from 'react'
import { makeStyles } from '@material-ui/core'
import { NativeSelect, FormControl } from "@material-ui/core";
//非同期関数のimport
import { useDispatch } from "react-redux";
import { fetchAsyncGetCountry } from "../covidSlice";

//formControlデザイン
const useStyles = makeStyles((theme) => ({
    formControl: {
      marginBottom: theme.spacing(3),
      minWidth: 320,
    },
  }));


const SwitchCountry:React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    //国名リスト
    const countries = [
        "japan",
        "china",
        "us",
        "france",
        "italy",
        "spain",
        "united kingdom",
        "germany",
        "russia",
        "brazil",
        "taiwan",
        "thailand",
        "new zealand",
        "sweden",
        "india",
      ];


    return(
    <FormControl className={classes.formControl}>
      <NativeSelect
        //e: 引数で型定義
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          //選択した国名を渡す
          dispatch(fetchAsyncGetCountry(e.target.value))
        }
      >
        <option value="">Worldwide</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default SwitchCountry
