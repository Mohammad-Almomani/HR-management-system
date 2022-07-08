"use strict";

const employees =[];
function Employee (ID, fullName, department, level){
    this["Employee ID"] = ID;
    this["Full Name"] = fullName;
    this.Department = department;
    this.level = level;
    employees.push(this)
}
// let companyDepartment = ["Administration", "Marketing", "Development", "Finance"]  might need this later
let employeesLevels = ["junior", "mid-senior", "senior"]

Employee.prototype.salary= function () {
    for (let i=0; i<employeesLevels.length; i++)
         if (this.level.toLowerCase () === employeesLevels[i]){
            return this.salary = Math.random()*500+(500*(i+1)+1)}}

Employee.prototype.netSalary= function () { this.salary();
        return this.netSalary=  Math.floor(this.salary- this.salary*0.075)}

        let employeesFinalInfo =[];
        Employee.prototype.printInfo = function () {
            //  let x = (`<p>${this["Full Name"]}: ${this.netSalary()} JD</p>`)
            employeesFinalInfo.push (`Name: ${this["Full Name"]}- ID: ${this["Employee ID"]} Department: ${this.Department}-Level: ${this.level}- Salary: ${this.netSalary()} JD`)
            }
        
        const ghaziSamer = new Employee (1000, "Ghazi Samer", "Administration", "Senior");
        const lanaAli = new Employee (1001, "Lana Ali", "Finance", "Senior");
        const tamaraAyoub = new Employee (1002, "Tamara Ayoub", "Marketing", "Senior");
        const safiWalid = new Employee (1003, "Safi Walid", "Administration", "Mid-Senior");
        const omarZaid = new Employee (1004, "Omar Zaid", "Development", "Senior");
        const ranaSaleh = new Employee (1005, "Rana Saleh", "Development", "Junior");
        const hadiAhmad = new Employee (1006, "Hadi Ahmad", "Finance", "Mid-Senior");
        
        
        function printEmployeesInfo () {
            for (let i=0; i<employees.length;i++){
                employees[i].printInfo()}
            }
            printEmployeesInfo()
            
            // Employee.prototype.imag = function () {
                //     for (let i=0; i<employeesLevels.length; i++){
                    //             this.Picture.src = this.pic
                    //     }
                    
                    // }
                    
            let x = ["./assets/Ghazi.jpg","./assets/Lana.jpg","./assets/Tamara.jpg","./assets/Safi.jpg","./assets/Omar.jpg","./assets/Rana.jpg","./assets/Hadi.jpg"]
                    
            const main = document.getElementById("main")
            
            for (let j=0; j<x.length;j++){
                const printDiv = document.createElement("div")
                // printDiv.style.backgroundColor="red"
                // printDiv.style.marginLeft ="100px"
                // printDiv.style.display = "flex"
                printDiv.style.textAlign= "center"

                main.append(printDiv)
                const para = document.createElement("p")
                para.style.marginRight = "40%"
                para.style.marginLeft = "40%"
                para.style.paddingTop = "30px"
                para.style.borderRadius = "20px"



                para.style.backgroundColor = "blue"


            const gimg = document.createElement("img")
            printDiv.append(para)
            gimg.src=x[j]
            gimg.style.width = "250px";
            // gimg.style.display = "inline-block"
            // gimg.style.padding = "10px"
            gimg.style.borderRadius = "10px"
            // gimg.style.padding="50px"
            // gimg.style.backgroundColor="red"            
            para.append(gimg)
            // console.log(employees[0])
            // const breaka = document.createElement("a")
            // breaka.textContent = "brasfaflkn"
            const info = document.createElement("p")
            info.style.padding ="50px"
            info.innerHTML = employeesFinalInfo[j]
            para.append(info)
            }



          console.log(employeesFinalInfo)
        //   document.write(`${employeesFinalInfo[1]}`)



            // const printMain = document.getElementById("mainDiv")
            // printMain.append(printDiv)

        // printMain.textContent = "kpafmpkad"

        
//    printEmployeesInfo()



//    const main = document.main
//    const div1 = document.createElement("div")
//    const br = document.createElement("br")
//    br.innerText = "hi"

//    div1.append(br)
//    main.append(div1)
