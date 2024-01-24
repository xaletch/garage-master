import { Routes, Route } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';

import Header from '../../components/Header/Header';
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom';

import './App.scss';

import { Profile } from '../../pages/Profile';
import { Home } from '../../pages/Home';
import { SelectedCase } from '../../pages/SelectedCase';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Header setLogin={setLogin} login={login} />
      {/* Все выигрыши */}
      {/* <HeaderBottom /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='selected-case/:url' element={<SelectedCase setLogin={setLogin} login={login} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
