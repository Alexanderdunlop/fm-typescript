//* Variable Declarations & Interence
let temperature = 6; //! inference

temperature = "warm"; //! type-checking
let humidity = 79 as 79; //! literal type

//* A type as a set of allowed values

temperature = 23; //✔️ (1) - re-assignability of a let
temperature = humidity; //! (2) - type-checking
humidity = temperature; //! (3) - number is not of type `79`
humidity = 79; //✔️ (4) - 79 is of type `79`
humidity = 78; //! (5) - 78 is not of type `79`

let temp2 = 19; //! temp2's type is { all numbers }
let humid2 = 79 as const; //! humid2's type is { 79 |
temp2 = 23; //! Is each member in { 23 } also in { all numbers }?
temp2 = humid2; //! Is each member in { 79 } also in { all numbers }?
humid2 = temp2; //! Is each member in { all numbers } also in { 79 }?
humid2 = 79; //! Is each member in { 79 } also in { 79 }?
humid2 = 78; //! Is each member in { 78 } also in { 79 }?

let x = 8 as 79; //! This is heavy way to overwrite TypeScript
let y = 79 as const; //! This is a better way.

//* Implicit `any` and type annotations

// between 500 and 1000
export const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;

let startTime = new Date();
let endTime: Date;

setTimeout(() => {
  endTime = new Date();
}, RANDOM_WAIT_TIME);

//* Type Casting
let frontEndMastersFounding = new Date("Jan 1, 2012");
let date1 = frontEndMastersFounding;
let date2 = frontEndMastersFounding as any;
