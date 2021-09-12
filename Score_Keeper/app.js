const btn1 = document.querySelector('#p1btn');
const btn2 = document.querySelector('#p2btn');
const reset = document.querySelector('#reset');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const winningScoreSelect = document.querySelector("#play");

let p1score =0;
let p2score =0;
let winScore = 3;
let isGameover = false;

btn1.addEventListener('click',function(){
    if(!isGameover){
        p1score++;
        if(p1score=== winScore){
            isGameover = true;
            score1.classList.add('has-text-success');
            score2.classList.add('has-text-danger');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        score1.innerText = p1score;
    }
    
});

btn2.addEventListener('click',function(){
    if(!isGameover){
        p2score++;
        if(p2score=== winScore){
            isGameover = true;
            score1.classList.add('has-text-danger');
            score2.classList.add('has-text-success');
            btn1.disabled = true;
            btn2.disabled = true;
        }
        score2.innerText = p2score;
    }
});

winningScoreSelect.addEventListener('change',function(){
    winScore = parseInt(this.value);
    reset();
})

reset.addEventListener('click',function (){
    isGameover = false;
    p1score = 0;
    p2score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    score1.classList.remove('has-text-success','has-text-danger');
    score2.classList.remove('has-text-danger','has-text-success');
    btn1.disabled = false;
    btn2.disabled = false;
});