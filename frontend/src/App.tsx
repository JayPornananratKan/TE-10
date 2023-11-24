import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginMember from './pages/LoginMember/LoginMemer';
import LoginAdmin from './pages/LoginAdmin/LoginAdmin';
import LoginTrainer from './pages/LoginTrainer/LoginTrainer';
import RegisterMember from './pages/RegisterMember/RegisterMember';
import SelectPage from './pages/SelectPage/SelectPage';


const App: React.FC = () => {
  return (

      <Routes>
        <Route path="/" element={<SelectPage />} />
        <Route path="/LoginMember" element={<LoginMember />} />
        <Route path="/LoginAdmin" element={<LoginAdmin />} />
        <Route path="/LoginTrainer" element={<LoginTrainer />} />
        <Route path="/RegisterMember" element={<RegisterMember />} />
      </Routes>

  );
}

export default App;
