import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-anonymous-default-export
export default class 



extends Component {

    state = {
        doctores: [],
        status:true,

    }



    cargarDoctores(){
        var url = "https://apicruddoctores.azurewebsites.net/";
       var especialidad = this.props.especialidad;
       var request = "/api/Doctores/DoctoresEspecialidad/"+especialidad;
        var urlCompleta = url + request;
       axios.get(urlCompleta).then(res => {
           this.setState({
               doctores: res.data,
               status: true
           });
       });


    }


    componentDidMount(){

        this.cargarDoctores();

    }





  render() {
    return (
      <div>

        {this.state.status === true && ( 
        
        <table border={1}>
            <thead>
                <tr> <td> Apellido </td> 
                <td> Especialidad </td> 
                <td> Salario </td> </tr>
            </thead>

            <tbody>
                { this.state.doctores.map((doctor, i) => {
                        return (
                            <tr key={i}>
                                <td>{doctor.apellido}</td>
                                <td>{doctor.especialidad}</td>
                                <td>{doctor.salario}</td>
                                </tr>
                        )

                })

                }


            </tbody>

        </table>)}


              <NavLink to="/"><button>VOLVER</button></NavLink>  
      </div>
    )
  }
}
