//*Generate Random whole numbers within a range */

    // Example
    function ourRandomRange(ourMin, ourMax) {

        return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    }
    
    ourRandomRange(1, 9);
    
    // Only change code below this line.
    
    function randomRange(myMin, myMax) {
    
        return Math.floor(Math.random()* (myMax - myMin + 1)) + myMin; // Change this line
    
    }
    
    // Change these values to test your function
    var myRandom = randomRange(5, 15);

//**Use the parseint function with radix  */

    function convertToInteger(str) {
        var num = parseInt(str , 2);
        return num;
    }
    
    convertToInteger("10011");

//**Use the conditional (ternary) operator */

    function checkEqual(a, b) {
        return (a == b ? true : false );
    }
    
    
    checkEqual(1, 2);

//**Use Multiple Conditional (Ternary) Operators */

    function checkSign(num) {
        return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
    }
    
    checkSign(10);
