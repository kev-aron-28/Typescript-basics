interface Information{
    name: string,
    age:number,
}

const myObj = {
    name: "Kevin",
    age:18
}
const showData = (user:Information) => {
    console.log(user);
}

showData(myObj);



//Herencia de interfaces

interface Entity{
    id:number;
    name:string;
}

interface Person extends Entity{
    age:number
}


const kevin:Person = {
    id:1, 
    name:"Kevin",
    age:12
}