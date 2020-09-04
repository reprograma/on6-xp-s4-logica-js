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

// Exercício 3 Crie uma função que adiciona os objetos criados à lista de projetos.

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');


adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto3 a lista de projetos utilizando a função criada

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');

 //Exercício 4 Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase 
//"Lista de projetos: [PROJETOS]".

function listarProjetos() {
    // return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
    return listaDeProjetos;
}

console.log(listarProjetos());

// Exercicio 5
//Crie uma função com as seguintes características:
//A função deve receber um número por parâmetro
//A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o status [PROJETO.STATUS]
//Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado'

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

// Exercicio 6 Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". 
//Extra: tente fazer a frase no singular e no plural

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
// Crie uma função com as seguintes características:
//A função deve receber o parâmetro id do projeto
//Se o id do projeto existir, retorne o projeto encontrado
//Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"

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

// Exercicio 8 Crie uma função com as seguintes características:
// A função deve receber dois parâmetros: idProjeto e idPessoa
// Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano
// Dica1: use a função criada no exercício 7 para verificar se o projeto existe
//Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis

function mostrarResponsavel(idProjeto, idPessoa) {
    let projeto = buscarProjeto(idProjeto);
    let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) {
        return responsavel.idPessoa === idPessoa;
    });
    if(responsavel !== undefined){
        return true;
    } else{
        return false;
    }

} 
console.log(mostrarResponsavel(2, 589));
console.log(mostrarResponsavel(2, 111));

//Exercicio 9

//Crie uma função com as seguintes características:
//A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
//Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o status é diferente de "encerrado" para permitir edição.
//Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição

//Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
//Se o status do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".

function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto){

    let funcaoexercicio7 = buscarProjeto(idProjeto)
    let funcaoexercicio8 = mostrarResponsavel(idProjeto , idPessoa)

    if(funcaoexercicio7 === "Projeto não encontrado"){
        return 'ID não existe';
    }else if(funcaoexercicio8 === false){
        return 'Voce nao tem autorizacao para alterar este projeto!';
    } else if(statusDoProjeto === 'Encerrado'){
        return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado`
    } else{
        return 'Permissão concedida';
    }

} 
console.log(autorizarAlteracao(1, 123, 'em andamento'))

//Execicio 10
//Crie uma função com as seguintes características:
//A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
//Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'
//Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição
//Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".

function modificando (idProjeto, idPessoa){
   
    let funcaoexercicio7 = buscarProjeto(idProjeto)
    let funcaoexercicio8 = mostrarResponsavel(idProjeto , idPessoa)

    if(funcaoexercicio7 === "Projeto não encontrado"){
        return 'ID não existe';
    }else if (funcaoexercicio8 === false){
        return 'Voce nao tem autorizacao para alterar este projeto!';
    }else{
        if(listaDeProjetos[idProjeto-1].statusDoProjeto === 'em andamento'){
            listaDeProjetos[idProjeto-1].statusDoProjeto = 'Encerrado'
            return `Projeto ${listaDeProjetos[idProjeto-1].tituloDoProjeto} em andamento`
        } else{
            return 'Projeto encerrado'
        }
    }
}

console.log(modificando(2,123))
console.log(listaDeProjetos)