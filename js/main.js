function trocar(elemento){
    elemento.innerHTML="Deu certo!"
    //document.getElementById("troca").innerHTML="Deu certo!";
    //alert("Trocar texto");
}
function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui!"
    //document.getElementById("troca").innerHTML="Passe o mouse aqui!";
}

function load(){
    alert("Página Carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*Função clicar e redirecionar
function clicou(){
    document.getElementById("agradecimento").innerHTML="<strong>Clique aqui para acessar meu site!</strong>";

    //alert(`Obrigado por Clicar!`)
}
function redirecionar(){
    window.open("https://regispicaz.github.io/");//Acessa o site a partir de nova guia
    window.location.href="https://regispicaz.github.io/";//Acessa o site a patir da mesma guia
}
*/

/*Função de validação
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

/*Funções de soma
function soma(n1, n2){
    return(n1 + n2);
}

alert(soma(4, 4));
*/


/*Data em JavaScript
var d = new Date();
console.log(d);//Data e hora comleto
console.log(d.getDate());//Dia do mês
console.log(d.getMonth()+1);//Mês (Devemos adicionar +1 pois é contado do "0"
console.log(d.getFullYear());//Ano
console.log(d.getHours());//Hora
console.log(d.getMinutes());//Minutos
*/

/*
var d = new Date();
console.log(d.getDate() + "/" + (d.getMonth()+1));
*/

/*Estrutura de  repetição FOR (Mais pratico e reduz tamanho do código)
var count;
for(count=0; count <= 10; count++){
    console.log(count);
}
*/

/*Estrutura de Repetição While
var count = 0;
while (count <= 10){
    console.log(count);
    count ++; 
}
*/

/*Condicionais e Laços de repetição
var idade = prompt("Qual a sua idade?");
if (idade < 18){
    alert("Voçê é menor de idade");
}else{
    alert("Voçê é maior de idade!")
}
*/

/*
var frutas = [{nome:"maça", cor:"verde"}, {nome:"abacaxi", cor:"amarelo"}, {nome:"laranja", cor:"laranja"}];
console.log(frutas[1].cor);
alert(frutas[1].nome);
*/

/*Dicionário
var fruta = {nome:"maça", cor:"verde"};
console.log(fruta.cor);
*/

/*Concatenando com JS
var name = "Régis Picáz";
alert(`Olá ${name}!`);
*/

//Array
//var lista = ["maça", "banana", "abacaxi"];
//lista.push("uva");//adiciona elemento a lista
//lista.pop(); //remove elemento da lista


//console.log(lista);//Mostra os ítens da lista
//console.log(lista.length);//Mostra o tamanho da lista
//console.log(lista.reverse());//Metodo() que Mostra lista em ordem reversa
//console.log(lista.toLocaleString());//Altera de Array para String
//console.log(lista.join(" - "));//Altera os dados para String e os separadores para o caractere de sua escolha


//alert(lista[3]); 