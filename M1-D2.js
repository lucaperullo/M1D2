/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EpERCISE 1
Write the code to execute a SUM between the number 12 and 20
*/

/* WRITE YOUR CODE HERE */

console.log(12 + 20);

/* EXERCISE 2
Create a variable named X containing the number 12
*/

/* WRITE YOUR CODE HERE */

let X;

X = 12;

/* EXERCISE 3
Create a variable named name containing the string John Doe
*/

/* WRITE YOUR CODE HERE */

let name = "John Doe";

/* EXERCISE 4
Execute a DIFFERENCE between the number 12 and the variable X, which stores the value 12
*/

/* WRITE YOUR CODE HERE */
console.log(12 - X);

/* EXERCISE 5
Create two variables: name1 and name 2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2)
*/

/* WRITE YOUR CODE HERE */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1 === name2.toLowerCase());

/* EXERCISE 6
Create the variable X (value less than 10). Write the code to print the literal value of the given number (ex.: 1 => one, 5 => five)
*/

/* WRITE YOUR CODE HERE */
let x = 5;

if (x === 1) {
  console.log("one");
} else if (x === 2) {
  console.log("two");
} else if (x === 3) {
  console.log("three");
} else if (x === 4) {
  console.log("four");
} else if (x === 5) {
  console.log("five");
} else if (x === 6) {
  console.log("six");
} else if (x === 7) {
  console.log("seven");
} else if (x === 8) {
  console.log("eight");
} else if (x === 9) {
  console.log("nine");
}

/* EXERCISE 7 (EXTRA)
Insert a value in a variable based on the result of a ternary if
*/

/* WRITE YOUR CODE HERE */
var resultToPrint;
let p = 1;
let y = 0;
var result =
  p > y
    ? (resultToPrint = "p is more than y")
    : (resultToPrint = "p is less than y");
console.log(resultToPrint);

/* WHEN YOU ARE FINISHED
Send the code via Slack to the tutor! In the nept days we'll also learn how to use GIT 
*/
