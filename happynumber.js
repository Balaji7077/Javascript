let num=100
let res=0

while(num>9)
{
    while(num!=0)
    {
        rem=num%10
        res+=rem
        num=Math.trunc(num/10)
    }
    num=res
}

if(num==1) console.log('Happy number')
else console.log('Not a happy number')

