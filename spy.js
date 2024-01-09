function spy(num)
{
    let product = 1
    let res = 0
    let rem = 0
    while (num!=0)
    {
        rem = num % 10
        res += rem
        product *= rem
        num = Math.trunc(num / 10)
    }
    return (res == product)
}
console.log(spy(123))