
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';


import Router from './components/Router';


//HE DECIDIDO USAR APP COMO LAUNCHER DE LA APLICACION. GENERARÁ UN OBJETO PERSONALIZADO DE LA CLASE ROUTER QUE CONTIENE LA HOME Y LAS RUTAS
//DEFINIDAS PARA LOS COMPONENTES.
function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
