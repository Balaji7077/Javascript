let num=71
let copy=num
let rev=0
let rem=0

let count1=0
let count2=0

while(num!=0)
{
    rem=num%10
    rev=rev*10+rem
    num=Math.trunc(num/10)      
}

if(copy!=rev)
{
    for(fa=1;fa<=copy;fa++)
    {
        if(copy%fa==0)
        {
            count1++
        }
    }
    if(count1==2) 
    {
        for(fa=1;fa<=copy;fa++)
        {
            if(copy%fa==0)
            {
                count2++
            }
        }
        if(count2==2) console.log('Emirp number')
        else console.log('Not a prime number') 
    }
    else console.log('Not an emirp number')
}
else console.log('Not an emirp number')

