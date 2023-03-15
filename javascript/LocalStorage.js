const wrapper = document.querySelector('.wrapper');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.buttonLogin-popun');
const iconClose = document.querySelector('.icon-close');


RegisterLink.addEventListener('click' , () => {
    wrapper.classList.add('active')
})
LoginLink.addEventListener('click' , () => {
    wrapper.classList.remove('active')
})

btnPopup.addEventListener('click' , () => {
    wrapper.classList.add('active-popun')
})
iconClose.addEventListener('click' , () => {
    wrapper.classList.remove('active-popun')
})