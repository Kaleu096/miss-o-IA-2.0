const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em um bairro onde muitas pessoas estão enfrentando falta de acesso à educação. Uma ONG chega oferecendo cursos gratuitos. O que você faz?",
        alternativas: [
            {
                texto: "Divulga para todos os moradores e incentiva a participação.",
                afirmacao: "Você se tornou um agente de transformação, ajudando pessoas a buscarem educação."
            },
            {
                texto: "Decide não se envolver, pois acredita que isso não mudará muito.",
                afirmacao: "Optou por não agir e percebeu que a falta de engajamento pode perpetuar os problemas."
            }
        ]
    },
    {
        enunciado: "Durante uma conversa, você descobre que uma empresa local está poluindo um rio que abastece a cidade. Qual sua atitude?",
        alternativas: [
            {
                texto: "Organiza um abaixo-assinado e denuncia a empresa aos órgãos competentes.",
                afirmacao: "Sua iniciativa gerou mobilização e trouxe mais atenção para crimes ambientais."
            },
            {
                texto: "Ignora a situação por medo de represálias.",
                afirmacao: "A falta de ação permitiu que o problema ambiental continuasse afetando a população."
            }
        ]
    },
    {
        enunciado: "Você percebe que uma pessoa está sofrendo preconceito no transporte público. Como reage?",
        alternativas: [
            {
                texto: "Defende a pessoa e alerta os outros passageiros sobre a importância do respeito.",
                afirmacao: "Sua coragem inspirou outras pessoas a não se calarem diante do preconceito."
            },
            {
                texto: "Prefere não se envolver para evitar conflitos.",
                afirmacao: "Sua falta de intervenção fez com que a vítima se sentisse sozinha e vulnerável."
            }
        ]
    },
    {
        enunciado: "Na sua comunidade, muitas pessoas passam fome. Surge um projeto para distribuir alimentos. Qual seu papel?",
        alternativas: [
            {
                texto: "Participa ativamente da arrecadação e entrega de alimentos.",
                afirmacao: "Seu engajamento ajudou famílias a terem comida na mesa e esperança no coração."
            },
            {
                texto: "Decide não colaborar porque acredita que isso é responsabilidade do governo.",
                afirmacao: "Sua ausência reforçou a dificuldade de combater a fome de forma comunitária."
            }
        ]
    },
    {
        enunciado: "Você descobre que crianças estão sendo vítimas de trabalho infantil na sua região. Qual atitude toma?",
        alternativas: [
            {
                texto: "Denuncia imediatamente aos órgãos de proteção e tenta oferecer apoio às famílias.",
                afirmacao: "Sua denúncia contribuiu para salvar crianças de situações de exploração."
            },
            {
                texto: "Ignora a situação porque acredita que não é da sua conta.",
                afirmacao: "Sua omissão fez com que o problema persistisse e mais crianças continuassem vulneráveis."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No futuro...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
