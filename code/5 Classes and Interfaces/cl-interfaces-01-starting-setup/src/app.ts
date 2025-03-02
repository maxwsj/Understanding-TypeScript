// Code goes here!
class Department {
   static fiscalYear: number = 2020;
   // private id: string;
   // private name: string;
   protected empolyees: string[] = [];

   constructor(private readonly id: string, public name: string) {
      // this.name = n;
   }

   static createEmployee(name: string) {
      return { name: name };
   }

   describe(this: Department) {
      console.log(`Department (${this.id}): ${this.name}`);
   }

   addEmployee(employee: string) {
      this.empolyees.push(employee);
   }

   printEmployeeInformation() {
      console.log(this.empolyees.length);
      console.log(this.empolyees);
   }
}

class ItDepartment extends Department {
   constructor(id: string, public admins: string[]) {
      super(id, 'IT');
   }
}

class AccountingDepartment extends Department {
   private lastReport: string;

   get mostRecentReport() {
      if (this.lastReport) {
         return this.lastReport;
      }
      throw new Error('No report found.');
   }

   set mostRecentReport(value: string) {
      if (!value) {
         throw new Error('Please pass in a valid value!');
      }
      this.addReport(value);
   }

   constructor(id: string, private reports: string[]) {
      super(id, 'Account');
      this.lastReport = reports[0];
   }

   addEmployee(name: string) {
      if (name === 'Max') {
         return;
      }
      this.empolyees.push(name);
   }

   addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
   }

   printReports() {
      console.log(this.reports);
   }
}

const employee1 = Department.createEmployee('Celia');
console.log(employee1);
console.log(Department.fiscalYear);

const it = new ItDepartment('d1', ['Max']);

it.addEmployee('Max');
it.addEmployee('Andressa');

it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment('d2', []);

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

accounting.printReports();
