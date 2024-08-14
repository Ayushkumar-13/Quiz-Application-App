 let Questions = [];
 quesTag = document.getElementById("ques");
 
 async function fetchQuestions(){

    try {
    const resp = await fetch("https://opentdb.com/api.php?amount=10");
  if (!resp.ok){
    throw new Error ("Couldn't fetch questions!");
  }

  const data = await resp.json();
  Questions = data.results;
  }
  catch(err){
    console.error(err);
    ques.innerHTML = `<h5 style = " background-color:"red"">${err}</h5>`;
  }
}

let currentQuestion =0;
let score = 0;

if (Questions.length===0){
    ques.innerHTML = `<h5> Please Wait! <br> Loading Questions....</h5>`;

}

function loadQues(){
    const opt = document.getElementById("opt");

    let currQuesText = Questions[currentQuestion].
    question;

    console.log(currQuesText);

    ques.innerText = currQuesText;

    opt.innerHTML = "";
    const correctAnswer = Questions[currentQuestion].
    correct_answer;
    const incorrectAnswers = Questions
    [currentQuestion].incorrect_answers;

    const options = [correctAnswer , ...  incorrectAnswers];

    options.sort((o1,o2) => Math.random() < 0.5);

    options.forEach((option , idx) => {
        const optDiv = document.createElement("div");
        const optionTag = document.createElement("input");
        const labelTag = document.createElement("label");

        optionTag.type = "radio";
        optionTag.name = "answer";
        // optionTag.id = "answer";
        optionTag.value = option;
        labelTag.textContent = option;
        // labelTag.htmlFor = `option${idx}`;
        optDiv.appendChild(optionTag);
        optDiv.appendChild(labelTag);

        opt.appendChild(optDiv);
    });
}

setTimeout(() => {
    loadQues();
    if (Questions.length===0){
        ques.innerHTML = `<h5 style = 'color:red'>Unable to fetch data , Please try again!!</h5>`;

    }
}, 2000);



function checkAnswer(){
    const selectedAns= document.querySelector(
        `input[name ="answer"]:checked`
    ).value;
    if (selectedAns === Questions[currentQuestion].correct_answer){
        score++;
    }
    nextQuestion();


}
function nextQuestion(){

    if (currentQuestion < Questions.length - 1){
        currentQuestion++;
        loadQues();
    }
    else {
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        showTotal();

    }

}
function showTotal(){
    const totalScore = document.querySelector('#score');
    totalScore.innerText = `Your Score: ${score}/10`;
    Questions.forEach((ques, idx) => {
        totalScore.innerHTML += `<p> ${idx + 1}; ${ques.correct_answer}
        </p>`;
    });
}


fetchQuestions();