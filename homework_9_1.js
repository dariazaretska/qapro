function letsShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // Вибираємо випадковий індекс від 0 до i
        [arr[i], arr[j]] = [arr[j], arr[i]];  // Міняємо місцями елементи arr[i] і arr[j]
    }
}

// Приклад
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letsShuffle(arr);
console.log(arr);