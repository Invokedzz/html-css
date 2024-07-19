let character = document.querySelector('.character');
let terrain = document.querySelector('.block');
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

let checkIfdead = function () {
    let topChar = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(terrain).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && topChar >= 130) alert('U died');
};

