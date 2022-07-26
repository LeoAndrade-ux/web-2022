//clase o plantilla
interface AutoBase{
    setColor(color);
    getColor();
}

function pegarCalcomania(logo:string){
    return function(target:Function){
        target.prototype.agregarCalcomania=function():void{
            console.log("Calcomania en auto: "+logo);
        }
    }
}
@pegarCalcomania("Hola mundo")

class Auto implements AutoBase{
    //propiedades
    //son publicos porque necesitamos acceder
    //desde otras clases
    public marca:string;
    public color:string;
    public cilindraje:string;
    public precio:number;

    //metodos-funciones-constructores
    //constructor(){}
    constructor(marca:string, color:string, cilindraje:string, precio:number){
        this.marca = marca;
        this.color = color;
        this.cilindraje = cilindraje;
        this.precio = precio;
    }
    public setColor(color){
        return this.color = color;
    }
    public getColor (){
        return this.color;
    }
}

var auto = new Auto("ford","Plata","2500 cc",4000);
var camioneta = new Auto("mazda","azul","2700 cc",3000);

console.log(auto,camioneta);
//herencia para permitir heredar todas las caracteristicas
//de una clase a una subclase
class Deportivo extends Auto{
    public techoCorredizo:boolean;
    setTechoCorredizo(techo:boolean){
        this.techoCorredizo=techo;

    }
    getTechoCorredizo(){
        return this.techoCorredizo;
    }
}

var auto2 = new Auto("ford","Plata","2500 cc",4000)
auto2.pegarCalcomania()