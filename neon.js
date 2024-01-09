let num=9
let add=0
let sq=num**2

while(sq!=0)
{
    rem=sq%10
    add+=rem
    sq=Math.trunc(sq/10)
}

if(add==num) console.log('Neon number')
else console.log('Not a neon number')

