function pad(str, char, count, prepend) {
    // Перевірка довжини рядка 
    if (str.length >= count) {
        return str;
    }
    
    // розрахунок кількість символів, які необхідно додати
    let charsToAdd = count - str.length;
    let padString = char.repeat(charsToAdd);
    
    // Додаємо символи на початок або кінець рядка в залежності від bool знач 'prepend'
    if (prepend) {
        return padString + str;
    } else {
        return str + padString;
    }
}

// Приклади
console.log(pad('qwerty', '+', 10, true));  // "++++qwerty"
console.log(pad('qwerty', '+', 10, false)); // "qwerty++++"
console.log(pad('qwerty', '+', 5, true));   // "qwerty" (рядок не зміниться)
console.log(pad('qwerty', '+', 6, false));  // "qwerty" (рядок не зміниться)