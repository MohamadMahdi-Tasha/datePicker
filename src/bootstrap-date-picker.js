// Codes By Mahdi Tasha
class MTDatePicker extends HTMLElement {
    constructor() {super();}
    connectedCallback() {
        this.innerHTML = `
            <!--Date Picker Holder-->
                <div role="date-picker-holder" class="mt-date-picker-holder position-relative" data-selected-day="unset" data-selected-month="unset" data-selected-year="unset">
                    <!--Date Picker Toggler-->
                    <button role="date-picker-toggler" class="mt-date-picker-toggler mt-date-picker-fs-16px px-3 py-2 rounded-3 mt-date-picker-border-1px-solid-secondary bg-white mt-date-picker-text-darker-secondary">Click Me To Show Date Picker!</button>
                    <!--Date Picker-->
                    <div role="date-picker" class="bg-white mt-date-picker overflow-hidden mt-3 mt-date-picker-border-1px-solid-secondary mt-date-picker-shadow rounded-4 position-absolute p-3">
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
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-february">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-march">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-april">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">6</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-may">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-june">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-july">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-august">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-september">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-october">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-november">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                       </div>
                                       <div class="mt-date-picker-day-main-side-grid bg-white position-absolute mt-date-picker-day-month mt-date-picker-day-main-december">
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">6</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">7</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">8</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">9</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">10</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">11</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">12</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">13</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">14</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">15</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">16</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">17</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">18</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">19</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">20</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">21</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">22</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">23</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">24</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">25</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">26</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">27</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">28</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">29</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">30</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item">31</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">1</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">2</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">3</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">4</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">5</button>
                                           <button class="border-0 mt-date-picker-fs-14px mt-date-picker-squar-size rounded-3 mt-date-picker-day-item mt-date-picker-text-secondary">6</button>
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
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Jan</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Feb</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Mar</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Apr</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">May</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Jun</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Jul</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Aug</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Sep</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Oct</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Nov</button>
                                    <button class="mt-date-picker-month-item px-3 py-2 border-0 rounded-3">Dec</button>
                                </div>
                            </div>
                            <div class="mt-date-picker-main bg-white overflow-hidden position-absolute mt-date-picker-year-main">
                                <!--Top Side Of Date Picker-->
                                <div class="d-flex align-items-center justify-content-between mb-3">
                                    <button class="mt-date-picker-fs-14px me-2 mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-prev-grid-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                        </svg>
                                    </button>
                                    <h6 class="text-nowrap mx-3 mb-0 border-0 bg-white mt-date-picker-fs-14px">Select Year</h6>
                                    <button class="mt-date-picker-fs-14px me-2 mt-date-picker-squar-size mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary bg-white d-flex align-items-center justify-content-center rounded-3 mt-date-picker-next-grid-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                    </button>
                                </div>
                                <!--Main Side (Year Part)-->
                                <div class="position-relative mt-date-picker-year-main-side-grid-holder">
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1900</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1901</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1902</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1903</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1904</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1905</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1906</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1907</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1908</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1909</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1910</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1911</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1912</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1913</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1914</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1915</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1916</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1917</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1918</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1919</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1920</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1921</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1922</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1923</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1924</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1925</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1926</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1927</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1928</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1929</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1930</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1931</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1932</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1933</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1934</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1935</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1936</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1937</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1938</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1939</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1940</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1941</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1942</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1943</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1944</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1945</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1946</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1947</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1948</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1949</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1950</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1951</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1952</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1953</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1954</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1955</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1956</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1957</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1958</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1959</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1960</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1961</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1962</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1963</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1964</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1965</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1966</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1967</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1968</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1969</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1970</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1971</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1972</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1973</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1974</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1975</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1976</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1977</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1978</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1979</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1980</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1981</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1982</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1983</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1984</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1985</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1986</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1987</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1988</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1989</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1990</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1991</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1992</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1993</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1994</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1995</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1996</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1997</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1998</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">1999</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2001</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2002</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2003</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2004</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2005</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2006</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2007</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2008</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2009</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2010</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2011</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2012</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2013</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2014</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2015</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2016</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2017</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2018</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2019</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2020</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2021</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2022</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2023</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2024</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2025</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2026</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2027</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2028</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2029</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2030</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2031</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2032</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2033</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2034</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2035</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2036</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2037</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2038</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2039</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2040</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2041</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2042</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2043</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2044</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2045</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2046</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2047</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2048</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2049</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2050</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2051</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2052</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2053</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2054</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2055</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2056</button>
                                    </div>
                                    <div class="mt-date-picker-year-main-side-grid position-absolute">
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2056</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2057</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2058</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2059</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2060</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2061</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2062</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2063</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2064</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2065</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2066</button>
                                        <button class="mt-date-picker-year-item px-3 py-2 border-0 rounded-3">2067</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--Bottom Side (Active Or Cancel)-->
                        <div class="d-flex mt-3">
                            <button class="me-2 mt-date-picker-text-darker-secondary mt-date-picker-border-1px-solid-secondary rounded-3 w-50 py-2 px-3 bg-white mt-date-picker-fs-16px mt-date-picker-cancel-btn">Cancel</button>
                            <button class="border-0 w-50 rounded-3 text-white py-2 px-3 mt-date-picker-bg-primary mt-date-picker-fs-16px mt-date-picker-apply-btn">Apply</button>
                        </div>
                    </div>
</div>
        `
    }
}

window.customElements.define('mt-date-picker', MTDatePicker);

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