function sumNonMultiplesOf3() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
}

// Приклад
sumNonMultiplesOf3();