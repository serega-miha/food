function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
  //tabs=====================================================
  const tabs = document.querySelectorAll(tabsSelector),
  tabsContent = document.querySelectorAll(tabsContentSelector),
  tabsParent = document.querySelector(tabsParentSelector);


function hideTabContent() {
  tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
  });

  tabs.forEach(tab => {
      tab.classList.remove(activeClass);
  });

};

function showTabContent(i = 0) {   //i=0 это выставляем i по умолчанию 0. если функция будет вызываться без аргуента то она сама подставит 0
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add(activeClass);

};


hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
  const target = event.target;


  if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
          if (target == item) {
              hideTabContent();
              showTabContent(i);
          }
      });
  }

});



}

export default tabs;