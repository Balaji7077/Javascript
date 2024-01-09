let num=18
let res=0
let rem=0

while(num!=0)
{
    rem=num%2
    res+=rem
    num=Math.trunc(num/2)
}

if(res%2==0) console.log('Evil number')
else console.log('Odius number')