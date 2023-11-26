var questions = [
{
    question: "What is the capital of France?",
    option1:"Berlin",
    option2:"Madrid",
    option3:"Paris",
    option4:"Rome",
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    option1:"Mars",
    option2:"Venus",
    option3:"Jupiter",
    option4:"Saturn",
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal?",
    option1:"Elephant",
    option2:"Blue Whale",
    option3:"Giraffe",
    option4:"Hippopotamus",
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    option1:"Charles Dickens",
    option2:"William Shakespeare",
    option3:"Jane Austen",
    option4:"Mark Twain",
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the currency of Japan?",
    option1:"Yuan",
    option2:"Won",
    option3:"Yen",
    option4:"Ringgit",
    correctAnswer: "Yen",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    option1:"Oxygen",
    option2:"Gold",
    option3:"Iron",
    option4:"Silver",
    correctAnswer: "Oxygen",
  },
  {
    question: "What is the tallest mountain in the world?",
    option1:"Mount Everest",
    option2:"K2",
    option3:"Kangchenjunga",
    option4:"Lhotse",
    correctAnswer: "Mount Everest",
  },
  {
    question: "Who painted the Mona Lisa?",
    option1:"Pablo Picasso",
    option2:"Leonardo da Vinci",
    option3:"Vincent van Gogh",
    option4:"Claude Monet",
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the largest ocean on Earth?",
    option1:"Atlantic Ocean",
    option2:"Indian Ocean",
    option3:"Southern Ocean",
    option4:"Pacific Ocean",
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Which programming language is often used for web development?",
    option1:"Python",
    option2:"Java",
    option3:"HTML",
    option4:"jvascript",
    correctAnswer: "JavaScript",
  },
];

    
    var para = document.getElementById("ques");
    var opt1 = document.getElementById("opt1");
    var opt2 = document.getElementById("opt2");
    var opt3 = document.getElementById("opt3");
    var opt4 = document.getElementById("opt4");
    var button = document.getElementById("btn");
    var timer = document.getElementById("timer")
    var index = 0;
    var score = 0;
    var min = 1;
    var sec = 59;
    
    
    
    setInterval(function(){
        timer.innerHTML = `${min}:${sec}`;
        sec--
        if(sec<0){
            min--;
            sec = 59    
        }
        if(min<0){
            min= 1;
            sec = 59;
            nextQuestion()
        }
    },1000)
    
    
    function nextQuestion(){
    
        var getOptions = document.getElementsByName("options");
    
        for(var i = 0;i<getOptions.length;i++)
        {
            if(getOptions[i].checked){
                var selectedValue = getOptions[i].value;
                // console.log(selectedValue)
                var selectedQues = questions[index - 1]["question"];
                var selectedAns = questions[index-1][`option${selectedValue}`]
                var correctAns = questions[index - 1]["correctAns"]
                if(selectedAns == correctAns){
                    score++
                }
            }
            getOptions[i].checked = false
        }
    
        button.disabled = true
    
        if(index >questions.length - 1){
    
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success'
              )
            // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
        }
        else{
    
            
            para.innerHTML = questions[index].question;
            opt1.innerText = questions[index].option1;
            opt2.innerText = questions[index].option2;
            opt3.innerText = questions[index].option3;
            opt4.innerText = questions[index].option4;
            index++
        }
    }
    
    // nextQuestion()
    
    
    function clicked()
    {
        button.disabled = false
    }

