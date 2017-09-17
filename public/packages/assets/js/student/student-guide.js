(function() {
  const myQuestions = [
    {
      question: "Me gusta Contruir, arreglar, montar...herramientas, objetos?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "c"
    },
    {
      question: "Me gustaria dedicarme a la enseñanza de niños y niñas, jovenes, adultos?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "c"
    },
    {
      question: "Considero la economia un aspecto muy importante para la vida y para la sociendad?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria aprender a tocar un instrumento musical?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me apuntaria a visitar el museo de la ciencia?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Colaboraria en campañas destinadas a ayudar a personas marginadas?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Dirigiria un negocio propio: tienda, restaurante, etc.?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria el mismo yipo y ritmo de trabajo cada dia?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria intentar arreglar los electrodomesticos que se estropean?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gusta analizar el por que de las cosas?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria estudiar la flora y la fauna de diferentes lugares?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria formar parte de una compañia de teatro?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Asistiria a una conferencia de salud y deporte?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesaria un trabajo en el que tuviera un contacto con la gente?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaria seleccionar y dirigir a los trabajadores de una empresa?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Trabajaria en un taller mecanico?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesan las actividades que se realizan en el mar?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;
    let arrays = [];
    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      let data = {num: questionNumber,res: userAnswer}

      arrays.push(data);

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
