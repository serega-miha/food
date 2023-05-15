
function openModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('show', 'fade');
    modalWindow.classList.remove('hide', 'fadeOut');
  
    document.body.style.overflow = 'hidden';
}







function closeModal(modalSelector) {
    const modalWindow = document.querySelector(modalSelector);
    modalWindow.classList.add('hide', 'fadeOut');
    modalWindow.classList.remove('show', 'fade');
 
    document.body.style.overflow = '';
}



function modal(triggerSelector, modalSelector) {
//modal window================================================================

    //сначала устанавливаем data-modal в HTMLчто бы искать не по классам а по дата атрибуту


    const modalBtn = document.querySelectorAll(triggerSelector),
        modalWindow = document.querySelector(modalSelector);
        // modalClose = document.querySelector('[data-close]');

        modalBtn.forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector));
        });

    // modalClose.addEventListener('click', closeModal);

    modalWindow.addEventListener('click', (e) => {
        if (e.target === modalWindow || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modalWindow.classList.contains('show')) {
            closeModal(modalSelector);
        }
    })



    // const modalTimeId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1 ) {
            openModal(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);





}




export default modal;
export {closeModal};
export {openModal};