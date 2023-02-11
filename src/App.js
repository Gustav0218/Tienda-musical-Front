import "./App.css";

import {
  BrowserRouter,
  BrowserRouterProps,
  Route,
  Routes,
} from "react-router-dom";

import Catalogo from "./Components/pages/catalogo";
import Container from "./Components/shared/container";
import Flutes from "./Components/pages/flutes";
import Formulario from "./Components/pages/formulario";
import Guitars from "./Components/pages/guitars";
import Home from "./Components/pages/home";
import Login from "./Components/pages/login";
import NoPage from "./Components/pages/noPage";
import Piano from "./Components/pages/piano";
import PrivateRoute from "./Components/Auth/privateRoute";
import Register from "./Components/pages/register";
import Tools from "./Components/pages/tools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/historial"></Route>
          </Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="formulario" element={<Formulario />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="catalogo" element={<Catalogo />}></Route>
          <Route path="piezas" element={<Tools />}></Route>
          <Route path="pianos" element={<Piano />}></Route>
          <Route path="guitars" element={<Guitars />}></Route>
          <Route path="flutes" element={<Flutes />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
