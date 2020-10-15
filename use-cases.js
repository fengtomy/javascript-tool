const { returnValueOfSpecificProp } = require("./index");

// return age of a cat
const returnAge = returnValueOfSpecificProp("age");
const age = returnAge({ name: "cat", age: 10 });
console.log(age); // 10

// return ageList of a cat array
const catList = [{ name: "catA", age: 10 }, { name: "catB", age: 20 }];
const ageList = catList.map(returnAge);
console.log(ageList); // [10, 20];