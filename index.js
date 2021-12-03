  
const firstNum = prompt('Enter the first digit');
const value = prompt('Enter the value(+-*/)');
const secondNum = prompt('Enter the second digit');

// function colculate() {
    
// if (value === '*') {
// const multiply = Number(firstNum) * Number(secondNum);
// }
// if (value === '/') { 
// const division = Number(firstNum) / Number(secondNum);
// }
// if (value === '+') {
// const plus = Number(firstNum) + Number(secondNum);
// }
// if (value === '-') { 
// const minus = Number(firstNum) - Number(secondNum);
// }   
// }     

function multiply() {
     if (value === '*') {
         const multi = Number(firstNum) * Number(secondNum)
         console.log(`${firstNum} * ${secondNum} = ${multi}`)
     }  
 };          
multiply();


function division() {
     if (value === '/') {
         const divi = Number(firstNum) / Number(secondNum)
         console.log(`${firstNum} / ${secondNum} = ${divi}`)
     }  
 };          
division();

function plus() {
     if (value === '+') {
         const plusNum = Number(firstNum) + Number(secondNum)
         console.log(`${firstNum} + ${secondNum} = ${plusNum}`)
     }  
 }; 

plus();

function minus() {
     if (value === '-') {
         const min = Number(firstNum) - Number(secondNum)
         console.log(`${firstNum} - ${secondNum} = ${min}`)
     }  
 };          
minus();
