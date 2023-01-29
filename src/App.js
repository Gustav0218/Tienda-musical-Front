import "./App.css";
import { BrowserRouterProps, Routes,Route,BrowserRouter,} from "react-router-dom";
import Container from "./Components/shared/container";
import Home from "./Components/pages/home"
import NoPage from "./Components/pages/noPage";
import Contact from "./Components/pages/contact";
import Register from "./Components/pages/register";
import Login from "./Components/pages/login";
import Formulario from "./Components/pages/formulario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<Home />}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="formulario" element={<Formulario/>}></Route>
         <Route path="login" element={<Login />}></Route> 
          <Route path="contactanos" element={<Contact />}></Route>
          <Route path="**"element={<NoPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
