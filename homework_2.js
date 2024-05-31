const prompt = require('prompt');

// Функція для отримання правильного слова для років
function getYearWord(years) {
    let lastDigit = years % 10;
    let lastTwoDigits = years % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return "років";
    } else if (lastDigit === 1) {
        return "рік";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return "роки";
    } else {
        return "років";
    }
}

// Основна функція для зчитування промту і виведення слова
function main() {
    prompt.start();

    prompt.get(['years'], function (err, result) {
        if (err) {
            console.error(err);
            return;
        }

        let years = Number(result.years);
        if (isNaN(years) || years < 0) {
            console.log("Будь ласка, введіть додатне число.");
        } else {
            let yearWord = getYearWord(years);
            console.log('${years} ${yearWord}');
        }
    });
}

// Виклик
main();