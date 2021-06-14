// Select Items Nav:
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