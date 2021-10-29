class Department {
    // private readonly id:string;
    // name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        // name 프로퍼티는 인스턴스 생성 시 name을 입력받지 않고 "IT"로 결정되므로 이렇게 작성
        super(id, "IT");
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, public reports: string[]) {
        // name 프로퍼티는 인스턴스 생성 시 name을 입력받지 않고 "IT"로 결정되므로 이렇게 작성
        super(id, "Accounting");
    }
    addReport(text: string) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
// accounting.employees;
// accounting.employees[2] = "Halo";

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Somethig went wrong..");
accounting.printReports();
