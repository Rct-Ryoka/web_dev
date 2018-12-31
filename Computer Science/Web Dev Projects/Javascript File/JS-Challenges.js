 /*

 1st Challenge

 Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. 
 For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
  For the test cases, the range will be between 1 and 18 and the input will always be an integer. 
 */
var factorial = 1;
function FirstFactorial(num) { 
    for(var count = 1 ; count <= num;count ++)
    // code goes here
    factorial = factorial * count;
    return factorial; 
           
  }
     
  // keep this function call here 
  console.log(FirstFactorial(4));                      

  /**
  2nd Challenge 

Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 


  */
  
 var nameArray   = "";
 function reverseName(str){
     console.log(nameArray);
     for(var i = str.length - 1; i >= 0; i-- ){
         nameArray = nameArray + str.charAt(i);
 
     }
 
     return nameArray;
 }
 
 
  
    
 
 
 