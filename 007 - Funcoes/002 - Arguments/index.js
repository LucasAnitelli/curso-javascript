function soma(num1, num2) {
    if (typeof num1 === 'number' && num2 === 'number') {
        return num1 + num2;
    }

    return "Voce passou dados diferentes!";
}

console.log(soma(1, 5));