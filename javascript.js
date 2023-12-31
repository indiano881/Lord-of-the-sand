//arrays
const enemiesList = ["Ice ciclope", "Magma Titan", "Mad Oat Tree", "Stone troll", "Electro-dragon","Master of the sand"];
const natureElements=["ice","fire","wood","stone","electricity","sand"];
const possibleEncounter=["enemies","food/water","village","blacksmith"];
const weaponsList = ["sword","machete","knife","axe","shuriken"];
//seconda mano scudo o altra arma o magia
//characters of the story
let userCharacter = {name: undefined, nature_element: undefined, weapon:undefined, attack: 1, defense: 1, speed: 1, life: 10};
const iceCiclope= {name: "Bebis", nature_element: natureElements[0], attack: 1, defense: 1, speed: 1, life: 10};;
const magmaTitan= {name: "Vulcan", nature_element: natureElements[1], attack: 1, defense: 1, speed: 1, life: 10};
const madOatTree= {name: "Jek", nature_element: natureElements[2], attack: 1, defense: 1, speed: 1, life: 10};
const stoneTroll= {name: "Lukas", nature_element: natureElements[3], attack: 1, defense: 1, speed: 1, life: 10};
const electro_dragon= {name: "Saetta", nature_element: natureElements[4], attack: 1, defense: 1, speed: 1, life: 10};
const lordOfTheSand= {name: "Lord of the sand", nature_element: natureElements[5], attack: 1, defense: 1, speed: 1, life: 10};

//Regex
let patternName= /[A-Za-z]/i;
let patternElements= /^(ice|fire|wood|stone|electricity|sand)$/i;
let patternWeapons=/^(sword|machete|knife|axe|shuriken)$/i;
let patternPoints= /[0-9]/;

alert("***The 5 great spirits have freed an ancient demoniac crature!***\n***The lord of the sand is back! And want to destroy your world!***\n***Will you be able to save us?***");

const chooseCharacterName = () => {
    do {
        userCharacter.name=prompt("please choose name of you caracter");
        if (patternName.test(userCharacter.name)===false) {
            alert("Input not valid, please insert only letters")
        } else if (userCharacter.name===null) {
            alert("Empty or cancel button");
        }
    
    } while (userCharacter.name===null || patternName.test(userCharacter.name)===false)
}

const chooseCharacterElementAndWeapon = () => {
    do {
        userCharacter.nature_element=prompt("please choose element of you caracter\n"+ natureElements.join(" "));
        if (patternElements.test(userCharacter.nature_element)===false) {
            alert("Input not valid, please insert only elements")
        } else if (userCharacter.nature_element===null) {
            alert("Empty or cancel button");
        }
    
    } while (userCharacter.nature_element===null || patternElements.test(userCharacter.nature_element)===false)

    do {
        userCharacter.weapon=prompt("please choose weapon of you caracter\n"+ weaponsList.join(" "));
        if (patternWeapons.test(userCharacter.weapon)===false) {
            alert("Input not valid, please insert only elements")
        } else if (userCharacter.weapon===null) {
            alert("Empty or cancel button");
        }
    
    } while (userCharacter.weapon===null || patternWeapons.test(userCharacter.weapon)===false)
}

let skillPoints=15;
//fare skill points
const chooseCharacterSkills = (skillPoints) => {
    while (skillPoints!==0) {
        
            userCharacter.attack=parseInt(prompt("Point to attack "));
            skillPoints= skillPoints-userCharacter.attack;
        
            userCharacter.defense=parseInt(prompt("Point to defense "));
            skillPoints= skillPoints-userCharacter.defense;
        
            userCharacter.speed=parseInt(prompt("Point to speed "));
            skillPoints= skillPoints-userCharacter.speed;
        
            userCharacter.life=parseInt(prompt("Point to life "));
            skillPoints= skillPoints-userCharacter.life;
        
    } 
}
/*
||userCharacter.attack===null || patternPoints.test(userCharacter.attack) ||
    userCharacter.defense===null || patternPoints.test(userCharacter.defense) || userCharacter.speed===null || 
    patternPoints.test(userCharacter.speed)|| userCharacter.life===null || patternPoints.test(userCharacter.life
*/
const introStory = () => {
    alert(`In the desert of Mohaaval, a banned being is meditating.\n
    ${userCharacter.name}, also known as Ronin of ${userCharacter.nature_element}, perceives a disturbance in the air!\n
    His ancient enemy ${enemiesList[5]} is again claiming his soul!\n Armed with is ${userCharacter.weapon} and his magic ${userCharacter.nature_element} powers decide to fight again!`);
    }

const displayPoints= () => {
    alert(`${userCharacter.name} ´s current point: \n
    attack : ${userCharacter.attack}\n
    defense : ${userCharacter.defense}\n
    speed : ${userCharacter.speed}\n
    life : ${userCharacter.life}`)
}

//encounters
const encounterGenerator = () => {
    //const possibleEncounter=["enemies","food/water","village","blacksmith"];
    randomEncounter= possibleEncounter[Math.floor(Math.random()*possibleEncounter.length)];
    if (randomEncounter===possibleEncounter[0]) {
        //enemies;
    } else if (randomEncounter===possibleEncounter[1]) {
        //food water;
    } else if (randomEncounter===possibleEncounter[2]) {
        //village;
    } else {
        //blacksmith-DONE
        alert(`During a cold day our hero ${userCharacter.name} meet a blacksmith`);
        let answer=prompt("Do you want to change your weapon or nature element powers?")
        answer === "yes" ? chooseCharacterElementAndWeapon() : `${userCharacter.name} proceed with his journey`; 
        
    }
}





chooseCharacterName();
chooseCharacterElementAndWeapon();
chooseCharacterSkills(skillPoints);
introStory();
displayPoints();
//game here
encounterGenerator();
/*
const playGame = () => {
    const characters = ["Fighter", "Ninja", "Wizard", "Amazon", "Necromancer"];
    const enemies = ["Dragon", "Goblin", "Devil", "Giant", "Demigorgon"];

    let newParty = Array.from(characters)

    while (newParty.length > 1) {
        newParty.forEach(character => console.log(`This is a brave ${character}`))
        let deadCharacter = newParty[Math.floor(Math.random() * newParty.length)]
        const enemy = enemies[Math.floor(Math.random() * enemies.length)]

        const chooseYourWeapon = customer => {
            let story = `The ${customer} enters the weapon shop and looks at what is available`;

            let weaponOfChoice;
            if (customer === "Fighter") {
                weaponOfChoice = "sword";
            } else if (customer === "Ninja") {
                weaponOfChoice = "throwing star"
            } else if (customer === "Wizard") {
                weaponOfChoice = "staff";
            } else if (customer === "Amazon") {
                weaponOfChoice = "javelin"
            } else {
                weaponOfChoice = "wand"
            }

            let choosingAWeapon = `The ${customer} sees a beautiful ${weaponOfChoice}. They pay for it in gold and leave the store`;

            return story + " " + choosingAWeapon;
        }

        newParty.forEach(character => console.log(chooseYourWeapon(character)))

        const monsterEncounter = enemy => {
            console.log(`Our brave party run into a ${enemy}! It looks very angry! It attacks!!`)
        }

        monsterEncounter(enemy);

        newParty.forEach(partyMember => console.log(`${partyMember} attacks the ${enemy}`))

        let characterOutcomes = newParty.map(character => {
            if (character === deadCharacter) {
                return `Unfortunately, ${character} was killed`
            }

            return `${character} has levelled up!`;
        })

        characterOutcomes.forEach(outcome => console.log(outcome));

        newParty = newParty.filter(partyMember => partyMember !== deadCharacter);

        /*
        let newParty = [];
        
        for (let i = 0; i < characters.length; i ++) {
            if (characters[i] !== deadCharacter) {
                newParty.push(characters[i])
            }
        }

        newParty.forEach(member => console.log(member));
    }

    newParty.forEach(winner => console.log(`${winner} is the only survivor! There can be only one.`))
}
*/
/*
let characters = ["Fighter", "Wizard", "Thief", "Archer"];
let monsters = ["Dragon", "Giant", "Demon", "Killer Rabbit"]
let username;
let characterClass;

const createCharacter = () => {
    username = prompt("Enter a name", "What should we call you?");
    characterClass = characters[Math.floor(Math.random() * characters.length)];
}

const characterIntroduction = () => {
    createCharacter();

    let body = document.querySelector("body");
    let characterBio = document.createElement("div");
    characterBio.innerHTML = `<p>Meet ${username}</p><p>${username} is a badass ${characterClass}</p>`;
    body.appendChild(characterBio)
}

const weapon = characterClass => {
    if (characterClass === "Fighter")
        return "sword";

    if (characterClass === "Wizard")
        return "staff";

    if (characterClass === "Thief")
        return "dagger";

    return "bow"
}

const characterSkill = characterClass => {
    let characterWeapon = weapon(characterClass);

    let body = document.querySelector("body");
    let characterSkillDiv = document.createElement("div");
    characterSkillDiv.textContent = `${username} has a very nice ${characterWeapon}. They like to use it a lot`;
    body.appendChild(characterSkillDiv);
}

const monsterBattle = () => {
    let monster = monsters[Math.floor(Math.random() * monsters.length)];
    let roll = Math.floor(Math.random() * 3) + 1;

    let body = document.querySelector("body");
    let monsterDiv = document.createElement("div");
    let monsterDescription = document.createElement("p");
    let monsterFight = document.createElement("p");

    monsterDescription.textContent = `Oh no! ${username} went for a walk and ran into a ${monster}! It looks really angry. It attacks!!!`;
    let outcome = roll === 1 ? `${username} uses their weapon and kills the fierce ${monster}`
                             : roll === 2 ? `${username} uses their weapon and the ${monster} runs away` 
                             : `The ${monster} eats ${username}`;
    
    monsterFight.textContent = outcome;

    monsterDiv.appendChild(monsterDescription);
    monsterDiv.appendChild(monsterFight);
    body.appendChild(monsterDiv);
}

characterIntroduction();
characterSkill(characterClass);
monsterBattle();
*/


/*
const createUserCharacter = () => {
    userCharacter.name=prompt("please choose name of you caracter");
    userCharacter.nature_element=prompt("Choose which element will be yours");
    
    let availablePoints= 15;
    while (availablePoints!==0) {
        userCharacter.attack=parseInt(prompt("You have " + availablePoints + " left. How many you want to give to attack?"));
        userCharacter.defense=parseInt(prompt("You have " + availablePoints + " left. How many you want to give to defense?"));
        userCharacter.speed=parseInt(prompt("You have " + availablePoints + " left. How many you want to give to speed?"));
        userCharacter.life=parseInt(prompt("You have " + availablePoints + " left. How many you want to give to life?"));
        userCharacter.luck=parseInt(prompt("You have " + availablePoints + " left. How many you want to give to luck?"));

        if (userCharacter.attack+userCharacter.defense+userCharacter.speed+userCharacter.life+userCharacter.luck > 15) {
            alert("You used too many points");
        } else if (userCharacter.attack+userCharacter.defense+userCharacter.speed+userCharacter.life+userCharacter.luck < 15) {
            alert("Younused too little points");
        } else {
            break;
        }

    }
}
*/

