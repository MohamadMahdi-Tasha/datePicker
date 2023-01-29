// Codes By Mahdi Tasha
// Variables
const datePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const buttonsInDataPicker = document.querySelectorAll('.mt-date-picker .mt-date-picker-main-side-grid button');
const datePickerDayItem = document.querySelectorAll('.mt-date-picker-main-side-grid .mt-date-picker-day-item:not(.mt-date-picker-today)');

buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))

datePickerDayItem.forEach(item => {
    item.addEventListener('click', () => {
        const selectedDayItem = document.querySelector('.mt-date-picker-main-side-grid .mt-date-picker-selected');

        item.classList.add('mt-date-picker-selected');
        selectedDayItem.classList.remove('mt-date-picker-selected')
    })
})

datePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const datePickerHolder = toggler.parentElement;

        datePickerHolder.toggleAttribute('data-opened')
        datePickerHolder.getAttribute('data-opened') === null
            ? buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))
            : buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '1'))

    })
})