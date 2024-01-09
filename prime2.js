let num=12

if (num>1)
{
    let count=0
    for (let fa=2;fa<=Math.trunc(num/2);fa++){
        
        if (num%fa===0){
            console.log('not prime');
            break
        }
        count+=1
    }
    if (Math.trunc(num/2)-1===count){
        console.log('prime');
    }
}
else{
    console.log('not prime');
}
