const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A história do canal FUTGAMEPIAZADATÁON começa no dia 10 de abril de 2023.",
        alternativas: [
            {
                texto: "Quero saber mais sobre essa história",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Muito legal",
                afirmacao: "Muito interressante essa história  e entrevista do Canal futgame piazadatáon."
            }
        ]
    },
    {
        enunciado: "O canal foi criado pelo jovem curitibano Ricardo Colaço Dvorak o intuito do  canal e falar sobre curiosidades ,fatos e histórias do futebol",
        alternativas: [
            {
                texto: "Qual foi pensamento de criar esse canal.",
                afirmacao: ""
            },
            {
                texto: "Dedicado ao futebol.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " A ideia de criar o canal tive no final  do ano de 2022 que era ano de copa mais somente em abril coloquei em pratica criação do canal mais antes disso eu tinha outro canal mais o FUTGAMEPIAZADATÁON E O PRINCIPAL MEU ÚNICO CANAL PRINCIPAL NO MOMENTO",
        alternativas: [
            {
                texto: "Seu sonho foi sempre ser um youtuber",
                afirmacao: " "
            },
            {
                texto: "ou tinha outros sonhos quando era pequeno.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado:  "Quando eu era criança eu tinha sonho de ser jogador de futebol mais durante ano de 2020 prentendia fazer um teste de futebol pra conseguir ser jogador profissional pelo  menos tentar mais tivemos trágica pandemia que infelizmente fez tudo parar mais em meio a pandemia tive algumas boas ideias de criar um canal no youtube em outras redes sociais mas não foi coloocado em pratica durante a pandemia viajei com meu pai que é caminhoneiro e trabalhei junto com ele durante ano de 2020   em  2020 eu tinha 14 anos agora em 2024 farei 18 anos é incrível como tempo passa mais foi durantre esse período que foi difícil durante a pandemia percebi que futebol não é pra só jogar futebol mais sim de compreender que tudo possui diversas área.",
        alternativas: [
            {
                texto: "prentende futuralmente abrir um programa esportivo em seu canal.",
                afirmacao: " "
            },
            {
                texto: "quis redes socias o canal atualmente possui.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: " SIM, futuralmente penso em criar um programa um esportivo nno meu no youtube mais ainda são ideias a serem estudadas mais tenho esse plano mente que sabe no futuro mais  atualmente tenho meus conteudos no youtube é também no instagram e tambem no tiktok e essa foi a história do FUTGAMEPIAZADATÁON ",
        alternativas: [
            {
                texto: "gostei muito desssa história que também foi uma entrevista.",
                afirmacao: ""
            },
            {
                texto: " top demais essa história.",
                afirmacao:" aqui deixo uma frase se Você tem sonho,não desista, ao contrário,persista em seu sonho."
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "grande história do futgamepiazadatáon...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
