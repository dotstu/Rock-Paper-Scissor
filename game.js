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
        return 'win';
    } 
    else if (computerSelection === "Rock" && playerSelection === "scissor"){
        return 'lose';
    } 
    else if (computerSelection === "Rock" && playerSelection === "rock"){
        return 'tie';
    }

    //Seccion de Paper
    else if (computerSelection === "Paper" && playerSelection === "rock") {
        return 'lose';
    } 
    else if (computerSelection === "Paper" && playerSelection === "scissor") {
        return 'win';
    } 
    else if (computerSelection === "Paper" && playerSelection === "paper") {
        return 'tie';
    } 

    //Seccion de Scissor 
    else if (computerSelection === "Scissor" && playerSelection === "rock") {
        return 'lose';
    } 
    else if (computerSelection === "Scissor" && playerSelection === "paper") {
        return 'win';
    } 
    else if (computerSelection === "Scissor" && playerSelection === "scissor") {
        return 'tie';
    }
}


function game(){
    for(let i = 0; i < 5; i++){
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Choose! Rock, Paper, Scissor: ").toLowerCase();
        playAround(computerSelection, playerSelection);
        var wins = 0;
        var lose = 0;
        
        if (playAround(computerSelection, playerSelection) === 'win'){
            wins += 1;
            console.log('You won a round!');
        } 
        else if (playAround(computerSelection, playerSelection) === 'lose'){
            lose += 1;
            console.log('You lost a round!')
        } 
        else if (playAround(computerSelection, playerSelection) === 'tie'){
            console.log('tie!')
        }

        if (wins === 5){
            console.log('You won the game!')
        } else if (lose === 5){
            console.log('You lost the game!')
        }           
    }
    if ( wins < lose){
        console.log("lose")
    } else if ( wins> lose) {
        console.log("win")
    } else if (wins === lose) {
        console.log("Tie game!")
    }
}

game();