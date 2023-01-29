const Register = () => {
  return (
    <>
      <div className="container-reg">
        <article className="card-body mx-auto">
          <h4 className="card-title mt-3 text-center">Crea una cuenta</h4>
          <p className="text-center">Empieza con una cuenta gratis</p>
          <p>
            <a href="" className="btn btn-block btn-twitter">
              {" "}
              <i className="-twitter"></i>   Login  Twitter
            </a>
            <a href="" className="btn btn-block btn-facebook">
              {" "}
              <i className="fab fa-facebook-f"></i>   Login  facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">O</span>
          </p>
        </article>
        <form/>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <i className="fa fa-user"></i>{" "}
            </span>
          </div>
          <input
            name=""
            className="form-control"
            placeholder="Nombre completo"
            type="text"
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <i className="fa fa-envelope"></i>{" "}
            </span>
          </div>
          <input
            name=""
            className="form-control"
            placeholder="Correo electronico"
            type="email"
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              {" "}
              <i className="fa fa-phone"></i>{" "}
            </span>
          </div>
          <select className="custom-select">
            <option selected="">Celular</option>
            <option value="1">Hogar</option>
            <option value="2">Trabajo</option>
          </select>
          <input
            name=""
            className="form-control"
            placeholder="Telefono de contacto"
            type="text"
          />
        </div>
        <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-building"></i> </span>
		</div>
		<select className="form-control">
			<option selected="">Selecciona tu interès</option>
			<option>Estudiante</option>
			<option>Profesional</option>
			<option>Inversionista</option>
		</select>
	</div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Contraseña de min 10 caracterès" type="password"/>
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Confirma tu contraseña" type="password"/>
    </div>
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block"> Crear Cuenta  </button>
    </div>
    <p className="text-center">¿Ya cuentas con un registro? <a href="login">Log In</a> </p>
    <form/>
    <article/> 
      </div>
    
    </>
  );
};

export default Register;
