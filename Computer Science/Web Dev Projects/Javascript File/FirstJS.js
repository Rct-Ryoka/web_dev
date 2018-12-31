// **************************************************JAVA SCRIPT BASICS************************************************

console.log('Hello Shintaro');

//Basic Javascript: Escaping Literal Quotes in Strings

//var myStr = "I am a \"double quoted\" string inside \"double quotes\".";// Change this line

var myStr = 'I am a"double quoted"string inside "double quotes".';// Change this line
console.log(myStr);

//Concatenating Strings with the Plus Equals Operator

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr+= "This is the second sentence.";

console.log(myStr);

// **Appending Variables to String**

  // Example
  var anAdjective = "awesome!";
  var ourStr = "freeCodeCamp is ";
  ourStr += anAdjective;

  // Only change code below this line

  var someAdjective= "fun";
  var myStr = "Learning to code is "
  myStr += someAdjective;

// **Finding the length of a string**

  // Example
  var firstNameLength = 0;
  var firstName = "Ada";

  firstNameLength = firstName.length;

  // Setup
  var lastNameLength = 0;
  var lastName = "Lovelace";

  // Only change code below this line.

  lastNameLength = lastName;
  lastNameLength = lastNameLength.length;


//**Use Bracket Notation to find the first Character in a String**

  // Example
  var firstLetterOfFirstName = "";
  var firstName = "Ada";

  firstLetterOfFirstName = firstName[0];

  // Setup
  var firstLetterOfLastName = "";
  var lastName = "Lovelace";

  // Only change code below this line
  firstLetterOfLastName = lastName[0];

//** Use bracket notation to find the Last Character in a String**

  // Example
  var firstName = "Ada";
  var lastLetterOfFirstName = firstName[firstName.length - 1];

  // Setup
  var lastName = "Lovelace";

  // Only change code below this line.
  var lastLetterOfLastName = lastName[lastName.length-1];

//** Word Blacnks **/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    // Your code below this line
    var result = "I saw a "+myAdjective+" "+myNoun+" that"+myVerb+" "+myAdverb;
  
    // Your code above this line
    return result;
  }
  
  // Change the words here to test your function
  wordBlanks("dog", "big", "ran", "quickly");

//** Access Array Data with Indexes
  // Example
    var ourArray = [50,60,70];
    var ourData = ourArray[0]; // equals 50

    // Setup
    var myArray = [50,60,70];

    // Only change code below this line.
    var myData = myArray[0];     

//** Access multi-dimensional arrat with indexes 

  // Setup
  var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

  // Only change code below this line.
  var myData = myArray[2][1];

//** Manipulate Arrays With Push

  // Example
  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.push(["happy", "joy"]); 
  // ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

  // Setup
  var myArray = [["John", 23], ["cat", 2]];
  
  // Only change code below this line.
  myArray.push( ["dog", 3 ]);
  myArray.push(["mouse" , 5]);
  console.log(myArray);

//** Manipulate Arrays with Pop **

  // Example
  var ourArray = [1,2,3];
  var removedFromOurArray = ourArray.pop(); 
  // removedFromOurArray now equals 3, and ourArray now equals [1,2]

  // Setup
  var myArray = [["John", 23], ["cat", 2]];

  // Only change code below this line.
  var removedFromMyArray = myArray.pop();

//** Manipulate Arrays with Shift **

  // Example
  var ourArray = ["Stimpson", "J", ["cat"]];
  var removedFromOurArray = ourArray.shift();
  // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

  // Setup
  var myArray = [["John", 23], ["dog", 3]];

  // Only change code below this line.
  var removedFromMyArray = myArray.shift();

// ** Manipulate Arrays With Unshift**

  // Example
  var ourArray = ["Stimpson", "J", "cat"];
  ourArray.shift(); // ourArray now equals ["J", "cat"]
  ourArray.unshift("Happy"); 
  // ourArray now equals ["Happy", "J", "cat"]

  // Setup
  var myArray = [["John", 23], ["dog", 3]];
  myArray.shift();
  myArray.shify(["Paul" , 35])
  // Only change code below this line.


//** Multi-Dimensional Array  */

  var myList = [["Milk" , 2 ] , ["Eggs" , 12], ["Apples" , 5] , ["Candy",100 ] , ["Burger" , 2]];

