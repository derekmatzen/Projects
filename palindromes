// Palindrome Checker

function palindrome(str) {
  var a = str.toLowerCase();            // ignore case
  var b = /[(\W)(\s)(_)]/g;             // regex to match special characters
  var c = a.replace(b, '');             // replace special characters

  for (var i = 0; i < c.length; i++) {
    if (c[i] != c[c.length - 1 - i]) {  // if current var does not match inverse index
      return false;
    }
  }

  return true;
}

palindrome("Racecar");
