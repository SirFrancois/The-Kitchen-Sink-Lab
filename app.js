//This variable holds a string//
var firstName= "Sir";

//This variable holds a number//
const States= 50;

//This variable is the sum of 4 and 5//
let result = 5 + 4

//This function sends an alert that says Hello World
function sayHelloo(){
    alert("Hello World!");
}

//This function checks age for viewing a webpage
function checkAge(age, name) {
    if(age < 21){
        return("Sorry"+name+"you are not old enough to view this page.")
}
}
console.log(checkAge(21, "Charles"));
console.log(checkAge(27, "Abby"));
console.log(checkAge(18, "James"));
console.log(checkAge(17, "John"));

//This loop displays the elements of an array
var veg = ['carrots', 'peas', 'squah']
for(i= 0; i<veg.length; i++){
    console.log(veg[i])
}

//This log prints an object to the console
var pet = {name:"Kelly",breed:"Bull Terrier"}
console.log(pet);

//This is an array of objects
var people = [{name:"Mark", age: 19},{name:"Alex", age:22},{name:"Jessica",age: 28},{name:"Chris", age: 24},{name:"Celena",age: 18}]






