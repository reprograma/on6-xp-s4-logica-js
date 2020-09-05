//Exercicio 1

//1. Crie uma constante que irá receber a lista de projetos.

const listaDeProjetos = [];

//2. Crie uma função que adiciona um objeto contendo as informações do projeto à lista de projetos.

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 123, nome: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 987, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 345, nome: 'Andreza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'

};

const projeto2 = {
    idProjeto: 2,
    tituloDoprojeto: 'Semana 3',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 555, nome: 'Graciela', setor: 'tecnologia' }, { idPessoa: 563, nome: 'Alice', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 251, nome: 'Ana', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: `Encerrado`

};

const projeto3 = {
    idProjeto: 3,
    tituloDoprojeto: 'Semana 2',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 645, nome: 'Geovana', setor: 'tecnologia' }, { idPessoa: 888, nome: 'Paula', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 934, nome: 'Mariana', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: `Encerrado`

};


//3. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos".

function incluindoProjetos() {
    listaDeProjetos.push(projeto1);
    listaDeProjetos.push(projeto2);
    listaDeProjetos.push(projeto3);
}
incluindoProjetos();


console.log('Lista de projetos: ')

for (let index = 0; index < listaDeProjetos.length; index++) {
    console.log(listaDeProjetos[index])
}

/*5-Crie uma função com as seguintes características:

A função deve receber um número por parâmetro
A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o status [PROJETO.STATUS]
Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'*/

function posicaoProjeto(posicao) {
    if (listaDeProjetos[posicao] <= listaDeProjetos[2]) {
        return `O projeto ${listaDeProjetos[posicao].idProjeto} está na posição ${[posicao]} com o status: ${listaDeProjetos[posicao].statusDoProjeto}.`
    } else {
        return `Projeto não encontrado.`
    }
}

console.log(posicaoProjeto([4]))

//6-Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.

if (listaDeProjetos.length >= 1) {
    console.log(`Temos o total de ${listaDeProjetos.length} projetos cadastrados`)
} else {
    console.log(`Temos o total de ${listaDeProjetos.length} projeto cadastrado.`)
}

/*7-Crie uma função com as seguintes características:

    A função deve receber o parâmetro id do projeto
    Se o id do projeto existir, retorne o projeto encontrado
    Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
Dica: use o método que filtre as informações do Array */

function projetoId(param) {
    let proId = listaDeProjetos.filter(x => x.idProjeto == param)
    if (proId.length > 0) {
        return proId;
    } else {
        return 'Projeto não encontrado!'
    }
}
console.log(projetoId(1));

/*8-Crie uma função com as seguintes características:

A função deve receber dois parâmetros: idProjeto e idPessoa
Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano

Dica1: use a função criada no exercício 7 para verificar se o projeto existe
Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis */


function verificacao(confirmacaoId, confirmacaoIdpessoa) {
    var result = false;

    for (var i = 0; i < listaDeProjetos.length; i++) {
        if (listaDeProjetos[i].idProjeto == confirmacaoId) {
            var a = listaDeProjetos[i];

            for (var j = 0; j < a.pessoasResponsaveis.length; j++) {
                if (a.pessoasResponsaveis[j].idPessoa == confirmacaoIdpessoa) {
                    result = true;
                }
            }
        }
    }

    return result;
}

console.log(verificacao(3, 645));
//9-

function verificacaoComEdicao(confirmacaoId, confirmacaoIdpessoa, status) {
    var result;

    for (var i = 0; i < listaDeProjetos.length; i++) {
        if (listaDeProjetos[i].idProjeto == confirmacaoId) {
            var a = listaDeProjetos[i];

            for (var j = 0; j < a.pessoasResponsaveis.length; j++) {
                if (a.pessoasResponsaveis[j].idPessoa == confirmacaoIdpessoa) {
                    result = a;
                }

                if (j == a.pessoasResponsaveis.length - 1 && !result) {
                    return 'Você não tem autorização para alterar este projeto!'
                }
            }
        }
    }

    if (result && result.statusDoProjeto == 'Encerrado') {
        return `O projeto ${result.tituloDoprojeto} já foi encerrado e não pode ser editado! `;
    } else if (result) {
        result.statusDoProjeto = status;
        return 'Projeto editado'
    } else {
        return 'Projeto não encontrado'
    }
}

console.log(verificacaoComEdicao(3, 645, 'AAAA'));

//10

function verificacaoParaEditar(confirmacaoId, confirmacaoIdpessoa) {
    var result;

    for (var i = 0; i < listaDeProjetos.length; i++) {
        if (listaDeProjetos[i].idProjeto == confirmacaoId) {
            var a = listaDeProjetos[i];

            for (var j = 0; j < a.pessoasResponsaveis.length; j++) {
                if (a.pessoasResponsaveis[j].idPessoa == confirmacaoIdpessoa) {
                    result = a;
                }

                if (j == a.pessoasResponsaveis.length - 1 && !result) {
                    return 'Você não tem autorização para alterar este projeto!'
                }
            }
        }
    }

    if (result && result.statusDoProjeto == 'em andamento') {
        result.statusDoProjeto == 'Encerrado'
        return `O projeto ${result.tituloDoprojeto} foi encerrado `;
    } else {
        return 'o projeto ja esta encerrado'
    }
}

console.log(verificacaoParaEditar(3, 645));