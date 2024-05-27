function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

// Приклади
console.log(pow(2, 4));  // 16
console.log(pow(5, 4));  // 625
console.log(pow(2, 0));  // 1
console.log(pow(9, 2));  // 81