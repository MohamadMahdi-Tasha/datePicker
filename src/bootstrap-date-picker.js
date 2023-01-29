// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item');
const mtDatePickerDayItemWithoutTodayAndSelected = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected)');
const mtDatePickerCurrentMonth = document.querySelectorAll('.mt-date-picker-current-month');
const mtDatePickerCurrentYear = document.querySelectorAll('.mt-date-picker-current-year');
const mtDatePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const mtDatePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn');

const todayDate = new Date();
const thisYear = todayDate.getFullYear();
const today = todayDate.getDate();
const thisMonthName = todayDate.toLocaleString('default', { month: 'long' })

mtDatePickerCurrentMonth.forEach(item => item.textContent = thisMonthName)
mtDatePickerCurrentYear.forEach(item => item.textContent = thisYear)
document.querySelectorAll(`.mt-date-picker-day-item:nth-of-type(${today})`).forEach(item => item.classList.add('mt-date-picker-today'))

mtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '-1'))

mtDatePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const parentOfToggler = toggler.parentElement;
        const openedDatePickerHolder = document.querySelector('.mt-date-picker-holder[data-opened]');
        const allMtDatePickerDayItem = parentOfToggler.querySelectorAll('.mt-date-picker-day-item');

        parentOfToggler.toggleAttribute('data-opened');

        if (openedDatePickerHolder !== null) {openedDatePickerHolder.removeAttribute('data-opened');}

        (parentOfToggler.getAttribute('data-opened') === null)
            ? allMtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '-1'))
            : allMtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '1'))
    })
})

mtDatePickerDayItemWithoutTodayAndSelected.forEach(item => {
    item.addEventListener('click', () => {
        const selectedItemsInParentOfClickedItem = item.parentElement.querySelector('.mt-date-picker-selected');

        item.classList.add('mt-date-picker-selected');
        if (selectedItemsInParentOfClickedItem !== null) {selectedItemsInParentOfClickedItem.classList.remove('mt-date-picker-selected')}
    })
})

mtDatePickerCancelBtn.forEach(btn => btn.addEventListener('click', () => btn.parentElement.parentElement.parentElement.removeAttribute('data-opened')))

mtDatePickerApplyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const datePickerHolderOfClickedBtn = btn.parentElement.parentElement.parentElement;
        const selectedDay = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-selected');

        if (selectedDay !== null) {
            datePickerHolderOfClickedBtn.removeAttribute('data-opened');
            datePickerHolderOfClickedBtn.setAttribute('data-selected-day', selectedDay.textContent);
            datePickerHolderOfClickedBtn.setAttribute('data-selected-month', datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-current-month').textContent);
            datePickerHolderOfClickedBtn.setAttribute('data-selected-year', datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-current-year').textContent);
        }
    })
})