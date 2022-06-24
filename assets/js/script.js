

// ---Display a button labeled Play---//



// ---When button is clicked the game begins--//


// ---- Prompt appears to ask for first move -- //


//---user selects either Rock Paper or Scissors---//


// --If any other charictors are entered then message --//
//-- Please enter only one: Rock Paper or Scissors --//


// --- assign user responce to variable--- //


// --- generate random choice for comuter responce and asign to a variable ---//

// ---compare user variable to computer random variable and display answer --//

// --- alerts user of result ---//

var computerChoices = ["R", "P", "S"]

const getComputerChoice = computerChoices[Math.floor(Math.random(0, 3) * computerChoices.length)];
console.log (getComputerChoice)

function mainFunction () {
    var userChoice = window.prompt ("Please choose rock (R), paper (P), or scissors (S)")    
        if (userChoice === "R") {
            //console.log ("R")
            switch (getComputerChoice) {
                case ("R"):
                window.alert ("The Computer chose Rock. It's a tie!")
                break;
                case ("P"):
                window.alert ("The Computer chose Paper. You Lose!")
                break;
                case ("S"):
                window.alert ("The Computer chose Scissors. You Win!")
                break;
            }
         } else if (userChoice === "P") {
            //console.log ("P")
            switch (getComputerChoice) {
                case ("R"):
                window.alert ("The Computer chose Rock. You Win!" )
                break;
                case ("P"):
                window.alert ("The Computer chose Paper. It's a tie!")
                break;
                case ("S"):
                window.alert ("The Computer chose Scissors. You Lose!")
                break;
            }
        } else if (userChoice === "S") {
            //console.log ("S")
            switch (getComputerChoice) {
                case ("R"):
                window.alert ("The Computer chose Rock. You Lose!" )
                break;
                case ("P"):
                window.alert ("The Computer chose Paper. You Win!")
                break;
                case ("S"):
                window.alert ("The Computer chose Scissors. It's a tie!")
                break;
            }
        } else if (Boolean(userChoice) === true) {
                mainFunction ()
        } else {
            return;
        }
    }

(function initalPrompt () {
window.confirm("Want to play Rock Paper Scissors? \n OK or Cancel");
    if (window.confirm("Want to play Rock Paper Scissors? \n OK or Cancel") === true) {
        mainFunction ()
    }
})()
