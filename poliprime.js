function isPalindrome(num) {
    const numStr = num.toString();
    return numStr === numStr.split("").reverse().join("");
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

function isPaliprime(num) {
    return isPalindrome(num) && isPrime(num);
}

const num = 131;
const isNumPaliprime = isPaliprime(num);

console.log("Is it a paliprime number? " + isNumPaliprime); // Output: true
