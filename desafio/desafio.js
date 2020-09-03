// Exercicio 1 
//Crie uma constante que irá receber a lista de projetos.

const listaDeProjetos = [];

// Exercício 2
//Crie 3 objetos diferentes que irão receber as informações do projeto.

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Desenvolvimento web',
    descricaoDoProjeto: 'projeto de criacao de um site',
    pessoasResponsaveis: [
        { idPessoa: 123, nome: 'Fernanda', setor: 'tecnologia' },
        { idPessoa: 987, nome: 'Gabriela', setor: 'tecnologia' },
    ],
    pessoasColaboradoras: [
        { idPessoa: 345, nome: 'Carolina', setor: 'tecnologia' },
    ],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento',
};

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Campanha de Black Friday',
    descricaoDoProjeto: 'projeto de marketing para black friday',
    pessoasResponsaveis: [{ idPessoa: 589, nome: 'Camila', setor: 'marketing' }],
    pessoasColaboradoras: [
        { idPessoa: 345, nome: 'Bruna', setor: 'marketing' },
        { idPessoa: 765, nome: 'Maria', setor: 'marketing' },
        { idPessoa: 132, nome: 'Amanda', setor: 'marketing' },
    ],
    dataInicio: '23/07/2020',
    statusDoProjeto: 'encerrado',
};

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Processo seletivo',
    descricaoDoProjeto:
        'projeto de recrutamento',
    pessoasResponsaveis: [
        { idPessoa: 765, nome: 'Jessica', setor: 'pessoas' },
        { idPessoa: 132, nome: 'Luciana', setor: 'pessoas' },
    ],
    pessoasColaboradoras: [
        { idPessoa: 893, nome: 'Julia', setor: 'pessoas' },
    ],
    dataInicio: '15/03/2020',
    statusDoProjeto: 'em andamento',
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

// Exercicio 4

function listarProjetos() {
    // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
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

console.log(posicaoDoProjeto(0)); // retorna projeto1
console.log(posicaoDoProjeto(2)); // retorna projeto3
console.log(posicaoDoProjeto(999)); // retorna Projeto não encontrado

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

// Exercicio 8

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel) {
        return responsavel.idPessoa === idPessoa;
    });

    return responsavel;
}