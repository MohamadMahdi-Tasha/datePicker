// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item');
const mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected, .mt-date-picker-text-secondary)');
const mtDatePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const mtDatePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn');
const mtMonthSelectBtn = document.querySelectorAll('.mt-month-select-btn');
const mtYearSelectBtn = document.querySelectorAll('.mt-year-select-btn');
const mtDatePickerPrevMonthBtn = document.querySelectorAll('.mt-date-picker-prev-month-btn');
const mtDatePickerPrevDayBtn = document.querySelectorAll('.mt-date-picker-prev-day-btn');
const mtDatePickerNextMonthBtn = document.querySelectorAll('.mt-date-picker-next-month-btn');
const mtDatePickerNextDayBtn = document.querySelectorAll('.mt-date-picker-next-day-btn');

const todayDate = new Date();
const thisYear = todayDate.getFullYear();
const today = todayDate.getDate();
const thisMonthName = todayDate.toLocaleString('default', { month: 'long' })
let monthToSet;

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

mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes.forEach(item => {
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
            // datePickerHolderOfClickedBtn.setAttribute('data-selected-day', selectedDay.textContent);
            // datePickerHolderOfClickedBtn.setAttribute('data-selected-month', datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-current-month').textContent);
            // datePickerHolderOfClickedBtn.setAttribute('data-selected-year', datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-current-year').textContent);
        }
    })
})

mtMonthSelectBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const mtDatePickerDayMain = btn.parentElement.parentElement;
        const mtDatePickerMonthMain = mtDatePickerDayMain.parentElement.querySelector('.mt-date-picker-month-main');

        mtDatePickerMonthMain.classList.add('mt-date-picker-main-showing')
        mtDatePickerDayMain.classList.remove('mt-date-picker-main-showing')
    })
})

mtYearSelectBtn.forEach(btn => {
    btn.addEventListener('click', () =>  {
        const mtDatePickerMonthMain = btn.parentElement.parentElement;
        const mtDatePickerYearMain = mtDatePickerMonthMain.parentElement.querySelector('.mt-date-picker-year-main');

        mtDatePickerYearMain.classList.add('mt-date-picker-main-showing')
        mtDatePickerMonthMain.classList.remove('mt-date-picker-main-showing')
    })
})

mtDatePickerNextMonthBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const mtDatePickerDayMonthMainActive = btn.parentElement.parentElement.parentElement.querySelector('.mt-date-picker-day-month-main-active');
        const nextMonth = mtDatePickerDayMonthMainActive.nextElementSibling;
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (nextMonth !== null) {
            nextMonth.classList.add('mt-date-picker-day-month-main-active');
            mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

            monthToSet = monthNames[Array.prototype.slice.call(nextMonth.parentElement.children).indexOf(nextMonth)], nextMonth.classList
        }
    })
})