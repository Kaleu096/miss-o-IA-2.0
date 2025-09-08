const perguntas = [
    {
      enunciado: "Você descobre que uma escola da sua comunidade precisa de voluntários. O que faz?",
      alternativas: [
        { texto: "Se oferece para ajudar com seu tempo.", afirmacao: "Você fortaleceu a educação local." },
        { texto: "Decide não se envolver.", afirmacao: "A falta de apoio deixou a escola com dificuldades." }
      ]
    },
    {
      enunciado: "Uma empresa está poluindo um rio. Qual sua atitude?",
      alternativas: [
        { texto: "Organiza um protesto pacífico.", afirmacao: "Sua coragem ajudou a proteger o meio ambiente." },
        { texto: "Ignora o problema.", afirmacao: "A poluição continuou afetando vidas." }
      ]
    },
    {
      enunciado: "Você vê alguém sofrendo preconceito. Como reage?",
      alternativas: [
        { texto: "Defende a pessoa publicamente.", afirmacao: "Sua ação inspirou respeito." },
        { texto: "Finge que não viu.", afirmacao: "O silêncio fortaleceu a injustiça." }
      ]
    }
  ];
  
  let atual = 0;
  let historiaFinal = "";
  
  const perguntaEl = document.querySelector(".pergunta");
  const alternativasEl = document.querySelector(".alternativas");
  const resultadoEl = document.querySelector(".resultado");
  const textoResultadoEl = document.querySelector(".texto-resultado");
  const reiniciarBtn = document.querySelector(".reiniciar");
  
  function mostraPergunta() {
    if (atual >= perguntas.length) {
      mostraResultado();
      return;
    }
  
    let perguntaAtual = perguntas[atual];
    perguntaEl.textContent = perguntaAtual.enunciado;
    alternativasEl.innerHTML = "";
  
    perguntaAtual.alternativas.forEach(alternativa => {
      const btn = document.createElement("button");
      btn.textContent = alternativa.texto;
      btn.onclick = () => {
        historiaFinal += alternativa.afirmacao + " ";
        atual++;
        mostraPergunta();
      };
      alternativasEl.appendChild(btn);
    });
  }
  
  function mostraResultado() {
    perguntaEl.textContent = "Fim do Quiz!";
    alternativasEl.innerHTML = "";
    textoResultadoEl.textContent = historiaFinal;
    resultadoEl.classList.remove("hidden");
  }
  
  reiniciarBtn.addEventListener("click", () => {
    atual = 0;
    historiaFinal = "";
    resultadoEl.classList.add("hidden");
    mostraPergunta();
  });
  
  mostraPergunta();
  