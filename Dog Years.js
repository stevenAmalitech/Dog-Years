const myAge = 40;

let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

const myName = "John".toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${
    earlyYears + laterYears
  } years old in dog years.`
);
