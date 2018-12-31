var name = "robert carlo";
var strContainer = "";
function nameTransform(str){
    strContainer = str.charAt(0).toUpperCase();
    for(var count = 0; count <=str.length; count++ ){
        if(str[count] === " "){
            strContainer = str.charAt(count + 1).toUpperCase();
        }
    }
    return strContainer;
}   

console.log(nameTransform(name));
console.log(name.length);
