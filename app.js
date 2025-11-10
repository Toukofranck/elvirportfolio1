const sections = document.querySelectorAll('section');
const linksNav = document.querySelectorAll('.navigation a');
const hearder = document.querySelectorAll('hearder');
const btnHome = document.querySelectorAll('.btn-home');
const menuIcon = document.querySelectorAll('#menu-burger');
const nav = document.querySelectorAll('.navigation');

const burgerActive=()=>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active')
}