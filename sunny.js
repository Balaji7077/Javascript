function sunny(num)
{
    let n=1
    while(n**2<=num+1)
    {
        if (n**2==num+1)
        {
            return true
            break
        }
        n+=1
    }
    return(n**2!=num+1)
}
console.log(sunny(20))