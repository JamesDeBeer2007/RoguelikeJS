// variables
let chosenClass = 0;
let warrior = 1;
let ranger = 2;
let mage = 3;
//

// functions
function warriorTrue()
{
    chosenClass = warrior;
    document.getElementById("confirmClassText").innerHTML = "Warrior";
    document.getElementById("inventoryClass").innerHTML = "Warrior";
    document.getElementById("classImg").scr = "../imgs/mage.jpg";
}
function rangerTrue()
{
    chosenClass = ranger;
    document.getElementById("confirmClassText").innerHTML = "Ranger";
    document.getElementById("inventoryClass").innerHTML = "Ranger";
}
function mageTrue()
{
    chosenClass = mage;
    document.getElementById("confirmClassText").innerHTML = "Mage";
    document.getElementById("inventoryClass").innerHTML = "Mage";
}

// Your array
let Array = ["1", "2", "3", "4", "5"];

// Generate a random index
let randomPicker = Math.floor(Math.random() * Array.length);

// Get the random item from the array
let randomItem = Array[randomPicker];

// Display the random item
console.log(randomItem);
//

function startGame()
{
    if (chosenClass == 0)
    {
        document.getElementById("classSelect").style.display = "block";
        document.getElementById("inventory").style.display = "none";
        document.getElementById("fight").style.display = "none";
        console.log("if nothing works")
    } 
    else if (chosenClass > 0)
    {
        document.getElementById("classSelect").style.display = "none";
        document.getElementById("inventory").style.display = "none";
        document.getElementById("fight").style.display = "block";
        console.log("if class works")
    }
    console.log("button click works")
}

function loadGame()
{

    document.getElementById("classSelect").style.display = "block";
    document.getElementById("inventory").style.display = "none";
    document.getElementById("fight").style.display = "none";
}

function loadStats()
{
    document.getElementById("classSelect").style.display = "none";
    document.getElementById("inventory").style.display = "block";
    document.getElementById("fight").style.display = "none";
}

function backToGame()
{
    document.getElementById("classSelect").style.display = "none";
    document.getElementById("inventory").style.display = "none";
    document.getElementById("fight").style.display = "block";
}

function startingHealth()
{
    if (chosenClass = warrior){

    }
}