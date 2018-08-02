var employees = []

function Employee (name, job, salary) {  
    // use the "this" keyword to reference each object 
    // that is created from this constructor
    this.name = name;
    this.job = job;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeesForm = function(){
        console.log(`Name: ${this.name}, Job Title: ${this.job}, Salary: ${this.salary}, Status: ${this.status}`)
    }
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var myEmployee = new Employee("Joe", "Tech", "20k");  
console.log(myEmployee)

var myEmployee = new Employee("Bob", "Toiletry", "220k");  
console.log(myEmployee)

var myEmployee = new Employee("John", "Tango", "2k");  

console.log(myEmployee)
console.log(myEmployee.printEmployeesForm())
myEmployee.status = "Part Time"
console.log(myEmployee.printEmployeesForm())
