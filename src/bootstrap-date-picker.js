// Codes By Mahdi Tasha
const mtDatePickerToggler = document.querySelectorAll('.mt-date-picker-toggler');
const mtDatePickerDayItem = document.querySelectorAll('.mt-date-picker-day-item');

mtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '-1'))

mtDatePickerToggler.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const parentOfToggler = toggler.parentElement;
        parentOfToggler.toggleAttribute('data-opened')

        (parentOfToggler.getAttribute('data-opened') !== null)
            ? mtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '1'))
            : mtDatePickerDayItem.forEach(item => item.setAttribute('tabindex', '-1'))
    })
})