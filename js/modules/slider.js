function slider({container,
     slide,
      nextArrow,
       prevArrow,
        totalCounter,
         currentCounter,
          wrapper,
           field}) {


const slides = document.querySelectorAll(slide),
    slider = document.querySelector(container),
     next = document.querySelector(nextArrow),
     prev = document.querySelector(prevArrow),
     totel = document.querySelector(totalCounter),
     current = document.querySelector(currentCounter),
     slidesWrapper = document.querySelector(wrapper),
     slidesField = document.querySelector(field),
     width = window.getComputedStyle(slidesWrapper).width;
     

     let slideIndex = 1;
     let offset = 0;


    if (slides.length < 10) {
            totel.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
     } else {
        totel.textContent = slides.length;
        current.textContent = slideIndex;
     };

    //  slidesField.style.width = 100 * slides.length + '%';
    //  slidesField.style.display = 'flex';
    //  slidesField.style.transition = '0.5s all';
    // slidesWrapper.style.overflow = 'hidden';
    // slider.style.position = 'relative';
     slides.forEach(item => {
        item.style.width = width;
     });

     const indicators = document.createElement('ol'),
            dots = [];
     indicators.classList.add('carousel-indicators');

     slider.append(indicators);

     for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0){
            dot.style.opacity = 1;
        }

        indicators.append(dot);
        dots.push(dot);
     }

    
     function deleteNotDigits(str){
        return +str.replace(/\D/g, '');
     }


     function currentNum() {
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex;
        }
     };

     next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length -1)){
            offset = 0;
        } else {
            offset += deleteNotDigits(width)
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        }else {
            slideIndex++;
        }

        currentNum();

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;
     });

     prev.addEventListener('click', () => {
        if (offset == 0){
            
            offset = deleteNotDigits(width) * (slides.length -1)
        } else {
            offset -= deleteNotDigits(width)
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        }else {
            slideIndex--;
        }

        currentNum();

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex - 1].style.opacity = 1;

     });


     dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo -1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            currentNum();

            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex - 1].style.opacity = 1;
        })
     })


// slider 2 end ========================================================

//my variant slider==============================================================

// const sliders = document.querySelectorAll('.offer__slide');
// let sliderTotal = document.querySelector('#total'),
//     sliderCurrent = document.querySelector('#current'),
//     sliderNext = document.querySelector('.offer__slider-next'),
//     sliderPrev = document.querySelector('.offer__slider-prev');
// let tempNumber = 0;



    
// //==
// let allSlideres = getZeroTo(sliders.length);
// sliderTotal.textContent = allSlideres;

// function getZeroTo(num) {
//     if (num >= 0 && num < 10) {
//         return `0${num}`;
//     } else {
//         return num;
//     }
// }


// sliders[tempNumber].classList.add('show', 'fade');
// sliderCurrent.textContent = getZeroTo(tempNumber + 1);


// sliderNext.addEventListener('click', () =>  { 
//     sliders[tempNumber].classList.remove('show', 'fade');
//     tempNumber++;
//     if (tempNumber >= sliders.length) {
//         tempNumber = 0;
//     }; 
//     sliders[tempNumber].classList.add('show', 'fade');
//     sliderCurrent.textContent = getZeroTo(tempNumber + 1);
    
 
// })

// sliderPrev.addEventListener('click', () =>  { 
//     sliders[tempNumber].classList.remove('show', 'fade');
//     tempNumber--;
//     if (tempNumber < 0) {
//         tempNumber = sliders.length -1 ;
//     }; 
//     sliders[tempNumber].classList.add('show', 'fade');
//     sliderCurrent.textContent = getZeroTo(tempNumber + 1);
 
// })
//my variant slideer end===============================================================
// slider 1 ========================================================
// const sliders = document.querySelectorAll('.offer__slide'),
//      next = document.querySelector('.offer__slider-next'),
//      prev = document.querySelector('.offer__slider-prev'),
//      totel = document.querySelector('#total'),
//      current = document.querySelector('#current');

//      let slideIndex = 1;
//      showSlides(slideIndex);

//      if (sliders.length < 10) {
//         totel.textContent = `0${sliders.length}`;
//      } else {
//         totel.textContent = sliders.length;
//      };


// function showSlides(n) {
//     if (n > sliders.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = sliders.length;
//     } 

//     sliders.forEach(item  => item.classList.remove('show', 'fade'));

//     sliders[slideIndex-1].classList.add('show', 'fade');
//     if (sliders.length < 10) {
//         current.textContent = `0${slideIndex}`;
//      } else {
//         current.textContent = slideIndex;
    
//      }
// };

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }
// prev.addEventListener('click', () => {
//     plusSlides(-1);
// });
// next.addEventListener('click', () => {
//     plusSlides(1);
// });
// slider 1 end ========================================================
// slider 2 ========================================================

}



export default slider;