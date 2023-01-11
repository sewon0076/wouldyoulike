// 스크롤하면 scrollBtn실행
// window.addEventListener("scroll", (event) => {
//     // scrollBtn();
//     spacescroll();
// });
// function spacescroll() {
//     let spaceship = document.querySelector("#spaceship");
//     let sec1 = document.querySelector(".sec1");
//     let sec2 = document.querySelector(".sec2");
//     let mainPage = document.querySelector(".mainPage_wrap");
//     let spaceUp = -300 + window.pageYOffset * 5;

//     console.log("spaceDown" + spaceUp);
//     if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
//         // console.log(window.pageYOffset);
//         // console.log("hi" + window.scrollY);
//         spaceship.style.bottom = spaceUp + "px";
//         // let y = (spaceship.style.bottom = `${window.pageYOffset}`);
//         // console.log(spaceship);
//     } else {
//         let spaceDown = spaceUp + window.pageYOffset;
//         spaceship.style.bottom = spaceDown + "px";
//     }
//     // let sec1H = sec1.getBoundingClientRect;
//     console.log(window.pageYOffset);
//     if (window.pageYOffset < 1900) {
//         // sec1.classList.add("fixed");
//         mainPage.classList.add("fixed");
//         mainPage.style.top = 100 + "px";
//         // sec2.classList.add("fixed");
//         // sec2.style.top = sec1.innerHeight;
//     } else {
//         mainPage.classList.remove("fixed");
//         mainPage.style.top = 1743 + "px";
//     }
// }
// ================================counter
window.onload = function () {
    timers();
    setInterval(timers, 1000);
};
function timers() {
    timer_penumbral();
    timer_Large();
    timer_Partial();
    timer_Meteor();
}
function timer_penumbral() {
    let day = document.querySelector("#dayP");
    let hours = document.querySelector("#hourP");
    let minutes = document.querySelector("#minuteP");
    let seconds = document.querySelector("#secondP");

    let today = new Date();
    let dday = new Date(2023, 05, 06, 00, 12);
    var gap = dday.getTime() - today.getTime();
    var dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var dHours = Math.ceil((gap % (1000 * 60 * 24)) / (1000 * 60 * 60));
    var dMinute = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var dSeconds = Math.ceil((gap % (1000 * 60)) / 1000);

    day.innerHTML = dDay;
    hours.innerHTML = dHours;
    minutes.innerHTML = dMinute;
    seconds.innerHTML = dSeconds;
}
function timer_Large() {
    let day = document.querySelector("#dayLarge");
    let hours = document.querySelector("#hourLarge");
    let minutes = document.querySelector("#minuteLarge");
    let seconds = document.querySelector("#secondLarge");

    let today = new Date();
    let dday = new Date(2023, 08, 31);
    var gap = dday.getTime() - today.getTime();
    var dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var dHours = Math.ceil((gap % (1000 * 60 * 24)) / (1000 * 60 * 60));
    var dMinute = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var dSeconds = Math.ceil((gap % (1000 * 60)) / 1000);

    day.innerHTML = dDay;
    hours.innerHTML = dHours;
    minutes.innerHTML = dMinute;
    seconds.innerHTML = dSeconds;
}
function timer_Partial() {
    let day = document.querySelector("#dayPartial");
    let hours = document.querySelector("#hourPartial");
    let minutes = document.querySelector("#minutePartial");
    let seconds = document.querySelector("#secondPartial");

    let today = new Date();
    let dday = new Date(2023, 10, 29, 04, 34, 30);
    var gap = dday.getTime() - today.getTime();
    var dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var dHours = Math.ceil((gap % (1000 * 60 * 24)) / (1000 * 60 * 60));
    var dMinute = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var dSeconds = Math.ceil((gap % (1000 * 60)) / 1000);

    day.innerHTML = dDay;
    hours.innerHTML = dHours;
    minutes.innerHTML = dMinute;
    seconds.innerHTML = dSeconds;
}
function timer_Meteor() {
    let day = document.querySelector("#dayMeteor");
    let hours = document.querySelector("#hourMeteor");
    let minutes = document.querySelector("#minuteMeteor");
    let seconds = document.querySelector("#secondMeteor");

    let today = new Date();
    let dday = new Date(2023, 12, 15, 04, 00, 03);
    var gap = dday.getTime() - today.getTime();
    var dDay = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var dHours = Math.ceil((gap % (1000 * 60 * 24)) / (1000 * 60 * 60));
    var dMinute = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var dSeconds = Math.ceil((gap % (1000 * 60)) / 1000);

    day.innerHTML = dDay;
    hours.innerHTML = dHours;
    minutes.innerHTML = dMinute;
    seconds.innerHTML = dSeconds;
}
function hoverChange(){
    let change_btn = document.querySelectorAll('.change_btn');
    let iconP = document.querySelectorAll('.iconP');
    for(let i=0; i<change_btn.length; i++){
        
        change_btn[i].addEventListener("mouseover",(e)=>{
            for(let j=0; j<iconP.length; j++){
                if (i == j) {
                    iconP[j].classList.remove("plus");
                    iconP[j].classList.add("direction");
                } else {
                    iconP[j].classList.add("plus");
                    iconP[j].classList.remove("direction");
                }
            }
        }
        )
       
        
    };
    for(let i=0; i<change_btn.length; i++){
        change_btn[i].addEventListener("mouseout",(e)=>{
            for(let j=0; j<iconP.length; j++){
                iconP[j].classList.add("plus");
                iconP[j].classList.remove("direction");
            }
        }
        )
       
        
    };

};
hoverChange();
function sec4_tap() {
    let taps = document.querySelectorAll(".c_list_tap");
    let contents = document.querySelectorAll(".counter_wrap");
    let iconP = document.querySelectorAll('.iconP');
    for (let i = 0; i < taps.length; i++) {
        taps[i].addEventListener("click", (e) => {
            for (j = 0; j < contents.length; j++) {
                console.log(i);
                contents[j].classList.remove("active");
                taps[j].classList.remove("active");
                for(let p=0;p<iconP.length; p++){
                    if (i == j) {
                        iconP[j].classList.remove("plus");
                        iconP[j].classList.add("direction");
                    } else {
                        iconP[j].classList.add("plus");
                        iconP[j].classList.remove("direction");
                    }
                }
            }
            e.currentTarget.classList.toggle("active");
            contents[i].classList.add("active");
        });
    }
}
sec4_tap();
//due to mouseout event it disturb click event