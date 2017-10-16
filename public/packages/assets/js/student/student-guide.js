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
    },
    {
      question: "Me lo pasaría bien recibiendo mensajes telefónicos en una oficina ?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría encargarme de una caja registradora ?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría cuidar a personas enfermas –o animales heridos ?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa conocer a personas que se dedican a la proyección y construcción de obras?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa hacer un trabajo de investigación sobre la historia de la música o de la pintura?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me ofrecería a arreglar un reloj estropeado?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría dedicarme a actividades relacionadas con el dibujo, la pintura, la escultura?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Prefiero actividades relacionadas con las matemáticas?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ayudar a un labrador a cuidar las cosechas?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría vender en una tienda toda clase de productos?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría participar en un concurso literario?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa un trabajo de tipo administrativo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría dedicarme a interceder en conflictos, litigios, juicios de personas, sociedades, etc?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa investigar los efectos negativos de la comunicación?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gusta actuar, cantar para los demás; en definitiva, todo lo relacionado con el mundo del espectáculo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría colaborar en las tareas de una ONG?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me lo pasaría bien dirigiendo un programa de radio?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me presentaría a un concurso de fotografía?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa conocer el funcionamiento de los coches?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me compraría herramientas para realizar trabajos de bricolaje?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría conocer la maquinaria y las herramientas que se utilizan en el campo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesa la política?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ser monitor de un centro recreativo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría formar parte de una asociación de defensa forestal?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me preocupan las cuestiones sociales: las personas mayores, la pobreza, los problemas del barrio, etc?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me sentiría satisfecho trabajando en un banco?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gusta llevar la iniciativa en las conversaciones?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me ofrecería a realizar un dibujo para la revista del centro?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me interesan los temas de estadística?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me apuntaría a un cursillo de socorrismo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me divierte pasar trabajos al ordenador?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gusta el mundo de la tecnología?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gusta escuchar y ayudar a mis compañeros cuando lo necesitan?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me lo pasaría bien trabajando en un gimnasio?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Asistiría a un cursillo de jardinería?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría colaborar en una investigación?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me ofrecería voluntario para ordenar fichas en un archivo?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría trabajar en un laboratorio haciendo experimentos?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría desarrollar actividades que requieran el uso de microscopios, telescopios, etc?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría trabajar en una agencia de viajes?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me dedicaría a vender y alquilar pisos, casas, etc?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría participar en la resolución de problemas científicos?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ser monitor de una actividad deportiva?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Dedicaría parte de mi tiempo a ayudar a encontrar trabajo a las personas que lo necesitaran ?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría clasificar las entradas y salidas de mercancías en un ordenador de una oficina?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ser monitor de alta montaña, de esquí, etc?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me apasiona el mundo del motor?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría dedicarme a la cría de toda clase de animales?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ser el responsable de mantenimiento de una gran empresa?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría ser entrevistador de una empresa de opinión?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría diseñar campañas publicitarias?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría trabajar en el desarrollo de nuevas energías?",
      answers: {
        si: "Si",
        no: "No",
      },
      correctAnswer: "d"
    },
    {
      question: "Me gustaría desarrollar actividades relacionadas con la bolsa o los seguros?",
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
