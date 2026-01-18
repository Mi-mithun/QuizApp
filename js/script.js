const start = document.querySelector(`.button button`);
const Rulesbox = document.querySelector(`.Rulesbox`);
const Questions = document.querySelector(`.Questions`);
const exitButton = document.querySelector(`.Rbuttons .exitButton`);
const Continue = document.querySelector(`.Rbuttons .Continue`);
const times = document.querySelector(`.times .second`);
const timeLine = document.querySelector(`.Questions .runTime`)




start.onclick = ()=>{
 Rulesbox.classList.add(`activerules`);
}

exitButton.onclick = ()=>{
    Rulesbox.classList.remove(`activerules`);
}

Continue.onclick = ()=>{
    Rulesbox.classList.remove(`activerules`);
    Questions.classList.add(`activeQuiz`)
    showQuestion(0);
    startTime(15);
    startTimerLine(0)
}


const Next = document.querySelector(`.next_button button`);


let que_count = 0;
let counter
let timeValue = 15;
let counterline
let widthvalue = 0




Next.onclick = ()=>{
    if(que_count < questions.length - 1 ){
        que_count ++ 
        showQuestion(que_count);
        clearInterval(counter);
        startTime(timeValue);  
        clearInterval(counterline);
        startTimerLine(widthvalue);      
    Next.style.display = `none`;

    }else{
        console.log(`You have complet your task🫰`)
    }
}




function showQuestion (index){
const que = document.querySelector(`.section .Que`)
const Myoptions = document.querySelector(`.Myoptions`);
const total_que = document.querySelector(`.total_que`);
let quetag = `<span>`+questions[index].numb+`.`+questions[index].question  + `</span>`; 
let optiontag = `<div class="option">`+questions[index].options[0] +`</div>`
                + `<div class="option">`+questions[index].options[1] +`</div>`
                + `<div class="option">`+questions[index].options[2] +`</div>`
                + `<div class="option">`+questions[index].options[3] +`</div>`;
    let total_queTag = `<p>`+ questions[index].numb + ` Of 5 Questions` +`</p>`          
    que.innerHTML = quetag;
    Myoptions.innerHTML = optiontag;
    total_que.innerHTML = total_queTag;



const option = Myoptions.querySelectorAll(`.option`);

    for(let i = 0; i < option.length; i++){
        option[i].setAttribute(`onclick`, `optionselected(this)`);
    }
}

let cIcon = `<div class="tick icon" style="color:green"><i class="fas fa-check"></i></div>`
let wIcon = `<div class="cross icon" style="color:red"><i class="fas fa-times"></i></div>`



function optionselected(answer){
    clearInterval(counterline)
    clearInterval(counter)
const Myoptions = document.querySelector(`.Myoptions`);
    let userans = answer.textContent;
    let correctans = questions[que_count].answer;
    let disoption = Myoptions.children.length;
    if (userans == correctans){
        answer.classList.add(`correct`);
        console.log(`Correct`)
        answer.insertAdjacentHTML(`beforeend` , cIcon)
    }else{
        answer.classList.add(`incorrect`)
        console.log(`Wrong`);
        answer.insertAdjacentHTML(`beforeend` , wIcon)


        for(let i = 0; i<disoption; i++){
            if(Myoptions.children[i].textContent.trim() == correctans){
                Myoptions.children[i].setAttribute(`class`, `option correct`)
                Myoptions.children[i].insertAdjacentHTML(`beforeend` , cIcon);
            }
        }

    }

    for(let i = 0; i < disoption; i++){
         Myoptions.children[i].classList.add(`disabled`);
    }

    Next.style.display = `block`
}


function startTime(time){
    counter = setInterval(timer,1000)
    function timer(){
        times.textContent = time;
        time--

        if(time<9){
            let addZero = times.textContent
            times.textContent = `0` + addZero;
        }

        if(time<0){
            clearInterval(counter)
            times.textContent = `00`;
        }
    }

}

function startTimerLine(time){
    counterline = setInterval(timer,50);
    function timer(){
        time += 1;
        timeLine.style.width = time + 'px';
        if(time>299){
            clearInterval(counterline)
        }
    }
}