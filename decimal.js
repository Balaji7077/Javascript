let num = 20;
let pos = 1;
let Bin = 0;
let rem = 0;

while (num != 0) {
    rem = num % 2;
    Bin += rem * pos;
    num = Math.trunc(num / 2);
    pos *= 10;
}

console.log(Bin);
