let character = document.querySelector('.character');
let terrain = document.querySelector('.block');
let blueTerrain = document.querySelector('.block2');
let isJumping = false;

function jumpBlock() {
    if (!isJumping) {
        setTimeout(() => {
            isJumping = true;
            character.classList.add('animate');
        }, 50);
    }
    setTimeout(function () {
        character.classList.remove('animate');
        isJumping = false;
    }, 500);
};

document.addEventListener('keydown', function (e) {
    if ((e.code === 'Space' || e.code === 'ArrowUp') && !isJumping) {
        jumpBlock();
    }
});

let checkIfdead1 = function () {
    let topChar = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(terrain).getPropertyValue('left'));
    return { topChar, blockLeft };
};

let checkIfdead2 = function () {
    let blueLeft = parseInt(window.getComputedStyle(blueTerrain).getPropertyValue('bottom'));
    return { blueLeft };
};

let checkCharacter = function () {
    let topChar = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    return { topChar };
};

 let checkDead = setInterval(function () {
    let redBlock = checkIfdead1();
    let blueBlock = checkIfdead2();
    let characterHitbox = checkCharacter();

    // Exemplo de verificação de colisão
    if (redBlock.blockLeft < 60 && redBlock.blockLeft > 0 && characterHitbox.topChar >= 300) alert('Você morreu!');

    if (blueBlock.blueLeft < 180 && blueBlock.blueLeft > 0 && characterHitbox.topChar >= 300) alert('You died!') 
}, 10);

