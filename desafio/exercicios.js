//1. Crie uma constante que irá receber a lista de projetos.

const listaDeProjetos = []

//2. Crie 3 objetos diferentes que irão receber as informações do projeto.

const projeto1 = {
    idProjeto: 1,
    tituloDoProjeto: 'Semana 04',
    descricaoDoProjeto: 'exercicio da semana',
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
    tituloDoProjeto: 'Noticias Boas',
    descricaoDoProjeto: 'site para mostrar somente noticias positivas',
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
  };

//3. Crie uma função que adiciona um objeto contendo as informações do projeto à lista de projetos.

function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');

adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');

//4. Crie uma função que retorne a lista de projetos cadastrados com a seguinte frase "Lista de projetos: [PROJETOS]".

function listarProjetos() {
    return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
}

console.log(listarProjetos());

/*5. Crie uma função com as seguintes características:

A função deve receber um número por parâmetro
A função deve retornar a frase 'O [PROJETO] na posição [POSIÇÃO] está com o status [PROJETO.STATUS]
Se o projeto não existir na posição, retorne a seguinte frase: 'Projeto não encontrado' */

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

//6. Crie uma função que retorne o total de projetos cadastrados com a seguinte frase "Temos [TOTAL] projetos cadastrados". Extra: tente fazer a frase no singular e no plural.

function totalDeProjetos() {
    let objetos = listaDeProjetos.length;
    if (objetos > 1) {
      return `Temos o total de ${objetos} projetos cadastrados`;
    } else {
      return `Temos o total de ${objetos} projeto cadastrado`;
    }
}

console.log(totalDeProjetos()); // retorna 3

/* 7. Crie uma função com as seguintes características:

    A função deve receber o parâmetro id do projeto
    Se o id do projeto existir, retorne o projeto encontrado
    Se o id do projeto NÃO existir, retorne a mensagem "Projeto não encontrado!"

        Dica: use o método que filtre as informações do Array */

function buscarProjeto(idProjeto) {
    let projetoEncontrado = listaDeProjetos.find(function (projeto){
        return projeto.idProjeto === idProjeto;
    });
    if(projetoEncontrado !== undefined){
        return projetoEncontrado;
    } else {
        return `Projeto não encontrado`;
    }
}

console.log(buscarProjeto(3))
console.log(buscarProjeto(999))

/* 8. Crie uma função com as seguintes características:

    A função deve receber dois parâmetros: idProjeto e idPessoa
    Se o idProjeto existir, verifique se o idPessoa existe na lista de pessoas resposáveis e retorne um boleano

        Dica1: use a função criada no exercício 7 para verificar se o projeto existe
        Dica2: use o método que procura por algum elemento igual ao passado por parâmetro no array de pessoasResponsávaeis */

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
          
console.log(mostrarResponsavel(2, 589)); // retornar true
console.log(mostrarResponsavel(2, 111)); // retornar false

/* 9. Crie uma função com as seguintes características:

    A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
    Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o status é diferente de "encerrado" para permitir edição.

        Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição

    Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
    Se o status do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!". */

function autorizarAlteracao (idProjeto, idPessoa, statusDoProjeto) {
    let funcaoExercicio7 = buscarProjeto(idProjeto)
    let funcaoExercicio8 = mostrarResponsavel(idProjeto, idPessoa)
     
    if (funcaoExercicio7 === 'Projeto não encontrado') {
        return 'ID não existe';
    } else if (funcaoExercicio8 === false ) {
        return 'Você não tem autorização para alterar este projeto!';
    } else if (statusDoProjeto === "Encerrado") {
        return `O projeto ${listaDeProjetos[projeto].tituloDoProjeto} já foi encerrado e não pode ser editado!`
    } else {
        return 'Permissão concedida';
    }
}

console.log(autorizarAlteracao(1, 123, 0))

/* 10. Crie uma função com as seguintes características:
    A função deve receber dois parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto
    Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, verifique se o status do projeto é 'em andamento' e altere para 'encerrado, retornando a mensagem 'Projeto [NOME DO PROJETO] encerrado'

        Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição

    Se o nome passado por parâmetro NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!". */

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