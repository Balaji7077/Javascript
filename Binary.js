let Bin = 10110;
let res = 0;
let pos = 1;
let rem = 0;

while (Bin != 0) {
    rem = Bin % 10;
    res += pos * rem;
    Bin = Math.trunc(Bin / 10);
    pos *= 2;
}

console.log(res);
