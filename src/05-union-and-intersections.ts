// OneThroughFive | Evens => { 1, 2, 3, 4, 5, 6, 8 }
// OneThroughFive & Evens => { 2, 4 }

const humidity = 79;

type OneThroughFive = 1 | 2 | 3 | 4 | 5;
let lowNumber: OneThroughFive = 3;
lowNumber = 8; //❌

type Evens = 2 | 4 | 6 | 8;
let evenNumber: Evens = 2;
evenNumber = 5; //❌

let evenOrLowNumber = 5 as Evens | OneThroughFive;

function flipCoin(): "heads" | "tails" {
  if (Math.random() > 0.5) {
    return "heads";
  }
  return "tails";
}

const outcome = flipCoin();

const success = ["success", { name: "Joe", email: "joe@email.com" }] as const;
const fail = ["fail", new Error("Something went wrong")] as const;

function maybeGetInfo() {
  if (flipCoin() === "heads") {
    return success;
  }
  return fail;
}

const outcome2 = maybeGetInfo();
outcome2[1].name;

//* Working with union types
function printEven(even: Evens): void {}
function printLowNumber(low: OneThroughFive): void {}
function printEvenNumberUnder5(num: 2 | 4): void {}
function printNumber(num: number): void {}

let y = 5 as Evens | OneThroughFive;

printEven(y);
printLowNumber(y);
printEvenNumberUnder5(y);
printNumber(y);

//* Narrowing with type guards

const [first, second] = outcome2;
if (second instanceof Error) {
  second.message;
} else {
  second.email;
}

//* Discriminated unions

if (first === "fail") {
  second.message;
} else {
  second.email;
}

//* Intersection types
let evenAndLowNumber: Evens & OneThroughFive;
evenAndLowNumber = 6;
evenAndLowNumber = 3;
evenAndLowNumber = 4;

let z = 4 as Evens & OneThroughFive;

printEven(z);
printLowNumber(z);
printEvenNumberUnder5(z);
printNumber(z);
