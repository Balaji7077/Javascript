let num=6
let add=0

for (let fa=1;fa<num;fa++)
{
    if (num%fa==0) add+=fa
}

if (add==num) console.log('Perfect Number')
else console.log('Not a perfect Number')

