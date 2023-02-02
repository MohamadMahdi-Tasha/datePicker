// Codes By Mahdi Tasha

// Variables
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
const everyButtonInDatePicker = document.querySelectorAll('.mt-date-picker button');

// Date Picker Custom Element
class MTDatePicker extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Date Picker Holder-->
                <div style="${(this.getAttribute('style-variables') === null) ? '--mt-date-picker-primary: #3069fe;--mt-date-picker-darker-primary: #2554ce;--mt-date-picker-secondary: #e6e6e6;--mt-date-picker-darker-secondary: #868686;--mt-date-picker-shadow: 0 5px 10px rgba(0,0,0,.08);' : this.getAttribute('style-variables')}" role="date-picker-holder" class="mt-date-picker-holder" data-selected-day="unset" data-selected-month="unset" data-selected-year="unset">
                    <!--Date Picker Toggler-->
                    <button role="date-picker-toggler" class="mt-date-picker-toggler mt-date-picker-fs-16px px-3 py-2 rounded-3 mt-date-picker-border-1px-solid-secondary bg-white mt-date-picker-text-darker-secondary">Click Me To Show Date Picker!</button>
                    <!--Date Picker-->
                    <div role="date-picker" class="bg-white mt-date-picker ${(this.getAttribute('date-picker-position') === null) ? 'mt-date-picker-center' : `mt-date-picker-${this.getAttribute('date-picker-position')}`} overflow-hidden mt-3 mt-date-picker-border-1px-solid-secondary mt-date-picker-shadow rounded-4 position-absolute p-3">
                        <!--Top And Middle Side Holder-->
                        <div class="mt-date-picker-top-middle-holder overflow-hidden position-relative">
                            <div class="mt-date-picker-main bg-white overflow-hidden position-absolute mt-date-picker-day-main mt-date-picker-main-showing">
                                <!--Top Side Of Date Picker-->
                                <div class="d-flex justify-content-between mb-3">
                                    <button class="mt-date-picker-fs-14px me-2 mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-prev-month-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </button>
                                    <button class="text-nowrap mx-3 border-0 bg-white mt-date-picker-fs-14px mt-month-select-btn">
                                        <span class="mt-date-picker-current-month"></span>
                                        <span class="mt-date-picker-current-year"></span>
                                    </button>
                                    <button class="mt-date-picker-fs-14px mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-next-month-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <!--Main Side-->
                                <div>
                                    <!--Weekdays Names-->
                                    <div class="mt-date-picker-day-main-side-grid">
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">Su</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">Mo</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">TU</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">We</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">Th</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">Fr</span>
                                        <span class="text-center mt-date-picker-squar-size mt-date-picker-text-secondary mt-date-picker-fs-14px">Sa</span>
                                    </div>
                                    <!--Days Part-->
                                    <div class="overflow-hidden mt-date-picker-day-month-main-holder position-relative">
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-january">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-february">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-march">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-april">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">6</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-may">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-june">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-july">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-august">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-september">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-october">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-november">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-december">
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                           <button class="mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">6</button>
                                       </div>
                                   </div>
                                </div>
                            </div>
                            <div class="mt-date-picker-main bg-white overflow-hidden position-absolute mt-date-picker-month-main">
                                <!--Top Side Of Date Picker-->
                                <div class="d-flex justify-content-center mb-3">
                                    <button class="text-nowrap mx-3 border-0 bg-white mt-date-picker-fs-14px mt-year-select-btn">
                                        <span class="mt-date-picker-current-year ms-2"></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <!--Main Side (Month Part)-->
                                <div class="mt-date-picker-month-main-side-grid">
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Jan</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Feb</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Mar</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Apr</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">May</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Jun</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Jul</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Aug</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Sep</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Oct</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Nov</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 rounded-3">Dec</button>
                                </div>
                            </div>
                            <div class="mt-date-picker-main bg-white overflow-hidden position-absolute mt-date-picker-year-main">
                                <!--Top Side Of Date Picker-->
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <button class="mt-date-picker-fs-14px mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-prev-grid-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </button>
                                    <h6 class="text-nowrap mx-3 mb-0  bg-white mt-date-picker-fs-14px">Select Year</h6>
                                    <button class="mt-date-picker-fs-14px mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-next-grid-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <!--Main Side (Year Part)-->
                                <div class="position-relative mt-date-picker-year-main-side-grid-holder">
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1900</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1901</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1902</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1903</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1904</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1905</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1906</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1907</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1908</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1909</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1910</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1911</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1912</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1913</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1914</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1915</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1916</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1917</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1918</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1919</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1920</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1921</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1922</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1923</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1924</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1925</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1926</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1927</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1928</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1929</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1930</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1931</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1932</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1933</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1934</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1935</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1936</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1937</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1938</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1939</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1940</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1941</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1942</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1943</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1944</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1945</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1946</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1947</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1948</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1949</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1950</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1951</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1952</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1953</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1954</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1955</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1956</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1957</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1958</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1959</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1960</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1961</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1962</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1963</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1964</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1965</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1966</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1967</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1968</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1969</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1970</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1971</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1972</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1973</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1974</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1975</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1976</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1977</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1978</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1979</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1980</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1981</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1982</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1983</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1984</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1985</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1986</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1987</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1988</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1989</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1990</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1991</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1992</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1993</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1994</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1995</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1996</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1997</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1998</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">1999</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2001</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2002</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2003</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2004</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2005</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2006</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2007</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2008</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2009</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2010</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2011</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2012</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2013</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2014</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2015</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2016</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2017</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2018</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2019</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2020</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2021</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2022</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2023</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2024</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2025</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2026</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2027</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2028</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2029</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2030</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2031</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2032</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2033</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2034</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2035</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2036</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2037</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2038</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2039</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2040</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2041</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2042</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2043</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2044</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2045</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2046</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2047</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2048</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2049</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2050</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2051</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2052</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2053</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2054</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2055</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2056</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2056</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2057</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2058</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2059</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2060</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2061</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2062</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2063</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2064</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2065</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2066</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 rounded-3">2067</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Bottom Side (Active Or Cancel)-->
                        <div class="d-flex flex-lg-row flex-column mt-3">
                            <button class="me-lg-2 me-0 mb-lg-0 mb-2 d-block mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary rounded-3 py-2 px-3 bg-white mt-date-picker-fs-16px mt-date-picker-cancel-btn">Cancel</button>
                            <button class="border-0 d-block rounded-3 text-white py-2 px-3 mt-date-picker-bg-primary mt-date-picker-fs-16px mt-date-picker-apply-btn">Apply</button>
                        </div>
                    </div>
</div>
        `
    }
}

// Defining Custom Element Of Date Picker
window.customElements.define('mt-date-picker', MTDatePicker);

// Adding Event Listner Of Load On Window
window.addEventListener('load', () => {
    const mtDatePickerCustomElements = document.querySelectorAll('mt-date-picker');

    // For Each Custom Element Of Date Picker ...
    mtDatePickerCustomElements.forEach(element => {
        // Variables
        const holderOfDatePickerInElement = element.firstElementChild;
        const computedStylesOfHolderOfDatePickerInElement = getComputedStyle(holderOfDatePickerInElement);
        const mtDatePickerPrimaryCssVariable = computedStylesOfHolderOfDatePickerInElement.getPropertyValue('--mt-date-picker-primary');
        const mtDatePickerDarkerPrimaryCssVariable = computedStylesOfHolderOfDatePickerInElement.getPropertyValue('--mt-date-picker-darker-primary');
        const mtDatePickerSecondaryCssVariable = computedStylesOfHolderOfDatePickerInElement.getPropertyValue('--mt-date-picker-secondary');
        const mtDatePickerDarkerSecondaryCssVariable = computedStylesOfHolderOfDatePickerInElement.getPropertyValue('--mt-date-picker-darker-secondary');
        const mtDatePickerShadowCssVariable = computedStylesOfHolderOfDatePickerInElement.getPropertyValue('--mt-date-picker-shadow');

        // if There Is One Empty Style In Holder Of Each Date Picker ...
        if (
            mtDatePickerPrimaryCssVariable === '' ||
            mtDatePickerDarkerPrimaryCssVariable === '' ||
            mtDatePickerSecondaryCssVariable === '' ||
            mtDatePickerDarkerSecondaryCssVariable === '' ||
            mtDatePickerShadowCssVariable === ''
        ) {
            // Add Class Of 'mt-date-picker-errored' To Toggler
            holderOfDatePickerInElement.firstElementChild.classList.add('mt-date-picker-errored')

            // Thorw New Error For Developer To Fix Bug
            throw new Error('The Styles Are Not Complete. Please Add Styles To Custom Element In Html File');
        }
        // Otherwise, ...
        else {
            // Adding Tab Index Of '-1' To Each Button
            everyButtonInDatePicker.forEach(btn => btn.setAttribute('tabindex', '-1'));

            // Adding Event Listener Of KeyDown To Window That ...
            window.addEventListener('keydown', (event) => {
                // Variables
                const pressedKey = event.key.toLowerCase();
                const allOpenedDatePickers = document.querySelectorAll('.mt-date-picker-holder[data-opened]');
                const openedDatePicker = document.querySelector('.mt-date-picker-holder[data-opened]');
                const monthHolderInDatePicker = openedDatePicker.querySelector('.mt-date-picker-month-main')
                const yearHolderInDatePicker = openedDatePicker.querySelector('.mt-date-picker-year-main')
                const dayHolderInDatePicker = openedDatePicker.querySelector('.mt-date-picker-day-main')
                const previousMonthDaysInOpenedDatePicker = openedDatePicker.querySelector('.mt-date-picker-prev-month-btn');
                const nextMonthDaysInOpenedDatePicker = openedDatePicker.querySelector('.mt-date-picker-next-month-btn');
                const previousMonthInOpenedDatePicker = openedDatePicker.querySelector('.mt-date-picker-prev-grid-btn');
                const nextMonthInOpenedDatePicker = openedDatePicker.querySelector('.mt-date-picker-next-grid-btn');

                // If Pressed Key Was Escape Button Then Close Date Picker
                if (pressedKey === 'escape') {allOpenedDatePickers.forEach(item => item.removeAttribute('data-opened'))}
                // If Pressed Key Was Up Arrow Button Then ...
                else if (pressedKey === 'arrowup') {
                    // Preventing Page From Scrolling
                    event.preventDefault();

                    // Opening Month And Closing Days If Month Doesnt Contain Class Of 'mt-date-picker-main-showing'
                    if (!monthHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {
                        dayHolderInDatePicker.classList.remove('mt-date-picker-main-showing');
                        monthHolderInDatePicker.classList.add('mt-date-picker-main-showing');
                    }
                    // Opening Year And Closing Month If Year Doesnt Contain Class Of 'mt-date-picker-main-showing'
                    else if (!yearHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {
                        monthHolderInDatePicker.classList.remove('mt-date-picker-main-showing');
                        yearHolderInDatePicker.classList.add('mt-date-picker-main-showing');
                    }
                }
                // If Pressed Key Was down Arrow Button Then ...
                else if (pressedKey === 'arrowdown') {
                    // Preventing Page From Scrolling
                    event.preventDefault();

                    // Opening Day And Closing Month If Month Contains Class Of 'mt-date-picker-main-showing'
                    if (monthHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {
                        dayHolderInDatePicker.classList.add('mt-date-picker-main-showing');
                        monthHolderInDatePicker.classList.remove('mt-date-picker-main-showing');
                    }
                    // Opening Month And Closing Year If Year Contains Class Of 'mt-date-picker-main-showing'
                    else if (yearHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {
                        monthHolderInDatePicker.classList.add('mt-date-picker-main-showing');
                        yearHolderInDatePicker.classList.remove('mt-date-picker-main-showing');
                    }
                }
                // If Pressed Key Was Left Arrow Button And Day Was Showing Then Click Previous Month Button In Top
                else if (pressedKey === 'arrowleft' && dayHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {previousMonthDaysInOpenedDatePicker.click()}
                // If Pressed Key Was Left Right Button And Day Was Showing Then Click next Month Button In Top
                else if (pressedKey === 'arrowright' && dayHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {nextMonthDaysInOpenedDatePicker.click()}
                // If Pressed Key Was Left Arrow Button And Year Was Showing Then Click Previous Month Grid Button In Top
                else if (pressedKey === 'arrowleft' && yearHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {previousMonthInOpenedDatePicker.click()}
                // If Pressed Key Was Right Arrow Button And Year Was Showing Then Click Next Month Grid Button In Top
                else if (pressedKey === 'arrowright' && yearHolderInDatePicker.classList.contains('mt-date-picker-main-showing')) {nextMonthInOpenedDatePicker.click()}
            })

            // For Each Date Picker Toggler ...
            mtDatePickerToggler.forEach(toggler => {
                // Adding Event Listener Of CLick To Each Toggler
                toggler.addEventListener('click', () => {
                    // Variables
                    const parentOfToggler = toggler.parentElement;
                    const openedDatePickerHolder = document.querySelector('.mt-date-picker-holder[data-opened]');

                    const today = new Date();
                    const thisMonth = today.getMonth() + 1;
                    const thisYear = today.getFullYear();
                    const todayDate = today.getDate();
                    const thisMonthName = today.toLocaleString('default', { month: 'long' });
                    const dayMonthItemToActivate = parentOfToggler.querySelector(`.mt-date-picker-day-month-main-holder > .mt-date-picker-day-month:nth-of-type(${thisMonth})`)
                    const dayItemToActivate = dayMonthItemToActivate.querySelectorAll(`.mt-date-picker-day-item:not(.mt-date-picker-text-secondary)`);
                    const allMtDatePickerYearItems = parentOfToggler.querySelectorAll('.mt-date-picker-year-main-side-grid-holder > .mt-date-picker-year-main-side-grid > .mt-date-picker-year-item')
                    const monthItemToActivate = parentOfToggler.querySelector(`.mt-date-picker-month-main-side-grid > .mt-date-picker-month-item:nth-of-type(${thisMonth})`)
                    let yearGridToActivate;

                    // Opening Date Picker
                    parentOfToggler.toggleAttribute('data-opened');

                    // For Each Year Items That Its Text Content Was 'thisYear' , 'yearGridToActivate' Variable Equals To It
                    allMtDatePickerYearItems.forEach(item => {if (item.textContent === `${thisYear}`) {yearGridToActivate = item}})

                    // Adding Classes To Todays Date Items(Elements) And Showing Day Month Grid Holder
                    dayMonthItemToActivate.classList.add('mt-date-picker-day-month-main-active');
                    dayItemToActivate[todayDate - 1].classList.add('mt-date-picker-today');
                    yearGridToActivate.parentElement.classList.add('mt-date-picker-year-main-side-grid-shown')
                    yearGridToActivate.classList.add('mt-date-picker-year-item-current');
                    monthItemToActivate.classList.add('mt-date-picker-month-item-current')

                    // For Each Month And Day Elements, Their Text Content Equals To Todays Month And Year
                    mtDatePickerCurrentMonth.forEach(item => item.textContent = thisMonthName)
                    mtDatePickerCurrentYear.forEach(item => item.textContent = thisYear)

                    // If 'openedDatePickerHolder' Equals To Null Then Remove 'data-opened' Attr From It
                    if (openedDatePickerHolder !== null) {openedDatePickerHolder.removeAttribute('data-opened');}
                })
            })

            // For Each Day Items ...
            mtDatePickerDayItemWithoutTodayAndSelectedAndDisabledOnes.forEach(item => {
                // Adding Event Listener Of Click To Them
                item.addEventListener('click', () => {
                    // Variable
                    const selectedItemsInParentOfClickedItem = item.parentElement.querySelector('.mt-date-picker-selected');

                    // If 'selectedItemsInParentOfClickedItem' Equalt To Null Then Remove Class Of 'mt-date-picker-selected' From It
                    if (selectedItemsInParentOfClickedItem !== null) {
                        selectedItemsInParentOfClickedItem.classList.remove('mt-date-picker-selected')
                    }

                    // Add Class Of 'mt-date-picker-selected' To Clicked Item
                    item.classList.add('mt-date-picker-selected');
                })
            })

            // Adding Event Listener Of Click To Each Cancel Buttons That Closes Date Picker
            mtDatePickerCancelBtn.forEach(btn => btn.addEventListener('click', () => btn.parentElement.parentElement.parentElement.removeAttribute('data-opened')))

            // For Each Apply Button ...
            mtDatePickerApplyBtn.forEach(btn => {
                // Adding Event Listener Of Click To Each Button
                btn.addEventListener('click', () => {
                    // Variables
                    const datePickerHolderOfClickedBtn = btn.parentElement.parentElement.parentElement;
                    const selectedDay = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-day-item.mt-date-picker-selected');
                    const selectedMonth = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-month-item.mt-date-picker-month-item-selected');
                    const selectedYear = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-year-item.mt-date-picker-year-item-selected');
                    const currentDay = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-day-item.mt-date-picker-today');
                    const currentMonth = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-month-item.mt-date-picker-month-item-current');
                    const currentYear = datePickerHolderOfClickedBtn.querySelector('.mt-date-picker-year-item.mt-date-picker-year-item-current');

                    // Closing Date Picker
                    datePickerHolderOfClickedBtn.removeAttribute('data-opened');

                    // If There Wasnt Selected Date Then Set Attributes Of 'datePickerHolderOfClickedBtn' To Current Dates
                    if (selectedDay === null && selectedMonth === null && selectedYear === null) {
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-day', currentDay.textContent);
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-month', currentMonth.textContent);
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-year', currentYear.textContent);
                    }
                    // Otherwise Set Attributes Of 'datePickerHolderOfClickedBtn' To Selected Dates
                    else {
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-day', selectedDay.textContent);
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-month', selectedMonth.textContent);
                        datePickerHolderOfClickedBtn.setAttribute('data-selected-year', selectedYear.textContent);
                    }
                })
            })

            // For Each Month Select Button ...
            mtMonthSelectBtn.forEach(btn => {
                // Adding Event Listener Of Click To Each Button
                btn.addEventListener('click', () => {
                    // Variables
                    const mtDatePickerDayMain = btn.parentElement.parentElement;
                    const mtDatePickerMonthMain = mtDatePickerDayMain.parentElement.querySelector('.mt-date-picker-month-main');

                    // Adding Class Of 'mt-date-picker-main-showing' To 'mtDatePickerMonthMain' And Removing It From 'mtDatePickerDayMain' Variable
                    mtDatePickerMonthMain.classList.add('mt-date-picker-main-showing')
                    mtDatePickerDayMain.classList.remove('mt-date-picker-main-showing')
                })
            })

            // For Each Year Select Button ...
            mtYearSelectBtn.forEach(btn => {
                // Adding Event Listener Of Click To Each Button
                btn.addEventListener('click', () =>  {
                    // Variables
                    const mtDatePickerMonthMain = btn.parentElement.parentElement;
                    const mtDatePickerYearMain = mtDatePickerMonthMain.parentElement.querySelector('.mt-date-picker-year-main');

                    // Adding Class Of 'mt-date-picker-main-showing' To 'mtDatePickerYearMain' And Removing It From 'mtDatePickerMonthMain' Variable
                    mtDatePickerYearMain.classList.add('mt-date-picker-main-showing')
                    mtDatePickerMonthMain.classList.remove('mt-date-picker-main-showing')
                })
            })

            // For Each Next Month Button ...
            mtDatePickerNextMonthBtn.forEach(btn => {
                // Adding Event Listener Of Click To Each Button
                btn.addEventListener('click', () => {
                    // Variables
                    const mtDatePickerDayMonthMainActive = btn.parentElement.parentElement.parentElement.querySelector('.mt-date-picker-day-month-main-active');
                    const nextMonth = mtDatePickerDayMonthMainActive.nextElementSibling;
                    const activeDayItemInCurrentMonth = mtDatePickerDayMonthMainActive.querySelector('.mt-date-picker-day-item.mt-date-picker-selected')

                    // If There Wasnt Next Month Then
                    if (nextMonth !== null) {
                        // Add Class Of 'mt-date-picker-day-month-main-active' To Next Month And Removing It From 'mtDatePickerDayMonthMainActive'
                        nextMonth.classList.add('mt-date-picker-day-month-main-active');
                        mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

                        // If 'activeDayItemInCurrentMonth' Equals To Null Then Remove Class Of 'mt-date-picker-selected' From 'activeDayItemInCurrentMonth'
                        if (activeDayItemInCurrentMonth !== null) {activeDayItemInCurrentMonth.classList.remove('mt-date-picker-selected')}
                    }
                })
            })

            // For Each Prev Month Button ...
            mtDatePickerPrevMonthBtn.forEach(btn => {
                // Adding Event Listener Of Click To Each Button
                btn.addEventListener('click', () => {
                    // Variables
                    const mtDatePickerDayMonthMainActive = btn.parentElement.parentElement.parentElement.querySelector('.mt-date-picker-day-month-main-active');
                    const prevMonth = mtDatePickerDayMonthMainActive.previousElementSibling;
                    const activeDayItemInCurrentMonth = mtDatePickerDayMonthMainActive.querySelector('.mt-date-picker-day-item.mt-date-picker-selected')

                    // If There Wasnt Previus Month Then
                    if (prevMonth !== null) {
                        // Add Class Of 'mt-date-picker-day-month-main-active' To Prev Month And Removing It From 'mtDatePickerDayMonthMainActive'
                        prevMonth.classList.add('mt-date-picker-day-month-main-active');
                        mtDatePickerDayMonthMainActive.classList.remove('mt-date-picker-day-month-main-active');

                        // If 'activeDayItemInCurrentMonth' Equals To Null Then Remove Class Of 'mt-date-picker-selected' From 'activeDayItemInCurrentMonth'
                        if (activeDayItemInCurrentMonth !== null) {activeDayItemInCurrentMonth.classList.remove('mt-date-picker-selected')}
                    }
                })
            })

            // For Each Month Button ...
            mtDatePickerMonthItem.forEach(item => {
                // Adding event Listener Of Click To Each Item ..
                item.addEventListener('click', () => {
                    // Variables
                    const mtDatePickerMonthMain = item.parentElement.parentElement;
                    const mtDatePickerDayMain = mtDatePickerMonthMain.previousElementSibling
                    const selectedDateMonth = item.parentElement.querySelector('.mt-date-picker-month-item-selected');

                    // If Selected Date Was Equal To Null Then Remove Class Of 'mt-date-picker-month-item-selected' From 'selectedDateMonth'
                    if (selectedDateMonth !== null) {selectedDateMonth.classList.remove('mt-date-picker-month-item-selected')}

                    // Adding Classes To And From Items
                    item.classList.add('mt-date-picker-month-item-selected');
                    mtDatePickerMonthMain.classList.remove('mt-date-picker-main-showing')
                    mtDatePickerDayMain.classList.add('mt-date-picker-main-showing')

                })
            })

            // For Each Year Button ...
            mtDatePickerYearItem.forEach(item => {
                // Adding event Listner Of Click To Item
                item.addEventListener('click', () => {
                    // Variables
                    const mtDatePickerYearMain = item.parentElement.parentElement.parentElement;
                    const mtDatePickerMonthMain = mtDatePickerYearMain.previousElementSibling
                    const selectedDateYear = item.parentElement.querySelector('.mt-date-picker-year-item-selected');

                    // If Selected Date Was Equal To Null Then Remove Class Of 'mt-date-picker-year-item-selected' From 'selectedDateYear'
                    if (selectedDateYear !== null) {selectedDateYear.classList.remove('mt-date-picker-year-item-selected')}

                    // Adding Classes To And From Items
                    item.classList.add('mt-date-picker-year-item-selected');
                    mtDatePickerYearMain.classList.remove('mt-date-picker-main-showing')
                    mtDatePickerMonthMain.classList.add('mt-date-picker-main-showing')
                })
            })
            
            // For Each Prev Month Grid Button ...
            mtDatePickerPrevGridBtn.forEach(btn => {
                // Adding Event Listener Of Click To Button ...
                btn.addEventListener('click', () => {
                    // Variables
                    const activeGrid = btn.parentElement.nextElementSibling.querySelector('.mt-date-picker-year-main-side-grid-shown');
                    const prevGrid = activeGrid.previousElementSibling;

                    // If There Wasnt No Prev Grid Item ..
                    if (prevGrid !== null) {
                        // Adding Class Of 'mt-date-picker-year-main-side-grid-shown' To 'prevGrid' And Remove It From 'activeGrid'
                        prevGrid.classList.add('mt-date-picker-year-main-side-grid-shown')
                        activeGrid.classList.remove('mt-date-picker-year-main-side-grid-shown')
                    }
                })
            })

            // For Each Next Month Grid Button ...
            mtDatePickerNextGridBtn.forEach(btn => {
                // Adding Event Listener Of Click To Button ...
                btn.addEventListener('click', () => {
                    // Variables
                    const activeGrid = btn.parentElement.nextElementSibling.querySelector('.mt-date-picker-year-main-side-grid-shown');
                    const nextGrid = activeGrid.nextElementSibling;

                    // If There Wasnt No Next Grid Item ..
                    if (nextGrid !== null) {
                        // Adding Class Of 'mt-date-picker-year-main-side-grid-shown' To 'nextGrid' And Remove It From 'activeGrid'
                        nextGrid.classList.add('mt-date-picker-year-main-side-grid-shown')
                        activeGrid.classList.remove('mt-date-picker-year-main-side-grid-shown')
                    }
                })
            })
        }
    })
})