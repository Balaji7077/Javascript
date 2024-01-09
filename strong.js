function factorial(num, fa = 1) {
    for (let x = 1; x <= num; x++) {
        fa *= x;
    }
    return fa;
}

function strong(num, copy, Sum = 0) {
    while (num !== 0) {
        const rem = num % 10;
        Sum += factorial(rem);
        num = Math.floor(num / 10);
    }
    return Sum === copy;
}

const isStrong = strong(145, 145);
console.log(isStrong); // Output: true
