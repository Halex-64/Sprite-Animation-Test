var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var images = [];
images.length = 10;

for (var i = 1; i < images.length; i++) {
    images[i] = new Image();
    images[i].src = 'Walk (' + i.toString() + ').png'
}

var i = 1;
setInterval(function () {
    i++;
    if (i >= 10) {
        i = 1
    }
    c.drawImage(images[i], 100, 100, 100, 100)
    c.clearRect(0, 0, 100, 100);
}, 100)


const personagem = document.getElementById('personagem');
let posicaoHorizontal = 0;
let posicaoVertical = 0;
const step = 10;

function updatePersonagemPosition() {
    personagem.style.left = posicaoHorizontal + 'px';
    personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            posicaoVertical -= step;
            break;
        case 'ArrowDown':
            posicaoVertical += step;
            break;
        case 'ArrowLeft':
            posicaoHorizontal -= step;
            break;
        case 'ArrowRight':
            posicaoHorizontal += step;
            break;
    }

    updatePersonagemPosition();
});