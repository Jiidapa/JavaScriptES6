let aboutEye = {
    name: 'jidapa pattanang',
    nickname: 'eye',
    graduated: 'cs kku',
    age: 22,
    address: {
        street: 'nonsi',
        soi: 'nonsi14',
        province: 'bangkok'
    }
}

const {name, nickname, graduated, address, address:{street, soi, province}} = aboutEye;

console.log(`Fullname = ${name}
Nickname = ${nickname}
Graduated = ${graduated}
Address = soi ${soi}, street ${street}, province ${province}`)