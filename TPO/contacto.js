const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input" );
const expresiones = {
    nombre: /^[a-zA-ZÀ-ȳ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ȳ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+$/,
}



 const campos = {
    nombre:false,
    apellido:false,
    correo:false
 }
const validarFormulario = (e) => {
switch (e.target.name) {
    case "nombre":
    validarCampo(expresiones.nombre, e.target,"nombre" );
    break;
    case "apellido":
    validarCampo(expresiones.apellido,e.target,"apellido");
    break;
    case "correo":
    validarCampo(expresiones.correo,e.target,"correo");
    break;
}
}
const validarCampo=(expresion, input, campo) => {
    if(expresion.nombre.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove("formulario_grupo-incorrecto");
        document.getElementById(`grupo_${campo}`).classList.add("formulario_grupo-correcto");
        document.querySelector(`#grupo_${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo_${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classlist.remove("formulario_input-error-activo");
        campos[campo] = true;
        
     } else {
            document.getElementById(`grupo_$(campo)`).classList.add("formulario_grupo-incorrecto");
            document.getElementById(`grupo_$(campo)`).classList.remove("formulario_grupo-correcto");
            document.querySelector(`grupo_$(campo) i`).classList.add("fa-times-circle");
            document.querySelector(`#grupo_$(campo) i`).classList.remove("fa-check-circle");
            document.querySelector(`#grupo_$(campo) .formulario_input-error`).classlist.add("formulario_input-error-activo");
            campos[campo] = false
            }
}


 inputs.forEach ((input) => {
    input.addEventListener ("keyup", validarformulario);
    input.addEventListener ("blur", validarformulario);
 });
 formulario.addEventListener ("submit", (e)=>{e.preventDefault();
 
 if(campos.nombre && campos.apellido && campos.correo ) {

    formulario.reset()
    document.getElementById("formulario_mensaje-exito").classlist.add("formulario_mensaje-exito-activo")
 }
 else{
    document.getElementById("formulario_mensaje").classlist.add("formulario_mensaje-activo")
 }
});