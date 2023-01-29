// Codes By Mahdi Tasha
// Variables
const datePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const buttonsInDataPicker = document.querySelectorAll('.mt-date-picker .mt-date-picker-main-side-grid button');
const datePickerDayItem = document.querySelectorAll('.mt-date-picker-main-side-grid .mt-date-picker-day-item:not(.mt-date-picker-today)');
const datePickerCurrentMonth = document.querySelector('.mt-date-picker-current-month');
const datePickerCurrentYear = document.querySelector('.mt-date-picker-current-year');
const datePickerDayItemsAndNotDisabledOnes = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary)');
const datePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const datePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn-btn');

const today = new Date();

buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))
datePickerCurrentMonth.textContent = today.toLocaleString('default', { month: 'long' });
datePickerCurrentYear.textContent = today.getFullYear();
datePickerDayItemsAndNotDisabledOnes[today.getDate() - 1].classList.add('mt-date-picker-today');

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


datePickerCancelBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataPickerHolder = btn.parentElement.parentElement.parentElement;
        dataPickerHolder.removeAttribute('data-opened')
    })
})