// 1. Crie uma constante que irá receber a lista de projetos.

const listaDeProjetos = []

// Crie 3 objetos diferentes que irão receber as informações do projeto.

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
    pessoasResponsaveis: [{ idPessoa: 101, nome: 'Yasminn', setor: 'tecnologia' }, { idPessoa: 102, nome: 'Larissa', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 1001, nome: 'Andreza', setor: 'tecnologia' }],
    dataInicio: '29/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto2 = {
    idProjeto: 2,
    tituloDoProjeto: 'Reprograma',
    descricaoDoProjeto: 'Lembrando as mulheres o poder que tem, de programar o mundo',
    pessoasResponsaveis: [{ idPessoa: 201, nome: 'Jô', setor: 'tecnologia' }, { idPessoa: 202, nome: 'Ceci', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 2001, nome: 'Babi', setor: 'tecnologia' }],
    dataInicio: '05/08/2020',
    statusDoProjeto: 'em andamento'
}

const projeto3 = {
    idProjeto: 3,
    tituloDoProjeto: 'Cafeterias do Antigo',
    descricaoDoProjeto: 'Aplicativo com localização dos locais para se tomar um café, no Recife Antigo.',
    pessoasResponsaveis: [{ idPessoa: 301, nome: 'Jaqueline', setor: 'tecnologia' }, { idPessoa: 302, nome: 'Jessyca', setor: 'tecnologia' }],
    pessoasColaboradoras: [{ idPessoa: 3001, nome: 'Renatha', setor: 'tecnologia' }],
    dataInicio: '01/09/2020',
    statusDoProjeto: 'em andamento'
}

// Crie uma função que adiciona os objetos criados à lista de projetos.

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)
}

console.log('Lista de projetos cadastrados.')

adicionaProjeto(projeto1)
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)// adiciona o projeto1 a lista de projetos utilizando a função criada

console.log(listaDeProjetos)

console.log('------------------------------------------------------------------------------------------------------')


//4. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]"

function listarProjetos() {
    return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`
}
console.log(listarProjetos());

console.log('------------------------------------------------------------------------------------------------------')


/*5. Crie uma função com as seguintes características:

   - A função deve receber um número por parâmetro
   - A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o _status_ [PROJETO.STATUS]
   - Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'*/
const read = require('readline-sync')

let position = parseInt(read.question('Digite um numero: '))

function positionProjeto(position) {
    if (listaDeProjetos[position] === undefined) {
        return 'Projeto não encontrado'
    } else {
        return `O Projeto '${listaDeProjetos[position].tituloDoProjeto}' na posição ${position} está com status '${listaDeProjetos[position].statusDoProjeto}'`
    }
}

console.log(positionProjeto(position))

console.log('------------------------------------------------------------------------------------------------------')

/*6. Crie uma função que retorne o total de projetos cadastrados com a seguinte frase
"Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.1*/

function totalDeProjetos() {
    let objetos = listaDeProjetos.length

    if (objetos < 1) {
        return `Não temos projetos cadastrados`
    } else if (objetos == 1) {
        return `Temos apenas ${objetos} projetos cadastrados`
    } else {
        return `Temos um total de ${objetos} projetos cadastrados`
    }
}

console.log(totalDeProjetos())
console.log('------------------------------------------------------------------------------------------------------')

/*7. Crie uma função com as seguintes características:

   - A função deve receber o parâmetro id do projeto
   - Se o id do projeto existir, retorne o projeto encontrado
   - Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"
     > Dica: use o método que filtre as informações do Array */

let num = parseInt(read.question('Digite um numero: '))

function buscarProjeto(idProjeto) {

    let projetoEncontrado = listaDeProjetos.find(function (projeto) {
        return projeto.idProjeto === idProjeto;
    })
    if (projetoEncontrado !== undefined) {
        return projetoEncontrado;
    } else {
        return `Projeto não encontrado`;
    }
}

console.log(buscarProjeto(num)); // retorna projeto3
console.log('------------------------------------------------------------------------------------------------------')

/*8. Crie uma função com as seguintes características:

   - A função deve receber dois parâmetros: idProjeto e idPessoa
   - Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
    > Dica1: use a função criada no exercício 7 para verificar se o projeto existe  
    > Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis
*/
let numProjeto = parseInt(read.question('Digite o id do Projeto: '))
let numPessoa = parseInt(read.question('Digite o id da pessoa: '))

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto)
    let responsavel = projeto.pessoasResponsaveis.filter(function (responsavel) {
        return responsavel.idPessoa === idPessoa
    });
    if (responsavel !== undefined) {
        return responsavel;
    } else {
        return `Responsavel nao alocado no projeto.`
    }
}

console.log(mostrarResponsavel(numProjeto, numPessoa))
console.log('------------------------------------------------------------------------------------------------------')
/*9. Crie uma função com as seguintes características:

- A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
- Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o _status_ é diferente de "encerrado" para permitir edição.
> Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
- Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
- Se o _status_ do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO]
já foi encerrado e não pode ser editado!".*/

function modificarStatus(idProjeto, idPessoa, statusDoProjeto) {

    let buscar = buscarProjeto(idProjeto)
    let responsavel = mostrarResponsavel(idProjeto, idPessoa)

    if (buscar === 'Projeto não encontrado') {
        return 'Id não encontrado'
    } else {
        if (!responsavel) {
            return `Você não tem autorização para alterar este projeto!`
        }
        else if (statusDoProjeto === 'encerrado') {
            return `O projeto ${listaDeProjetos[projeto - 1].tituloProjeto} já foi encerrado e não pode ser editado`
        }
        else {
            return 'O status pode ser alterado'
        }

    }
}
console.log(modificarStatus(1,101))
console.log('------------------------------------------------------------------------------------------------------')
/*10. Crie uma função com as seguintes características:
        
- A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
- Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'
> Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
- Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".*/
function alterarStatus(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto)
    let responsavel = mostrarResponsavel(idProjeto, idPessoa)

    if (projeto === 'Projeto não encontrado') {
        return "Id não cadastrado"

    } else if (!responsavel) {
        return "Você não possui autorização para alterar este projeto"
    } else {
        if (listaDeProjetos[projeto - 1].statusDoProjeto === "Em andamento") {
            listaDeProjetos[projeto - 1].statusDoProjeto = "Encerrado"
            return `Projeto ${listaDeProjetos[projeto - 1].tituloProjeto} encerrado.`
        }
        else {
            return 'Este projeto já foi encerrado'
        }
    }
}
console.log(alterarStatus(1,101))

