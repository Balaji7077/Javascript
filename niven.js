function niven(num)
{
    let copy = num;
    let add = 0;
    let rem = 0;
    while(num!=0)
    {
        rem = num % 10;
        add += rem;
        num = Math.trunc(num / 10);
    }
    return (copy % add === 0) 
}   
console.log(niven(12))