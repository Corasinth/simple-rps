

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

window.confirm("Want to play Rock Paper Scissors? \n OK or Cancel");

if (window.confirm("Want to play Rock Paper Scissors? \n OK or Cancel") === true) {
    var userChoice = window.prompt ("Please select R, P, or S")    
        if (userChoice === "R") {
            console.log ("R")
        } else if (userChoice === "P") {
            console.log ("P")
        } else if (userChoice === "S") {
            console.log ("S")
        }
}
