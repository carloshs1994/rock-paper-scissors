let score;
let validPlays;
let i;
function game() {
    let report;
    score = 0;
    validPlays = 5;
    for (i=0;i<5;i++){
        let playerC = playerSelection();
        let computerC = computerPlay();
        console.log(playRound(playerC,computerC))
    }
    if (score>(validPlays-score)){
        report = "did it :D ";
    }else if (score<(validPlays-score)){
        report = "are bad at this :( ";
    }else{
        report = "are not good enough :| ";
    }
    if (i==5) {
        console.log("Your score is "+score+"-"+(validPlays-score)+". You "+report+". Thanks for playing, come back soon!")
        return "Your score is "+score+"-"+(validPlays-score)+". You "+report+". Thanks for playing, come back soon!";
    }
}
function playRound(playerC, computerC) {
    if (playerC === computerC){
        validPlays--;
        return "You chose "+ playerC +". Computer chose "+computerC+". It's a tie.";
    }else if((playerC==="rock" && computerC==="scissors")||
                (playerC==="paper" && computerC==="rock")||
                (playerC==="scissors" && computerC==="paper")){
        score++;
        return "You chose "+playerC+". Computer chose "+computerC+". You win.";
    }else if((playerC==="scissors" && computerC==="rock")||
                (playerC==="rock" && computerC==="paper")||
                (playerC==="paper" && computerC==="scissors")){
        return "You chose "+playerC+". Computer chose "+computerC+". You lose.";
    }else{
        i--;
        return "Invalid choice, this round does not count. Try again";
    }
}
function playerSelection(){
    let choice = prompt("Let's play! Choose between rock, paper or scissors", "");
    choice = choice.toLowerCase();
    return choice;
}
function rdm() {
    return Math.floor(Math.random()*3);
}
function computerPlay() {
    let list = ["rock","paper","scissors"];
    return list[rdm()];
}