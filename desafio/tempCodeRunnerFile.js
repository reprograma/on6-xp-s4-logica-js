const listaDeProjetos = [];

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 1, nome: 'Patricia', setor: 'tecnologia' }, { idPessoa: 2, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 5, nome: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 7, nome: 'Monaliza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
};

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Dias da Semana',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 1, nome: 'Andreza', setor: 'tecnologia' }, { idPessoa: 2, nome: 'Andreia', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 5, nome: 'Ceci', setor: 'tecnologia' }, { idPessoa: 7, nome: 'Camila', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado'
};

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Reprograma',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 1, nome: 'Joice', setor: 'tecnologia' }, { idPessoa: 2, nome: 'Natália', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 5, nome: 'Carol', setor: 'tecnologia' }, { idPessoa: 7, nome: 'Jéssica', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
};

// Exercício 3

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');


// Exercício 4

function listarProjetos() {
    // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
    return listaDeProjetos;
}

console.log(listarProjetos());

// Exercício 5

function posicaoDoProjeto(posicao) {
    if (listaDeProjetos[posicao] === undefined) {
        return `Projeto não encontrado`;
    } else {
        return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`
    }
}

// Exercício 6

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

console.log(totalDeProjetos()); // retorna 3

// Exercicio 7

function buscarProjeto(idProjeto) {
    // atribui a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
    // return é o resultado da nossa condição
  
    // também poderíamos usar o método find
  
    // let projetoEncontrado = listaDeProjetos.filter(function (projeto) {
    //   return projeto.idProjeto === idProjeto;
    // });
  
    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
      return projeto.idProjeto === idProjeto;
    });
  
    if (projetoEncontrado !== undefined) {
      return projetoEncontrado;
    } else {
      return `Projeto não encontrado`;
    }
  }
  
  console.log(buscarProjeto(3)); // retorna projeto3
  console.log(buscarProjeto(999)); // retorna a mensagem



// Exercício 8

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel) { // pode usar também projeto.pessoasResponsaveis.finder
        return responsavel.idPessoa === idPessoa;
    })

    if (responsavel !== undefined) {
        return true;
    } else {
        return false;
    }
}

console.log(mostrarResponsavel(2, 589)); // return true
console.log(mostrarResponsavel(2, 111)); // return false