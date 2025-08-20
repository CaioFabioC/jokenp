const result = document.querySelector(".result")
const scoreH = document.querySelector("#yourScore")
const scoreM = document.querySelector("#machineScore")
let scoreHuman = 0
let scoreMachine = 0

const clicked = (humanChoice) => {
    playTheGame(humanChoice, computer())
}


const computer = () => {
    const number = Math.floor(Math.random() * 3);
    const computerChoice = ['rock', 'paper', 'scissors']

    return computerChoice[number]
}

const playTheGame = (human, machine) => {
    console.log(`voce escolheu ${human}, e a maquina ${machine}`)


    if (human === machine) {
        result.innerHTML = "Deu empate";
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' ||
        human === 'scissors' && machine === 'paper'
     ) {
        result.innerHTML = "Você ganhou";
        scoreHuman += 1
        
    } else {
        result.innerHTML = "Você perdeu"
        scoreMachine += 1
        
    }

    scoreH.innerHTML = scoreHuman;
    scoreM.innerHTML = scoreMachine;
}

