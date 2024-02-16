// function with parameter
function myGreeting(name){
    document.querySelector('#greeting').innerHTML = `<h1>+ សួស្តី ${name}</h1>`;
}
myGreeting("chiso");

// function with default parameter
function mySum(x = 5, y = 10){
    return x+y;
}
myResult1 = mySum();
document.querySelector('#sum1').innerHTML = `<h2>+ Sum1: ${myResult1}</h2>`;
myResult2 = mySum(80);
document.querySelector('#sum2').innerHTML = `<h2>+ Sum2: ${myResult2}</h2>`;

let num = 10;
function increaseNum(){
    let result = num += 20;
    console.log(result);
}
//console.log(result) error
increaseNum();

//arrow function
/*
    () => {}
*/
let greet = ()=>{
    console.log('+ Hello from arrow function!');
}
greet();

let newGreet = stdName =>{
    console.log(`+ Hello new student ${stdName}`);
}
newGreet('chiso');

let sumArrowFunction = (x, y) =>  x+y;
let resultSumArrowFunction = sumArrowFunction(5, 10);
document.querySelector('#sumArrowFunction').innerHTML = `
<h1>+ Sum with Arrow Function: ${resultSumArrowFunction}</h1>`;


