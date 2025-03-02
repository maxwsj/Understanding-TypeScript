// Code goes here!
class Department {
   // private id: string;
   // private name: string;
   private empolyees: string[] = [];

   constructor(private readonly id: string, public name: string) {
      // this.name = n;
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

const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('Max');
accounting.addEmployee('Andressa');

accounting.describe();
accounting.printEmployeeInformation();
