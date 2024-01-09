let num= 123
let sum=0
let product=1
let rem=0
while (num!=0)
{
    rem=num%10
    sum+=rem
    product*=rem
    num=Math.trunc(num/10) 
}
if (sum===product)
{
    console.log("spy number")
}
else console.log("not a spy number")