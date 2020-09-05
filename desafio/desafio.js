// Exercício 1

const listaDeProjetos = [];

// Exercício 2

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 1, nome: 'Patricia', setor: 'tecnologia' }, { idPessoa: 2, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 3, nome: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 4, nome: 'Monaliza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
};

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Dias da Semana',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 5, nome: 'Andreza', setor: 'tecnologia' }, { idPessoa: 6, nome: 'Andreia', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 7, nome: 'Ceci', setor: 'tecnologia' }, { idPessoa: 8, nome: 'Camila', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'encerrado'
};

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Reprograma',
    descricaoDoProjeto: 'exercício da semana',
    pessoasResponsaveis: [{ idPessoa: 9, nome: 'Joice', setor: 'tecnologia' }, { idPessoa: 10, nome: 'Natália', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 11, nome: 'Carol', setor: 'tecnologia' }, { idPessoa: 12, nome: 'Jéssica', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
};

// Exercício 3

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto);
}

console.log('Lista de projetos vazia', listaDeProjetos);

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada

console.log('Lista de projetos com os projetos adicionados', listaDeProjetos);


// Exercício 4

function listarProjetos() {
    // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
    return listaDeProjetos;
}

console.log('Lista de Projetos: ', listarProjetos());

// Exercício 5

function posicaoDoProjeto(posicao) {
    if (listaDeProjetos[posicao] === undefined) {
        return `Projeto não encontrado`;
    } else {
        return `O projeto "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`
    }
}

console.log(posicaoDoProjeto(0)); // retorna projeto1
console.log(posicaoDoProjeto(2)); // retorna projeto3
console.log(posicaoDoProjeto(999)); // retorna Projeto não encontrado

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

    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
        return projeto.idProjeto === idProjeto;
    });

    if (projetoEncontrado !== undefined) {
        return projetoEncontrado;
    } else {
        return `Projeto não encontrado`;
    }
}

console.log(`O projeto encontrado foi o:`, buscarProjeto(3)); // retorna projeto3
console.log(buscarProjeto(999)); // retorna a mensagem



// Exercício 8

function mostrarResponsavel(projeto, pessoa) {
    let funcaoEx7 = buscarProjeto(projeto);
    if (funcaoEx7 === "Projeto não encontrado") {
        return false
    } else {
        let validaridPessoa = funcaoEx7.pessoasResponsaveis.filter(item => item.idPessoa === pessoa);

        if (validaridPessoa.length !== 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(mostrarResponsavel(2, 2)); // return true
console.log(mostrarResponsavel(2, 111)); // return false

// Exercício 9

function permitirEdicao(idProjeto, idPessoa, statusDoProjeto) {

    let funcaoExercicio7 = buscarProjeto(idProjeto);
    let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa);
    // let buscarprojeto = buscarProjeto(idProjeto);
    // let mostrarresponsavel = mostrarResponsavel(idProjeto, idPessoa); 

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return "ID Inválido";
    } else {
        if (!funcaoExercicio8) {
            return "Você não tem autorização para alterar este projeto.";
        } else if (statusDoProjeto === "Encerrado") {
            return `O projeto ${listaDeProjetos[idProjeto].tituloProjeto} já foi encerrado e não pode ser alterado`;
        } else {
            return "Permissão concedida";
        }
    }
}


// Exercício 10

function queroModificar(idProjeto, idPessoa) {

    let funcaoExercicio7 = buscarProjeto(idProjeto);
    let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa);
    // let buscarprojeto = buscarProjeto(idProjeto);
    // let mostrarresponsavel = mostrarResponsavel(idProjeto, idPessoa); 

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return "ID Inválido"
    } else if (!funcaoExercicio8) {
        return "Você não tem autorização para alterar este projeto."
    } else {
        if (listaDeProjetos[idProjeto - 1].statusDoProjeto === "Em andamento") {
            listaDeProjetos[idProjeto - 1].statusDoProjeto === "Encerrado"
            return `Projeto ${listaDeProjetos[idProjeto - 1].tituloProjeto} encerrado.`
        } else {
            return "Esse projeto já foi encerrado anteriormente."
        }
    }
}
console.log(queroModificar(5, 123));