/**
* 1 - Crie uma constante que irá receber a lista de projetos.
*/

 const listaDeProjetos = [];

/**
* 2 - Crie 3 objetos diferentes que irão receber as informações do projeto.
*/

  const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Cadastro de funcionários',
    descricaoDoProjeto: 'Realização de cadastros de funcionários da empresa.',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Lílian', setor: 'tecnologia'}], 
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'} ,
                           {idPessoa: 567, nome: 'Jessica', setor: 'tecnologia'}],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
  };

  const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Atualização de estoque',
    descricaoDoProjeto: 'Atualização dos itens que estão com poucas unidades, no estoque.',
    pessoasResponsaveis: [{idPessoa: 789, nome: 'Luciana', setor: 'estoque'}, 
                          {idPessoa: 910, nome: 'Larissa', setor: 'estoque'}],
    pessoasColaboradoras: [{idPessoa: 811, nome: 'Laura', setor: 'tecnologia'}],
    dataInicio: '02/09/2020',
    statusDoProjeto: 'em andamento'
  };

  const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Digitalização de dados antigos',
    descricaoDoProjeto: 'Digitalização de dados antigos, que foram registrados no papel.',
    pessoasResponsaveis: [{idPessoa: 121, nome: 'Maryanna', setor: 'administracao'}, 
                          {idPessoa: 132, nome: 'Lays', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 145, nome: 'Jailton', setor: 'administracao'}],
    dataInicio: '03/05/2020',
    statusDoProjeto: 'encerrado'
  };

/**
* 3 - Crie uma função que adiciona os objetos criados à lista de projetos.
*/

  function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto);
  }

  adicionaProjeto(projeto1);
  adicionaProjeto(projeto2);
  adicionaProjeto(projeto3);

/**
 * 4 - Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]."
*/

  function projetosCadastrados(listaDeProjetos){
    
    console.log("Lista de projetos: ");
    for(contador = 0; contador < listaDeProjetos.length; contador ++){
      console.log(listaDeProjetos[contador]); 
    } 

  }

  projetosCadastrados(listaDeProjetos);
  console.log("-------------");

/**
 * 5 - Crie uma função com as seguintes características:
 *  - A função deve receber um número por parâmetro;
 *  - A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÂO] está com o status [PROJETO.STATUS].'
 *  - Se o projeto não existir na posição, retorne a seguinte frase: "Projeto não encontrado."
*/
   
 function buscaPorProjeto(posicao){
  if(listaDeProjetos[posicao] === undefined){
    return "Projeto não encontrado";
  }else{
    return `O projeto: ${listaDeProjetos[posicao].tituloDoProjeto}, na posição ${posicao + 1} está com o status ${listaDeProjetos[posicao].statusDoProjeto}.`;
  }
 }

 console.log(buscaPorProjeto(0));
 console.log(buscaPorProjeto(1));
 console.log(buscaPorProjeto(2));
 console.log("-------------");


/**
 * 6 - Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". 
 * Extra: tente fazer a frase no singular e no plural. 
*/

 function totalProjetos(){
   if(listaDeProjetos.length > 1){
    return `Temos ${listaDeProjetos.length} projetos cadastrados.`;
   }else if(listaDeProjetos.length === 1){
     return `Temos ${listaDeProjetos.length} projeto cadastrado.`;
   }else {
     return "Temos 0 projetos cadastrados.";
   }
   
 }

 console.log(totalProjetos());
 console.log("-------------");


/**
 * 7 - Crie uma função com as seguintes características:
 * - A função deve receber o parâmetro id do projeto
 * - Se o id do projeto existir, retorne o projeto encontrado
 * - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
 * > Dica: use o método que filtre as informações do Array
*/

 function buscaProjeto(id){

   //tambem poderiamos usar o método filter
  let projetoEncontrado = listaDeProjetos.find(function (projeto){
    return projeto.idProjeto === id;
  });

  if(projetoEncontrado !== undefined){
    return projetoEncontrado;
  }else{
    return "Projeto não encontrado";
  }
 }

 console.log(buscaProjeto(3));
 console.log(buscaProjeto(9)); //esse id nao existe, ele retorna a frase do else.
 console.log("-------------");



/**
 * 8 - Crie uma função com as seguintes características:
 *
 * - A função deve receber dois parâmetros: idProjeto e idPessoa
 *  - Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
 *    > Dica1: use a função criada no exercício 7 para verificar se o projeto existe  
 *    > Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis
*/

 function mostrarResponsavel(idProjeto, idPessoa){
   let projeto = buscaProjeto(idProjeto);
   let responsavel = projeto.pessoasResponsaveis.find(function (responsavel){
     return responsavel.idPessoa === idPessoa;
   });

   if(responsavel !== undefined){
    return true;
   }else{
     return false;
   }
 }

 console.log(mostrarResponsavel(2, 789)); //retorna true
 console.log(mostrarResponsavel(2, 987)); //retorna false
 console.log("-------------");

/**
 * 9 - Crie uma função com as seguintes características:
 *
 *  - A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
 * - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. 
 *  Se existir, então verifique se o _status_ é diferente de "encerrado" para permitir edição.
 *    > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
 *  - Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem 
 *  "Você não tem autorização para alterar este projeto!".
 *  - Se o _status_ do projeto for "encerrado", então retorne a seguinte mensagem 
 *  "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".
*/

 function editaProjeto(idProjeto, idPessoa, statusDoProjeto){
  let pessoasResponsavel = mostrarResponsavel(idProjeto, idPessoa);
  let tituloProjeto = listaDeProjetos[parseInt(idProjeto - 1)].tituloDoProjeto;
  
  if(pessoasResponsavel === false){
    return `Você não tem autorização para alterar o projeto ${tituloProjeto}.`;
  }else if(statusDoProjeto === "encerrado"){
    return `O projeto ${tituloProjeto} já foi encerrado e não pode ser editado!`;
  }else{
    return `Você tem autorização para alterar o projeto: ${tituloProjeto}!`;
  }
 }

 console.log(editaProjeto(1, 123, "em andamento")); 
 console.log(editaProjeto(3, 121, "encerrado")); 
 console.log(editaProjeto(3, 988, "encerrado")); 
 console.log("-------------");


/**
 * 10 - Crie uma função com as seguintes características:
 *
 *  - A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
 *   - Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. 
 *    Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 
 *  'Projeto [NOME DO PROJETO] encerrado'
 *     > Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
 *   - Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem 
 *  "Você não tem autorização para alterar este projeto!".
*/

function alteraStatusProjeto(idProjeto, idPessoa){

  let buscarProjeto = buscaProjeto(idProjeto); 
  let pessoasResponsavel = mostrarResponsavel(idProjeto, idPessoa);

  if(buscarProjeto === "Projeto não encontrado"){
    return "ID inválido";
  }else if(!pessoasResponsavel){
    return "Você não tem autorização para alterar este projeto!";
  }else{
    if (listaDeProjetos[idProjeto -1].statusDoProjeto === "em andamento") {
      listaDeProjetos[idProjeto -1].statusDoProjeto = "encerrado" 
      return `O projeto: ${listaDeProjetos[idProjeto -1].tituloDoProjeto} está encerrado.`
  } else {
      return "Esse projeto já foi encerrado anteriormente."
  }
  }
}

 console.log(alteraStatusProjeto(1, 123)); 
 console.log(alteraStatusProjeto(3, 121)); 
 console.log(alteraStatusProjeto(3, 988)); 
 console.log("-------------");




