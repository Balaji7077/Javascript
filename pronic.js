function pronic(num)
{
    let n=1
    while(n*(n+1)<=num)
    {
        if (n*(n+1)==num)
        {
            return true
            break
        }
        n+=1
    }
    return False
}
console.log(pronic(12))