let randomchoice;
let computerchoicetext;

let score = {
    Compwon: 0;
    Youwon: 0;
    Tie: 0;
    updatescore function(){
document.querySelector('#score').innerHTML = `Score: Computer won: ${this.compwon}, User won: ${this.Youwon}, Tie: ${this.Tie}`
    },
}

function initialize(){
    let 
}
function compchoice(){
    if(randomchoice === 1){
        computerchoicetext = '✊ Rock';
    } else if(randomchoice === 2){
        computerchoicetext = '✋ Paper';
    }else {
        computerchoicetext = '✌️ Scissor';
    }
}

function assignRandomChoice(){
    randomchoice = Math.floor(Math.random() * 3) +1;
}

function updateresult(userchoice, computerchoice, result){

    

    document.getElementById('result').innerHTML=
    `You choose ${userchoice} <br> 
    Computer choose ${computerchoice} <br> 
    Result: ${result}`
}

function getresult(userchoice, computerchoice){
    let result;
    if(computerchoice === userchoice){
        result ='Tie';
        score.Tie++;
    }else if(computerchoice == '✋ Paper' && userchoice == '✊ Rock'|| 
             computerchoice == '✊ Rock' && userchoice == '✌️ Scissor'||
             computerchoice == '✌️ Scissor' && userchoice == '✋ Paper'||  ){
        result ='Computer won';
        score.Compwon++;
    }else{
        result = 'You won';
        score.Youwon++;
    }
    score.updatescore();
    return result;
}
function rockClicked(){
    const userchoice = '✊ Rock';
    assignRandomChoice();
    compchoice();

    let result =getresult(userchoice, computerchoice);
    updateresult(userchoice, computerchoicetext, result);
}

function paperClicked(){
    const userchoice = '✋ Paper';
    assignRandomChoice();
    compchoice();
    
   
        let result =getresult(userchoice, computerchoice);
        updateresult(userchoice, computerchoicetext, result);
    }

function scissorClicked(){
    const userchoice = '✌️ Scissor';
    assignRandomChoice();
    compchoice();
    

        let result =getresult(userchoice, computerchoice);
        updateresult(userchoice, computerchoicetext, result);
}