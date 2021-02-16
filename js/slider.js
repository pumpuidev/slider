import pictures from './pic.js';


let slideIndex = 0;
let timer = null;

const slideShow = (delay, height) => {
    const imgContainer = document.querySelector('.section');
    const dotsContainer = document.querySelector('.dots');

    pictures.forEach((picture, index) => {
        const slide = document.createElement('div');
        slide.classList.add('box', 'fade');

        slide.addEventListener('mouseenter', (event) => {
            if (timer !== null) {
                clearTimeout(timer);
            }
        });

        slide.addEventListener('mouseleave', (event) => {
            startSlider(delay);
        });

        const image = document.createElement('img');
        image.src = picture.source;
        image.style.height = `${height}px`;

        const caption = document.createElement('div');
        caption.classList.add('text');
        caption.innerText = picture.caption;

        const numberText = document.createElement('div');
        numberText.classList.add('numPage');
        numberText.innerText = `${index + 1} / ${pictures.length}`;

        slide.appendChild(numberText);
        slide.appendChild(image);
        slide.appendChild(caption);

        imgContainer.appendChild(slide);

        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', (event) => {
            if (timer !== null) {
                clearTimeout(timer);
            }
            slideIndex = index + 1;
            startSlider(delay);
        });

        dotsContainer.appendChild(dot);

});

    const prevButton = document.querySelector('.prevBtn');
    const nextButton = document.querySelector('.nextBtn');

    prevButton.addEventListener('click', (event) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        slideIndex -= 1;
        startSlider(delay);
    });

    nextButton.addEventListener('click', (event) => {
        if (timer !== null) {
            clearTimeout(timer);
        }

        slideIndex += 1;
        startSlider(delay);
    });

    slideIndex = 1;
    startSlider(delay);

    
  }

    const startSlider = (delay) => {

        const slides = document.querySelectorAll('.box');
        const dots = document.querySelectorAll('.dot');

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex-1].style.display = 'block';
        dots[slideIndex-1].classList.add('active');

        timer = setTimeout(() => {
            slideIndex++;
            startSlider(delay);
        }, delay); 

  }


export {slideShow};