function isAutomorphic(num) {
    return num === (num ** 2) % Math.pow(10, num.toString().length);
}
const result = isAutomorphic(76);
console.log(result); // Output: true
