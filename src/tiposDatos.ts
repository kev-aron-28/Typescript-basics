// Number
//*Explicito

let phone:number;
phone = 123445;
console.log(phone);

//*Inferido

let phoneNumber = 1234;


//Boolean 
let bool: boolean = true;

//String
let user: string = "Kevin";


//Any

let idUser: any = "Kevin123";
idUser = true;
idUser =1;


//Void 

function showInfo(user:any):void {
    
    console.log(`User Info
        ${user.id}
        ${user.name}`);
}

showInfo({id: 1, name:"Kevin"});


//never

function handleError(code: number, message:string):never {
    
    throw new Error(`${message}, Code: ${code}`)
}

// handleError(404, 'Not Found');


//Null 

let nul : null = null;



const ob: object ={}
// console.log(ob)


//Arrays 

let num: number[];
num = [1,2,3,4];

let other = [1,true, "false"];

console.log(other);
console.log(num);


// Arrays<>


const arr: Array<number> = [1,2,4,5];


//tuplas 

let tupla: [number, number] = [1,2];
console.log(tupla);

//Varios valores

let userInfo: [number, string][] = [];

userInfo.push([1,"kevin"]);
userInfo.push([2,"aron"]);
userInfo.push([3,"jane"]);

console.log(userInfo);



//enum

enum Countries{
    Mex, 
    Col,
    Arg,
}


enum Numbers {  
    Uno,
    Dos,
    Tres
}
console.log(Countries.Mex);
console.log(Countries[0])



//Union de tipos 

let userId:number | string = 1;
userId = "1";

type UserIdType = string | number;

function getId(id: UserIdType) {
    return "kevinTapia"
}

type country = "MEX" | "COL" | "ARG";

let userCountry:country = "MEX";


//Asersiones de tipo

let nameU: any = "kevin";
let data:any = 1;
let message:string = (<string>nameU).length > 5 ? "Hola " : "Adiós";
console.log(message);

let datCom:string = (data as number) < 0 ? "HOlA " : "ADIOS";
console.log(datCom);



//funciones

function info(name:string, age: number) {
    console.log(name, age);   
}

const showInfoUser = (name:string, age:number):object =>{
    return {
        name, 
        age
    }
} 


const information: object= showInfoUser("KEVIN", 19);
console.log(information);

