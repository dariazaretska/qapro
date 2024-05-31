function isNaNCustom(value) {
    // Якщо значення не рівне самому собі, то це NaN
    return value !== value;
}

// Приклади використання функції
console.log(isNaNCustom(NaN));          // true
console.log(isNaNCustom(123));          // false
console.log(isNaNCustom('123'));        // false
console.log(isNaNCustom('a'));          // false
console.log(isNaNCustom(undefined));    // false
console.log(isNaNCustom(null));         // false
console.log(isNaNCustom(''));           // false
console.log(isNaNCustom(true));         // false
console.log(isNaNCustom(false));        // false