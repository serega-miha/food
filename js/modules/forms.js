import { closeModal, openModal } from "./modal";
import { postData } from "../services/services";

function forms(formSelector) {

//forms==============================================

const forms = document.querySelectorAll(formSelector);
const message = {
    loading: 'img/form/spinner.svg',
    succes: 'Спасибо! скоро мы с вами свяжемся',
    failure: 'Что то пошло не так......'
};

forms.forEach(item => {
    bindPostData(item);
});




function bindPostData(form) {
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

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

   

       
        postData('http://localhost:3000/requests',json)
        
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
    openModal('.modal');

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
        closeModal('.modal');
    }, 4000);
}


fetch('http://localhost:3000/menu')
    // .then(data => data.json())
    // .then(res => console.log(res));








}



export default forms;