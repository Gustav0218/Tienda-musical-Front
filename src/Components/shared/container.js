import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router";
import Header from "../shared/header";
//import Body from "../shared/body"
import Footer from "../shared/footer";

const container = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default container;
