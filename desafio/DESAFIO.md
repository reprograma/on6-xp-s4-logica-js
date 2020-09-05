/* Exercicio 1 */

const listaDeProjetos = [];

// Exercício 2

const projeto1 = {
  idProjeto: 1,
  tituloDoProjeto: 'Semana 04',
  descricaoDoProjeto: 'exercicio da semana',
  pessoasResponsaveis: [
    { idPessoa: 2424, nome: 'Thaissa', setor: 'tecnologia' },
    { idPessoa: 1212, nome: 'Felipe', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 3636, nome: 'Ester', setor: 'tecnologia' },
  ],
  dataInicio: '29/08/2020',
  statusDoProjeto: 'em andamento',
};

const projeto2 = {
  idProjeto: 2,
  tituloDoProjeto: 'Vacina do Covid',
  descricaoDoProjeto: 'estudo para criação da vacina contra o Corona Virus',
  pessoasResponsaveis: [{ idPessoa: 965, nome: 'Rita', setor: 'Saude' }],
  pessoasColaboradoras: [
    { idPessoa: 345, nome: 'Angelina', setor: 'marketing' },
    { idPessoa: 765, nome: 'Fernando', setor: 'pesquisa' },
    { idPessoa: 132, nome: 'Mateus', setor: 'tecnologia' },
  ],
  dataInicio: '23/03/2020',
  statusDoProjeto: 'em andamento',
};

const projeto3 = {
  idProjeto: 3,
  tituloDoProjeto: 'Seleção de alunas para turma ON6',
  descricaoDoProjeto:
    'projeto para o processo seletivo de novas alunas do Reprograma',
  pessoasResponsaveis: [
    { idPessoa: 765, nome: 'Ceci', setor: 'pessoas' },
    { idPessoa: 132, nome: 'Yasminn', setor: 'tecnologia' },
  ],
  pessoasColaboradoras: [
    { idPessoa: 893, nome: 'Barbara', setor: 'marketing' },
  ],
  dataInicio: '15/08/2020',
  statusDoProjeto: 'encerrado',
};

// Exercício 3

function adicionaProjeto(projeto) {
  return listaDeProjetos.push(projeto);
}

console.log(listaDeProjetos, 'Lista de projetos vazia');

adicionaProjeto(projeto1); 
adicionaProjeto(projeto2); 
adicionaProjeto(projeto3); 

console.log(listaDeProjetos, 'Lista de projetos com os projetos adicionados');

// Exercicio 4

function listarProjetos() {
  
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

function buscarProjeto7(idProjeto) {
  

  let projetoEncontrado = listaDeProjetos.find(function (projeto) {
    return projeto.idProjeto === idProjeto;
  });

  if (projetoEncontrado !== undefined) {
    return projetoEncontrado;
  } else {
    return `Projeto não encontrado`;
  }
}

console.log(buscarProjeto7(3)); // retorna projeto3
console.log(buscarProjeto7(999)); // retorna a mensagem

// Exercicio 8

function mostraresponsavel8(idProjeto, idPessoa) {
console.log (idProjeto, idPessoa)
  let projeto = exericicio7(idProjeto);

  let responsavel = projeto.pessoasResponsaveis.find(function (responsavel) {

    return responsavel.idPessoa === idPessoa;
  });
  if ( responsavel !== undefined || null)  { 
      
    return responsavel
} else { 
     return "Projeto não encontrado";

  }
}

function seexistir(idProjeto, idPessoa) {
 
    if (funcaoex7 === "Projeto não encontrado") {
        return false;
    }else{
        return true;
    }

}

console.log(mostraresponsavel8(1, 100));

// Exercicio 9

function alterarProjetos (idProjeto , idPessoa, statusDoProjeto) { // parte 1 //

    let funcaoex7 = buscarProjeto(idProjeto)
    let funcaoex8 = mostrarResponsavel(idProjeto, idPessoa)

    if(funcaoex7 === "Projeto não encontrado") {
        return "ID não existe";
    }
    
    else if (funcaoex8 === false) {
        return ("Você não tem autorização para alterar este Projeto!");
    }
    else if (statusDoProjeto === "encerrado") {
        return (`O projeto ${titulodoProjeto} já foi encerrado e não pode ser editado!`);
    
} else {
return "A edição do objeto será permitida!";
}

}

// Exercicio 10 //

function modificarProjeto( idProjeto, idPessoa) { // parte 1 //

    let exericicio7 = buscarProjeto(idProjeto)
    let exercicio8 = mostrarResponsavel(idProjeto, idPessoa)

    if(exericicio7 === "Projeto não encontrado") {
        return "ID não existe";
    }
    
    else if (exercicio8 === false) {  // se o nome passado não existir //
        return ("Você não tem autorização para alterar este Projeto!");
        // e se existir//
    }    if (listaDeProjetos[projeto -1].statusDoProjeto === "Em andamento") {
                         listaDeProjetos[projeto -1].statusDoProjeto = "Encerrado" 
                         return `Projeto ${listaDeProjetos[projeto -1].tituloProjeto} encerrado.`
                     } else {
                        return "Esse projeto já foi encerrado anteriormente."
                    }
                }
            
             
            


/* Professora, tive muita dificuldade em fazer exercicio - muita mesmo-  me esforcei ao máximo pra conseguir,
revi a aula e vi alguns conteúdos no youtube ( e pesquisas no developer mozilla) porém pra mim que estou
 começando do 0 acho que foi muito dificil. Me senti até triste pois não sei se estou no caminho certo por
  não ter feito o exercicio adequadamente. Nesta semana minha bebê não estava bem o que me impossibilitou de ver as aulas de terça e quinta. //
