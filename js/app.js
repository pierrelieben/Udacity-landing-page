/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//building nav
let sections = document.querySelectorAll('section');
let navbarUL = document.getElementById('navbar__list');
let navList = '';

//for active states
let navButns = document.querySelectorAll(".menu__link");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addClass(section) {
    section.classList.add("your-active-class");
}
function removeClass(section) {
    section.classList.remove("your-active-class");
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavBar() {
    sections.forEach((section) => {
        navList += `<li> <a class="navbar__menu menu__link" href="#${section.id}">${section.dataset.nav}</a></li>`;
        // console.log(navList);
        
    });

    navbarUL.innerHTML = navList;
}

// Add class 'active' to section when near top of viewport
function activeState() {
    let navButns = document.querySelectorAll(".menu__link");
    sections.forEach((section, i) => {
        let rect = section.getBoundingClientRect();
        let screenHeight = screen.height;
        if (rect.top/screenHeight < 0.4 && rect.bottom/screenHeight >= 0.4) {
            addClass(section);
            console.log(section);
            navButns[i].classList.add("active__button"); 
        } else {
            removeClass(section);
            navButns[i].classList.remove("active__button");
        }
    });
}

// Scroll to anchor ID using scrollTO event
function NavScroll() {
    let Butns = document.querySelectorAll(".menu__link");
    Butns.forEach((button, i) => {
        button.addEventListener('click', function(event){
            event.preventDefault();
            // console.log('done');
            window.scrollTo({
                top: sections[i].offsetTop,
                behavior:"smooth"
            });
            // console.log('done2');
            
        });
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
createNavBar();
// Scroll to section on link click
NavScroll();

// Set sections as active
document.addEventListener('scroll', activeState);
