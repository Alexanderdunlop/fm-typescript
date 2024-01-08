//* Objects

const myCar = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

let car: {
  make: string;
  model: string;
  year: number;
} = myCar;

function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  if (typeof car.chargeVoltage !== "number") {
    str += `// ${car.chargeVoltage}v`;
  }
  console.log(str);
}

printCar(car);

printCar({
  make: "Honda",
  model: "Accord",
  year: 2017,
});

printCar({
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  chargeVoltage: 240,
});

const myArg = {
  make: "Tesla",
  model: "Model 3",
  year: 2020,
  color: "red",
};

printCar(myArg);

//* Index signatures

//? Dictionary of phone #s
const phones: {
  mobile: {
    country: string;
    area: string;
    num: string;
  };
  [k: string]:
    | {
        country: string;
        area: string;
        num: string;
      }
    | undefined;
} = {
  mobile: { country: "+1", area: "206", num: "555-1234" },
  home: { country: "+1", area: "206", num: "555-1234" },
  work: { country: "+1", area: "425", num: "555-5678" },
  fax: { country: "+1", area: "425", num: "555-9999" },
};

phones.mobile; // known key
phones["work"]; // unknown key, checked index signature

const x: { [k: string]: string } = {};
x.foo = "bar";

//* Array types

const fileExtensions = ["js", "ts"];
// ^? string[]

const cars = [
  {
    make: "Honda",
    model: "Accord",
    year: 2017,
  },
];

//* Tuples

let myCar2 = [2002, "Toyota", "Corolla"];

const [year, make, model] = myCar2; //✔️ Destructuring

let myCar3: [number, string, string] = [2002, "Toyota", "Corolla"];

const numPair: [number, number] = [5, 10];
const numTriplet: [number, number, number] = [7]; //❌

[101, 102, 103].length; // number
numPair.length; // 2

// no safety
numPair.push(6);
numPair.pop();
numPair.pop();
numPair.pop();

const roNumPair: readonly [number, number] = [5, 10];
roNumPair.length; // 2
roNumPair.push(6); //❌
roNumPair.pop(); //❌

//* Nominal vs Structural
