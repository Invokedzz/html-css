let character = document.querySelector('.character');
let terrain = document.querySelector('.block');
function jumpBlock () {
    if (character.classList !== 'animate') character.classList.add('animate');
    setTimeout(function () {
        character.classList.remove('animate');
    }, 500)
};
let jumping = document.addEventListener('keydown', function (e) {
        if (e.code === 'Space') jumpBlock();
        if (e.code === 'ArrowUp') jumpBlock();
});
let checkIfdead = setInterval(function () {
    let topChar = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(terrain).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && topChar >= 130) alert('Você morreu');
}, 10); 