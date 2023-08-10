import swal from 'sweetalert';
export const validarUser = (mail,pass,usuario)=> {
    if (mail!=usuario.correo || pass!=usuario.contra) {
        swal("Datos incorrectos", "verifique sus datos", "error");
		return
    }
    swal("Sesion iniciada", "continuar", "success");

}

export const validarCampos = (campo) => campo=="" ? true: false;