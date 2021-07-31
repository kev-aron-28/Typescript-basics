"use strict";
// Number
//*Explicito
var phone;
phone = 123445;
console.log(phone);
//*Inferido
var phoneNumber = 1234;
//Boolean 
var bool = true;
//String
var user = "Kevin";
//Any
var idUser = "Kevin123";
idUser = true;
idUser = 1;
//Void 
function showInfo(user) {
    console.log("User Info\n        " + user.id + "\n        " + user.name);
}
showInfo({ id: 1, name: "Kevin" });
//never
function handleError(code, message) {
    throw new Error(message + ", Code: " + code);
}
// handleError(404, 'Not Found');
//Null 
var nul = null;
var ob = {};
// console.log(ob)
//Arrays 
var num;
num = [1, 2, 3, 4];
var other = [1, true, "false"];
console.log(other);
console.log(num);
// Arrays<>
var arr = [1, 2, 4, 5];
//tuplas 
var tupla = [1, 2];
console.log(tupla);
//Varios valores
var userInfo = [];
userInfo.push([1, "kevin"]);
userInfo.push([2, "aron"]);
userInfo.push([3, "jane"]);
console.log(userInfo);
//enum
var Countries;
(function (Countries) {
    Countries[Countries["Mex"] = 0] = "Mex";
    Countries[Countries["Col"] = 1] = "Col";
    Countries[Countries["Arg"] = 2] = "Arg";
})(Countries || (Countries = {}));
var Numbers;
(function (Numbers) {
    Numbers[Numbers["Uno"] = 0] = "Uno";
    Numbers[Numbers["Dos"] = 1] = "Dos";
    Numbers[Numbers["Tres"] = 2] = "Tres";
})(Numbers || (Numbers = {}));
console.log(Countries.Mex);
console.log(Countries[0]);
//Union de tipos 
var userId = 1;
userId = "1";
function getId(id) {
    return "kevinTapia";
}
var userCountry = "MEX";
//Asersiones de tipo
var nameU = "kevin";
var data = 1;
var message = nameU.length > 5 ? "Hola " : "Adiós";
console.log(message);
var datCom = data < 0 ? "HOlA " : "ADIOS";
console.log(datCom);
//funciones
function info(name, age) {
    console.log(name, age);
}
var showInfoUser = function (name, age) {
    return {
        name: name,
        age: age
    };
};
var information = showInfoUser("KEVIN", 19);
console.log(information);
