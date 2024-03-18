let a = "abc";
console.log(a);
// node myFile.ts  gej bj run hiine

//typescript ni uuruu tusdaa hel bish bolhoor ajluulhiin huvid hyazgaarlalt hiihgui
//

// let userName: string = "orgil";
// userName = 25;
// console.log(userName);

let isChecked: boolean = false;
let age: number = 25;
// let grades: number[] = [1, "2", 3];

// ugugdliin turul zohion buteeh
//type aar zuvhun object zarlana

type StudentType = {
  name: string;
  age: number;
};

let student: StudentType = {
  name: "Orgil",
  age: 25,
  grade: 21,
};

interface Teacher {
  name: string;
  age: number;
  isVerified: boolean;
}
type RecordType = "income" | "expense";

// function ii turliig zarlahdaa `anony arrow func`
const add = (a: number, b: number): number => a + b;
const subt = (a: number, b: number): number => a - b;
type CalculType = {
  add: (a: number, b: number) => number;
  subt: (a: number, b: number) => number;
};
const calculator: CalculType = {
  add: add,
  subt: subt,
};
// typeof add

type Person = {
  name: string;
  age?: number | null;

};
const grades: Array<Person> = [{ name: "orgil", age: 25 }];
