function findValueByKey(company, companyName) {
    if (company.name === companyName) {
        return company;
    }

    // Перевірка в полі clients
    if (company.clients) {
        for (let client of company.clients) {
            const result = findValueByKey(client, companyName);
            if (result) {
                return result;
            }
        }
    }

    // Перевірка в полі partners
    if (company.partners) {
        for (let partner of company.partners) {
            const result = findValueByKey(partner, companyName);
            if (result) {
                return result;
            }
        }
    }

    return null;
}

// Приклад 
const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

console.log(findValueByKey(company, 'Клієнт 1.2'));  // Знайде 'Клієнт 1.2'
console.log(findValueByKey(company, 'Клієнт 1.2.3'));  // Знайде 'Клієнт 1.2.3'
console.log(findValueByKey(company, 'Клієнт 2'));  // Знайде 'Клієнт 2'
console.log(findValueByKey(company, 'fhggjd')); // Поверне null