//  array is a single variable that is used to store different elements
// other than using primetives what we use is object
// array is object

// we can write array in two ways
// var nush= [ ]; // method 1 
// var nush = new Array(); // method 2 
 
var names=["nushrath", "muskan", "mahi",];
console.log(names)

// to find the lenght 
console.log(names.length)

// for sorting array
console.log(names.sort());

// to print particular elements
console.log(names[1]);

// index start from 0

// method 2 of writing array
var names=new Array("muskan", "nushrath", "mahi");
console.log(names);

// if we want to add more elements

names.push("hafsa");
console.log(names);

// to replace the string from substring

var replaced=names.replace('string', 'nushrath');
console.log(replaced);

// uppercase and lowecase
console.log(names.toUpperCase());
console.log(names.toLoweCase);

// to check position
var greet="this is nushrath";
console.log(greet);
var position=greet.indexOf('is');
console.log(position);