import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router";
import Header from "../shared/header";
//import Body from "../shared/body"
import Footer from "../shared/footer";

const container = () => {
  return (
    <> <div className='container-page'>
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};

export default container;
