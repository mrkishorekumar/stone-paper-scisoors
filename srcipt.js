var TotalMatch =0;
var userscore = 0;
var computerscore = 0;
var Drawscore = 0;

/*
r - Scisoor
p - Paper
s - Stone
*/

function reload(){
    window.location.reload(true);
}

function computer(){
    var choice = ["r","p","s"];
    var randamChoice = Math.floor(Math.random()*3);
    return choice[randamChoice];
}
var computerPlayed = computer() //type = string

function stone_clicked(){
    //console.log("Stone")
    game("s",computer())
}

function paper_clicked(){
    //console.log("Paper")
    game("p",computer())
}

function scisoor_clicked(){
    //console.log("Scisoor")
    game("r",computer())
}


function userwin(){
    userscore++;
    document.getElementById("userScore").innerHTML = userscore;
}
function computerwin(){
    computerscore++;
    document.getElementById("computerScore").innerHTML = computerscore;
}
function Draw(){
    Drawscore++;
    document.getElementById("DrawScore").innerHTML = Drawscore;
}
function totalmatch(){
    TotalMatch++;
    document.getElementById("totalmatch").innerHTML = TotalMatch;
}

function game(user,computer){
    console.log(user, computer)
    if (user===computer){
        console.log("Draw")
        Draw()
        totalmatch()
    }
    else if (user==="s" && computer==="r"){
        console.log("User Win")
        userwin()
        totalmatch()
    }
    else if (user==="s" && computer==="p"){
        console.log("Computer Win")
        computerwin()
        totalmatch()
    }       
    else if (user==="r" && computer==="p"){
        console.log("User Win")
        userwin()
        totalmatch()
    }
    else if (user==="r" && computer==="s"){
        console.log("Computer Win")
        computerwin()
        totalmatch()
    }    
    else if (user==="p" && computer==="s"){
        console.log("User Win")
        userwin()
        totalmatch()
    }
    else if (user==="p" && computer==="r"){
        console.log("Computer Win")
        computerwin()
        totalmatch()
    }   
}



