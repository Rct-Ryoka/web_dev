//Looping Functions

//************While Loops******************
    // Setup
    var myArray = [];

    // Only change code below this line.
    var count = 0;
    while(count <5){
    myArray.push(count);
    count++;
    }

//************For Loops******************
        // Example
    var ourArray = [];

    for (var i = 0; i < 5; i++) {
    ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line.
    for(var count = 1 ; count <=5; count++){
        myArray.push(count);
    }
//************Iterate numbers with a For Loop******************

    // Example
    var ourArray = [];

    for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line.

    for(var count = 1; count <=9; count+=2){
    myArray.push(count);
    }

//**Count Backwards with a For loop **/
    // Example
    var ourArray = [];

    for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
    }

    // Setup
    var myArray = [];

    // Only change code below this line.
    for(var count = 9; count >= 1; count-=2){
    myArray.push(count);
    }

   
//***Iterate through an array with a for loop */

    // Example
    var ourArr = [ 9, 10, 11, 12];
    var ourTotal = 0;

    for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
    }

    // Setup
    var myArr = [ 2, 3, 4, 5, 6];

    // Only change code below this line

    var total = 0;

    for(var count = 0; count < myArr.length;count++){
    total += myArr[count]; 
    }
    console.log(myArr.length);
//**Nesting with for Loops */
    function multiplyAll(arr) {
        var product = 1;
        // Only change code below this line
        for(var i = 0; i < arr.length;i++){
        for(var j = 0; j < arr[i].length;i++){
            product *= arr[i][j];
        }
        }
        // Only change code above this line
        return product;
    }
    
    // Modify values below to test your code
    multiplyAll([[1,2],[3,4],[5,6,7]]);
 //**Record Collection */
        //Setup
        var contacts = [
            {
                "firstName": "Akira",
                "lastName": "Laine",
                "number": "0543236543",
                "likes": ["Pizza", "Coding", "Brownie Points"]
            },
            {
                "firstName": "Harry",
                "lastName": "Potter",
                "number": "0994372684",
                "likes": ["Hogwarts", "Magic", "Hagrid"]
            },
            {
                "firstName": "Sherlock",
                "lastName": "Holmes",
                "number": "0487345643",
                "likes": ["Intriguing Cases", "Violin"]
            },
            {
                "firstName": "Kristian",
                "lastName": "Vos",
                "number": "unknown",
                "likes": ["JavaScript", "Gaming", "Foxes"]
            }
        ];
        
        
        function lookUpProfile(name, prop){
        // Only change code below this line
        // for(var count = 0; count < contacts.length;count++){
        //     if(contacts[count].firstName === name){
        //             if(contacts[count].hasOwnProperty(prop)){
        //                 return contacts[count][prop];
        //             }
        //             else{
        //                 return "No such contact";
        //             }
        //         }
        //     }
        //     return "No such contact"; 
        // }
        for (var x = 0; x < contacts.length; x++){
            if (contacts[x].firstName === name) {
                if (contacts[x].hasOwnProperty(prop)) {
                    return contacts[x][prop];
                } else {
                    return "No such property";
                }
            }
        }
        // Only change code above this line
        }
        
        // Change these values to test your function
        
        console.log(lookUpProfile("Kristian", "likes"));
        console.log(contacts[2].likes);
        console.log(Math.random());