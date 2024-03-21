//question 1
let arr1 = [3,7,34,90,12];
let a = arr1.slice(-1);
console.log(a)

let arr2 = [true,"green","where",12,56];
let b = arr2.slice(-1);
console.log(b)

//question 2
let mypets = ["Cow","Bird","Snake","Dog"];
let c = mypets.join();
console.log(c)

//question3
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let d = arr3.sort();
console.log({d})


//question4
var arr =  ["apple", "mango", "apple",   "orange", "mango", "mango"];
let arrUnique = []
let arrDups = []
arr.forEach(fruit => {


if (!arrUnique.includes(fruit))
{arrUnique.push(fruit)}
 else{
    arrDups.push(fruit);
 }

})
console.log(arrDups);
console.log(arrUnique);


//question 5
let arr5 = ["the", "way", "x", 4];


 let f = "way";
 let = arr5.includes(f);
 console.log(f);




//question6
let word = "sevink";
let strCopy = word.slice()
let sortedstr = word.split("").sort().join("");
console.log(sortedstr);
