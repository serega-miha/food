// require('es6-promise').polyfill();
// import 'nodelist-foreach-polyfill';


import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import cards from './modules/cards';
import scrollUp from './modules/scrollUp';
import slider from './modules/slider';
import timer from './modules/timer';
import forms from './modules/forms';

//=====
import IMask from 'imask';
//=====

window.addEventListener('DOMContentLoaded', () => {
       

tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
modal('[data-modal]','.modal');
calc();
cards();
scrollUp();

timer('.timer', '2023-04-11');
forms('form');
slider({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    wrapper: '.offer__slider-wrapper',
    currentCounter: '#current',
    field: '.offer__slider-inner',
    totalCounter:'#total'



});


  


})
 

// Считываем поле ввода
let phoneInput = document.querySelector(".phone");
// Считываем кнопку
let btn = document.querySelector(".btn");

console.log(phoneInput);
console.log(btn);
// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });
// // Обработчик события для инпута
// phoneInput.addEventListener("input", phoneInputHandler);
// // Обработчик события для кнопки
// btn.addEventListener("click", btnHandler);



//===================================================

'use strict';

// function showThis() {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis();




//1) Обычная функция: this = window, но если use strict то undefined



// const linkQuery = document.querySelectorAll('.link');
// const linkGet = document.getElementsByClassName('link');

// console.log(linkQuery);
// console.log(linkGet);
// console.log(Array.from(linkGet));

// linkQuery.forEach(box => {
//     if (box.matches('.this')) console.log(box);
// })


// console.log(linkQuery[0].closest('.social'));
// console.log(linkQuery[0].parentElement);

// let test = [];

// const multiplicationTable = function(size) {
    
//     let test = [];
//     for ( i=0; i < size; i++){
//         test[i]= [];
        
//         for (j = 0; j < size; j++){
//             test[i][j] =((i+1)*(j+1));
            
//         }
//     }return test;
//   }
//   console.log(multiplicationTable(4));

//form===============================================================

// const p1 = new Promise((resolve, reject) => { 
//     setTimeout(resolve, 1000, "one");
//   });
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
//   });
//   const p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
//   });
//   const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
//   });
//   const p5 = new Promise((resolve, reject) => {
//     reject("reject");
//   });
   
//   Promise.all([p1, p2, p3, p4, p5]).then(value => {
//     console.log(value);
//   }, reason => {
//     console.log(reason)
//   });


//   fetch('https://jsonplaceholder.typicode.com/todos/3')
//       .then(response => response.json())
//       .then(json => console.log(json))

