function composite(num)
{
    let count = 0;
    for (let fa = 1; fa <= num; fa++)
     {
        if (num % fa == 0)
        {
            count += 1;
        }
    }
    return count > 2;
}

console.log(composite(12));
