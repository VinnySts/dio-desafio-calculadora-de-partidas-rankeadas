const message1 = ("The Hero has a balance of ")
const message2 = (" victories and is at the ranking of ")
let ranking = [
    "Iron", 
    "Bronze", 
    "Silver", 
    "Gold", 
    "Diamond", 
    "Legendary", 
    "Immortal"]

let victory = 120
let defeat = 0
let total = victory - defeat
let currentRanking;

calculate();

function calculate(){
    if (total <= 10){
        currentRanking = ranking[0];
    } else if (total <= 20){
        currentRanking = ranking[1];
    } else if (total <= 50){
        currentRanking = ranking[2];
    } else if (total <= 80){
        currentRanking = ranking[3];
    } else if (total <= 90){
        currentRanking = ranking[4];
    } else if (total <= 100){
        currentRanking = ranking[5];
    } else if (total > 101){
        currentRanking = ranking[6];
    }

    console.log(message1 + victory + message2 + currentRanking);
}

