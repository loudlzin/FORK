// Para começar a escrever, precisamos trazer os elementos que criamos no HTML para o JavaScript. 
// Para fazer isso, utilizamos uma constante (const), porque este valor não vai mudar mais.
// dentro dos [], cada {} é um objeto
const caixaPrincipal = document.querySelector(".caixa-principal"); //constante caixa-principal do HTML
const caixaPerguntas = document.querySelector(".caixa-perguntas"); //constante caixa-perguntas do HTML
const caixaAlternativas = document.querySelector(".caixa-alternativas"); //constante caixa-alternativas do HTML
const caixaResultado = document.querySelector(".caixa-resultado"); //constante caixa-resultado do HTML
const textoResultado = document.querySelector(".texto-resultado"); //constante texto-resultado do HTML

const perguntas = [ //abre uma lista de perguntas
    { //abre objeto de pergunta
        enunciado: "QUAL SUA COR FAVORITA?",
        alternativas: [
        { //alternativa 1
            texto: "PRETO",
            afirmacao: "Afirmação"
        },
        { //alternativa 2
            texto: "VERDE",
            afirmacao: "Afirmação",
        },
        { //alternativa 3
            texto: "AMARELO",
            afirmacao: "Afirmação",
        },
        { //alternativa 4
            texto: "VERMELHO",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Qual sua comida favorita?",
        alternativas: [
        {
            texto: "Pizza",
            afirmacao: "Afirmação"
        },
        {
            texto: "Strogonoff",
            afirmacao: "Afirmação",
        },
        {
            texto: "Frango frito",
            afirmacao: "Afirmação",
        },
        {
            texto: "hot dog",
            afirmacao: "Afirmação",
        },
    ]
    }, //fecha objeto de pergunta
    { //abre objeto de pergunta
        enunciado: "Se fosse para escolher uma profissão, qual escolheria?",
        alternativas: [
        {
            texto: "cientista",
            afirmacao: "Afirmação"
        },
        {
            texto: "cozinheiro",
            afirmacao: "Afirmação",
        },
        {
            texto: "policial",
            afirmacao: "Afirmação",
        },
        {
            texto: "empreendedor",
            afirmacao: "Afirmação",
        },
    ]
    } //fecha objeto de pergunta
]; //fecha lista de pergunta

let atual = 0; //variável marcador de posição; começa pela pergunta 1
let perguntaAtual; //variável que vai receber o texto

function mostraPergunta(){ //função que faz aparecer a pergunta
    perguntaAtual = perguntas[atual]; //declara a variável
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function(){
            atual++;
            mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
mostraPergunta();