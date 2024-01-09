function Disarium(num) {
    let str = num.toString(); // Convert num to a string to find its length
    let p = str.length; // Get the number of digits in the number
    let copy = num;
    let rem = 0;
    let res = 0;

    while (num != 0) {
        rem = num % 10;
        res += rem ** p;
        num = Math.trunc(num / 10);
        p-=1
    }

    return (copy === res);
}

console.log(Disarium(135 )); // Example usage
