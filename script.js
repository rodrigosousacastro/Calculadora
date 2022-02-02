//Função para mostrar os botões numéricos digitados ao visor
function insert(num) {

    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;

}

//Função para limpar o visor
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar gradualmente caracteres do visor
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
    //substring é um método usado para extrair caracteres de uma string, entre dois índices, onde -1 é a quantidade de caracteres retirados a cada click do mouse 
}

//Função para calcular
function calcular() {

    var resultado = document.getElementById('resultado').innerHTML;

    //Se houver algum valor dentro do parágrafo o cálculo será executado
    if (resultado) {

        //eval é um método que executa cálculos matemáticos
        //O eval irá pegar o que estiver dentro do HTML designado com valores e irá calcular
        document.getElementById('resultado').innerHTML = eval(resultado);

    }
    else {
        document.getElementById('resultado').innerHTML = "Ops.."
    }

}

