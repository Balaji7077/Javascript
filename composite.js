let num=12
let count=0
for(let fa=1;fa<=num;fa+=1)
{
    if(num%fa==0)
    {
        count+=1
    }
}
    if (count>2){
        console.log("composite")}
    else {
        console.log('not composite')
    }