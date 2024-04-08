// console.log("JavaScript By Vinay");
//-->HIGH ORDER FUNCTIONS
//--> passing a function as a parameter
// function callTwice(func){
//     func();
//     func();
// }
// function rollDie(){
//     let roll = Math.floor(Math.random()*6)+1;
//     console.log(roll);
// }
// callTwice(rollDie);
//--> returning a function--->
// function aMysteryFunc() {
//     let first = Math.random();
//     if (first > 0.5) {
//         return function () {
//             console.log("Hurray you are a bigger one");
//         }
//     } else {
//         return function () {
//             alert("You are a smaller one");
//             alert("dont close this window")
//         }
//     }
// }
// function makeFuncBetween(min,max){
//      return function isBetween(num){
//         return num>= min && num<= max;
//     }

// }
//--> methods
// const math={
//     multiply:function(x,y){
//         return x*y;
//     },
//     divide:function(x,y){
//         return x/y;
//     },
//     square:function(x){
//         return x*x;
//     }
// }
//--> this keyword
// let student ={
//     name:"vinay",
//     age:21,
//  displayData(){
//     console.log(`Name of the Student is ${this.name} and age of the student is ${this.age}`)
//  }

// --> try catch block
// function yell(cry){
//     try{
//     console.log(cry);
//     }
//     catch(){
//         console.log("please pass the string next time")
//     }
// }
//--> ARRAY CALL BACK METHODS
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]

// numbers.forEach(function(el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// });


// const movies = [{
//     name:"Avengers Infinity War",
//     ratings:9.3
// },
// {
//     name:"Avengers Endgame",
//     ratings:9.5
// },{
//     name:"IronMan",
//     ratings:9.8
// }]

// movies.forEach(function(movie){
// console.log(`${movie.name} - ${movie.ratings}`)
// })
//--> map methods
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]
// let doubles = numbers.map(function(num){
//     return num*2;
// })
// const movies = [{
//     name:"Avengers Infinity War",
//     ratings:9.3
// },
// {
//     name:"Avengers Endgame",
//     ratings:9.5
// },{
//     name:"IronMan",
//     ratings:9.8
// }]
// let titles = movies.map(function(movie){
//     return movie.name;
// })
//--> ARROW FUNCTIONS (=>)
// const rollDie = () => {
//     return Math.floor(Math.random()*6)+1;
// }
// const square = (num) => {
//     return num*num;
// }
//--> implicit return in arrow functions
// const isEven = num => num%2===0; //one liner implicit return
// const isEven = num =>(num%2===0)
// const movies = [{
//     name:"Avengers Infinity War",
//     ratings:9.3
// },
// {
//     name:"Avengers Endgame",
//     ratings:9.5
// },{
//     name:"IronMan",
//     ratings:9.8
// }]
// // const newMovies = movies.map(function(movie){
// //     return `${movie.name}-${Math.floor(movie.ratings*100)}`
// // })// this can also be done  using implicit return in arrow functions
// // const newMovies = movies.map((movie)=>{
// //     return `${movie.name}-${Math.floor(movie.ratings*100)}`
// // }) OR
// const newMovies = movies.map(movie=>`${movie.name}-${Math.floor(movie.ratings*100)}`)
//--> Another Callback function but not for arrays
//setTimeout()
// console.log("Hello!!!");
// setTimeout(()=>{
//     console.log("........are you still there??")
// },3000)//setTimeout will be executed immediately after first line but call the callback function after the interval 
// console.log("GoodBye!!!");//this will be executed in the meantime
// setInterval(function(){
//     console.log(Math.random())
// },2000)// setInterval executes callback function after given interval
// to stop setInterval use clearInterval(id)
// const id = setInterval(function(){
//         console.log(Math.random())
//     },2000)
//     const id2 = setInterval(function(){
//         console.log(Math.random()*6)
//     },2000)
//--> filter array method
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]
// const odd = numbers.filter(n=>{
//     return n%2===1
// })
// const movies = [{
//     name:"Avengers Infinity War",
//     ratings:9.3
// },
// {
//     name:"Avengers Endgame",
//     ratings:9.5
// },{
//     name:"IronMan",
//     ratings:9.8
// }]
// const bestMovie = movies.filter(m=> m.ratings>9.6)
//--> every()
// const words=["dig","bag","log","dog"]
// let checkWords = words.every(word=>word.length===3);
// let lastLetter = words.every((word)=>{
//     let last = word[word.length-1]
//     return last  === 'g';
// })
//-->some()
// let words=['newcake','dog','hello','yellow']
// let checkWords = words.some(word=>word.length<4)
// let firstWord = words.some(word=>word[0]=== 'h')
// let includeWord = words.some(word=>word.includes('newcake'))
//--> reduce()
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20]
// let sumNumbers = numbers.reduce((result,current)=>{
//     return result+current;
// })
// let findMax = numbers.reduce((max,current)=>{
//     if(max>current){
//         return max;
//     }return current;
// })
// const movies = [{
//     name:"Avengers Infinity War",
//     ratings:9.3
// },
// {
//     name:"Avengers Endgame",
//     ratings:9.5
// },{
//     name:"IronMan",
//     ratings:9.8
// }]
//  let bestMovie = movies.reduce((best,check)=>{
//     if(best.ratings>check.ratings){
//         return best.name;
//     }return check.name;
//  })