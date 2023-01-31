// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item');
const mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected, .mt-date-picker-text-secondary)');
const mtDatePickerCancelBtn = document.querySelectorAll('.mt-date-picker-cancel-btn');
const mtDatePickerApplyBtn = document.querySelectorAll('.mt-date-picker-apply-btn');
const mtMonthSelectBtn = document.querySelectorAll('.mt-month-select-btn');
const mtYearSelectBtn = document.querySelectorAll('.mt-year-select-btn');
const mtDatePickerPrevMonthBtn = document.querySelectorAll('.mt-date-picker-prev-month-btn');
const mtDatePickerNextMonthBtn = document.querySelectorAll('.mt-date-picker-next-month-btn');

mtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '-1'))

mtDatePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const parentOfToggler = toggler.parentElement;
        const openedDatePickerHolder = document.querySelector('.mt-date-picker-holder[data-opened]');
        const allMtDatePickerDayItem = parentOfToggler.querySelectorAll('.mt-date-picker-day-month-main-active .mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');
        const mtDatePickerCurrentMonth = document.querySelectorAll('.mt-date-picker-current-month');
        const mtDatePickerCurrentYear = document.querySelectorAll('.mt-date-picker-current-year');

        const today = new Date();
        const thisMonth = today.getMonth() + 1;
        const thisYear = today.getFullYear();
        const todayDate = today.getDate();
        const thisMonthName = today.toLocaleString('default', { month: 'long' });
        const dayMonthItemToActivate = parentOfToggler.querySelector(`.mt-date-picker-day-month-main-holder > .mt-date-picker-day-month:nth-of-type(${thisMonth})`)
        const dayItemToActivate = dayMonthItemToActivate.querySelector(`.mt-date-picker-day-item:not(.mt-date-picker-text-secondary):nth-of-type(${todayDate})`);

        parentOfToggler.toggleAttribute('data-opened');

        dayMonthItemToActivate.classList.add('mt-date-picker-day-month-main-active');
        dayItemToActivate.classList.add('mt-date-picker-today');
        
        mtDatePickerCurrentMonth.forEach(item => item.textContent = thisMonthName)
        mtDatePickerCurrentYear.forEach(item => item.textContent = thisYear)

        if (openedDatePickerHolder !== null) {openedDatePickerHolder.removeAttribute('data-opened');}
        if (parentOfToggler.getAttribute('data-opened') !== null) {allMtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '1'))}
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
        const activeDayItemInCurrentMonth = mtDatePickerDayMonthMainActive.querySelector('.mt-date-picker-day-item.mt-date-picker-selected')
        const dayItemsInActiveMonth = mtDatePickerDayMonthMainActive.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');
        const dayItemsInNextMonth = nextMonth.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-text-secondary, .mt-date-picker-today)');

        if (nextMonth !== null) {
            dayItemsInActiveMonth.forEach(item => item.setAttribute('tabindex', '-1'))
            dayItemsInNextMonth.forEach(item => item.setAttribute('tabindex', '1'))
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
            dayItemsInActiveMonth.forEach(item => item.setAttribute('tabindex', '-1'))
            dayItemsInPrevMonth.forEach(item => item.setAttribute('tabindex', '1'))
            prevMonth.classList.add('mt-date-picker-day-month-main-active');
            mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

            if (activeDayItemInCurrentMonth !== null) {activeDayItemInCurrentMonth.classList.remove('mt-date-picker-selected')}
        }
    })
})