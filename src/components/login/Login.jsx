import { useState } from "react";
import logo from "../../assets/img/a.png";
import './login.css'
import { BiLockAlt,BiUser,BiLogIn } from "react-icons/bi";
import { validarCampos, validarUser } from "./Validar";
import swal from 'sweetalert';



const Login = () => {
  const [email, setEmail ] = useState ("");
  const [password, setPassword] = useState("");
  const usuario = {correo: "kevin@gmail.com", contra: "1234"}

  function setStateEmail({target}) {
   setEmail(target.value)
    
  }
  function setStatePass({target}) {
    setPassword(target.value)
     
   }

   function iniciarSesion(event) {
    event.preventDefault()
    const emailVacio = validarCampos(email);
    const passVacia =  validarCampos(password)
    if (emailVacio || passVacia) {
      swal("Campos vacios", "verifique sus datos", "warning");
      return
    }
    validarUser(email, password,usuario)
   }

  return (
    <div className="modal-dialog text-center">
      <div className="col-sm-9 principal">
        <div className="modal-content padre">
          <div className="col-12">
            <img src={logo} className="user-img"/>
          </div>
          <form className="col-12" onSubmit={iniciarSesion}>
            <div class="form-group col-auto">
              <label for="exampleInputEmail1" className="user"><BiUser></BiUser></label>
              <input
                type="email"
                class="form-control a"
                placeholder="Correo"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={setStateEmail}
                value={email}
              />
            </div>
            <div class="form-group col-auto">
              <label for="exampleInputPassword1 " className="pass"> <BiLockAlt></BiLockAlt></label>
              <input
                type="password"
                class="form-control b"
                placeholder="Contraseña"
                id="exampleInputPassword1"
                onChange={setStatePass}
                value={password}
              />
            </div>
            <br />
            <button type="submit" class="btn btn-info">
               Iniciar Sesion <BiLogIn></BiLogIn>
            </button>
            <div>
              <br />
              <a href="#">Olvidaste tu ontraseña?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
