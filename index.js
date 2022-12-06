var readlineSync = require('readline-sync');
var score = 0;

var userName = readlineSync.question('Tell me your Name ? ');
console.log('Hello ', userName);

var questions = [
  {
    question : 'Where do i live ? ',
    answer : 'goraya'
  },
  {
    question: 'What is my hobby ? ',
    answer: 'cricket'
  },
  {
    question: 'What is my favourite drink ? ',
    answer: 'coffee'
  },
  {
    question: 'What is my favourite movie ? ',
    answer: 'top gun'
  },
  {
    question: 'What is my favourite tv show ? ',
    answer: 'the kapil sharma show'
  }
];

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    console.log('Yay, You are right.');
    score++;
    console.log('Your Score is : ', score);
  }
  else{
    console.log('Sorry, You are wrong.');
    score--;
    console.log('Your Score is : ', score);
  }
}

function checking(){
  for(var i = 0; i < questions.length; i++){
    var objectQuestions = questions[i];
    checkAnswer(objectQuestions.question, objectQuestions.answer);
  }
}
checking();

console.log('Your final score is : ', score);