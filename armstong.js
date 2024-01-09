function Armstrong(num) {
    let str = num.toString();
    let p = str.length; 
    let copy = num;
    let rem = 0;
    let res = 0;

    while (num != 0) {
        rem = num % 10;
        res += rem ** p;
        num = Math.trunc(num / 10);
    }

    return (copy === res);
}

console.log(Armstrong(153)); 
