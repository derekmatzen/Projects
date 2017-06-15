// Palindrome Checker
const checkPalindrome = (string) => {
    let a = string.toLowerCase();
    let b = /[(\W)(\s)(_)]/g;
    string = a.replace(b, '');
  
    const reverse = string.split('').reverse().join('');
    const checkPalindrome = (string === reverse);

    const result = checkPalindrome ? `${string} is a palindrome` : `${string} is not a palindrome`;

    return result;
};
