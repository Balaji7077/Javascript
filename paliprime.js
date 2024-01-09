let num=11
let copy=num
let rev=0
let rem=0
let count=0

while(num!=0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.trunc(num/10)      
}

if(copy==rev) 
{
    for(fa=1;fa<=copy;fa++)
    {
        if(copy%fa==0)
        {
            count++
        }
    }
    if(count==2) console.log('Paliprime number')
    else console.log('Not a paliprime number')
}
else console.log('Not a paliprime number')
