
const questions = [
  {
    question: "1- Quelle est la capitale de france ?",
    choices: ["paris", "brezil", "madrid"],
    correct: "paris"
  },
  {
    question: "2- Quelle la capitale de mexique ?",
    choices: ["Cancún", "Monterrey", "mexico"],
    correct: "mexico"
  },
  {
    question: "3- Quelle est la capitale de l'Italie ?",
    choices: [" Milan", "rome", " Florence"],
    correct: "rome"
  },
  {
    question: "4- Quelle est la capitale de l'Inde",
    choices: [" Bangalore", "Mumbai", "new delhi"],
    correct: "new delhi"
  },
  {
    question: "5- Quelle est la capitale de l'espagne ?",
    choices: ["madrid", "Barcelone", "Lisbonne"],
    correct: "madrid"
  },
  {
    question: "6- Quelle est la capitale de canada ?",
    choices: ["ottawa", "toronto", "alberta"],
    correct: "ottawa"
  },
  {
    question: "7- Quelle est la capitale de l'allemagne ?",
    choices: [" hambourg", "munich", "berlin"],
    correct: "berlin"
  },
  {
    question: "8- Quelle est la capitale de la chine ?",
    choices: [" shangai", "pekin", "hong kong"],
    correct: "pekin"
  }	
]	
	
	
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const submitButton = document.getElementById("submit-button");


questions.forEach((question, index) => {
  
	const questionDiv = document.createElement("div");
	questionDiv.classList.add("question");
	questionDiv.setAttribute("id", `question-${index+1}`);
  
	const questionP = document.createElement("p");
	questionP.textContent = question.question;
	questionDiv.appendChild(questionP);
  
	const choicesList = document.createElement("ol");
  
	question.choices.forEach((choice, i) => {
		const choiceListItem = document.createElement("li");
		const choiceInput = document.createElement("input");
		choiceInput.type = "radio";
		choiceInput.name = `q${index+1}`;
		choiceInput.id = `q${index+1}-option${i+1}`;
		choiceInput.value = question.choices[i];
		choiceInput.classList.add("choice");
		if (question.choices[i] === question.correct) {
		  choiceInput.setAttribute("data-correct", "true");
		}
		choiceListItem.appendChild(choiceInput);
	  
		const choiceLabel = document.createElement("label");
		choiceLabel.textContent = choice;
		choiceLabel.setAttribute("for", `q${index+1}-option${i+1}`);
		choiceListItem.appendChild(choiceLabel);
	  
		choicesList.appendChild(choiceListItem);
    
    
	});
  
	questionDiv.appendChild(choicesList);
	quizContainer.appendChild(questionDiv);
  });
  
  submitButton.addEventListener("click", function() {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const inputs = document.getElementsByName(`q${i+1}`);
      let selectedAnswer = null;
      for (let j = 0; j < inputs.length; j++) {
        if (inputs[j].checked) {
          selectedAnswer = inputs[j].value;
          break;
        }
      }
      if (selectedAnswer === questions[i].correct) {
        score++;
      }
    }
    resultContainer.innerHTML = `Votre score est ${score} sur ${questions.length}.`;
  });
  
