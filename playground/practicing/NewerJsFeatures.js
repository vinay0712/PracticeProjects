// console.log("Hello! I am Vinay ")
//console.log("Newer JavaScript features")
//--> Default Parameters for functions.
// function rollDie(Sides){ //Older method
//     if(Sides === undefined){
//         Sides = 6;
//         }
//     console.log(Math.floor(Math.random()*Sides)+1);
// }
// function rollDie(sides=6){//newer way
//     console.log(Math.floor(Math.random()*sides)+1);
// }
// function greet(name,msg="Hello,"){
//     console.log(`${msg} ${name}!`)
// }
//--> Spread in Function Calls[...]
// let nums =[2,4,53,3345,2343,0,22,343];
// // let max = Math.max(nums);--> NaN
// // let min = Math.min(nums);--> Nan
// let max = Math.max(...nums);
// console.log(nums);
// console.log(...nums);
// console.log("Hello World!");
// console.log(..."Hello World!")
//--> spread in Array literals
// let firstNames = ['Robin','Harry','Jake'];
// let lastNames = ['Hood','John','Mabe'];
// let allNames = ["Vinay",...firstNames,...lastNames,"Sharma"]
//--> spread in object literals
// const student1 = {
//     name:'Jake',
//     rollNo:1,
//     displayData(){
//         console.log(`${this.name} ${this.rollNo}`)
//     }
// }
// const student2 = {
//     name:'Hulk',
//     rollNo:2,
//     displayData(){
//         console.log(`${this.name} ${this.rollNo}`)
//     }
// }
// let both = {...student1,...student2}//in this case if there are same properties then second one will win
//spreading over the objects is required when we need to copy objects for backend purposes.
// let form ={
//     name:"Tobias",
//     email:"bluetobias@gmail.com",
//     username:"tobiii123"
// }
// let newUser ={
// ...form,
// userId : 212,
// isAdmin : false

// }
//-->arguments object in javaScript
//it can collect any number of parameters in a function
//Its an array like object which store all the parameters of the function in an array like structure
//to be noted:arguments is not an actual array so we cannot apply array methods like reduce on it
// function print(){
//     console.log(arguments)
//     for(let elements of arguments){
//         console.log(elements)
//     }
// }


//---> rest in javascript
//if we use rest in parameters which is used by three dots ... it will store the values in an actual 
//array of parameter name..Thus we can use array methods.
// function sum(...nums){
//     return nums.reduce((total,val)=> total+val)
// }
// function raceResults(gold,silver,...everyoneElse){
//     console.log(`GOLD Medal goes to ${gold}`);
//     console.log(`SILVER Medal goes to ${silver}`);
//     console.log(`And thanks to ${everyoneElse} for participating`)
// }
//destructuring object
// const details ={
//         name: "Douglas Adams",
//         email: "douglas@gmail.com",
//         postcode: "pe22 22a",
//         phoneNumber: 7428233312,
//         city: "London",
//         country: "England",
//         "favouriteQuote": "The answer is 42"
// }

// // const {name,email,...others} = details; //name must be same 
// const{name:realName} = details; //renaming a variable in destructing a object
