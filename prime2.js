function isPrime(num) 
{
    if (num <= 1)
    {
        return "not prime";
    }
    for (let fa = 2; fa <= Math.sqrt(num); fa++) 
    {
        if (num % fa === 0) 
        {
            return "not prime";
        }
    }
    return "prime";
}

console.log(isPrime(12));
