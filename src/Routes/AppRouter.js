import { Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Categorias from "../containers/Categorias";
import Estadisticas from "../containers/Estadisticas";
import Inicio from "../containers/Inicio";
import Questions from "../containers/Questions";
import Registro from "../containers/Registro";
import SignUp from "../containers/SignUp";
import Perfil from "../containers/Perfil";
import Clasificacion from "../containers/Clasificacion";

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Inicio/>}/>
                <Route path="/registro" element={<Registro/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/question/:category" element={<Questions/>}/>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/estadisticas" element={<Estadisticas />} />
                <Route path="/perfil" element={<Perfil/>} />
                <Route path="/clasificacion" element={<Clasificacion/>} />
                <Route path="*" element={<Navigate to="/"/>}/>
                
            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter