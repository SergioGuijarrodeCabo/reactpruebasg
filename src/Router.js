import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MenuRutas from './components/MenuRutas';
import NotFound from './components/NotFound';
//A partir de aqui ir importando los componentes

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuRutas/>
        <Routes>
            <Route path='/' element={<Home />}/>

            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
