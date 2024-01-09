function isTriomorphic(num) {
    return num === (Math.pow(num, 3) % Math.pow(10, num.toString().length));
}

const result = isTriomorphic(4);
console.log(result); // Output: true
