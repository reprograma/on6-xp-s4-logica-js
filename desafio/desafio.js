// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Reprograma',
    descricaoDoProjeto: 'Reprogramando a forma como mulheres se percebem como contribuidoras no setor de tecnologia.',
    pessoasResponsaveis: 
        [{idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia'}, 
        {idPessoa: 124, nome: 'Larissa', setor: 'tecnologia'}],
    pessoasColaboradoras: 
        [{idPessoa: 125, nome: 'Andreza', setor: 'tecnologia'}],
    dataInicio: '29/08/2016',
    statusDoProjeto: 'em andamento'
};

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'WoMakersCode',
    descricaoDoProjeto: 'Somos uma comunidade que fortalece a representatividade feminina na tecnologia, através de orientação de carreira e técnica para fomentar a empregabilidade na indústria.',
    pessoasResponsaveis: 
        [{idPessoa: 126, nome: 'Cynthia', setor: 'tecnologia'}, 
        {idPessoa: 127, nome: 'Camila', setor: 'tecnologia'}],
    pessoasColaboradoras: 
        [{idPessoa: 128, nome: 'Andrea', setor: 'tecnologia'}],
    dataInicio: '01/02/2015',
    statusDoProjeto: 'em andamento'
};

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'PyLadies',
    descricaoDoProjeto: 'Um projeto Python.',
    pessoasResponsaveis: 
        [{idPessoa: 129, nome: 'Cláudia', setor: 'tecnologia'}, 
        {idPessoa: 130, nome: 'Luiza', setor: 'tecnologia'}],
    pessoasColaboradoras: 
        [{idPessoa: 131, nome: 'Maria', setor: 'tecnologia'}],
    dataInicio: '15/01/2017',
    statusDoProjeto: 'encerrado'
};

// Exercício 3

function adicionaProjeto(projeto){
    return listaDeProjetos.push(projeto)
}

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto3 a lista de projetos utilizando a função criada

// Exercício 4

function listarProjetos(){
    return `Lista de projetos: \n ${JSON.stringify(listaDeProjetos)}`
};

console.log(listarProjetos()); // imprime a lista de projetos como string no console
console.log('----------------------------------------------')

// Exercício 5

function posicaoProjeto (posicao) {
    if(listaDeProjetos[posicao] === undefined){
        return 'Projeto não encontrado.';
    } else {
        return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}".`;
    }
};

console.log(posicaoProjeto(2)); // imprime 'O "PyLadies" está na posição 2 e seu status é "encerrado".'
console.log(posicaoProjeto(999)); // imprime 'Projeto não encontrado'
console.log('----------------------------------------------')

// Exercício 6

function totalProjetos() {
    let objetos = listaDeProjetos.length;
    let plural = 'projetos cadastrados';
    let singular = 'projeto cadastrado';

    if(objetos > 1){
    return `Temos ${objetos} ${plural}.`;
    } else {
        return `Temos ${objetos} ${singular}`;
    }
};

console.log(totalProjetos()); // imprime 'Temos 3 projetos cadastrados'
console.log('----------------------------------------------')

// Exercicio 7

function buscarProjeto(idProjeto) {
    // atribui a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
    // return é o resultado da nossa condição
  
    /* exemplo feito com filter ao invés de find:
     let projetoEncontrado = listaDeProjetos.filter(function (projeto) {
      return projeto.idProjeto === idProjeto;
     }); */
  
    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
      return projeto.idProjeto === idProjeto;
    });
  
    if (projetoEncontrado !== undefined) {
      return projetoEncontrado;
    } else {
      return `Projeto não encontrado`;
    }
  }
  
  console.log(buscarProjeto(3)); // imprime projeto3
  console.log(buscarProjeto(999)); // imprime a mensagem Projeto não encontrado
  console.log('----------------------------------------------')
  
  // Exercicio 8
  
  function mostrarResponsavel(projeto, pessoa) {
    let ex7 = buscarProjeto(projeto);
    
    if (ex7 === "Projeto não encontrado"){
        return false;
    } else {
        let responsavel = ex7.pessoasResponsaveis.filter(item => item.idPessoa === pessoa)

        if (responsavel.length !== 0){
            return true
        } else {
            return false
        };
    };

  };
  
  console.log(mostrarResponsavel(2, 126)); //imprime true
  console.log(mostrarResponsavel(2, 999)); //imprime false
  console.log('----------------------------------------------')
  
  // Exercício 9

function modificarProjeto(projeto, pessoa, status) {
    let ex7 = buscarProjeto(projeto);
    let ex8 = mostrarResponsavel(projeto, pessoa);

    if (ex7 === `Projeto não encontrado`){
        return "ID Inválido"
    } else {

        if(!ex8) {
            return "Você não tem autorização para alterar esse projeto."
        } else if (status === "encerrado") {
            return `O projeto ${listaDeProjetos[projeto -1].tituloDoProjeto} já foi encerrado e não pode ser editado.`
        } else {
            return "Você tem permissão para modificar o projeto :)"
        };
    };
};

console.log(modificarProjeto(3, 130, 'encerrado')); //imprime 'O projeto PyLadies já foi encerrado e não pode ser editado.'
console.log(modificarProjeto(3, 999, 0)); //imprime 'você não tem autorização para alterar esse projeto.'
console.log('----------------------------------------------')

//Exercício 10

function queroModificar(projeto, pessoa) {

    let ex7 = buscarProjeto(projeto);
    let ex8 = mostrarResponsavel(projeto, pessoa);

    if (ex7 === "Projeto não encontrado") {
        return "ID Inválido"
    } else  if (!ex8) {
        return "Você não tem autorização para alterar este projeto!"
    }  else {

        if (listaDeProjetos[projeto -1].statusDoProjeto === "em andamento") {
            listaDeProjetos[projeto -1].statusDoProjeto = "encerrado" 
            return `Projeto ${listaDeProjetos[projeto-1].tituloDoProjeto} foi encerrado.`
        } else {
            return "Esse projeto já foi encerrado anteriormente."
        };
    };    
};

console.log(queroModificar(5, 123)); //imprime 'ID inválido'
console.log(queroModificar(1, 123)); // imprime 'Projeto Reprograma foi encerrado.'
console.log('-------------------FIM------------------------')