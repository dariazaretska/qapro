function checkProbabilityTheory(count) {
    // Змінні парних та непарних чисел
    let evenCount = 0;
    let oddCount = 0;

    // Генеруємо задану кількість випадкових чисел
    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число в діапазоні від 100 до 1000
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        
        // Перевіряємо, чи є число парним або непарним
        if (randomNumber % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислюємо відсоткове співвідношення парних та непарних чисел
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    // Виводимо результати
    console.log('Кількість згенерованих чисел:', count);
    console.log('Парних чисел:', evenCount);
    console.log('Непарних чисел:', oddCount);
    console.log('Відсоток парних чисел:', evenPercentage.toFixed(2)); //залишила 2 decimals y %
    console.log('Відсоток непарних чисел:', oddPercentage.toFixed(2)); //залишила 2 decimals y %
}

// Приклад використання функції
checkProbabilityTheory(1000);