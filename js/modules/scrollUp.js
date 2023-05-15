function scrollUp() {
   

    //scroll button UP================================================

    const btnTop = document.querySelector('.btn-top');
    const calcBtn = document.querySelector('.calculating__field');

    btnTop.addEventListener('click', function () {
        // document.documentElement.scrollTop = 0;
        console.log('privet');
        calcBtn.scrollIntoView({behavior: "smooth"});
        
        // window.scrollTo({
        //     calcBtn,
        //     behavior: "smooth",
        // });
    })






}




export default scrollUp;