function askNumbers() {
    const firstNum = +prompt('Enter the first digit');
    const value = prompt('Enter the value(+-*/)');
    const secondNum = +prompt('Enter the second digit'); 
    const example = (`${firstNum} ${value} ${secondNum} =`);

    if (value === '*') {
        console.log(example, multiply(firstNum, secondNum));
    }else if (value === '/') {
        console.log (example, division(firstNum, secondNum));
    }else if (value === '+') {
        console.log(example, plus(firstNum, secondNum));
    }else if (value === '-') {
        console.log(example, minus(firstNum, secondNum));
    }else {
        console.log('You entered incorrect operation')
    }
}

askNumbers();



function multiply(first, second) {
    return first * second;
}


function division(first, second) {
    return first / second;
}


function plus(first, second) {
    return first + second;
}


function minus(first, second) {
    return first - second;
}
        




