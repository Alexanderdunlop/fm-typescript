//* Type Aliases
type Amount = {
  currency: string;
  value: number;
};

function printAmount(amount: Amount): void {
  const { currency, value } = amount;
  console.log(`${currency} ${value}`);
}

const donation = {
  currency: "USD",
  value: 50,
  description: "Nice donation",
};

type SpecialDate = Date & { getDescription(): string };

const newYearsEve: SpecialDate = Object.assign(new Date(), {
  getDescription: () => "New Year's Eve",
});

newYearsEve.getDescription;

//* Interfaces
interface Amount2 {
  currency: string;
  value: number;
}

function printAmount2(amount: Amount2): void {
  const { currency, value } = amount;
  console.log(`${currency} ${value}`);
}

//* Inheritance in interfaces
function consumeFood(arg: string) {}

class AnimalThatEats {
  eat(food: string) {
    consumeFood(food);
  }
}

class Cat extends AnimalThatEats {
  meow() {
    return "meow";
  }
}

const c = new Cat();
c.eat("tuna");
c.meow();

interface Animal {
  isAlive(): boolean;
}
interface Mammal extends Animal {
  getFurOrHairColor(): string;
}
interface Hamster extends Mammal {
  squeak(): string;
}
function careForHamster(hamster: Hamster) {
  hamster.getFurOrHairColor();
  hamster.squeak();
  hamster.isAlive();
}

interface AnimalLike {
  eat(food: string): void;
}

class Dog implements AnimalLike {
  eat(food: string) {
    consumeFood(food);
  }
  bark() {
    return "woof";
  }
}

class LivingOrganism {
  isAlive() {
    return true;
  }
}
interface CanBark {
  bark(): string;
}

class Dog2 extends LivingOrganism implements Animal, AnimalLike, CanBark {
  bark() {
    return "woof";
  }
  eat(food: string) {
    consumeFood(food);
  }
}

// window.document;

// window.exampleProperty = 42;

// declare global {
//   interface Window {
//     exampleProperty: number;
//   }
// }

type JSONPrimitive = string | number | boolean | null;
type JSONObject = {
  [key: string]: JSONValue;
};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

////// DO NOT EDIT ANY CODE BELOW THIS LINE //////
function isJSON(arg: JSONValue) {}

// POSITIVE test cases (must pass)
isJSON("hello");
isJSON([4, 8, 15, 16, 23, 42]);
isJSON({ greeting: "hello" });
isJSON(false);
isJSON(true);
isJSON(null);
isJSON({ a: { b: [2, 3, "foo"] } });

// NEGATIVE test cases (must fail)
// @ts-expect-error
isJSON(() => "");
// @ts-expect-error
isJSON(class {});
// @ts-expect-error
isJSON(undefined);
// @ts-expect-error
isJSON(BigInt(143));
// @ts-expect-error
isJSON(isJSON);
