// Створюємо об'єкт, що представляє квітку з кількома властивостями
let flower = {
    name: "Rose",
    color: "Red",
    height: "50 cm",

    // Метод для виведення всіх властивостей об'єкта
    getInfo: function() {
        let info = '';
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== 'function') {
                info += `${key}: ${this[key]}\n`;
            }
        }
        console.log(info);
    }
};

// Викликаємо метод getInfo(), щоб вивести всі властивості об'єкта
flower.getInfo(); 

// Додаємо нову властивість до об'єкта
flower.fragrance = 'Honey';

// Викликаємо метод getInfo() знову, щоб переконатися, що нова властивість додана
flower.getInfo();