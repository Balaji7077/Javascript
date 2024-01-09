let num=145
let res=0
let copy=num

while(num!=0)
{
    rem=num%10
    let fact=1
    for(let i=1;i<=rem;i++)
    {
        fact*=i
    }
    res+=fact
    num=Math.trunc(num/10)
}

if(res==copy) console.log('Strong number')
else console.log('Not a strong number')


