const {
  returnValueOfSpecificProp,
  getArrByKey
} = require("./index");

// return age of a cat
const returnAge = returnValueOfSpecificProp("age");
const age = returnAge({ name: "cat", age: 10 });
console.log(age); // 10

// return ageList of a cat array
const catList = [{ name: "catA", age: 10 }, { name: "catB", age: 20 }];
const returnStatement = returnValueOfSpecificProp("age", (age, single, prop) => `${single.name}'s ${prop} is ${age}`);
const strList = catList.map(returnStatement);
console.log(strList); // ["catA's age is 10", "catB's age is 20"];

// return ageList of a cat array
const ageList = getArrByKey("age")(catList);
console.log(ageList);