let BtnQuestao1 = document.querySelector('#questao1');
let BtnQuestao2 = document.querySelector('#questao2');
let BtnQuestao3 = document.querySelector('#questao3');

// var signo = prompt("Qual é o seu signo?");

BtnQuestao1.addEventListener('click', () => {
  let numero = prompt("Digite um número para saber o seu dobro:");

  alert(`O dobro de ${numero} é ${numero * 2}`);
});

BtnQuestao2.addEventListener('click', () => {
  let valor = prompt("Digite o valor da conta:");
  let parteGarcom = prompt("Digite a parte do garçom:");

  alert(`A conta de ${valor} adicionando os ${parteGarcom} do garçom terá o total de: ${parseInt(valor) + parseInt(parteGarcom)}`);
});

BtnQuestao3.addEventListener('click', () => {
  let valor = prompt("Digite o valor da conta:");
  let clientes = prompt("Digite a quantidade de clientes:");

  alert(`A conta de ${valor} dividido para ${clientes} terá o total de: ${valor / clientes}`);
});