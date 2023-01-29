// Codes By Mahdi Tasha
// Variables
const datePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const buttonsInDataPicker = document.querySelectorAll('.mt-date-picker .mt-date-picker-main-side-grid button');
const datePickerDayItem = document.querySelectorAll('.mt-date-picker-main-side-grid .mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected)');
const datePickerCurrentMonth = document.querySelector('.mt-date-picker-current-month');
const datePickerCurrentYear = document.querySelector('.mt-date-picker-current-year');
const datePickerDayItemsAndNotDisabledOnes = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary)');
const datePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const datePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn');

const today = new Date();
const nameOfCurrentMonth = today.toLocaleString('default', { month: 'long' })

buttonsInDataPicker.forEach(button => button.setAttribute('tabindex', '-1'))
datePickerCurrentMonth.textContent = nameOfCurrentMonth;
datePickerCurrentYear.textContent = today.getFullYear();
datePickerDayItemsAndNotDisabledOnes[today.getDate() - 1].classList.add('mt-date-picker-today');

if (nameOfCurrentMonth === 'April' ||
    nameOfCurrentMonth === 'June' ||
    nameOfCurrentMonth === 'September' ||
    nameOfCurrentMonth === 'November')
{
    const thirtyOneDayOfMonthItem = document.querySelector('.mt-date-picker-day-item:nth-of-type(31)');
    thirtyOneDayOfMonthItem.remove();
}

window.addEventListener('keydown', (event) => {
    const clickedKey = event.key.toLowerCase();
    const openedDatePickerHolders = document.querySelectorAll('.mt-date-picker-holder[data-opened]');

    if (clickedKey === 'escape') {openedDatePickerHolders.forEach(holder => holder.removeAttribute('data-opened'))}
})

datePickerDayItem.forEach(item => {
    item.addEventListener('click', () => {
        const selectedDayItem = document.querySelector('.mt-date-picker-main-side-grid .mt-date-picker-day-item.mt-date-picker-selected');

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

datePickerApplyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const dataPickerHolder = btn.parentElement.parentElement.parentElement;
        const selectedYear = datePickerCurrentYear.textContent;
        const selectedMonth = datePickerCurrentMonth.textContent;
        const selectedDay = document.querySelector('.mt-date-picker-selected').textContent;
        const selectedDate = `${selectedYear}/${selectedMonth}/${selectedDay}`


        dataPickerHolder.removeAttribute('data-opened')
        dataPickerHolder.setAttribute('data-selected-date', `${selectedYear}/${new Date(selectedDate).getMonth() + 1}/${selectedDay}`)
    })
})