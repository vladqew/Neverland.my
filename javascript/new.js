 const  buttons = document.querySelectorAll('.btn');
 const buttonTwo = document.querySelector('.btnTwo');

 var number = 0

 function handleClick() {
    number++
    console.log(number)
}





function handleClickTwo(){
    number++
    nameForm = document.querySelector('#form');
    userName = nameForm.value;
    console.log('Hello '  +  userName)
    if (number == 15) {
        console.log("Мені це надоїло")
        buttonTwo.removeEventListener('click' , handleClickTwo )
        number = 0
    }
}

//Додаємо обробник подій
buttons.forEach(button => {
    button.addEventListener('click' , handleClick)
})
buttonTwo.addEventListener('click' , handleClickTwo)



