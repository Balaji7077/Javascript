function Palindrome(num) {
    let copy = num;
    let rev = 0;
    let rem = 0;

    while (num !== 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.trunc(num / 10);
    }

    return copy === rev;
}

console.log(Palindrome(121)); // true
