document.addEventListener("sliderChange", (event)=> {
    sliderTitle.innerHTML = sliderData[event.detail].title
    sliderDesc.innerHTML = sliderData[event.detail].desc
})



// SLIDER 
const sliderTitle = document.querySelector('.hero-title')
const sliderDesc = document.querySelector('.hero-descr')
const sliderData = [
    {title: "Гарантия надежности", desc: "Выбирайте Сибирьугольтрейд -  получайте лучшие условия и высокое качество продукции!"},
    {title: "Уже 10 лет в отрасли", desc: "Мы компания с надежной историей, шагаем в ногу со временем"},
    {title: "Лучшие цены на рынке", desc: "Мы предоставляем клиентам оптимальные условия сотруничества "}
]

sliderTitle.innerHTML = sliderData[0].title
sliderDesc.innerHTML = sliderData[0].desc

//TABS
const allTabs = document.querySelectorAll(".tabs__btn")
allTabs.forEach(element => {
    element.addEventListener('click', tabClick)
})
const tabsTitle = document.querySelector('.tabs__title')
const tabsDesc = document.querySelector('.tabs__text')

const tabData = [
    {
        "title" : "Консультация эксперта", 
        "desc": "У Вас появились вопросы по поставляемым маркам угля, стоимости, срокам и объеме отгрузки? Позвоните нам или закажите обратный звонок, наши эксперты проконсультируют Вас в любое время. Компания Сибирьугольтрейд на рынке с 2013 года, за это время мы накопили огромный опыт сотрудничества с компаниями России, Европы и Азии. Знаем потребности наших клиентов и подходим индивидуально к каждому бизнесу. Сделаем так, как принято на Вашем предприятии: перед заключением договора уточняем бизнес-процессы и предлагаем оптимальное решение. Весь отгружаемый уголь и нефтепродукты сертифицируются производителем и имеют высокое качество. При необходимости организуем видео-конференц связь на которую пригласим представителей производителя, если потребуется, то согласуем выезд нашей делегации к Вам на предприятие",
        "img" : "url(../img/howconsuk.jpg)",
        "img1024" : "url(../img/how-pic-1024-1.png)"
    },
    {
        "title" : "Оформление договора", 
        "desc": "Вы познакомились с нашей командой теперь необходимо в кротчайшие сроки заключить договор? Опытный юрист подготовит и согласует все этапы сделки. Сибирьугольтрейд имеет навык совместной деятельности не только с российскими и европейскими компаниями, но и с предприятиями Китая, только за последний год заключили более 6 контрактов. При заключении договора на первом этапе мы собираем всю имеющуюся информацию об участниках сделки, описываем структуру договора, согласовываем со всеми сторонами. Далее, прописываем все условия, при необходимости вносим корректировки и выходим на этап заключения договора. Сопровождаем договор до выполнения всех условий, специалист контролирует и регулирует все спорные моменты. Финальная стадия – процедура продления либо закрытия договора",
        "img" : "url(../img/howconsuk2.png)",
        "img1024" : "url(../img/how-pic-1024-2.png)"
    },
    {
        "title" : "Отгрузка продукции", 
        "desc": "После оформления договора и согласования всех условий мы планируем поставку в соответствии с требованиями клиента (в том числе оформляем заявку по форме ГУ-12).Для отслеживания статуса движения груза в режиме реального времени, мы разработали инновационный сервис для клиентов.Помимо информации о движении груза и сроках доставки, в сервисе отслеживания отправлений сотрудники могут подгружать и обмениваться всеми необходимыми документами. Для обеспечения простоты и удобства использования портала, мы создали личный кабинет под несколько ролей с разными правами доступа и отображением информации: руководитель, менеджер отдела снабжения и сотрудник. Ваш персональный менеджер предоставит Вам логин и пароль для доступа к личному кабинету, в который можно зайти через официальный сайт Сибирьугольтрейд",
        "img" : "url(../img/howconsuk3.jpg)",
        "img1024" : "url(../img/how-pic-1024-3.png)"
    }
]

let activeTab = 0;
window.onresize = (event) => {changeTab(activeTab)}
changeTab(0)

//ACCORDIONS
const allAccordions = document.querySelectorAll('.accordion-title')
allAccordions.forEach((element) => {
    element.addEventListener('mouseover', (event)=>{
        if (event.target.querySelector('.accordion-title-img'))
            event.target.querySelector('.accordion-title-img').style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='25' cy='25' rx='25' ry='25' fill='%234B8B3B'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z' fill='white'/%3E%3C/svg%3E%0A\")"
    })
    element.addEventListener('mouseleave', (event)=>{
        if (event.target.querySelector('.accordion-title-img'))
            event.target.querySelector('.accordion-title-img').style.backgroundImage = "url(\"data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='25' cy='25' rx='25' ry='25' fill='%23CACACA'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M25.0571 24.0571L25.0571 9L25.9429 9L25.9429 24.0571L33.8835 24.0571L41 24.0571L41 24.9429L25.9429 24.9429L25.9429 40L25.0571 40L25.0571 24.9429L10 24.9429L10 24.0571L25.0571 24.0571Z' fill='black'/%3E%3C/svg%3E%0A\")"
    })
})


function tabClick(event){
    allTabs[activeTab].classList.remove("active")
    activeTab = event.target.innerHTML.split(' ')[0] - 1
    console.log(activeTab)
    allTabs[activeTab].classList.add("active")
    changeTab(activeTab)
}

function changeTab(newTab){
    const root = document.querySelector(":root")
    //Ставим новую картинку
    if (window.matchMedia('(min-width: 1024px)').matches &&
        (window.matchMedia('(max-width: 1700px )').matches)){
        root.style.setProperty("--tab-img", tabData[newTab].img1024);
    }
    else 
        root.style.setProperty("--tab-img", tabData[newTab].img);
        
    tabsTitle.innerHTML = tabData[newTab].title
    tabsDesc.innerHTML = tabData[newTab].desc
}