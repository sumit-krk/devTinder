// const data=require("./sum");
// data.sum()

const data=require("./data.json")
console.log(data)

const {sum, multiply}=require("./calculate")
sum();
multiply();