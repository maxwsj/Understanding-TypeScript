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

//////////// Discriminated Unions
interface Bird {
   type: 'bird';
   flyingSpeed: number;
}
interface Horse {
   type: 'horse';
   runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
   let speed;
   switch (animal.type) {
      case 'bird':
         speed = animal.flyingSpeed;
         break;
      case 'horse':
         speed = animal.runningSpeed;
         break;
   }
   console.log('Moving at speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 30 });

///////////// Type Casting

// const userInputElement = <HTMLInputElement>(
//    document.getElementById('user-input')
// );
const userInputElement = document.getElementById(
   'user-input'
) as HTMLInputElement;

///////////// Index Properties
interface ErrorContainer {
   [prop: string]: string;
}

const errorBag: ErrorContainer = {
   email: 'Not a valid email',
};

////////// Optional Chaining
const fetchedUserData = {
   id: 'u1',
   name: 'Max',
   job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);
