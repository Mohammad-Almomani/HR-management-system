"use strict";

const employees =[];
function Employee (ID, fullName, department, level, pic){
    this["Employee ID"] = ID;
    this["Full Name"] = fullName;
    this.Department = department;
    this.level = level;
    this.Picture = pic;
    employees.push(this)
}
// let companyDepartment = ["Administration", "Marketing", "Development", "Finance"]  might need this later
let employeesLevels = ["junior", "mid-senior", "senior"]

Employee.prototype.salary= function () {
    for (let i=0; i<employeesLevels.length; i++)
    if (this.level.toLowerCase () === employeesLevels[i]){
        this.salary = Math.random()*500+(500*(i+1)+1)
        return this.salary=  Math.floor(this.salary- this.salary*0.075)}}

Employee.prototype.printInfo = function () { document.write(`<p>${this["Full Name"]}: ${this.salary()} JD</p>`)}

const ghaziSamer = new Employee (1000, "Ghazi Samer", "Administration", "Senior","");
const lanaAli = new Employee (1001, "Lana Ali", "Finance", "Senior","");
const tamaraAyoub = new Employee (1002, "Tamara Ayoub", "Marketing", "Senior","");
const safiWalid = new Employee (1003, "Safi Walid", "Administration", "Mid-Senior","");
const omarZaid = new Employee (1004, "Omar Zaid", "Development", "Senior","");
const ranaSaleh = new Employee (1005, "Rana Saleh", "Development", "Junior","");
const hadiAhmad = new Employee (1006, "Hadi Ahmad", "Finance", "Mid-Senior","");

function printEmployeesinfo () {
for (let i=0; i<employees.length;i++){
employees[i].printInfo()
}}
printEmployeesinfo()
