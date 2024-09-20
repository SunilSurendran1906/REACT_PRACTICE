const [firstName, secondName] = ["Sunil", "Surendran"];

console.log(firstName);
console.log(secondName);

const { name: userName, age } = {
  name: "sunil",
  age: "24",
};

console.log(userName);
console.log(age);

const hobbies = ["Working", "Game", "reading"];

const newHobbies = ["Sleeping"];

const mergeHobbies = [...hobbies, ...newHobbies];

console.log(mergeHobbies);

const user = {
  name: "Rvs",
  age: 24,
};

const extendUser = {
  isAdmin: true,
  ...user,
};

console.log(extendUser);

const password = prompt("your password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("access is not granted");
}

const hobbies2 = ["sports", "cooking"];

for (const hobby of hobbies2) {
  console.log(hobby);
}

const handleTimeOut = () => {
  console.log("Time up");
};

setTimeout(handleTimeOut, 3000);

function handleTimeOut2() {
  console.log("Time up....again");
}

setTimeout(handleTimeOut2, 4000);

setTimeout(() => {
  console.log("More time up");
}, 5000);

function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("Hi");
});

function init() {
  function greet() {
    console.log("Hello");
  }
  greet();
}

init();

const hobbies3 = ["sports", "cooking"];
hobbies3.push("Working");

console.log(hobbies3);
