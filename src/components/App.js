import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

import "boxicons/css/boxicons.min.css";
import "../styles/styles.css"
import Home from './Home'
import Login from '../pages/Login';
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import PutPassword from "../pages/PutPassword";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importa la hoja de estilos
import Pacientes from "../pages/Pacientes";
import User from "../pages/User";
import CrearPacientes from "../pages/CrearPacientes";

function App() {

 
  return (
    <div>
    
      <Router>
        <Routes>

          <Route path="/"  element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Pacientes" element={<Pacientes />} />

          <Route path="/Home" element={<Home />} />
          <Route path="/PutPassword" element={<PutPassword/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/CrearPacientes" element={<CrearPacientes/>} />


          <Route  path="*" element={<NotFound />} />

        </Routes>
      </Router>
     
    </div>

  );
}

export default App;
