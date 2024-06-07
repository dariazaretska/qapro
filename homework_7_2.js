// Створюємо об'єкт послуги агентства нерухомості
var realEstateServices = {
    "Продаж квартири": "15000 грн",
    "Оренда квартири": "5000 грн",
    "Оцінка нерухомості": "800 грн",

    // Метод для обчислення загальної вартості послуг
    price: function() {
        let total = 0;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
                total += parseFloat(this[key]);
            }
        }
        return total + ' грн';
    },

    // Метод для мінімальної вартості послуг
    minPrice: function() {
        let min = Infinity;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
                let price = parseFloat(this[key]);
                if (price < min) {
                    min = price;
                }
            }
        }
        return min + ' грн';
    },

    // Метод для повернення максимальної вартості послуг
    maxPrice: function() {
        let max = -Infinity;
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] === 'string' && this[key].includes('грн')) {
                let price = parseFloat(this[key]);
                if (price > max) {
                    max = price;
                }
            }
        }
        return max + ' грн';
    }
};

// Додаємо нову послугу до об'єкта
realEstateServices['Консультація'] = "300 грн";

// Викликаємо методи для обчислення та виведення вартостей
console.log("Загальна вартість: " + realEstateServices.price()); // Виведе загальну вартість
console.log("Мінімальна вартість: " + realEstateServices.minPrice()); // Виведе мінімальну вартість
console.log("Максимальна вартість: " + realEstateServices.maxPrice()); // Виведе максимальну вартість