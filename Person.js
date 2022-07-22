"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, nationality, profesion, experienceYears) {
        this.name = name;
        this.nationality = nationality;
        this.profesion = profesion;
        this.experienceYears = experienceYears;
    }
    //////////////////////////////////////////
    //            METODOS DE CLASE          //
    //////////////////////////////////////////
    Person.prototype.equals = function (persona) {
        var equals = false;
        if (this.name == persona.getName() &&
            this.nationality == persona.getNationality() &&
            this.profesion == persona.getProfesion() &&
            this.experienceYears == persona.getExperienceYears()) {
            equals = true;
        }
        return equals;
    };
    Person.prototype.print = function () {
        for (var prop in this) {
            switch (prop) {
                case "name":
                case "nationality":
                case "profesion":
                case "experienceYears":
                    console.log("".concat(prop, ": ").concat(eval("this." + prop)));
                    break;
            }
        }
    };
    Person.prototype.toString = function () {
        var salida = '';
        for (var prop in this) {
            switch (prop) {
                case "name":
                case "nationality":
                case "profesion":
                case "experienceYears":
                    salida.concat("".concat(prop, ": ").concat(eval("this." + prop), "\n"));
                    break;
            }
        }
        return salida;
    };
    //////////////////////////////////////////
    //            GETTER Y SETTER           //
    //////////////////////////////////////////
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (value) {
        this.name = value;
    };
    Person.prototype.getNationality = function () {
        return this.nationality;
    };
    Person.prototype.setNationality = function (value) {
        this.nationality = value;
    };
    Person.prototype.getProfesion = function () {
        return this.profesion;
    };
    Person.prototype.setProfesion = function (value) {
        this.profesion = value;
    };
    Person.prototype.getExperienceYears = function () {
        return this.experienceYears;
    };
    Person.prototype.setExperienceYears = function (value) {
        this.experienceYears = value;
    };
    return Person;
}());
exports.Person = Person;
