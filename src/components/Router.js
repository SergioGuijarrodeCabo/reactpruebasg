import React, { Component } from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './Home';
import Tabla from './Tabla';

export default class Router extends Component {
  render() {

    function TablaElement(){
      const {especialidad} = useParams();
      return(
        <Tabla especialidad={especialidad}/>
      )
    }


    return (
        <BrowserRouter>
       
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/mostrarTabla/:especialidad" element={<TablaElement/>}/>

        </Routes>
      </BrowserRouter>
    )
  }
}
