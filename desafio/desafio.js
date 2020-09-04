/// Exercicio 1
const listaDeProjetos = [];
console.log("---------------------------")

// Exercício 2
const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Semana 04',
  descricaoDoProjeto: 'exercicio da semana',
  pessoasResponsaveis: [
    { idPessoa: 123, nome: 'Claudia', setor: 'tecnologia' },
    { idPessoa: 987, nome: 'Diego', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Raphaela', setor: 'tecnologia' },
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
    { idPessoa: 345, nome: 'Paulo', setor: 'marketing' },
    { idPessoa: 765, nome: 'Fernanda', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Ekundayo', setor: 'tecnologia' },
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
    { idPessoa: 132, nome: 'Ekundayo', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 893, nome: 'Abiola', setor: 'marketing' },
  ],
  dataInicio: '15/03/2020',
  statusDoProjeto: 'em andamento',
};
console.log("---------------------------")

// Exercício 3
function adicionaProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}
console.log(listaDeProjetos, 'Lista de projetos vazia');
adicionaProjeto(projeto1); // adiciona o projeto1 a lista de projetos utilizando a função criada
adicionaProjeto(projeto2); // adiciona o projeto2 a lista de projetos utilizando a função criada
adicionaProjeto(projeto3); // adiciona o projeto2 a lista de projetos utilizando a função criada
console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');
console.log("---------------------------")

// Exercicio 4
function listarProjetos() {
  return `Lista de projetos: ${JSON.stringify(listaDeProjetos)}`;
}
console.log(listarProjetos());
console.log("---------------------------")

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
console.log("---------------------------")

// Exercicio 6
function totalDeProjetos() {
  let objetos = listaDeProjetos.length;
  if (objetos > 1) {
    return `Temos o total de ${objetos} projetos cadastrados`;
  } else {
    return `Temos o total de ${objetos} projeto cadastrado`;
  }
}
console.log(totalDeProjetos()); // retorna 3
console.log("---------------------------")

//Exercicio 7
function buscarProjeto(idProjeto) {
    // atribuir a variavel projetoEncontrado o retorno do filtro
    // projeto é cada posição do array que o filtro vai acessar para buscar nossa condição
    // return é o resultado da nossa condicao
    // tambem poderiamos usar o metodo find

    /*let projetoEncontrado = listaDeProjetos.filter(function (projeto){
        return projeto.idProjeto === idProjeto;
        return projeto.idProjeto === idProjeto; pesquisar
    });*/
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
console.log("---------------------------")

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
  
  console.log(mostrarResponsavel(2, 589)); // retornar true
  console.log(mostrarResponsavel(2, 111)); // retornar false
  console.log("---------------------------")


// Exercicio 9

// Crie uma função com as seguintes características:

// A função deve receber três parâmetros: idProjeto, idPessoa da pessoa que deseja modificar o projeto, statusDoProjeto
// Se o idProjeto existir, então verique se o idPessoa passado por parâmetro existe na lista de pessoas responsáveis. Se existir, então verifique se o status é diferente de "encerrado" para permitir edição.
// Dica: use as funções criadas nos exercícios 7 e 8 para facilitar a validação dessa condição

// Se o idPessoa NÃO existir na lista de pessoas responsáveis, então retorne a seguinte mensagem "Você não tem autorização para alterar este projeto!".
// Se o status do projeto for "encerrado", então retorne a seguinte mensagem "O projeto [NOME DO PROJETO] já foi encerrado e não pode ser editado!".

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
console.log("---------------------------")



// Exercicio 10
function queroModificar(projeto, pessoa) {

    let funcaoExercicio7 = acharId(projeto) 
    let funcaoExercicio8 = existeProjeto(projeto, pessoa)

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return "ID Inválido"
    } else  if (!funcaoExercicio8) {
        return "Você não tem autorização para alterar este projeto!"
    }  else {

        if (listaDeProjetos[projeto -1].statusDoProjeto === "Em andamento") {
            listaDeProjetos[projeto -1].statusDoProjeto = "Encerrado" 
            return `Projeto ${listaDeProjetos[projeto -1].tituloProjeto} encerrado.`
        } else {
            return "Esse projeto já foi encerrado anteriormente."
        }
    }
        
}

console.log(queroModificar(1, 123))

console.log("---------------------------")


function existeProjeto (projeto, pessoa) {
// Se ele não encontrar o projeto já retorna false,
// Se encontrar o projeto, valida se existe a pessoa ou não

    let funcaoExercicio7 = acharId(projeto) 

    if (funcaoExercicio7 === "Projeto nao encontrado") {
        return false 
    } else {
        let validarIdPessoa = funcaoExercicio7.pessoasResponsaveis.filter(item => item.idPessoa === pessoa)
        
        if (validarIdPessoa.length !== 0) {
            return true
        } else {
            return false
        }
    }
    
}