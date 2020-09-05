// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Projeto 1',
    descricaoDoProjeto: 'Novo Projeto',
    pessoasResponsaveis: [{idPessoa: 123, nome: 'Vivian', setor: 'tecnologia'}, {idPessoa: 987, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: [{idPessoa: 345, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '04/09/2020',
    statusDoProjeto: 'em andamento'
}

// CRIE MAIS DOIS OBJETOS COM INFORMACOES DIFERENTES

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Vendas no atacado',
    descricaoDoProjeto: 'Site para facilitar as compras no atacado',
    pessoasResponsaveis: [{idPessoa: 589, nome: 'Rodrigo', setor: 'financeiro'}],
    pessoasColaboradoras: [
      {idPessoa: 345, nome: 'Marisa', setor: 'tecnologia'},
      {idPessoa: 765, nome: 'Jessica', setor: 'logistica'},
      {idPessoa: 132, nome: 'Karyne', setor: 'recursos humanos'},
    ],
    dataInicio: '31/01/2020',
    statusDoProjeto: 'encerrado',
  };

  const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Consultoria de Moda',
    descricaoDoProjeto: 'site para mostrar tendencias do mundo da moda',
    pessoasResponsaveis: [{idPessoa: 589, nome: 'Lauren', setor: 'marketing'}],
    pessoasColaboradoras: [
      {idPessoa: 345, nome: 'Karen', setor: 'estilo'},
      {idPessoa: 765, nome: 'Renata', setor: 'tecnologia'},
      {idPessoa: 132, nome: 'Luis', setor: 'marketing'},
    ],
    dataInicio: '13/04/2020',
    statusDoProjeto: 'encerrado',
  };


// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto);
  }
  
  console.log(listaDeProjetos, 'Lista de projetos vazia');
  
  adicionaProjeto(projeto1); 
  adicionaProjeto(projeto2); 
  adicionaProjeto(projeto3); 
  
  console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');
  
  // Exercicio 4
  
  function listarProjetos() {
    return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
    return listaDeProjetos;
  }
  
  console.log(listarProjetos());

  // Exercicio 5

function posicaoDoProjeto(posicao) {
    if (listaDeProjetos[posicao] === undefined) {
      return `Projeto não encontrado`;
    } else {
      return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`;
    }
  }
  
  console.log(posicaoDoProjeto(0)); 
  console.log(posicaoDoProjeto(2)); 
  console.log(posicaoDoProjeto(256)); 
  
  // Exercicio 6

function totalDeProjetos() {
    let objetos = listaDeProjetos.length;
    let plural = 'projetos cadastrados';
    let singular = 'projeto cadastrado';
  
    if (objetos > 1) {
      return `Temos o total de ${objetos} ${plural}`;
    } else {
      return `Temos o total de ${objetos} ${singular}`;
    }
  }
  
  console.log(totalDeProjetos()); 

  // Exercicio 7

function buscarProjeto(idProjeto) {
   
    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
      return projeto.idProjeto === idProjeto;
    });
  
    if (projetoEncontrado !== undefined) {
      return projetoEncontrado;
    } else {
      return `Projeto não encontrado`;
    }
  }
  
  console.log(buscarProjeto(3)); 
  console.log(buscarProjeto(222)); 
  
  // Exercicio 8
function mostrarResponsavel(idProjeto, idPessoa) {
  let projeto = buscarProjeto(idProjeto);
  let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) {
    return responsavel.idPessoa === idPessoa;
  });
  if (responsavel !== undefined){
      return true;
  } else {
      return false;
  }
  
}

console.log(mostrarResponsavel(2, 589)); 
console.log(mostrarResponsavel(2, 111)); 

 // Exercicio 9

 function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto) {

  let funcaoExercicio7 = buscarProjeto(idProjeto)
  let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)

  if (funcaoExercicio7 === 'Projeto não encontrado') {
      return 'Id não existe';
  } else if (funcaoExercicio8 === false ) {
      return 'Você não tem autorização para alterar este projeto!';
  } else if (statusDoProjeto === "Encerrado") {
      return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado!`
  } else {
      return 'Permissão concedida';
  }
}

console.log(autorizarAlteracao(1, 123, 0))

// Exercício 10

function queroModificar(idProjeto, idPessoa) {

  let funcaoExercicio7 = acharId(idProjeto) 
  let funcaoExercicio8 = existeProjeto(idProjeto, idPessoa)

  if (funcaoExercicio7 === "Projeto nao encontrado") {
      return "Id Inválido"
  } else  if (!funcaoExercicio8) {
      return "Você não tem autorização para alterar este projeto!"
  }  else {

      if (listaDeProjetos[projeto -1].statusDoProjeto === "Em andamento") {
          listaDeProjetos[projeto -1].statusDoProjeto = "Encerrado" 
          return `Projeto ${listaDeProjetos[projeto -1].tituloProjeto} encerrado.`
      } else {
          return "Esse projeto já foi encerrado."
      }
  }
      
}

console.log(queroModificar(1, 123))