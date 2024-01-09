function toBinary(num) {
    let Bin = "";
    while (num !== 0) {
        const rem = num % 2;
        Bin = rem.toString() + Bin;
        num = Math.floor(num / 2);
    }
    return Bin;
}

console.log(toBinary(20)); // Output: "10100"
