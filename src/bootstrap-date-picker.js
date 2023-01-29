// Codes By Mahdi Tasha
// Variables
const datePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const buttonsInDataPicker = document.querySelectorAll('.mt-date-picker .mt-date-picker-main-side-grid button');
const datePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today)');

buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))

datePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const datePickerHolder = toggler.parentElement;

        datePickerHolder.toggleAttribute('data-opened')
        datePickerHolder.getAttribute('data-opened') === null
            ? buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))
            : buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '1'))

    })
})