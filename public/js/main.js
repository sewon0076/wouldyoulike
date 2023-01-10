//d'day timer구문
window.onload = function () {
    timer();
    setInterval(timer, 1000);
};
function timer() {
    let day = document.querySelector("#day");
    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");

    let today = new Date();
    let dday = new Date(2023, 04, 05);
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
// //main image change event
// let mainImgW = document.querySelector(".main_img_wrap");
// let mainImg = document.querySelector(".main_img");
// let imgWidth = mainImgW.offsetWidth;
// let imgHeight = mainImgW.offsetHeight;
// console.log(imgWidth);
// console.log(imgHeight);
// mainImgW.addEventListener("mousemove", imgChange);
// mainImgW.addEventListener("mouseleave", imageNoChange);
// function imgChange(e) {
//     let x = e.offsetX;
//     let y = e.offsetY;
//     if (x > 0 && x <= imgWidth * 0.5) {
//         if (y > 0 && y <= imgHeight * 0.5) {
//             mainImg.classList.add("rightTop");
//             mainImg.classList.remove("rightBottom");
//             mainImg.classList.remove("leftTop");
//             mainImg.classList.remove("leftBottom");
//         } else {
//             mainImg.classList.remove("rightTop");
//         }
//         if (y >= imgHeight * 0.5 && y < imgHeight) {
//             mainImg.classList.add("rightBottom");
//             mainImg.classList.remove("rightTop");
//             mainImg.classList.remove("leftTop");
//             mainImg.classList.remove("leftBottom");
//         } else {
//             mainImg.classList.remove("rightBottom");
//         }
//     } else if (x > imgWidth * 0.5 && x <= imgWidth) {
//         if (y > 0 && y <= imgHeight * 0.5) {
//             mainImg.classList.add("leftTop");
//             mainImg.classList.remove("rightBottom");
//             mainImg.classList.remove("rightTop");
//             mainImg.classList.remove("leftBottom");
//         } else {
//             mainImg.classList.remove("leftTop");
//         }
//         if (y >= imgHeight * 0.5 && y < imgHeight) {
//             mainImg.classList.add("leftBottom");
//             mainImg.classList.remove("rightBottom");
//             mainImg.classList.remove("rightTop");
//             mainImg.classList.remove("leftTop");

//             console.log(x, y);
//         } else {
//             mainImg.classList.remove("leftBottom");
//         }
//     }
//     // return;
// }
// function imageNoChange(e) {
//     console.log("leave");
//     mainImg.classList.remove("rightBottom");
//     mainImg.classList.remove("rightTop");
//     mainImg.classList.remove("leftTop");
//     mainImg.classList.remove("leftBottom");
// }
