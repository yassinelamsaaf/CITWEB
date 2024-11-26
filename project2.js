function computerMove(){
    const randomNumber = Math.random();
    if(randomNumber <= 1/3){
        return "rock";
    } else if(randomNumber <= 2/3){
        return "paper";
    } else {
        return "scissor";
        
}
}
console.log(computerMove());
const score = { wins : 0 , losses : 0 , ties : 0 };
function playmove(playermove){

    const pickedComputer = computerMove();
    let result = '';
    if(playermove==='rock'){
    switch(pickedComputer){
        case "scissor":
            score.wins++;
            result = 'You Win'
            break;
        case "rock":
            score.ties++;
            result = 'Ties';
            break;
        case "paper":
            score.losses++;
            result = 'You lose';
            break;
    }
    console.log(score);
    }
    if(playermove==='paper'){

        switch(pickedComputer){
            case "scissor":
                score.losses++;
                result = 'You lose';
                break;
            case "rock":
                score.wins++;
                result = 'You Win';
                break;
            case "paper":
                score.ties++;
                result = 'Ties';
                break;
        }
        console.log(score);

        }
    if(playermove==='scissor'){
            switch(pickedComputer){
                case "scissor":
                    score.ties++;
                    result ='Ties';
                    break;
                case "rock":
                    score.losses++;
                    result ='You lose';
                    break;
                case "paper":
                    score.wins++;
                    result ='You Win';
                    break;
            }
            console.log(score);
            }
    
console.log(pickedComputer);

        

document.querySelector('.status').innerHTML = result;
document.querySelector('.you-computer').innerHTML = `
You 
    <img src="images/${playermove}-emoji.png" alt="">
    <img src="images/${pickedComputer}-emoji.png" alt="">
    Computer
    `;

document.querySelector('.result').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}` ;
    return pickedComputer;     
}
function resetcounter() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector('.result').innerHTML = `
    Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}` ;
    
}
let auto =false ;
let id;
function autoplay(){
    auto = !auto ;
    if(auto){
        id = setInterval(function(){
            playmove(computerMove());
        }, 1000);
    document.querySelector('.result-button2').innerHTML= 'Stop';
    }
    else{
        clearInterval(id);
        document.querySelector('.result-button2').innerHTML= 'Auto play';
    }
}

