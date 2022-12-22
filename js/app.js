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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



//testing add event listener;
console.log('script connected...');

function buildNavItem(title, index) {
    return `<li class="nav__item" data-nav="section ${index}"><a href="#section${index}" class = "menu__link">${title}</a></li>`;
}

let navbar = document.getElementById("navbar__list");

const items = document.getElementsByClassName("landing__container");

navbar.style.backgroundColor = "white";

const headingsHTML = document.querySelectorAll("h2");

let headings = [];

headingsHTML.forEach((item) => { headings.push(item.innerText) });

let navItems = [];

headings.forEach((e) => { navItems.push(buildNavItem(e, navItems.length)) });

navItems.reverse();

console.log(navItems);

navItems.forEach((item) => {
    navbar.insertAdjacentHTML('afterbegin', item);
});

