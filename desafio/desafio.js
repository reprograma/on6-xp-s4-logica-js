// Exercicio 1

const listaDeProjetos = []

// Exercício 2

const projeto1 = {
    idProjeto: 1,

    tituloDoProjeto: 'Software X',
    descricaoDoProjeto: 'Revisar interface e resolver bugs',
    pessoasResponsaveis: [
        { idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia' },
        { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' },
    ],
    pessoasColaboradoras: [
        { idPessoa: 345, nome: 'Andreza', setor: 'tecnologia' },
    ],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento',
};

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Plataforma fácil',
    descricaoDoProjeto: 'construção da plataforma para interação I.A.',
    pessoasResponsaveis: [{ idPessoa: 589, nome: 'Laura', setor: 'marketing' }],
    pessoasColaboradoras: [
        { idPessoa: 345, nome: 'Felipe', setor: 'marketing' },
        { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
        { idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },
    ],
    dataInicio: '23/07/2020',
    statusDoProjeto: 'encerrado',
};

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Atendo em Libras',
    descricaoDoProjeto:
        'projeto para conectar profissionais de saúde a pessoas surdas',
    pessoasResponsaveis: [
        { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
        { idPessoa: 132, nome: 'Amaury', setor: 'tecnologia' },
    ],
    pessoasColaboradoras: [
        { idPessoa: 893, nome: 'Fabiola', setor: 'marketing' },
    ],
    dataInicio: '15/03/2020',
    statusDoProjeto: 'em andamento',
}

// Exercício 3

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)
}

console.log(listaDeProjetos, 'Lista de projetos vazia')

adicionaProjeto(projeto1) 
adicionaProjeto(projeto2) 
adicionaProjeto(projeto3)

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');

// Exercicio 4

function listarProjetos() {
    return listaDeProjetos
}

console.log(listarProjetos())

// Exercicio 5

function posicaoDoProjeto(posicao) {
    if (listaDeProjetos[posicao] === undefined) {
        return `Projeto não encontrado`
    } else {
        return `O "${listaDeProjetos[posicao].tituloDoProjeto}" está na posição ${posicao} e seu status é "${listaDeProjetos[posicao].statusDoProjeto}"`
    }
}

console.log(posicaoDoProjeto(0)) // retorna projeto1
console.log(posicaoDoProjeto(2)) // retorna projeto3
console.log(posicaoDoProjeto(999)) // retorna Projeto não encontrado

// Exercicio 6

function totalDeProjetos() {
    let objetos = listaDeProjetos.length
    let plural = 'projetos cadastrados'
    let singular = 'projeto cadastrado'

    if (objetos > 1) {
        return `Temos o total de ${objetos} ${plural}`
    } else {
        return `Temos o total de ${objetos} ${singular}`
    }
}

console.log(totalDeProjetos()) // retorna 3

// Exercicio 7

function buscarProjeto(idProjeto) {
    // atribui a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
    // return é o resultado da nossa condição

    let projetoEncontrado = listaDeProjetos.find(projeto => projeto.idProjeto === idProjeto)

    if (projetoEncontrado !== undefined) {
        return projetoEncontrado
    } else {
        return `Projeto não encontrado`
    }
}

console.log(buscarProjeto(1)) // retorna projeto 1
console.log(buscarProjeto(999)) // retorna a mensagem

// Exercicio 8

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto)
    let responsavel = projeto.pessoasResponsaveis.filter(responsavel => responsavel.idPessoa === idPessoa)

    return responsavel
}

console.log(mostrarResponsavel(1, 765))


// Exercício 9

function buscar(idProjeto, idPessoa, statusDoProjeto) {
    let projetos = buscarProjeto(idProjeto)
    let pessoaResponsavel = mostrarResponsavel(idProjeto, idPessoa)
    let status = projetos.statusDoProjeto.find(status =>
        status.statusDoProjeto === statusDoProjeto)

    if (pessoaResponsavel === undefined) {
        return 'Você não tem autorização para alterar este projeto!'
    } else if (status === 'encerrado') {
        return `O projeto ${projetos.tituloDoProjeto} já foi encerrado e não pode ser editado!`
    }

}

console.log(buscar(2, 123, 'em andamento'))


// Exercício 10


function validar(idProjeto, idPessoa) {
    let proj = buscarProjeto(idProjeto)
    let validarProj = proj.idProjeto.find(projeto =>
        projeto.idProjeto === idProjeto)
    let pResponsavel = mostrarResponsavel(idProjeto, idPessoa)
    let pessoaRes = pResponsavel.idPessoa.find(pessoaResposavel =>
        pessoaResposavel.pessoaResponsavel === idPessoa)

    if (validarProj == 'em andamento') {
        return validarProj = 'encerrado'
    } else if (pessoaRes === undefined) {
        return 'Você não tem autorização para alterar este projeto!'
    }
}

validar(3, 123)
