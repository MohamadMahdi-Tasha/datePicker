// Codes By Mahdi Tasha
// Variables
const datePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const buttonsInDataPicker = document.querySelectorAll('.mt-date-picker .mt-date-picker-main-side-grid button');

buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))

datePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const datePicker = toggler.parentElement;

        datePicker.toggleAttribute('data-opened');
        buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '1'))
    })
})