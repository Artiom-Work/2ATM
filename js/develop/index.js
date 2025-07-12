'use strict';

const menuSwitcher = document.getElementById('menu-switch');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const pageContent = document.querySelector('.content');
const pageFooter = document.querySelector('.footer');


import { opemMobileMenu } from './conmponents/mobile-menu.js';
import { bodyLock, bodyUnlock } from './utils/body-lock.js';



opemMobileMenu(menuSwitcher, mobileMenu,
	() => bodyLock(pageContent, pageFooter),
	() => bodyUnlock(pageContent, pageFooter)
);




