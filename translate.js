

let inputNumber = 13256;

let numbersName = ['one', 'two', 'three', 'fore', 'five', 'sex', 'seven', 'eigh', 'nine'];
let numbersName1 = ['eleven', ' twelve', 'thirteen', 'fourteen', 'fifteen', 'sexteen', 'seventeen', 'eighteen', 'nineteen']; // десятки
let numbersName2 = ['', 'twenty', ' theerty', 'forty', 'fifty', 'sexty', 'seventy', 'eighty', 'ninety']; // 

let outputNumber;
for (let i = inputNumber.toString().length; i > 0; i--) {
    switch (i) {
        case 1: // if 9
            outputNumber = getNameNumber1(inputNumber);
        case 2:// if 99
            outputNumber = getNameNumber2(inputNumber);
            break;
        case 3: // if 999
            outputNumber = getNameNumber3(inputNumber);
            break;
        case 4:// if 9999
            outputNumber = getNameNumber4(inputNumber);
            break;
        case 5: // if 99999
            outputNumber = getNameNumber5(inputNumber);
            break;
        case 6: // if 999999
            outputNumber = getNameNumber6(inputNumber);
            break;
        
    }
}


// if xxxxxx
function getNameNumber6(number) {
    let firstPart = parseInt(number.toString().substring(0, 4));
    let secondPart = parseInt(number.toString().substring(4, number.toString().length));
    return getNameNumber3(firstPart) + ' thausenthousand ' + getNameNumber3(secondPart);
}

// if xxxxx
function getNameNumber5(number) {
    let firstPart = parseInt(number.toString().substring(0, 3));
    let secondPart = parseInt(number.toString().substring(3, number.toString().length));
    return getNameNumber2(firstPart) + ' thausenthousand ' + getNameNumber3(secondPart);
}

//if xxxx 
function getNameNumber4(number) {
    let firstPart = parseInt(number.toString().substring(0, 2));
    let secondPart = parseInt(number.toString().substring(2, number.toString().length));
    return getNameNumber(firstPart) + ' thausenthousand ' + getNameNumber3(secondPart);
}

// if xxx 
function getNameNumber3(number) {
    let firstPart = parseInt(number.toString()[0]);
    let secondPart = parseInt(number.toString().substring(1, number.toString().length));
    return numbersName[firstPart] + ' hundred ' + getNameNumber2(secondPart);
}

// if xx
function getNameNumber2(number) {
    let firstPart = parseInt(number.toString()[0]);
    let secondPart = parseInt(number.toString().shift());

    if (number > 10 && number < 20) {
        return numbersName1[secondPart];
    } else {
        return numbersName2[firstPart] + ' ' + getNameNumber(secondPart);
    }
}

// if x
function getNameNumber1(numb) {
    return numb == 0 ? '' : numbersName[numb];
}