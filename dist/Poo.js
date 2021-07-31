"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Gender;
(function (Gender) {
    Gender["Hombre"] = "Hombre";
    Gender["Mujer"] = "Mujer";
})(Gender || (Gender = {}));
var Humano = /** @class */ (function () {
    function Humano(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Humano.prototype.ShowData = function () {
        console.log("Hola, me llamo " + this.name + ", tengo " + this.age + " a\u00F1os y soy " + this.gender);
    };
    return Humano;
}());
var Registro = /** @class */ (function () {
    function Registro() {
        this.personas = [];
    }
    Registro.prototype.addPicture = function (persona) {
        this.personas.push(persona);
    };
    Registro.prototype.showRegis = function () {
        for (var i = 0; i < this.personas.length; i++) {
            console.log(this.personas[i]);
        }
    };
    return Registro;
}());
var kevin = new Humano("Kevin", 18, Gender.Hombre);
var aron = new Humano("Aron", 18, Gender.Hombre);
var registro = new Registro();
// registro.addPicture(kevin);
// registro.addPicture(aron);
// registro.showRegis();
//Public y private
var Account = /** @class */ (function () {
    function Account(id, total, owner) {
        this.id = id;
        this.total = total;
        this.owner = owner;
    }
    Account.prototype.show = function () {
        console.log(this.id, this.total, this.owner);
    };
    return Account;
}());
var account = new Account(10, 1220, "kevin");
// account.show()
//get y set
var Programador = /** @class */ (function () {
    function Programador(name, age, lenguage) {
        this._name = name;
        this._age = age;
        this._lenguage = lenguage;
    }
    Object.defineProperty(Programador.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Programador.prototype, "lenguaje", {
        get: function () {
            return this._lenguage;
        },
        set: function (v) {
            this._lenguage = v;
        },
        enumerable: false,
        configurable: true
    });
    return Programador;
}());
var kevin1 = new Programador("Kevin", 18, "c++");
console.log(kevin1.name = "Aron");
//Herencia 
var Car = /** @class */ (function () {
    function Car(model, wheels, doors) {
        this._model = model;
        this._wheels = wheels;
        this._doors = doors;
    }
    Car.prototype.showData = function () {
        console.log(this._model + ", " + this._wheels + ", " + this._doors);
    };
    return Car;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(model, wheels, doors) {
        return _super.call(this, model, wheels, doors) || this;
    }
    Moto.prototype.showData = function () {
        console.log(this._model, this._doors, this._wheels);
    };
    return Moto;
}(Car));
var car;
