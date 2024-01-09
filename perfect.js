function perfect(num)
{
    let add=0
    for (let fa=1;fa<num;fa+=1)
    {
        if (num%fa==0)
        {
            add+=fa
        }
    }
    return add==num
}   
console.log(perfect(6))
