const regex = /^(?=.*.{6,})(?!.*[Aa]).*$/;

const testStrings = [
    'bcde',   // Не підходить (менше 6 символів)
    '123456',  // Підходить
    'bcdefg',  // Підходить
    'Abcdef',  // Не підходить (містить "A")
    'aaaaaa'   // Не підходить (містить "a")
];

testStrings.forEach(str => {
    console.log(`${str}: ${regex.test(str)}`);
});