let num=12

let n=1

while(n*(n+1)<=num)
{
    if (n*(n+1)==num)
    {
        console.log('pronic number')
        break
    }
    n++
}

if(n*(n+1)!=num)
{
    console.log('not a pronic number')
}