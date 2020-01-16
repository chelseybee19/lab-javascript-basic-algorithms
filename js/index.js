// Iteration 1: Names and Input
let hacker1 = "Chelsey";

console.log('The drivers name is ' +  hacker1 + '.');

let hacker2 = "Hayley"

console.log('The navigators name is ' + hacker2 + '.');


// Iteration 2: Conditionals
console.log(hacker1.length)
console.log(hacker2.length)

if (hacker1.length > hacker2.length){
  console.log('The driver has the longest name is has ' + hacker1.length + ' characters')
} 
else if(hacker2.length>hacker1.length){
 console.log('It seems the navigator has the logest name it has ' + hacker2.length + ' characters')
} 
else {
  console.log('wow you both have equally long names ' + hacker1.length + ' characters')
}


// Iteration 3: Loops
for (i=0; i< hacker1.length; i++ ){
    console.log(hacker1[i].toUpperCase())
  }