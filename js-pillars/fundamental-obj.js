// Where new is used

/*
- object
- array
- function
- date
- regexp
- error
*/

// Where new is not used
/*
- string
- number
- boolean
*/

let yesterday = new Date("July 3, 2022");
yesterday.toUTCString();
console.log(yesterday); // 2022-07-03T07:00:00.000Z

let myGpa = String("4.0");
console.log(myGpa); // 4.0
