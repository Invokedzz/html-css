const randomMalename = ['Aaron', 'Agmund', 'Adebert', 'Adremar', 'Abraham', 'Bertegar', 'Craft', 'Lamond', 'Landulf', 'Laurence', 'Lauger', 'Leonard', 'James', 'Liutmar', 'Luke', 'Luther', 'Lautard', 'Mancius', 'Macduff', 'Macbeth', 'Magnus', 'Maelgwn', 'Maol', 'Robb', 'Mordecai', 'Otto', 'Olaf', 'Oliver', 'Orm', 'Oswin', 'Otrad', 'Ortwin', 'Patrick', 'Paul', 'Pax', 'Peter'];

const randomFemalename = ['Cassian', 'Frederica', 'Felicia', 'Grace', 'Hildeberta', 'Honora', 'Hermana', 'Hilderada', 'Ida', 'Idalia', 'Justa', 'Katherin', 'Laria', 'Louisa', 'Laurencia', 'Leona', 'Luthera', 'Lydia', 'Lucretia', 'Leah', 'Lena', 'Meliora', 'Michaela', 'Mary', 'Maria', 'Magdalene', 'Marina', 'Osanna', 'Paradisa', 'Pacifica', 'Penelope', 'Quiteria', 'Quintana', 'Petra'];

const randomNickname = ['Ator', 'The Wild', 'The Bald', 'The Fat', 'The Small', 'Cave', 'Frambolt', 'The Wake', 'Sot', 'The Black', 'Rot', 'The Englishman', 'Sterre', 'The Whelp', 'Grim', 'The Tall', 'Barn', 'Frost', 'The Harper', 'Bigga', 'The Man of Esgar', 'Wisce', 'Gleawbeorht', 'Lang', 'Bellrope', 'The White', 'Spuda', 'The Pig', 'Croc', 'The Meadmaker', 'Fifteen Acres', 'Wombstring', 'The Steersman', 'Bucstan', 'Haldein', 'Cida', 'The Red'];

const rpgClasses = ['Cleric', 'Barbarian', 'Alchemist', 'Sorcerer', 'Wizard', 'Berserker', 'Summoner', 'Paladin', 'Bard', 'Fighter', 'Archer', 'Warrior', 'Necromancer', 'Knight', 'Rogue', 'Battle Mage', 'White Mage', 'Red Mage', 'Engineer', 'Monk', 'Beastmaster', 'Jester'];

const rpgRaces = ['Elf', 'Dwarf', 'Orc', 'Human', 'Centaur', 'Gnome', 'Dragonborn', 'Troll', 'Giant', 'Fairy', 'Lizardman', 'Gnoll', 'Minotaur', 'Pixie', 'Dark Elf'];

const randomHair = ['Buzz cut', 'Bowl cut', 'Crew cut', 'Mullet', 'Curly', 'Faux Hawk', 'French crop', 'Butch cut', 'Low fade', 'Curly fringe', 'Short curly quiff', 'Textured pompadour fade', 'Curly bangs', 'Wolf cut', 'Long pixie haircut', 'Messy Shaggy', 'Blunt lob', 'Blunt bangs', 'Bold pixie', 'Layered hair', 'Blonde bob', 'Butterfly cut', 'Middle part', 'Asymmetrical bangs'];

const randomFace = ['Square', 'Round', 'Heart Face shape', 'Triangle', 'Oval', 'Diamond', 'Pear', 'Oblong', 'Rectangle', 'V-Triangle', 'A-Triangle', 'Heptagon'];

const randomEyecolor = ['Brown Eyes', 'Blue Eyes', 'Hazel Eyes', 'Amber Eyes', 'Gray Eyes', 'Green Eyes'];

const randomWeight = [];

const randomSkin = [];

const beardType = ['Chevron moustache', 'Dali moustache', 'English moustache', 'Fu Manchu', 'Handlebar moustache', 'Horseshoe moustache', 'Hungarian moustache', 'Imperial moustache', 'Lampshade moustache', 'Pencil moustache', 'Pyramid moustache', 'Walrus moustache', 'Zapata moustache', 'The Zappa', 'Goatee', 'Goat patch', 'Balbo', 'Anchor beard', 'Soul patch', 'Van Dyke beard', 'Verdi beard', 'Garibaldi beard', 'Folkbeard', 'Sideburns', 'Sidewhiskers', 'Shenandoah', 'Neckbeard', 'Mutton chops', 'Circle beard', 'Hulihee'];

function getRandomvalue (maximum) {
    return (Math.floor(Math.random() * maximum));
}
function getRandomnameM () {
    const randomNameM = getRandomvalue(randomMalename.length);
    const randomNicknameA = getRandomvalue(randomNickname.length);
     return `${randomMalename[randomNameM]}, ${randomNickname[randomNicknameA]}`;
}
function getRandomnameF () {
    const randomNameF = getRandomvalue(randomFemalename.length);
    const randomNicknameB = getRandomvalue(randomNickname.length);
    return `${randomFemalename[randomNameF]}, ${randomNickname[randomNicknameB]}`;
}
function getRandomRC () {
    const randomRaces = getRandomvalue(rpgRaces.length);
    const randomClasses = getRandomvalue(rpgClasses.length);
    return `${rpgClasses[randomClasses]}: ${rpgRaces[randomRaces]}`;
}
function setRandomM () {
    const generating = document.querySelector('.elements');
    const htmlnamem = document.createElement('div');
    htmlnamem.classList.add('result');
    htmlnamem.innerHTML = getRandomnameM();
    generating.appendChild(htmlnamem);
}
function eraseText () {
    const msg = document.querySelectorAll('.result');
    msg.forEach(msg => {
        msg.remove();
    });
}
function setRandomF () {
    const generating2 = document.querySelector('.elements2');
    const htmlnamef = document.createElement('div');
    htmlnamef.classList.add('result');
    htmlnamef.innerHTML = getRandomnameF();
    generating2.appendChild(htmlnamef);
}
function setRandomRC () {
    const generating3 = document.querySelector('.elements3');
    const htmlnamerc = document.createElement('div');
    htmlnamerc.classList.add('result');
    htmlnamerc.innerHTML = getRandomRC();
    generating3.appendChild(htmlnamerc);
}
const btnclick = document.querySelector('.generate');
btnclick.addEventListener('click', function () {
    eraseText();
    setRandomM();
});
const btnclickf = document.querySelector('.generate2');
btnclickf.addEventListener('click', function () {
    eraseText();
    setRandomF();
});
const btnclickrc = document.querySelector('.generate3');
btnclickrc.addEventListener('click', function () {
    eraseText();
    setRandomRC();
});