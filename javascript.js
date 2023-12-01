const enemiesList = ["Ice ciclope", "Magma Titan", "Mad Oat Tree", "Stone troll", "Electro-tornado","Lord of the sand"];

const natureElements=["ice","fire","wood","stone","electricity","sand"];

const possibleEncounter=["enemies","treasure","food/water","village","forest"];

const weaponsList = ["sword","machete","knife","axe"];
//seconda mano scudo o altra arma o magia
//characters of the story
let userCharacter = {name: undefined, nature_element: undefined, attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const iceCiclope= {name: "Bebis", nature_element: natureElements[0], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};;
const magmaTitan= {name: "Vulcan", nature_element: natureElements[1], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const madOatTree= {name: "Jek", nature_element: natureElements[2], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const stoneTroll= {name: "Lukas", nature_element: natureElements[3], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const electroTornado= {name: "Saetta", nature_element: natureElements[4], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};
const lordOfTheSand= {name: "Lord of the sand", nature_element: natureElements[5], attack: 1, defense: 1, speed: 1, life: 10, luck: 1};

alert("***The 5 great spirits have freed an ancient demoniac crature!***\n***The lord of the sand is back! And want to destroy your world!***\n***Will you be able to save us?***");

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

    }
}