export {};

enum Gender{
    Hombre = "Hombre", 
    Mujer = "Mujer"
}


class Humano{
    name: string;
    age:number;
    gender:Gender;
    constructor(name:string, age:number, gender: Gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    ShowData(){
        console.log(`Hola, me llamo ${this.name}, tengo ${this.age} años y soy ${this.gender}`);
    }
}


class Registro{
    personas:Humano[] = [];

    addPicture(persona:Humano){
        this.personas.push(persona);
    }

    showRegis(){
        
        for (let i = 0; i < this.personas.length; i++) {
            
                console.log(this.personas[i]);
            
        }
    }
}

let kevin:Humano = new Humano("Kevin", 18, Gender.Hombre);
let aron:Humano = new Humano("Aron", 18, Gender.Hombre);
let registro:Registro = new Registro();

// registro.addPicture(kevin);
// registro.addPicture(aron);
// registro.showRegis();




//Public y private

class Account {
    private id:number;
    protected total:number;
    protected owner:string;
    public constructor(id:number, total:number, owner: string){
        this.id = id;
        this.total = total;
        this.owner = owner;
    }

    public show(){
        console.log(this.id, this.total, this.owner);
    }
}

let account = new Account(10, 1220, "kevin");
// account.show()




//get y set


class Programador{
    private _name:string;
    private _age:number;
    private _lenguage:string;

    public constructor(name:string, age:number, lenguage:string){
        this._name = name;
        this._age = age;
        this._lenguage = lenguage
    }
    
    get name(): string{
        return this._name;
    }

    set name(name:string){
        this._name = name;
    }

    get lenguaje():string{
        return this._lenguage;
BB    }

    
    set lenguaje(v : string) {
        this._lenguage = v;
    }
    
}


const kevin1 = new Programador("Kevin", 18, "c++");

console.log(kevin1.name = "Aron");




//Herencia 
class Car{
    protected _model: string;
    protected _wheels:number;
    protected _doors:number;
     public constructor(model:string, wheels:number, doors:number){
        this._model = model;
        this._wheels = wheels;
        this._doors = doors;
    }

    showData(){
        console.log(`${this._model}, ${this._wheels}, ${this._doors}`);
    }
}


class Moto extends Car{
    constructor(model:string, wheels:number,doors:number){
        super(model, wheels,doors);
    }

    
}


let car:Car = new Car("2003", 4, 4);
car.showData();

let moto:Moto = new Moto("2000", 2, 0);
moto.showData();


