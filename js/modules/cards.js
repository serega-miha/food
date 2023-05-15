import {getResource} from '../services/services';

function cards() {
//menu cards===============================================================================================================
class MenuCard {
    constructor(src, alt, title, text, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }
  
    changeToUAH() {
      this.price = +this.price * this.transfer;
    }
  
    render() {
      const element = document.createElement('div');

      if(this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
      
                <div class="menu__item-img">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="menu__item-body">
                <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.text}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
              
              `;
    //   element.classList.add('menu__item');
      this.parent.append(element);
    }
  }



// getResource('http://localhost:3000/menu')
//     .then(data => {
//         data.forEach(({img, altimg, title,descr, price}) =>{
//             new MenuCard(img, altimg, title,descr, price, '.menu .container').render();
//         })
//     });

axios.get('http://localhost:3000/menu')
.then(data =>{
    data.data.forEach(({img, altimg, title,descr, price}) =>{
        new MenuCard(img, altimg, title,descr, price, '.menu .container').render();
    });
});

  
  
//   new MenuCard(
//     "img/tabs/vegy.jpg",
//     "net",
//     'Меню "Фитнес"',
//     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
//     9,
//     '.menu .container'
//   ).render();
  
//   new MenuCard(
//     "img/tabs/elite.jpg",
//     "net",
//     'Меню “Премиум”',
//     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     14,
//     '.menu .container'
//   ).render();
  
//   new MenuCard(
//     "img/tabs/post.jpg",
//     "net",
//     'Меню "Постное"',
//     'В меню “Премиум” используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
//     12,
//     '.menu .container'
//   ).render();







}

export default cards;