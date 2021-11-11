const selectionButtons = document.querySelectorAll("[data-selection")
const SELECTIONS = [ //by having the const name in all caps, it makes it a global variable meaning that it wont change (plus its a const = value always stays the same)
    {
        name: "rock",   
        emoji: "👊",
        beats: "scissors"
    },
    {
        name: "paper",   
        emoji: "🖐",
        beats: "rock"
    },
    {
        name: "scissors",   
        emoji: "✌",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener("click", e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)
     console.log(computerSelection)
}

function isWinner(selection, opponentSelection){
    return selection.beats === opponentSelection.name
}

function randomSelection(){
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}