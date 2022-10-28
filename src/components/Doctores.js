import React, { Component } from 'react'
import axios from 'axios';
import Tabla from './Tabla';
import { NavLink } from 'react-router-dom';


//ESTA CLASE ES USADA PARA DIBUJAR EL FORM QUE VA A CONTENER EL IN
export default class Doctores extends Component {

    cajaSalarioRef = React.createRef();
    cajaEspecialidadRef = React.createRef();

    state = {
        especialidades: [],
        status1: false,
        status2: false,
        especialidad: ""
    }


    cargarEspecialidad(){
      var  url = "https://apicruddoctores.azurewebsites.net/";
      var  request ="api/Doctores/Especialidades";
      var  urlCompleta = url + request;
        axios.get(urlCompleta).then(res => {
            this.setState({
                especialidades: res.data,
                status1: true
            });


        });


    }


    componentDidMount(){
        this.cargarEspecialidad();
    }


    incrementarSalario = (e) => {
        e.preventDefault();
        var salario = parseInt(this.cajaSalarioRef.current.value);
        var esp = this.cajaEspecialidadRef.current.value;
        this.setState({especialidad: esp});
        var url = "https://apicruddoctores.azurewebsites.net/";
        var request= "api/Doctores/"+esp+"/"+salario;
        var urlCompleta = url + request;
        axios.put(urlCompleta).then(res => {
            console.log("salario incrementado");
            this.setState({
                status2: true
            })
        });
    }




  render() {
    return (
      <div>






<form>
<label>Seleccione una especialidad</label>
{this.state.status1 === true && ( 
<select name="select"  ref={this.cajaEspecialidadRef}>
 
{this.state.especialidades.map((especialidad, index) => (

<option key={index}>{especialidad} </option>

))}


</select> 


)}

<label>Seleccione un salario</label>
<input type="text" name="salario" id="salario" placeholder="Salario" ref={this.cajaSalarioRef}/>
<button type="button" className="btn btn-primary" onClick={this.incrementarSalario}>Incrementar salario</button>
</form> 

{this.state.status2 === true && ( 
  <NavLink to={"/mostrarTabla/"+this.state.especialidad}>Mostrar tabla</NavLink>
)}







</div>





    )
  }
}
