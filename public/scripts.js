// Import as a module
import Navigation from './components/navigation';

//Import just as JS
import './components/tasklist';
import './components/modal';
import './components/reading';
import './components/pomodoro';
import './components/timer';
import './components/kanban';




// DOM elements for links and pages
const links = document.querySelectorAll('.top-nav > ul > li > a');
const pages = document.querySelectorAll('.page-container');

// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var nav = new Navigation(links, pages);

// Event listeners for all links
nav.links.forEach(function(link) {
    link.addEventListener('click', function() {
        let pageId = nav.getHash(link);
        nav.setPage(pageId);
    })
})

// DOM elements for sublinks and subpages
const subLinks = document.querySelectorAll('.sub-nav > ul > li > a');
const subPages = document.querySelectorAll('.sub-page-container');

// Instantiate a new instance of the Navigation class using the DOM elements above as parameters
var subNav = new Navigation(subLinks, subPages);

// Event listeners for all sub links
subNav.links.forEach((link) => {
    link.addEventListener('click', function() {
        let pageId = subNav.getHash(link);
        subNav.setPage(pageId);
    })
})
