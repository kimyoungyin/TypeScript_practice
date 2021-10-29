class Department {
    // private id:string;
    // name: string;
    private employees: string[] = [];

    constructor(private id: string, public name: string) {
        // this.name = n;
    }
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee: string) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
// accounting.employees;
// accounting.employees[2] = "Halo";

accounting.printEmployeeInformation();

// const copy = { name: "DUMMY", describe: accounting.describe };

// shorthand
