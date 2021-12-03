  
const firstNum = prompt('Enter the first digit');
const value = prompt('Enter the value(+-*/)');
const secondNum = prompt('Enter the second digit');


if (value === '*') {
const multiply = Number(firstNum) * Number(secondNum);
console.log(` ${firstNum} * ${secondNum} = ${multiply}`);
}
if (value === '/') { 
const division = Number(firstNum) / Number(secondNum);
console.log(` ${firstNum} / ${secondNum} = ${division}`);
}
if (value === '+') {
const plus = Number(firstNum) + Number(secondNum);
console.log(` ${firstNum} + ${secondNum} = ${plus}`);
}
if (value === '-') { 
const minus = Number(firstNum) - Number(secondNum);
console.log(` ${firstNum} - ${secondNum} = ${minus}`);
}   
     
            
        
     




     
        
        




