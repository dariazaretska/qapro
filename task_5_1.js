//перший варiант
function drawTriangle(height, char) {
    for (let i = 1; i <= height; i++) {
        console.log(char.repeat(i));
    }
    return ""; //додала такий ретьорн, щоб не виводився undefined в консоль в кiнцi
}

// Приклад 
console.log(drawTriangle(6, '*'));

//дпугий варiант
function drawTriangleRecursive(height, char, current = 1) {
    if (current > height) {
        return ""; //додала такий ретьорн, щоб не виводився undefined в консоль в кiнцi
    }
    console.log(char.repeat(current));
    drawTriangleRecursive(height, char, current + 1);
}

// Приклад
drawTriangleRecursive(3, '*');