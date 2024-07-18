const randomMalename = ['Aaron', 'Agmund', 'Adebert', 'Adremar', 'Abraham', 'Bertegar', 'Craft', 'Lamond', 'Landulf', 'Laurence', 'Lauger', 'Leonard', 'James', 'Liutmar', 'Luke', 'Luther', 'Lautard', 'Mancius', 'Macduff', 'Macbeth', 'Magnus', 'Maelgwn', 'Maol', 'Robb', 'Mordecai', 'Otto', 'Olaf', 'Oliver', 'Orm', 'Oswin', 'Otrad', 'Ortwin', 'Patrick', 'Paul', 'Pax', 'Peter'];

const randomFemalename = ['Cassian', 'Frederica', 'Felicia', 'Grace', 'Hildeberta', 'Honora', 'Hermana', 'Hilderada', 'Ida', 'Idalia', 'Justa', 'Katherin', 'Laria', 'Louisa', 'Laurencia', 'Leona', 'Luthera', 'Lydia', 'Lucretia', 'Leah', 'Lena', 'Meliora', 'Michaela', 'Mary', 'Maria', 'Magdalene', 'Marina', 'Osanna', 'Paradisa', 'Pacifica', 'Penelope', 'Quiteria', 'Quintana', 'Petra'];

const randomNickname = ['Ator', 'The Wild', 'The Bald', 'The Fat', 'The Small', 'Cave', 'Frambolt', 'The Wake', 'Sot', 'The Black', 'Rot', 'The Englishman', 'Sterre', 'The Whelp', 'Grim', 'The Tall', 'Barn', 'Frost', 'The Harper', 'Bigga', 'The Man of Esgar', 'Wisce', 'Gleawbeorht', 'Lang', 'Bellrope', 'The White', 'Spuda', 'The Pig', 'Croc', 'The Meadmaker', 'Fifteen Acres', 'Wombstring', 'The Steersman', 'Bucstan', 'Haldein', 'Cida', 'The Red'];

const rpgClasses = ['Cleric', 'Barbarian', 'Alchemist', 'Sorcerer', 'Wizard', 'Berserker', 'Summoner', 'Paladin', 'Bard', 'Fighter', 'Archer', 'Warrior', 'Necromancer', 'Knight', 'Rogue', 'Battle Mage', 'White Mage', 'Red Mage', 'Engineer', 'Monk', 'Beastmaster', 'Jester'];

const rpgRaces = ['Elf', 'Dwarf', 'Orc', 'Human', 'Centaur', 'Gnome', 'Dragonborn', 'Troll', 'Giant', 'Fairy', 'Lizardman', 'Gnoll', 'Minotaur', 'Pixie', 'Dark Elf'];

const randomHair = ['Buzz cut', 'Bowl cut', 'Crew cut', 'Mullet', 'Curly', 'Faux Hawk', 'French crop', 'Butch cut', 'Low fade', 'Curly fringe', 'Short curly quiff', 'Textured pompadour fade', 'Curly bangs', 'Wolf cut', 'Long pixie haircut', 'Messy Shaggy', 'Blunt lob', 'Blunt bangs', 'Bold pixie', 'Layered hair', 'Blonde bob', 'Butterfly cut', 'Middle part', 'Asymmetrical bangs'];

const randomFace = ['Square', 'Round', 'Heart Face shape', 'Triangle', 'Oval', 'Diamond', 'Pear', 'Oblong', 'Rectangle', 'V-Triangle', 'A-Triangle', 'Heptagon'];

const randomEyecolor = ['Brown', 'Blue', 'Hazel', 'Amber', 'Gray', 'Green'];

const randomSkin = ['Blue', 'Green', 'Pink', 'Black', 'Yellow', 'Dark Purple', 'Brown', 'Peach', 'Red', 'Orange', 'Dark Green', 'Light Blue', 'Lime Green', 'Aqua', 'Arctic White'];

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

function getRandomHair () {
    const randomH = getRandomvalue(randomHair.length);
    return `Hair Style: ${randomHair[randomH]}`;
}

function getRandomEye () {
    const randomEye = getRandomvalue(randomEyecolor.length);
    return `Eye color: ${randomEyecolor[randomEye]}`;
}

function getRandomFace () {
    const randomFacial = getRandomvalue(randomFace.length);
    return `Face: ${randomFace[randomFacial]}`;
}

function getRandombeard () {
    const randomBee = getRandomvalue(beardType.length);
    return `Beard: ${beardType[randomBee]}`;
}

function getRandomcolor () {
    const randomCo = getRandomvalue(randomSkin.length);
    return `SkinColor: ${randomSkin[randomCo]}`;
}

function setfullAppM (hair, eye, face, beard, skin) {
   hair = getRandomHair();
   eye = getRandomEye();
   face = getRandomFace();
   beard = getRandombeard();
   skin = getRandomcolor(); 
   fullHair(hair);
   fullEye(eye);
   fullFace(face);
   fullBeard(beard);
   fullSkin(skin);
}

function setfullAppF (hair, eye, face, skin) {
    hair = getRandomHair();
    eye = getRandomEye();
    face = getRandomFace();
    skin = getRandomcolor();
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

function fullHair (hair) {
    let generating4 = document.querySelector('.elements4');
    const htmlname = document.createElement('div');
    htmlname.classList.add('resultH');
    htmlname.classList.add('result');
    htmlname.innerHTML = hair;
    generating4.appendChild(htmlname);
}

function fullEye (eye) {
    let generating4 = document.querySelector('.elements4');
    const htmlname2 = document.createElement('div');
    htmlname2.classList.add('resultE');
    htmlname2.classList.add('result');
    htmlname2.innerHTML = eye;
    generating4.appendChild(htmlname2);
}

function fullFace (face) {
    let generating4 = document.querySelector('.elements4');
    const htmlname3 = document.createElement('div');
    htmlname3.classList.add('resultF');
    htmlname3.classList.add('result');
    htmlname3.innerHTML = face;
    generating4.appendChild(htmlname3);
}

function fullBeard (beard) {
    let generating4 = document.querySelector('.elements4');
    const htmlname4 = document.createElement('div');
    htmlname4.classList.add('resultB');
    htmlname4.classList.add('result');
    htmlname4.innerHTML = beard;
    generating4.appendChild(htmlname4);
}

function fullSkin (skin) {
    let generating4 = document.querySelector('.elements4');
    const htmlname5 = document.createElement('div');
    htmlname5.classList.add('resultS');
    htmlname5.classList.add('result');
    htmlname5.innerHTML = skin;
    generating4.appendChild(htmlname5);
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

const btnclickfullM = document.querySelector('.generateM');
btnclickfullM.addEventListener('click', function () {
    eraseText();
    setfullAppM();
}); 

const btnclickfullF = document.querySelector('.generateF');
btnclickfullF.addEventListener('click', function () {
    eraseText();
    setfullAppF();
});