let num=9

let n=1

while(n**2<=num+1)
{
    if (n**2==num+1)
    {
        console.log('sunny number')
        break
    }
    n++
}

if(n**2!=num+1)
{
    console.log('not a sunny number')
}



