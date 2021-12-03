  
const firstNum = prompt('Enter the first digit');
const value = prompt('Enter the value(+-*/)');
const secondNum = prompt('Enter the second digit');


if (value === '*') {
    const multiply = Number(firstNum) * Number(secondNum);
    alert(multiply);

    if (value === '/') { 
    const division = Number(firstNum) / Number(secondNum);
    alert(division);

        if (value === '+') {
    const plus = Number(firstNum) + Number(secondNum);
    alert(plus);

            if (value === '-') {
    const minus = Number(firstNum) - Number(secondNum);
    alert(minus);
    
     
            }
        }
    }  
}
else {
    alert('you did not enter the required settings');
}


     
        
        




