// Code goes here!
abstract class Department {
   static fiscalYear: number = 2020;
   // private id: string;
   // private name: string;
   protected empolyees: string[] = [];

   constructor(protected readonly id: string, public name: string) {
      // this.name = n;
   }

   static createEmployee(name: string) {
      return { name: name };
   }

   abstract describe(this: Department): void;

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

   describe() {
      console.log('IT Department');
   }
}

class AccountingDepartment extends Department {
   private lastReport: string;
   private static instance: AccountingDepartment;

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

   private constructor(id: string, private reports: string[]) {
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

   describe() {
      console.log('IT Department');
   }

   static getInstance() {
      if (AccountingDepartment.instance) {
         return this.instance;
      }
      this.instance = new AccountingDepartment('d2', []);
      return this.instance;
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

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

accounting.printReports();
