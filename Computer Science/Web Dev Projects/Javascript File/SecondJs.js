//------------OBJECTS----------//
//**Accessing Object Properties with Dot Notation **

  // Setup
  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };

  // Only change code below this line

  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

//**Accessing Object Properties with Bracket Notation **/

  // Setup
  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };

  // Only change code below this line

  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line

//**Accessing Object Properties With Variables */
  //Example

  var someObj = {
    propName: "John"
  };
  function propPrefix(str) {
    var s = "prop";
    return s + str;
  }
  var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
  console.log(someObj[someProp]); // "John"
  //**End Of Example */

  // Setup
  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };

  // Only change code below this line;

  var playerNumber= 16;       // Change this Line
  var player = testObj[playerNumber];   // Change this Line

//**Updating Object Properties **/
    // Example
  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.name = "Happy Camper";

  // Setup
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  // Only change code below this line.

  myDog.name = "Happy Coder";

//**Add New Properties to a JavaScript Object **/
  // Example
  var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };

  ourDog.bark = "bow-wow";

  // Setup
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };

  // Only change code below this line.
    myDog.bark = "Woof";
    console.log(myDog["bark"]);
  
    //Deleting a property from a javascript objects
      delete myDog.bark;
//** Using Objects for Lookups **/

  // Setup
  function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
      alpha: "Adams",
      bravo:"Boston",
      charlie:"Chicago",
      delta:"Denver",
      echo:'Easy',
      foxtrot:"Frank"
    };
    result = lookup[val]
    // Only change code above this line
    return result;
  }

  // Change this value to test
  phoneticLookup("charlie");
  
//**Testing Object For Properties */
  /**
   * Sometimes it is useful to check if the property of a given object exists or not.
   *  We can use the .hasOwnProperty(propname) method of objects to determine if that object has the given property name
   *  hasOwnProperty() returns true or false if the property is found or not.
   */
  // Setup
  var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };

  function checkObj(checkProp) {
    // Your Code Here 
    if(myObj.hasOwnProperty(checkProp)==true ){
      return myObj[checkProp];
    }
    else
      return "Not Found";
  };

  // Test your code by modifying these values
  checkObj("gift");

//**Manipulating Complex Objects**/
/*
  This is an array which contains one object inside. The object has various pieces of metadata about an album.
  It also has a nested "formats" array. If you want to add more album records,
   you can do this by adding records to the top level array.
  Objects hold data in a property, which has a key-value format.
  In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".

  JavaScript Object Notation or JSON is a related data interchange format used to store data.

*/
  var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [ 
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
    ,
    // Add record here
      {
      "artist" : "Ed Sheeran",
      "title" : "Give Me love",
      "release_year" : 2013,
      "formats": [
        "CD",
        "9T",
        "PL"
      ],
    }
  ];
//**Accessing Nested Objects */
  // Setup
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jack"
      }
    }
  };


  var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

//**Accessing nested array using bracket notation **/

  // Setup
  var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
      },
      "outside": {
        "trunk": "jack"
      }
    }
  };


  var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

/**Record Collection **/
  //STUDY THIS BITCH CAREFULLY THIS IS IMPORTANT
  // Setup
  var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
  };
  // Keep a copy of the collection for tests
  var collectionCopy = JSON.parse(JSON.stringify(collection));

  // Only change code below this line
  function updateRecords(id, prop, value) {
  if(prop !=="tracks" && value !=""){
    collection[id][prop] = value;
  }
  else if(prop === "tracks" && value !==""){
  if(!collection[id].hasOwnProperty(prop)){
    collection[id][prop] = [];
    }
    collection[id][prop].push(value);
  }
  else if(value ===""){
    delete collection[id][prop];
  }
  return collection;


  }

  // Alter values below to test your code
  updateRecords(2468, "tracks", "free");
  console.log(collection[2468]["tracks"]);
