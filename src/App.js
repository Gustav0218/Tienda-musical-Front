import "./App.css";
import { BrowserRouterProps, Routes,Route,BrowserRouter,} from "react-router-dom";
import Container from "./Components/shared/container";
import Home from "./Components/pages/home"
import NoPage from "./Components/pages/noPage";
import Catalogo from "./Components/pages/catalogo";
import Tools from "./Components/pages/tools";
import Piano from "./Components/pages/piano";
import Guitars from "./Components/pages/guitars";
import Flutes from "./Components/pages/flutes";
import Register from "./Components/pages/register";
import Login from "./Components/pages/login";
import Formulario from "./Components/pages/formulario";
import PrivateRoute from "./Components/Auth/privateRoute";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/historial"></Route>
          </Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="formulario" element={<Formulario/>}></Route>
         <Route path="login" element={<Login />}></Route> 
          <Route path="catalogo" element={<Catalogo />}></Route>
          <Route path="catalogo" element={<Catalogo />}></Route>
          <Route path="piezas" element={<Tools />}></Route>
          <Route path="pianos" element={<Piano/>}></Route>
          <Route path="guitars" element={<Guitars />}></Route>
          <Route path="flutes" element={<Flutes/>}></Route>
          <Route path="**"element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
