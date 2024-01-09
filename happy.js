function sumSquare(num, res = 0) {
    while (num !== 0) {
        const rem = num % 10;
        res += rem ** 2;
        num = Math.floor(num / 10);
    }
    return res;
}

function isHappy(num) {
    while (num > 9) {
        num = sumSquare(num);
    }
    return num === 1;
}

const result = isHappy(100);
console.log(result); // Output: true
