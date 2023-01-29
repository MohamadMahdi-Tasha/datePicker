// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');

mtDatePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        toggler.parentElement.toggleAttribute('data-opened')
    })
})