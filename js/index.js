// Select Items Nav:
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

const itemNav = $all('.nav_item');
itemNav[0].classList.add('nav_item--active');

itemNav.forEach(item => item.addEventListener('click', selectItem));

function selectItem(e){
    const el = e.target.parentElement;
    console.log(el);
    itemNav.forEach(item => item.classList.remove('nav_item--active'));

    if(!el.classList.contains('nav_item--active'))
        el.classList.add('nav_item--active')
}

// Menu:

const menu = $('.menu');
const sidenav = $('.aside-nav');
const main = $('.main');

menu.addEventListener('click', menuToggle);

function menuToggle() {
    sidenav.classList.toggle('sidenav--desabled');
    main.style.gridColumn = 'span 2';

    if(!sidenav.classList.contains('sidenav--desabled'))
        main.style.gridColumn = 'span 1';
}