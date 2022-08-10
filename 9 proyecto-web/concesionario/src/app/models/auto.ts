export class Auto{
    constructor(
        public _id:string,
        public fabricante:string,
        public modelo:string,
        public color:string,
        public matricula:string,
        public anio:Number,
        public precio:Number,
        public imagen:string,
    ){}
}

//ng g component components/autos
//ng g component components/contacto
//ng g component components/createauto
//ng g component components/detalleauto
//ng g component components/editarauto
//ng g component components/encabezado
//ng g component components/home
//ng g component components/pie
