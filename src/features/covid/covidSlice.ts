//Sliceの作成　非同期に関数を用いるものcreateAsyncThunk
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//app/storeにあるRootstateを持ってくる
import { RootState } from "../../app/store";
import dataJson from "./data.json";
import dataJsonDaily from "./dataDaily.json"


//apiUrlをjson形式のurlを格納
const apiUrl = "https://covid19.mathdro.id/api";

//data の型定義 を自動で変換 typeof
type APIDATA = typeof dataJson
type APIDATADAILY = typeof dataJsonDaily

//Stateの型定義(状態)
type covidState = {
    data: APIDATA;
    country: string;
    dailyData: APIDATADAILY;
}

//初期値
const initialState:covidState = {
    data: {
        "confirmed": {
            "value": 244996373,
            "detail": "https://covid19.mathdro.id/api/confirmed"
            },
            "recovered": {
            "value": 0,
            "detail": "https://covid19.mathdro.id/api/recovered"
            },
            "deaths": {
            "value": 4971538,
            "detail": "https://covid19.mathdro.id/api/deaths"
            },
            "dailySummary": "https://covid19.mathdro.id/api/daily",
            "dailyTimeSeries": {
            "pattern": "https://covid19.mathdro.id/api/daily/[dateString]",
            "example": "https://covid19.mathdro.id/api/daily/2-14-2020"
            },
            "image": "https://covid19.mathdro.id/api/og",
            "source": "https://github.com/mathdroid/covid19",
            "countries": "https://covid19.mathdro.id/api/countries",
            "countryDetail": {
            "pattern": "https://covid19.mathdro.id/api/countries/[country]",
            "example": "https://covid19.mathdro.id/api/countries/USA"
            },
            "lastUpdate": "2021-10-28T03:22:36.000Z"
    },
    country: "",
    dailyData:[
        {
          "totalConfirmed": 557,
          "mainlandChina": 548,
          "otherLocations": 9,
          "deltaConfirmed": 0,
          "totalRecovered": 0,
          "confirmed": {
            "total": 557,
            "china": 548,
            "outsideChina": 9
          },
          "deltaConfirmedDetail": {
            "total": 0,
            "china": 0,
            "outsideChina": 0
          },
          "deaths": {
            "total": 17,
            "china": 17,
            "outsideChina": 0
          },
          "recovered": {
            "total": 0,
            "china": 0,
            "outsideChina": 0
          },
          "active": 0,
          "deltaRecovered": 0,
          "incidentRate": 0.4510818002025252,
          "peopleTested": 0,
          "reportDate": "2020-01-22"
        },
      ],
};

//非同期関数の定義 第1引数action名, 第2引数　同期処理
//初期値のdata に同期してaxios.get<型>(jsonのデータがあるURL)
//Globalのdataを取得する関数
export const fetchAsyncGet = createAsyncThunk("covid/get", async () => {
    const { data } = await axios.get<APIDATA>(apiUrl);
    return data;
  });

//時系列データ用　dataJsonDaily
export const fetchAsyncGetDaily = createAsyncThunk(
    "covid/getDaily",
    async () => {
      const { data } = await axios.get<APIDATADAILY>(`${apiUrl}/daily`);
      return data;
    }
);

//国の感染者数の同期
export const fetchAsyncGetCountry = createAsyncThunk(
    "covid/getCountry",
    //stringで見たい国を受け取る
    async (country: string) => {
        //countryがない場合apiUrlに書き換える
      let dynamicUrl = apiUrl;
      //dynamicUrlがある場合国名を追加してdynamicUrlを書き換える
      if (country) {
        dynamicUrl = `${apiUrl}/countries/${country}`;
      }
      const { data } = await axios.get<APIDATA>(dynamicUrl);
      return { data: data, country: country };
    }
  );

//createSliceの作成 引数　
const covidSlice = createSlice({
    name:"covid",
    initialState: initialState,
    reducers: {},
    //extraReducersの処理
    extraReducers: (builder) => {
        //正常終了
        builder.addCase(fetchAsyncGet.fulfilled, (state, action) => {
          return {
            ...state,
            //action.payloadでdata属性に格納
            data: action.payload,
          };
        });
        builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
          return {
            ...state,
            dailyData: action.payload,
          };
        });
        builder.addCase(fetchAsyncGetCountry.fulfilled, (state, action) => {
          return {
            ...state,
            data: action.payload.data,
            country: action.payload.country,
          };
        });
      },
});

//Reactの内部から関数を定義 Rootstateを引数としてstate.covid.データを返す
export const selectData = (state: RootState) => state.covid.data;
export const selectDailyData = (state: RootState) => state.covid.dailyData;
export const selectCountry = (state: RootState) => state.covid.country;

//reducerをexport
export default covidSlice.reducer


