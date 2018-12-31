//-------------Functions--------------//

// **Write Reusable JavaScript with Functions**

  // Example
  function ourReusableFunction() {
    console.log("Heyya, World");
  }

  ourReusableFunction();

  // Only change code below this line
  function reusableFunction(){
      console.log("Hi World");
  }

  reusableFunction();

//Passing Values to functions with arguments
  /*
   Parameters are variables that act as placeholders for the values that are to be input to a function when it is called.
   When a function is defined, it is typically defined along with one or more parameters.
   The actual values that are input (or "passed") into a function when it is called are known as arguments.
  */

  // Example
  function ourFunctionWithArgs(a, b) {
  //                           ^ this is parameters
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5 
  //                   ^ this is an example of arguments

  // Only change code below this line.

  function functionWithArgs(num1,num2){
    console.log(num1+num2);
  }
  functionWithArgs(10,6);

//** Global Scope and Functions **

/*
 In JavaScript, scope refers to the visibility of variables.
 Variables which are defined outside of a function block have Global scope.
 This means, they can be seen everywhere in your JavaScript code.
 Variables which are used without the var keyword are automatically created in the global scope.
 This can create unintended consequences elsewhere in your code or when running a function again.
  You should always declare your variables with var.
*/

  // Declare your variable here
  var myGlobal =10;

  function fun1() {
  // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;

  }

  // Only change code above this line
  function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

//** Return a Value from a function with Return **

 /*
    We can pass values into a function with arguments.
     You can use a return statement to send a value back out of a function.
 */
  // Example
  function minusSeven(num) {
    return num - 7;
  }

  // Only change code below this line
  function timesFive(num1){
    return num1 * 5;
  }
  // console.log(timesFive(40));

//** Understanding Undefined Value returned from a function **/

  // Example
  var sum = 0;
  function addThree() {
    sum = sum + 3;
  }

  // Only change code below this line
  function addFive(){
    sum += 5;
  }


  // Only change code above this line
  var returnedValue = addFive();


//**Stand In line (!Study this properly!) **/

/*
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed.

*/

  function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    var removed = arr.shift();
    return removed = 8;  // Change this line
  }

  // Test Setup
  var testArr = [1,2,3,4,5];

  // Display Code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 5)); // Modify this line to test
  console.log("After: " + JSON.stringify(testArr));

//**If Statements **/
  // Example
  function ourTrueOrFalse(isItTrue) {
    if (isItTrue) { 
      return "Yes, it's true";
    }
    return "No, it's false";
  }

  // Setup
  function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if(wasThatTrue){
        return "Yes, that was true";
    }

    return "No, that was false";
    
    
    // Only change code above this line.

  }

  // Change this value to test
  trueOrFalse(true);

//**Comparison With Equality Operator */
  // Setup
  function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

  // Change this value to test
  testEqual(10);

  /**Strict Equality Operator */
        // Setup
    function testStrict(val) {
      if (val=== 7) { // Change this line
        return "Equal";
      }
      return "Not Equal";
    }

    // Change this value to test
    testStrict(7);

// ** Comparison with greater than operator ** //

  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    
    if (val > 10) {  // Change this line
      return "Over 10";
    }

    return "10 or Under";
  }

  // Change this value to test
  testGreaterThan(10);
//**Returning boolean values from function */
  function isLess(a, b) {
    // Fix this code
      return a === b;

    //code before
    if (a < b) {
      return true;
    } else {
      return false;
    }

  }

  // Change these values to test
  isLess(10, 15);     
//** Counting Cards **/
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count+=1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0; 
      break;
    case 10:
    case 'J':
    case 'K':
    case 'Q':
    case 'A':
      count-=1;  
      break;

  }
  if(count <= 0){
    return count + " Hold";
  } else {
    return count + " Bet";
  }

  /*More Concise Way
  return count + (count > 0 ?  " Bet" : "Hold" );
    **/
 
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

