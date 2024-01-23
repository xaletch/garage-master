import { useEffect, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';

import LogIn from '../../components/LogIn/LogIn';
import './App.scss';

import { Profile } from '../../pages/Profile';
import { Home } from '../../pages/Home';
import { SelectedCase } from '../../pages/SelectedCase';

function App() {
  const [LogInOpen, setLogInOpen] = useState(false);
  const [HeaderOpen, setHeaderOpen] = useState(false);

  return (
    <div className="App">
      <Header setHeaderOpen={setHeaderOpen} HeaderOpen={HeaderOpen} setLogInOpen={setLogInOpen} />
      {/* Все выигрыши */}
      {/* <HeaderBottom /> */}
      <Routes>
        <Route path='/' element={<Home setHeaderOpen={setHeaderOpen} />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='selected-case/:url' element={<SelectedCase setLogInOpen={setLogInOpen} />}></Route>
      </Routes>
      <Footer />
      <LogIn LogInOpen={LogInOpen} setLogInOpen={setLogInOpen} />
    </div>
  );
}

export default App;
