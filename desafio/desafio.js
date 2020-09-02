//------Exercício 1
let listaDeProjetos = []


//------Exercício 2
const projeto1 = {
    idProjeto: 1,
    tituloProjeto: "XP Investimentos",
    descricaoDoProjeto: "Uma das maiores empresas de investimentos do Brasil. Atua de forma imparcial e possui soluções alinhadas aos interesses e perfil de cada investidor.",
    pessoasResponsaveis: [{idPessoa: 123, nome: "Nathália", setor: "Tecnologia"},{idPessoa: 987, nome: "Larissa", setor: "Tecnologia"}],
    pessoasColaboradoras: [{idPessoa: 345, nome: "Andreza", setor: "Tecnologia"}, {idPessoa: 470, nome: "Amanda", setor: "Tecnologia"}],
    dataInicio: "29/08/2020",
    statusDoProjeto: "Encerrado"
};

const projeto2 = {
    idProjeto: 2,
    tituloProjeto: "XP Educação",
    descricaoDoProjeto: "Como a maior instituição de educação financeira do país, a XP Educação oferece uma grade completa de cursos e palestras sobre investimentos, com opções para todos os perfis de investidor.",
    pessoasResponsaveis: [
        { idPessoa: 444, nome: "Fernanda", setor: "Tecnologia" }, 
        { idPessoa: 870, nome: "Tamires", setor: "Tecnologia" }],
    pessoasColaboradoras: [
        { idPessoa: 634, nome: "Flávia", setor: "Tecnologia" }],
    dataInicio: "30/08/2020",
    statusDoProjeto: "Em andamento"
};

const projeto3 = {
    idProjeto: 3,
    tituloProjeto: "XP Advisory",
    descricaoDoProjeto: "Soluções patrimoniais e gestão de fundos exclusivos a partir de carteiras administradas sob medida, com o suporte de uma arquitetura aberta de produtos e time de gestão com expertise global.",
    pessoasResponsaveis: [
        { idPessoa: 096, nome: "Cristina", setor: "Tecnologia" }, 
        { idPessoa: 992, nome: "Beatriz", setor: "Tecnologia" }],
    pessoasColaboradoras: [
        { idPessoa: 200, nome: "Bianca", setor: "Tecnologia" }],
    dataInicio: "31/08/2020",
    statusDoProjeto: "Em andamento"
};


//------Exercício 3
function adicionaProjeto(projeto) {
    return listaDeProjetos.push(projeto)
}

adicionaProjeto(projeto1)
adicionaProjeto(projeto2)
adicionaProjeto(projeto3)


// Exercício 4
// Tranformei em string porque ele não queria concatenar,
// ele me retornava [object object]
function projetosCadastrados () {
    
    let transforma = JSON.stringify(listaDeProjetos)
    return `Lista de projetos:\n ${transforma}`
}

// console.log(projetosCadastrados())


//------Exercício 5
function encontra(valor) {
    if (typeof listaDeProjetos[valor] === "object"){
        return `O projeto ${listaDeProjetos[valor].tituloProjeto} na posição ${listaDeProjetos[valor].idProjeto} está com o status ${listaDeProjetos[valor].statusDoProjeto}`
    } else {
        return "Projeto não encontrado"
    }
}

// console.log(encontra(2))


//------Exercício 6
function somaProjetos() {

    let soma = 0
    for (let i = 0; i <= listaDeProjetos.length; i++) {
        soma = i
    }

    let projetos = "projetos"
    let cadastrados = "cadastrados"

    if (soma === 1) {
        projetos = "projeto"
        cadastrados = "cadastrado"
    }

    return `Temos ${soma} ${projetos} ${cadastrados}`
}


// console.log(somaProjetos())


//------Exercício 7
function acharId(valor) {
    const resultado = listaDeProjetos.find(projeto => projeto.idProjeto === valor)

    if (resultado) {
        return resultado
    } else {
        return "Projeto nao encontrado"
    }

}

// console.log(acharId(1))


//------Exercício 8
function existeProjeto (projeto, pessoa) {
    

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

// console.log(existeProjeto(1, 444))


//------Exercicio 9
function autorizaAlterar(projeto, pessoa, status) {
 
    let funcaoExercicio7 = acharId(projeto) 
    let funcaoExercicio8 = existeProjeto(projeto, pessoa)
    

        if (funcaoExercicio7 === "Projeto nao encontrado") {
            return "ID Inválido"
        } else {

            if (!funcaoExercicio8) {
                return "Você não tem autorização para alterar este projeto!."
            } else if (status === "Encerrado") {
                return `O projeto ${listaDeProjetos[projeto -1].tituloProjeto} já foi encerrado e não pode ser editado!`
            } else {
                return "Permissão concedida"
             }
        }

}

// console.log(autorizaAlterar(2, 444, "Encerrado"))


//------Exercicio 10
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


// With love and tears, Nathália Santos (kkkkkkk)