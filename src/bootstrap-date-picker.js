// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected, .mt-date-picker-text-secondary)');
const mtDatePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const mtDatePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn');
const mtMonthSelectBtn = document.querySelectorAll('.mt-month-select-btn');
const mtYearSelectBtn = document.querySelectorAll('.mt-year-select-btn');
const mtDatePickerPrevMonthBtn = document.querySelectorAll('.mt-date-picker-prev-month-btn');
const mtDatePickerNextMonthBtn = document.querySelectorAll('.mt-date-picker-next-month-btn');
const mtDatePickerCurrentMonth = document.querySelectorAll('.mt-date-picker-current-month');
const mtDatePickerCurrentYear = document.querySelectorAll('.mt-date-picker-current-year');
const mtDatePickerMonthItem = document.querySelectorAll('.mt-date-picker-month-item');
const mtDatePickerYearItem = document.querySelectorAll('.mt-date-picker-year-item');
const mtDatePickerPrevGridBtn = document.querySelectorAll('.mt-date-picker-prev-grid-btn');
const mtDatePickerNextGridBtn = document.querySelectorAll('.mt-date-picker-next-grid-btn');

mtDatePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const parentOfToggler = toggler.parentElement;
        const openedDatePickerHolder = document.querySelector('.mt-date-picker-holder[data-opened]');

        const today = new Date();
        const thisMonth = today.getMonth() + 1;
        const thisYear = today.getFullYear();
        const todayDate = today.getDate();
        const thisMonthName = today.toLocaleString('default', { month: 'long' });
        const dayMonthItemToActivate = parentOfToggler.querySelector(`.mt-date-picker-day-month-main-holder > .mt-date-picker-day-month:nth-of-type(${thisMonth})`)
        const dayItemToActivate = dayMonthItemToActivate.querySelector(`.mt-date-picker-day-item:not(.mt-date-picker-text-secondary):nth-of-type(${todayDate})`);
        const allMtDatePickerYearItems = parentOfToggler.querySelectorAll('.mt-date-picker-year-main-side-grid-holder > .mt-date-picker-year-main-side-grid > .mt-date-picker-year-item')
        const monthItemToActivate = parentOfToggler.querySelector(`.mt-date-picker-month-main-side-grid > .mt-date-picker-month-item:nth-of-type(${thisMonth})`)
        let yearGridToActivate;

        parentOfToggler.toggleAttribute('data-opened');

        allMtDatePickerYearItems.forEach(item => {if (item.textContent === `${thisYear}`) {yearGridToActivate = item}})

        dayMonthItemToActivate.classList.add('mt-date-picker-day-month-main-active');
        dayItemToActivate.classList.add('mt-date-picker-selected');
        yearGridToActivate.parentElement.classList.add('mt-date-picker-year-main-side-grid-shown')
        yearGridToActivate.classList.add('mt-date-picker-year-item-selected');
        monthItemToActivate.classList.add('mt-date-picker-month-item-selected')

        mtDatePickerCurrentMonth.forEach(item => item.textContent = thisMonthName)
        mtDatePickerCurrentYear.forEach(item => item.textContent = thisYear)

        if (openedDatePickerHolder !== null) {openedDatePickerHolder.removeAttribute('data-opened');}
    })
})

mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes.forEach(item => {
    item.addEventListener('click', () => {
        const selectedItemsInParentOfClickedItem = item.parentElement.querySelector('.mt-date-picker-selected');

        if (selectedItemsInParentOfClickedItem !== null) {
            selectedItemsInParentOfClickedItem.classList.remove('mt-date-picker-selected')
        }

        item.classList.add('mt-date-picker-selected');
    })
})

mtDatePickerCancelBtn.forEach(btn => btn.addEventListener('click', () => btn.parentElement.parentElement.parentElement.removeAttribute('data-opened')))

mtDatePickerApplyBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const datePickerHolderOfClickedBtn = btn.parentElement.parentElement.parentElement;
        const selectedDay = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-day-item.mt-date-picker-selected');
        const selectedMonth = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-month-item.mt-date-picker-month-item-selected');
        const selectedYear = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-year-item.mt-date-picker-year-item-selected');

        datePickerHolderOfClickedBtn.removeAttribute('data-opened');
        datePickerHolderOfClickedBtn.setAttribute('data-selected-day', selectedDay.textContent);
        datePickerHolderOfClickedBtn.setAttribute('data-selected-month', selectedMonth.textContent);
        datePickerHolderOfClickedBtn.setAttribute('data-selected-year', selectedYear.textContent);
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
        const activeDayItemInCurrentMonth = mtDatePickerDayMonthMainActive.querySelector('.mt-date-picker-day-item.mt-date-picker-selected')
        const dayItemsInActiveMonth = mtDatePickerDayMonthMainActive.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');
        const dayItemsInNextMonth = nextMonth.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');

        if (nextMonth !== null) {
            nextMonth.classList.add('mt-date-picker-day-month-main-active');
            mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

            if (activeDayItemInCurrentMonth !== null) {activeDayItemInCurrentMonth.classList.remove('mt-date-picker-selected')}
        }
    })
})

mtDatePickerPrevMonthBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const mtDatePickerDayMonthMainActive = btn.parentElement.parentElement.parentElement.querySelector('.mt-date-picker-day-month-main-active');
        const prevMonth = mtDatePickerDayMonthMainActive.previousElementSibling;
        const activeDayItemInCurrentMonth = mtDatePickerDayMonthMainActive.querySelector('.mt-date-picker-day-item.mt-date-picker-selected')
        const dayItemsInActiveMonth = mtDatePickerDayMonthMainActive.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');
        const dayItemsInPrevMonth = prevMonth.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');

        if (prevMonth !== null) {
            prevMonth.classList.add('mt-date-picker-day-month-main-active');
            mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

            if (activeDayItemInCurrentMonth !== null) {activeDayItemInCurrentMonth.classList.remove('mt-date-picker-selected')}
        }
    })
})

mtDatePickerMonthItem.forEach(item => {
    item.addEventListener('click', () => {
        const mtDatePickerMonthMain = item.parentElement.parentElement;
        const mtDatePickerDayMain = mtDatePickerMonthMain.previousElementSibling
        const selectedDateMonth = item.parentElement.querySelector('.mt-date-picker-month-item-selected');

        if (selectedDateMonth !== null) {selectedDateMonth.classList.remove('mt-date-picker-month-item-selected')}
        item.classList.add('mt-date-picker-month-item-selected');
        mtDatePickerMonthMain.classList.remove('mt-date-picker-main-showing')
        mtDatePickerDayMain.classList.add('mt-date-picker-main-showing')

    })
})

mtDatePickerYearItem.forEach(item => {
    item.addEventListener('click', () => {
        const mtDatePickerYearMain = item.parentElement.parentElement.parentElement;
        const mtDatePickerMonthMain = mtDatePickerYearMain.previousElementSibling
        const selectedDateYear = item.parentElement.querySelector('.mt-date-picker-year-item-selected');

        console.log(mtDatePickerYearMain)

        if (selectedDateYear !== null) {selectedDateYear.classList.remove('mt-date-picker-year-item-selected')}
        item.classList.add('mt-date-picker-year-item-selected');
        mtDatePickerYearMain.classList.remove('mt-date-picker-main-showing')
        mtDatePickerMonthMain.classList.add('mt-date-picker-main-showing')
    })
})

mtDatePickerPrevGridBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeGrid = btn.parentElement.nextElementSibling.querySelector('.mt-date-picker-year-main-side-grid-shown');
        const prevGrid = activeGrid.previousElementSibling;


        if (prevGrid !== null) {prevGrid.classList.add('mt-date-picker-year-main-side-grid-shown')}
        activeGrid.classList.remove('mt-date-picker-year-main-side-grid-shown')
    })
})

mtDatePickerNextGridBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        const activeGrid = btn.parentElement.nextElementSibling.querySelector('.mt-date-picker-year-main-side-grid-shown');
        const nextGrid = activeGrid.nextElementSibling;

        if (nextGrid !== null) {nextGrid.classList.add('mt-date-picker-year-main-side-grid-shown')}
        activeGrid.classList.remove('mt-date-picker-year-main-side-grid-shown')
    })
})