// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item');
const mtDatePickerDayItemWithoutTodayAndSelected = document.querySelectorAll('.mt-date-picker-day-item:not(.mt-date-picker-today, .mt-date-picker-selected)');

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