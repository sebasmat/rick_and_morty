export default function  validation (userData) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};
    if (!userData.email) 
        errors.email = "El mail no puede estar vacio";
    else if (userData.email.length > 35) { 
        errors.email = "El mail no puede tener mas de 35 caracteres ";
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "El email es incorrecto";
    } else {
        errors.email = "";
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password ="La contraseña debe tener entre 6 y 10 caracteres" ;
    } else  if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña debe incluir algun numero";
    } else{
        errors.password = "";
    }
return errors;

} 

    
