"use strict";
// create a constructor 
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

// calculate the salray
Employee.prototype.salary= function () {
    for (let i=0; i<employeesLevels.length; i++)
         if (this.level.toLowerCase () === employeesLevels[i]){
            return this.salary = Math.random()*500+(500*(i+1)+1)}}

// calculate the salary after the tax
Employee.prototype.netSalary= function () { this.salary();
        return this.netSalary=  Math.floor(this.salary- this.salary*0.075)}

// save employees info in one array
        let employeesFinalInfo =[];
        Employee.prototype.printInfo = function () {
            employeesFinalInfo.push (`<br><br>Name: ${this["Full Name"]}<br>ID: ${this["Employee ID"]}<br>Department: ${this.Department}<br>Level: ${this.level}<br>Salary: ${this.netSalary()} JD`)
            }
        
        const ghaziSamer = new Employee (1000, "Ghazi Samer", "Administration", "Senior");
        const lanaAli = new Employee (1001, "Lana Ali", "Finance", "Senior");
        const tamaraAyoub = new Employee (1002, "Tamara Ayoub", "Marketing", "Senior");
        const safiWalid = new Employee (1003, "Safi Walid", "Administration", "Mid-Senior");
        const omarZaid = new Employee (1004, "Omar Zaid", "Development", "Senior");
        const ranaSaleh = new Employee (1005, "Rana Saleh", "Development", "Junior");
        const hadiAhmad = new Employee (1006, "Hadi Ahmad", "Finance", "Mid-Senior");
        
        // trigger the info and fill the array
        function printEmployeesInfo () {
            for (let i=0; i<employees.length;i++){
                employees[i].printInfo()}
            }
            printEmployeesInfo()
            let imgSrc = ["./assets/Ghazi.jpg","./assets/Lana.jpg","./assets/Tamara.jpg","./assets/Safi.jpg","./assets/Omar.jpg","./assets/Rana.jpg","./assets/Hadi.jpg"]
                    
            const main = document.getElementById("main")
            main.style.margin="0px"
            main.style.padding="0px"

            // use DOM to create the main body of our HTML
            function renderMain() {
            for (let j=0; j<imgSrc.length;j++){
                // create a div for each employee 
                const employeeDiv = document.createElement("div")
                employeeDiv.style.marginTop ="3%"
                employeeDiv.style.marginBottom ="4%"
                employeeDiv.style.display = "flex"
                employeeDiv.style.textAlign= "center"
                main.append(employeeDiv)
                //create a div for the mployee card and append the picture<img> and the info<p> to it, and do some styling
                const employeeInfoParagraph = document.createElement("div")
                employeeInfoParagraph.classList.add("employeeCard");
                employeeInfoParagraph.style.margin = "20px 35% 20px 35%"
                // employeeInfoParagraph.style.paddingLeft = "5px"
                employeeInfoParagraph.style.paddingTop = "50px"
                employeeInfoParagraph.style.borderRadius = "20px"
            const employeeImg = document.createElement("img")
            employeeImg.classList.add("employeePic");
            employeeDiv.append(employeeInfoParagraph)
            employeeImg.src=imgSrc[j]
            employeeImg.style.width = "250px";
            employeeImg.style.borderRadius = "150px"
            employeeInfoParagraph.append(employeeImg)
            const info = document.createElement("p")
            info.style.padding ="50px"
            info.classList.add("emplyeeInfo");
            info.innerHTML = employeesFinalInfo[j]
           employeeInfoParagraph.append(info)
            }
            }

            renderMain()

