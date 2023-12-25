// 轮播图

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// 学习路线

// 获取时间轴中的所有阶段
const timelineStages = document.querySelectorAll('.timeline-stage');

// 当用户滚动时检测阶段是否在视窗内
window.addEventListener('scroll', () => {
    timelineStages.forEach((stage) => {
        if (isElementInViewport(stage)) {
            stage.classList.add('visible'); // 添加类以显示文本
        }
    });
});

// 检测元素是否在视窗内的函数
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
