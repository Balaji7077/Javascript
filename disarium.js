let num=89
let str=num.toString()
let p=str.length
let copy=num
let add=0

while(num!=0)
{
    rem=num%10
    add+=rem**p
    num=Math.trunc(num/10)
    p--
}

if(add==copy) console.log('Disarium number')
else console.log('Not a disarium number')

