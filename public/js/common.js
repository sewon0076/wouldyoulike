const He = window.innerHeight;
// 스크롤하면 scrollBtn실행
window.addEventListener("scroll", (event) => {
    scrollBtn();
});
//top버튼 클릭 구문
let top_btn = document.querySelector("#top_btn");
function topClick() {
    top_btn.addEventListener("click", (event) => {
        window.scrollTo(0, 0);
    });
}
let winWidth = window.innerWidth;
let topH = document.querySelector("#top_h");
function scrollBtn() {
    if (winWidth >= 834) {
        //768px보다 같거나 클때만 헤더를 줄여주는 구문
        if (document.body.scrollTop >= 300 || document.documentElement.scrollTop >= 300) {
            topH.classList.add("scroll");
        } else {
            topH.classList.remove("scroll");
        }
    } else if (winWidth < 834) {
        topH.classList.remove("scroll");
        // console.log(topH);
    }
    // 탑버튼 스크롤 구문
    if (document.body.scrollTop >= He || document.documentElement.scrollTop >= He) {
        // console.log("hi");
        top_btn.classList.add("active");
        topClick(); //top클릭 구문
    } else {
        top_btn.classList.remove("active");
    }
}
