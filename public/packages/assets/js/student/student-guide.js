$(function() {

  let $i = 0;

  const myQuestions = [
    {
      question: "Me gusta Contruir, arreglar, montar...herramientas, objetos?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria dedicarme a la enseñanza de niños y niñas, jovenes, adultos?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Considero la economia un aspecto muy importante para la vida y para la sociendad?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria aprender a tocar un instrumento musical?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me apuntaria a visitar el museo de la ciencia?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Colaboraria en campañas destinadas a ayudar a personas marginadas?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Dirigiria un negocio propio: tienda, restaurante, etc.?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria el mismo tipo y ritmo de trabajo cada dia?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria intentar arreglar los electrodomesticos que se estropean?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gusta analizar el por que de las cosas?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria estudiar la flora y la fauna de diferentes lugares?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria formar parte de una compañia de teatro?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Asistiria a una conferencia de salud y deporte?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesaria un trabajo en el que tuviera un contacto con la gente?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaria seleccionar y dirigir a los trabajadores de una empresa?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Trabajaria en un taller mecanico?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesan las actividades que se realizan en el mar?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me lo pasaría bien recibiendo mensajes telefónicos en una oficina ?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría encargarme de una caja registradora ?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría cuidar a personas enfermas –o animales heridos ?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa conocer a personas que se dedican a la proyección y construcción de obras?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa hacer un trabajo de investigación sobre la historia de la música o de la pintura?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me ofrecería a arreglar un reloj estropeado?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría dedicarme a actividades relacionadas con el dibujo, la pintura, la escultura?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Prefiero actividades relacionadas con las matemáticas?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ayudar a un labrador a cuidar las cosechas?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría vender en una tienda toda clase de productos?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría participar en un concurso literario?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa un trabajo de tipo administrativo?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría dedicarme a interceder en conflictos, litigios, juicios de personas, sociedades, etc?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa investigar los efectos negativos de la comunicación?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gusta actuar, cantar para los demás; en definitiva, todo lo relacionado con el mundo del espectáculo?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría colaborar en las tareas de una ONG?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me lo pasaría bien dirigiendo un programa de radio?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me presentaría a un concurso de fotografía?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa conocer el funcionamiento de los coches?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me compraría herramientas para realizar trabajos de bricolaje?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría conocer la maquinaria y las herramientas que se utilizan en el campo?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesa la política?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ser monitor de un centro recreativo?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría formar parte de una asociación de defensa forestal?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me preocupan las cuestiones sociales: las personas mayores, la pobreza, los problemas del barrio, etc?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me sentiría satisfecho trabajando en un banco?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gusta llevar la iniciativa en las conversaciones?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me ofrecería a realizar un dibujo para la revista del centro?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me interesan los temas de estadística?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me apuntaría a un cursillo de socorrismo?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me divierte pasar trabajos al ordenador?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gusta el mundo de la tecnología?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gusta escuchar y ayudar a mis compañeros cuando lo necesitan?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me lo pasaría bien trabajando en un gimnasio?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Asistiría a un cursillo de jardinería?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría colaborar en una investigación?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me ofrecería voluntario para ordenar fichas en un archivo?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría trabajar en un laboratorio haciendo experimentos?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría desarrollar actividades que requieran el uso de microscopios, telescopios, etc?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría trabajar en una agencia de viajes?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me dedicaría a vender y alquilar pisos, casas, etc?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría participar en la resolución de problemas científicos?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ser monitor de una actividad deportiva?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Dedicaría parte de mi tiempo a ayudar a encontrar trabajo a las personas que lo necesitaran ?",
      answers: {
        si: "sociales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría clasificar las entradas y salidas de mercancías en un ordenador de una oficina?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ser monitor de alta montaña, de esquí, etc?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me apasiona el mundo del motor?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría dedicarme a la cría de toda clase de animales?",
      answers: {
        si: "aire_libre",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ser el responsable de mantenimiento de una gran empresa?",
      answers: {
        si: "mecanicos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría ser entrevistador de una empresa de opinión?",
      answers: {
        si: "relacionales",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría diseñar campañas publicitarias?",
      answers: {
        si: "artisticos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría trabajar en el desarrollo de nuevas energías?",
      answers: {
        si: "cientificos",
        no: "No",
      },
      correctAnswer: ""
    },
    {
      question: "Me gustaría desarrollar actividades relacionadas con la bolsa o los seguros?",
      answers: {
        si: "administrativo",
        no: "No",
      },
      correctAnswer: ""
    }
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      $i += 1;
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {

        // ...add an HTML radio button
        if (letter == 'si') {
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers.si}">
                ${letter}
             </label>`
          );
        } else {
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter}
             </label>`
          );
        }
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="question">` + $i + `/70</div>
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

    let cientificos = 0;
    let administrativo = 0;
    let aire_libre = 0;
    let mecanicos = 0;
    let artisticos = 0;
    let relacionales = 0;
    let sociales = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      let data = {num: questionNumber,res: userAnswer}

      switch (userAnswer) {

        case 'mecanicos':
          mecanicos ++;
          break;
        case 'cientificos':
          cientificos ++;
          break;
        case 'administrativo':
          administrativo ++;
          break;
        case 'aire_libre':
            aire_libre ++;
            break;
        case 'artisticos':
          artisticos ++;
          break;
        case 'relacionales':
          relacionales ++;
          break;
        case 'sociales':
          sociales ++;
          break;
      }
    });

    let names = {
      sociales: sociales,
      relacionales: relacionales,
      artisticos: artisticos,
      aire_libre: aire_libre,
      administrativo: administrativo,
      cientificos: cientificos,
      mecanicos: mecanicos
    }

    let less = 0, single;

    for(var k in names){
      if (names[k] > less) {
        single = k;
        less  = names[k];
      }
    }
    let data = {
      single: single
    }

    $.ajax({
      url: "/test",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){

      swal ({
        title: "Perfecto" ,
        text: "Ahora apareceran las carreras relacionadas con tus aptitudes!" ,
        icon: "success"
      })
      .then((value) => {
        window.location.href = '/student-related';
      });

    });

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
});
