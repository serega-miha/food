function calc() {

// calculator start==============================================

// const genderBlock = document.querySelector('#gender'),
//      genders = genderBlock.querySelectorAll('.calculating__choose-item'),
//      activeBlock = document.querySelector('.calculating__choose_big'),
//      active = activeBlock.querySelectorAll('.calculating__choose-item'),
//      height = document.querySelector('#height'),
//      weight = document.querySelector('#weight'),
//      age = document.querySelector('#age'),
//      calcInputs = document.querySelector('.calculating__choose_medium'),
//      totalKal = document.querySelector('#totalKal'),
//      allData = document.querySelectorAll('.calculating__choose-item');

//      let inputsAll = calcInputs.querySelectorAll('input')

//      function addActive(data, i) {
//         data[i].classList.add('calculating__choose-item_active');
//      }
//      function removeActive(data) {
//         data.forEach(item => item.classList.remove('calculating__choose-item_active'))
//      }



//      genderBlock.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('calculating__choose-item')) {
//             genders.forEach((item, i) => {
//                 if (target == item) {
                    
//                     removeActive(genders);
//                     addActive(genders, i);
//                 }
//             });
//         }

//     });


//     activeBlock.addEventListener('click', (event) => {
//         const target = event.target;
//         if (target && target.classList.contains('calculating__choose-item')) {
//             active.forEach((item, i) => {
//                 if (target == item) {
                    
//                     removeActive(active);
//                     addActive(active, i);
//                 }
//             });
//         }
        
//     });


//     let whatGender = 'female';
//     let act = 1.375;
//     function calc() {
//         let bmr = 0;
        
//         if (whatGender === 'female') { 
//             bmr = 447.6 + (parseFloat( weight.value) * 9.2) + (parseFloat(height.value) * 3.1) - (parseFloat(age.value) * 4.3);
//         } else {
//            bmr = 88.36 + (parseFloat( weight.value) * 13.4) + (parseFloat(height.value) * 4.8) - (parseFloat(age.value) * 5.7); 
//         }
   
//         totalKal.innerText = (bmr * act).toFixed(1);
        
//     }

//     for(const item of inputsAll){
//         item.addEventListener('input', function(){
//             if(item.value.match(/\D/g)) {
//                 item.style.border = '1px solid red';
//             } else {
//                 item.style.border = 'none';
//             }
                
    
//             calc();
            
//         })
//     };

//     for(const gender of genders){
//         gender.addEventListener('click', function(){
//             whatGender = gender.id;
//             calc();
            
//         })
//     };


//     for(const item of active){
//         item.addEventListener('click', function(){
//             if (item.id === 'low'){
//                 act = 1.2;
//             } else if (item.id === 'small'){
//                 act = 1.375;
//             } else if (item.id === 'medium'){
//                 act = 1.55;
//             }else if (item.id === 'high'){
//                 act = 1.725;
//             } else {
//                 act = 1;
//             }
//             calc();
            
//         })
//     };


// calculator end==============================================
const totalKal = document.querySelector('#totalKal');

let sex,height,weight,age,ratio;

if(localStorage.getItem('sex')){
    sex  = localStorage.getItem('sex');
}else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
}

if(localStorage.getItem('ratio')){
    ratio  = localStorage.getItem('ratio');
}else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
}

function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.classList.remove(activeClass);
        if (elem.getAttribute('id') === localStorage.getItem('sex')){
            elem.classList.add(activeClass);
        }
        if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
            elem.classList.add(activeClass);
        }
    });
}
initLocalSettings('#gender div', 'calculating__choose-item_active') ;
initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active') 


function calcTotal() {
    if (!sex || !height ||!weight || !age ||!ratio) {
        totalKal.textContent = '_____';
        return;
    }
    if (sex === 'female') {
        totalKal.textContent = Math.round(((447.6 + (weight * 9.2) + (height * 3.1) - (age * 4.3)) * ratio ));
    } else {
        totalKal.textContent = Math.round(((88.36 + (weight * 13.4) + (height * 4.8) - (age * 5.7)) * ratio ));
    }
}

calcTotal();

function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-ratio')) {
                ratio = +e.target.getAttribute('data-ratio');
                localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
            } else {
                sex = e.target.getAttribute('id');
                localStorage.setItem('sex', e.target.getAttribute('id'));
            }
    
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
    
            }); 
            e.target.classList.add(activeClass);
            calcTotal();
        });
    })
   
}
getStaticInformation('#gender div', 'calculating__choose-item_active');
getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');


function getDinamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', () =>{

        if(input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }

        switch(input.getAttribute('id')) {
            case 'height':
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal();
    });
    
}
getDinamicInformation('#height');
getDinamicInformation('#weight');
getDinamicInformation('#age');














}





export default calc;