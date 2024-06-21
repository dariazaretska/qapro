var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    }
];

function getTrustedEmails(arr) {
    const trustedEmails = [];
    const emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;
    
    arr.forEach(obj => {
        if (emailRegex.test(obj.email)) {
            trustedEmails.push(obj.email);
        }
    });
    
    return trustedEmails;
}

const trustedEmails = getTrustedEmails(arr);
console.log(trustedEmails);