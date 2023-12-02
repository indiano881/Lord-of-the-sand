//arrays
const enemiesList = ["Ice ciclope", "Magma Titan", "Mad Oat Tree", "Stone troll", "Electro-tornado","Lord of the sand"];
const natureElements=["ice","fire","wood","stone","electricity","sand"];
const possibleEncounter=["enemies","treasure","food/water","village","forest"];
const weaponsList = ["sword","machete","knife","axe","shuriken"];
//seconda mano scudo o altra arma o magia
//characters of the story
let userCharacter = {name: undefined, nature_element: undefined, weapon:undefined, attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const iceCiclope= {name: "Bebis", nature_element: natureElements[0], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};;
const magmaTitan= {name: "Vulcan", nature_element: natureElements[1], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const madOatTree= {name: "Jek", nature_element: natureElements[2], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const stoneTroll= {name: "Lukas", nature_element: natureElements[3], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const electroTornado= {name: "Saetta", nature_element: natureElements[4], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const lordOfTheSand= {name: "Lord of the sand", nature_element: natureElements[5], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};

//Regex
let patternName= /[A-Za-z]/i;
let patternElements= /^(ice|fire|wood|stone|electricity|sand)$/i;
let patternWeapons=/^(sword|machete|knife|axe|shuriken)$/i;

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
        userCharacter.attack=parseInt(prompt("Point to attack "))
        userCharacter.defense=parseInt(prompt("Point to defense "))
        userCharacter.speed=parseInt(prompt("Point to speed "))
        userCharacter.life=parseInt(prompt("Point to life "))
        userCharacter.luck=parseInt(prompt("Point to luck "))
    }

}








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

chooseCharacterName();
chooseCharacterElementAndWeapon();