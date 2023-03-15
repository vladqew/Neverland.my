

     ///Створюємо елемент div за допомогою метода createElement()
 var div = document.createElement('div');
 ///Змінюємо клас на wrapper
div.classList.add('wrapper');
///Виділяємо елемент body
const body = document.querySelector('body');
///Поміщаємо елемент div в body через метод body.appendChild()
body.appendChild(div)

///Створюємо заголовок 
const header = document.createElement('h1');
header.classList.add('header');
///Міняємо внутрішній текст через метод innerHTML або textContent
header.textContent = "DOM('Document Object Mode')"
///Кладеио h1 перед div with a class 'wrapper' методом insertAdjacentElement('options', element)
div.insertAdjacentElement('beforebegin' , header)


///Створюємо список і заповнємо його елементами за допомогою 
///інертних лапок(Це позволяє писати код багаторядково)
const ul = `
        <ul>
            <li>Один</li>
            <li>Два</li>
            <li>Три</li>
        </ul>
`;
/// Добавляємо наш список в div with a class "wrapper"
/// innerHTML показує або змінює  HTML зміст елемента
div.innerHTML = ul;

///Створюємо картинку
const img = document.createElement('img')
///Добавляєм атрибут src
img.src = 'https://lifehacker.ru/special/fujifilm/dist/static/img/5.2410a2d.jpg'
///Щоб добавити атрибут до елементу потрібно вказати його після елементу
img.width = 240;
img.classList.add('super');
img.alt = 'Super Man';
div.appendChild(img);


///Створюємо новий div з класом "pDiv" + 2 paragraph

const elemHtml = `
            <div class = 'pDiv'> 
                <p>Параграф 1 </p>
                <p>Параграф 2</p>
            </div>
`;
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin' , elemHtml);




var pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');

///Видаляємо перший парграф методом firstElementChild.remove()

pDiv.firstElementChild.remove();


// створюємо функцію generateAutoCards

const generateAutoCards = (brand, color, year) => {
    const curDate = new Date();
    const curYear = curDate.getFullYear();
    return `
        <div class="autoCard">
            <h2>${brand} ${year}</h2>
            <p>Автомобіль ${brand} - ${year} року. Вік авто - ${curYear - year} років.</p>
            <p>Цвет: ${color}</p>
            <button type='button' class='btn'>Видалити</button>
        </div>
    `;
}
                                              //Метод toUpperCase() при поверненні елемента рбить букви великими
//Create div with a class "autos"
const aDiv = document.createElement('div');
aDiv.classList.add = 'autos';


const carsList = [
    {brand: 'Tesla', year: 2015, color: 'red'},
    {brand: 'Lexus', year: 2016, color: 'white'},
    {brand: 'Nissan', year: 2012, color: 'black'},
]

const aDivHTML = carsList.map(car = () => {
    return generateAutoCards(car.brand , car.color , car.year) //Метод join() перетворює наш массив на красивий    
}).join('');                                    //HTML текст
aDiv.innerHTML = aDivHTML;

      
//Add before the div with a class 'wrapper'

div.insertAdjacentElement('beforebegin' , aDiv);

const buttons = document.querySelectorAll('.btn');

function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest('.autoCard').remove();
    // console.log(currentButton.parentElement)
}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', handleClick)
})














