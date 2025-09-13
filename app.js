const thumbnails = document.getElementById('thumbnails');
const displayContainer = document.getElementById('displayContainer');
const buttonPrev = document.getElementById('left');
const buttonNext = document.getElementById('right');


buttonPrev.textContent = '◀';
buttonNext.textContent = '▶';

const images = [
    {src:  'https://images.pexels.com/photos/212324/pexels-photo-212324.jpeg', alt: 'Grass field'},
    {src:  'https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg', alt: 'Mountain in Rishikesh, India' },
    {src:  'https://www.pexels.com/es-es/foto/cuerpo-de-agua-bajo-cielos-azules-y-blancos-1533720/', alt: 'Palm trees in Fuvahmulah, Maldives'},
];

let currentIndex = 0;

function createThumbnails() {
    thumbnails.innerHTML = '';
    images.forEach((img, i) => {
        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = img.src;
        thumbnailImg.alt = img.alt;
        thumbnailImg.addEventListener('click', () => showImage(i));
        thumbnails.appendChild(thumbnailImg);
    });
}

function showImage(i) {
    if (i < 0 || i >= images.length) return;
    currentIndex = i;
    displayContainer = '';
    const big = document.createElement('img');
    big.src = images [i].src;
    big.alt = images [i].alt;
    displayContainer.appendChild(big);
}

createThumbnails();
showImage(0);
