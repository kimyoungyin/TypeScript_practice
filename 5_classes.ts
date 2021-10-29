class Department {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }
    describe(this: Department) {
        console.log("Department: " + this.name);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.employees;
accounting.employees[2] = "Halo";

accounting.printEmployeeInformation();

// const copy = { name: "DUMMY", describe: accounting.describe };

// copy.describe();