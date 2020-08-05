/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/

function scriptAt(value: string): number {
    return value.indexOf('Script');
  }

//   console.log(scriptAt(20));
  console.log(scriptAt('Here is a Script kub.'));
  
// Answer:
// 1. Because we have determined type of parameter to be String and return type to be number, so the others para will be declined.
// 2. If we used typescript to define type, it will help to filter type of argument and help to reduce some error in type.  
