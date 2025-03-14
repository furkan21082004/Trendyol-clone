// Timer zamanlayıcı oluşturma

document.addEventListener("DOMContentLoaded", function () {
    function startTimer(durationInSeconds) {
        let timers = document.querySelectorAll(".timer");
        let remainingTime = durationInSeconds;

        function updateDisplay() {
            let hours = Math.floor(remainingTime / 3600);
            let minutes = Math.floor((remainingTime % 3600) / 60);
            let seconds = remainingTime % 60;

            // Sayıları iki haneli olarak göster
            timers[0].textContent = String(hours).padStart(2, "0");
            timers[1].textContent = String(minutes).padStart(2, "0");
            timers[2].textContent = String(seconds).padStart(2, "0");
        }

        function countdown() {
            if (remainingTime <= 0) {
                remainingTime = durationInSeconds; 
            } else {
                remainingTime--;
            }
            updateDisplay();
        }

        updateDisplay(); 
        setInterval(countdown, 1000); 
    }

    startTimer(3 * 60 * 60); 
});

// timer bitiş


// Slider başlangıç

document.addEventListener("DOMContentLoaded", function () {
    const sliderContent = document.querySelector(".slider-content");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    const itemWidth = 128; 
    const visibleItems = 3;
    let currentIndex = 0;

    function updateSliderPosition() {
        const translateX = -currentIndex * itemWidth;
        sliderContent.style.transform = `translateX(${translateX}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < sliderContent.children.length - visibleItems) {
            currentIndex += 3;
            updateSliderPosition();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex -= 3;
            updateSliderPosition();
        }
    });
});


// card


let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slider .card').length;
const slider = document.querySelector('.slider');
const visibleCards = 3; 

function moveSlide(direction) {
    const cardWidth = document.querySelector('.card').offsetWidth + 20; 
    const maxIndex = totalSlides - visibleCards;

    if (direction === 1 && currentIndex < maxIndex) {
        currentIndex++;
    } else if (direction === -1 && currentIndex > 0) {
        currentIndex--;
    }

    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}




// yukarı taşıma butonu

const yukariCikBtn = document.getElementById("yukariCik");

        window.onscroll = function() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                yukariCikBtn.style.display = "block";
            } else {
                yukariCikBtn.style.display = "none";
            }
        };

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

