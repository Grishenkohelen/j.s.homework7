// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function User(id,surname ,name ,email ,phone  ) {
    this.id = id;
    this.surname = surname;
    this.name = name;
    this.email = email ;
    this.phone = phone;
}

// // створити пустий масив, наповнити його 10 об'єктами new User(....)

 const userArr = [
    new User(6, 'Андреев', 'Кирилл', 'gmail@gttttgnnnnty','+380851266668'),
    new User(8, 'Баландина',  'Александра','gmail@gtnnnngty','+3808515588'),
    new User(3, 'Воронин',  'Николай','gmail@gttfdfgfty' , '+38085126388'),
    new User(4, 'Ганина',  'Елена','gmail@gttttkjty' , '+3808512288'),
    new User(10, 'Дамрин',  'Алексей','gmail@gsssstkjty','+3808577688' ),
    new User(2, 'Ежова',  'Наталия','gmail@gtwwwwkjty','+380851111688' ),
    new User(7, 'Ефремов',  'Игорь', 'gmail@gtccccjty','+3808512988'),
    new User(1, 'Иванова',  'Екатерина','gmail@gbbbbbkjty','+38022222488' ),
    new User(9, 'Кабанов',  'Дмитрий', 'gmail@gqqqkjty','+3808514488'),
    new User(5, 'Ляпина',  'Ольга', 'gmail@gtssskjty','+3808513338')

];
console.log(userArr);



// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let filteredUsers = userArr.filter((value) => {
    if (value.id % 2 === 0){
        return value
    }});
console.log(filteredUsers);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

userArr.sort((a,b) => a.id -b.id);
console.log(userArr);

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, surname,  name, email, phone, order ){
        this.id = id;
        this.surname = surname;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArray = [
    new Client(1, 'korotkova', 'varia', 'gmail@fhjkkjjd.com', '+3876557987',['milk', 'tie', 'kava']),
    new Client(2, 'rutanova', 'ira', 'gmail@hygyfygk.com', '+38654336789', ['cucumber', 'tomato']),
    new Client(3, 'tolkov', 'palina', 'gmail@huhjkk.com', '+38007654678', ['miet', 'chocolate' , 'pasta', 'ice cream']),
    new Client(4, 'durova', 'frosia', 'gmail@kjfhhdkh.com', '+3898765456789', ['chocolate' ]),
    new Client(5, 'fura', 'roman', 'gmail@fhfdg.com', '+38654356789', ['cucumber', 'tomato','miet', 'chocolate' , 'pasta']),
    new Client(6, 'durova', 'frosia', 'gmail@kjfhhdkh.com', '+3898765456789', ['chocolate' , 'pasta', 'ice cream']),
    new Client(7, 'durova', 'frosia', 'gmail@kjfhhdkh.com', '+3898765456789', ['chocolate' , 'pasta', 'ice cream', 'cucumber', 'tomato', 'miet']),
    new Client(8, 'tolkova', 'alina', 'gmail@huhjkk.com', '+38987654678', ['rice',  'beans', 'flour', 'eggs']),
    new Client(9, 'korotkova', 'varia', 'gmail@fhjkkjjd.com', '+3876557987', ['rice', 'beans', 'flour']),
    new Client(10, 'durova', 'frosia', 'gmail@kjfhhdkh.com', '+3898765456789', ['chocolate', 'pasta'])
];
console.log(clientArray);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSort = clientArray.sort((a, b) =>a.order.length - b.order.length);

console.log(clientSort);