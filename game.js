function getComputerChoice(){
    // Declaramos una array con las opciones de la computadora
    const choices = ["Rock","Paper","Scissor"]

    // Declaramos una variable que escogera un indice al azar de la array
    // Un numero random se genra entre 0 y el largo de la array
    // el cual es generado usando Math.random()
    const randomIndex = Math.floor(Math.random() * choices.length)

    // Agarramos el item de la array con el numero al azarç
    const item = choices[randomIndex]

    return item;
}


function playAround(computerSelection, playerSelection){
    //Seccion de Rock
    if (computerSelection === "Rock" && playerSelection === "paper"){
        console.log("You won! Paper beats rock.")
    } 
    else if (computerSelection === "Rock" && playerSelection === "scissor"){
        console.log("You lost! Rock beats scissor.")
    } 
    else if (computerSelection === "Rock" && playerSelection === "rock"){
        console.log("Tie!")
    }

    //Seccion de Paper
    else if (computerSelection === "Paper" && playerSelection === "rock") {
        console.log("You lost! Paper beats rock.")
    } 
    else if (computerSelection === "Paper" && playerSelection === "scissor") {
        console.log("You won! Scissors beats paper.")
    } 
    else if (computerSelection === "Paper" && playerSelection === "paper") {
        console.log("Tie!")
    } 

    //Seccion de Scissor 
    else if (computerSelection === "Scissor" && playerSelection === "rock") {
        console.log("You lost! Paper beats rock.")
    } 
    else if (computerSelection === "Scissor" && playerSelection === "paper") {
        console.log("You won! Scissors beats paper.")
    } 
    else if (computerSelection === "Scissor" && playerSelection === "scissor") {
        console.log("Tie!")
    }
}


const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose! Rock, Paper, Scissor: ").toLowerCase();

playAround(computerSelection, playerSelection);