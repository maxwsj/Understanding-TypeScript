// Code goes here!
type Admin = {
   name: string;
   privileges: string[];
};

type Employee = {
   name: string;
   startDate: Date;
};

type Elevatedemployee = Admin & Employee;

const e1: Elevatedemployee = {
   name: 'Max',
   privileges: ['create-server'],
   startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
   console.log('Name: ' + emp.name);
   if ('privileges' in emp) {
      console.log('Privileges: ' + emp.privileges);
   }

   if ('startDate' in emp) {
      console.log('Start Date: ' + emp.startDate);
   }
}

printEmployeeInformation(e1);
