// Palindrome Checker
const checkPalindrome = (string) => {
    // ignore case
    let a = string.toLowerCase();
    // regex to match special characters and whitespace
    let b = /[(\W)(\s)(_)]/g;
    // replaces special characters and whitespace
    string = a.replace(b, '');
  
    const reverse = string.split('').reverse().join('');
    const checkPalindrome = (string === reverse);

    // use ternary operator to evaluate whether `checkPalindrome` is true and provides matching result
    const result = checkPalindrome ? `${string} is a palindrome` : `${string} is not a palindrome`;

    return result;
};
