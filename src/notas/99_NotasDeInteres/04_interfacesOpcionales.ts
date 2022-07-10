// INTERFACE OPCIONAL

interface Persona {
    nombre:string,
    apellido:string,
    // Propiedade opcional
    correo?:string,
    telefono?:string
}

let usuarioUno:Persona = {
    nombre:'Daniel', 
    apellido:'Marquez'
}
usuarioUno.correo ||= 'Daniel@d.con'; 

console.log(usuarioUno);
