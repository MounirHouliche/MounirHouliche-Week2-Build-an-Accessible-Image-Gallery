const thumbnails = document.getElementById('thumbnails');
const displayContainer = document.getElementById('displayContainer');
const buttonPrev = document.getElementById('left');
const buttonNext = document.getElementById('right');


buttonPrev.textContent = '◀';
buttonNext.textContent = '▶';

const images = [
    {src:  'https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg', alt: 'Grass field'},
    {src:  'https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg', alt: 'Mountain in Rishikesh, India' },
    {src:  'https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg', alt: 'Palm trees in Fuvahmulah, Maldives'},
];

let currentIndex = 0;

function createThumbnails() {
    thumbnails.innerHTML = '';
    images.forEach((img, i) => {
        const t = document.createElement('img');
        t.src = img.src;
        t.alt = img.alt;       
        t.addEventListener('click', () => showImage(i));
        thumbnails.appendChild(t);
    });
}

function showImage(i) {
    if (i < 0 || i >= images.length) return;
    currentIndex = i;
    displayContainer.innerHTML = '';
    const big = document.createElement('img');
    big.src = images [i].src;
    big.alt = images [i].alt;
    displayContainer.appendChild(big);
}


buttonPrev.addEventListener('click', () => showImage(currentIndex - 1));
buttonNext.addEventListener('click', () => showImage(currentIndex + 1));


createThumbnails();
showImage(0);
