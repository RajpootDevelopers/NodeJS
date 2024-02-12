// let n = 5;

// for(let i = 0; i< n; i++){
//     console.log("hello", i)

// }
// NODE Repl (Read Evaluate Print and Loop): 
// process
// global
// .help
// .save



// NODE Filse
// console.log(process.argv) 



// let args = process.argv
// for(let i = 2; i < args.length; i++){
//     console.log(args[i])
// }

// const someValue = require("./math")
// console.log(someValue)
// const math = require("./math")
// console.log(math)
// console.log(math.sum(2,2))
// console.log(math.mul(9,9))
// console.log(math.g)
// console.log(math.PI)

// const info = require("./Fruits")
// console.log(info)



// ***************************************? For Import :

import { sum, PI } from "./math.js";
import { generate, count} from "random-words";
// console.log(PI, sum(2,3));

console.log(generate())

