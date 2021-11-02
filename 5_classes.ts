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
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No reports found");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value");
        }
        this.addReport(value);
    }

    constructor(id: string, public reports: string[]) {
        // name 프로퍼티는 인스턴스 생성 시 name을 입력받지 않고 "Accounting"으로 결정되므로 이렇게 작성
        super(id, "Accounting");
        this.lastReport = reports[0];
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();

it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

// 사용할 때는 메서드가 아닌 프로퍼티 방식으로 사용
accounting.mostRecentReport = "LAST!!"; // setter 호출
console.log(accounting.mostRecentReport); // getter 호출
// accounting.addReport("Somethig went wrong..");
// accounting.printReports();
