let num=11
let copy=num
let rev=0
let rem=0
while(num!=0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.trunc(num/10)      
}
if(copy==rev) 
{
    console.log("palindrom")
}
else console.log("not palindrom")