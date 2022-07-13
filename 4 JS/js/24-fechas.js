'use strict'
var fecha = new Date();
console.log(fecha);
var anio = fecha.getFullYear();
console.log(anio);
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
console.log(mes, dia,anio,hora);
var textoHora = `
El año es ${anio},
El mes es ${mes},
El dia es ${dia},
El hora es ${hora},
`;
console.log(textoHora);