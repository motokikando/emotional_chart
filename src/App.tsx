import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { VFC } from 'react';
import './App.css';
import DashBoard from './features/covid/DashBoard/DashBoard';
import Analysis from './features/analysis/Analysis';

const App: VFC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Analysis/>} />
        <Route path="/dash" element={<DashBoard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;