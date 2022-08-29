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

console.log(getComputerChoice())