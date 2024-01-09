let num = 12;
let copy = num;
let add = 0;
let rem = 0;

while (num !== 0) 
{
    rem = num % 10;
    add += rem;
    num = Math.trunc(num / 10);
}

if (copy % add === 0) 
{
    console.log("Niven number");
} else 
{
    console.log("Not a Niven number");
}
