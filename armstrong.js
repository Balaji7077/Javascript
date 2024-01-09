let num=153
let str=num.toString()
let p=str.length
let copy=num
let add=0

while(num!=0)
{ 
    rem=num%10
    add+=rem**p
    num=Math.trunc(num/10)
}

if(add==copy) console.log('Armstrong number')
else console.log('Not an armstrong number')

