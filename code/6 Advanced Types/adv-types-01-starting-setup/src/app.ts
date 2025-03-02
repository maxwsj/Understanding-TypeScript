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
