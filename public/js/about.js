// 스크롤하면 scrollBtn실행
window.addEventListener("scroll", (event) => {
    // scrollBtn();
    spacescroll();
});
function spacescroll() {
    let spaceship = document.querySelector("#spaceship");
    let sec1 = document.querySelector(".sec1");
    let sec2 = document.querySelector(".sec2");
    let mainPage = document.querySelector(".mainPage_wrap");
    let spaceUp = -300 + window.pageYOffset;
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        // console.log(window.pageYOffset);
        // console.log("hi" + window.scrollY);
        spaceship.style.bottom = spaceUp + "px";
        // let y = (spaceship.style.bottom = `${window.pageYOffset}`);
        // console.log(spaceship);
    } else {
        let spaceDown = spaceUp + window.pageYOffset;
        spaceship.style.bottom = spaceDown + "px";
    }
    // let sec1H = sec1.getBoundingClientRect;
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 100 && window.pageYOffset < 1000) {
        // sec1.classList.add("fixed");
        mainPage.classList.add("fixed");
        // sec2.classList.add("fixed");
        // sec2.style.top = sec1.innerHeight;
    } else {
        sec1.classList.remove("fixed");
        mainPage.classList.remove("fixed");
    }
}
