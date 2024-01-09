function toDecimal(Bin) {
    let dec = 0;
    let p = 0;
    while (Bin !== 0) {
        const rem = Bin % 10;
        dec += rem * Math.pow(2, p);
        Bin = Math.floor(Bin / 10);
        p++;
    }
    return dec;
}

console.log(toDecimal(10100)); // Output: 20
