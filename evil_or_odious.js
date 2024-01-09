function isEvil(num) {
    let res = 0;
    while (num !== 0) {
        const rem = num % 2;
        res += rem;
        num = Math.floor(num / 2);
    }
    return res % 2 === 0;
}

const isNumEvil = isEvil(27);
console.log(isNumEvil); // Output: true
