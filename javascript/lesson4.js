let name = 'vlad'
let  nameTwo = name
name = 'sacha'
console.log(name)
console.log(nameTwo)

const students = ['Іван' , 'Vadym' , 'Vlad' , 'Vitalyk' , 'Natalya' , 'Serghiy'];
//Вказуємо чотири варіанти копіювання масивів в js 
// First
const newStudents = students.slice(); // Метод slice() копіює елементи в масиві
//Second
const superNewStudents = [].concat(students) //Метод [].concat('ваш масив')
 //Third                                     // копіює та повертає дані вашого масиву
const superPuperNewStudents = [...students] //Опратор spread повертає кожен елемент у вказаному масиві
// Fourth
const superPuperDuperNewStudents = Array.from(students) // метод Array.from() копіює елементи вказаного масиву
students.splice(5) //Метод splice() видаляє вказані елементи 


console.log(students)
console.log(newStudents)
console.log(superNewStudents)
console.log(superPuperNewStudents)
console.log(superPuperDuperNewStudents)


//Об'єкти 

const person = {
    name: 'Vadym',
    age: 14,
}
const personInformation = person
personInformation.age = 14

const fireman = Object.assign({} , person , {age:15 ,  hight:'1.59m'}) //За допомогою метода
//Object.assign({} , your metode , {options})
const copyperson = {...person} //за допомогою оператора spread
console.log(person)
console.log(fireman)
console.log(copyperson)


//Зауважте не можна зробити копію вміщених об'єктів потрбно
// використовувати бібліотеку lodash

const sacha = {
    name: 'sacha',
    age: 12,
    social: {
        facebook: 'Олександр Яцків',
        TikTok: 'alex56452'
    }
}
const newSacha = JSON.parse(JSON.stringify(sacha)) //Можем копіювати вложені об'єкти черезJSON.parse(JSON.stringify(Ваш об'єкт))
newSacha.social.facebook = 'Саша'
console.log(sacha)
console.log(newSacha)


