window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove('tabheader__item_active');
        });

    };

    function showTabContent(i = 0) {   //i=0 это выставляем i по умолчанию 0. если функция будет вызываться без аргуента то она сама подставит 0
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

    };


    hideTabContent();

    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;


        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }

    });

    //TIMER=========================================================================

    const deadline = '2023-02-24';

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date());//перевод в милисекунды

        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor((t / (1000 * 60 * 60) % 24)),
                minutes = Math.floor((t / 1000 / 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

        }


        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    };



    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setClock('.timer', deadline)

    //scroll button UP================================================

    const btnTop = document.querySelector('.btn-top');


    btnTop.addEventListener('click', function () {
        // document.documentElement.scrollTop = 0;
        console.log('privet');
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    })



    //modal window================================================================

    //сначала устанавливаем data-modal в HTMLчто бы искать не по классам а по дата атрибуту


    const modalBtn = document.querySelectorAll('[data-modal]'),
        modalWindow = document.querySelector('.modal');
        // modalClose = document.querySelector('[data-close]');


    function openModal() {
        modalWindow.classList.add('show', 'fade');
        modalWindow.classList.remove('hide', 'fadeOut');
      
        document.body.style.overflow = 'hidden';
    }


    modalBtn.forEach(item => {
        item.addEventListener('click', openModal)
    });




    function closeModal() {
        modalWindow.classList.add('hide', 'fadeOut');
        modalWindow.classList.remove('show', 'fade');
     
        document.body.style.overflow = '';
    }

    // modalClose.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModal();
        }
    })



    // const modalTimeId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1 ) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);


//forms==============================================

const forms = document.querySelectorAll('form');
const message = {
    loading: 'img/form/spinner.svg',
    succes: 'Спасибо! скоро мы с вами свяжемся',
    failure: 'Что то пошло не так......'
};

forms.forEach(item => {
    postData(item);
})

function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
        `
        // form.append(statusMessage);
        form.insertAdjacentElement('afterend', statusMessage);
 


        const formData = new FormData(form);

        const object = {};
        formData.forEach(function(value, key){
            object[key] = value;
        });

      

        fetch('server.php', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(data => data.text())
        .then(data => {
            console.log(data);
            showThanksModal(message.succes);
           
            statusMessage.remove();
        }).catch(() =>{
            showThanksModal(message.failure); 
        }).finally(() => {
            form.reset();
        })

        // request.addEventListener('load', () =>{
        //     if (request.status === 200)  {
        //         console.log(request.response);
        //         showThanksModal(message.succes);
        //         form.reset();
        //         setTimeout (()  => {
        //         statusMessage.remove();
        //         }, 1000)
        //     } else {
        //         showThanksModal(message.failure); 
        //     }
        // });
    });
}



function showThanksModal(message) {
    const prevModalGialog = document.querySelector('.modal__dialog');

    prevModalGialog.classList.add('hide'); 
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
    <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">${message}</div>
                    
            </div>
    
    `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
        thanksModal.remove();
        prevModalGialog.classList.add('show');
        prevModalGialog.classList.remove('hide');
        closeModal();
    }, 4000);
}




console.log('pupupupup');













})




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

