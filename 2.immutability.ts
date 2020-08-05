/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
3) What did you learn from this exercise?
*/
function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    // x = x - 42;

    return 42 / x;
}
console.log(safeDivide());

// Answer:
// 1. Line 18 cause 'divide by zero' because x variable is mutable.
// 2. Changed on line 14 to fix by changing variable type.
// 2.1 Change let to const.
// 2.2 Because we knew the cause since compile time.
// 3. Learned about important of immutable and mutable when need to manage state and debug where the state changes.



