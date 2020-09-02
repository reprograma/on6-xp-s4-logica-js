// Programa de Gerenciamento de Projetos

const listaProjetos = [];

const projeto1 = {
    idProjeto: "1",
    tituloProjeto: "HTML",
    descricaoProjeto: "Estruturar HTML de site",
    pessoasResponsaveis: [{idPessoa: "12", nomePessoa: "Luana Silva", setor: "tecnologia"}, {idPessoa: "21", nomePessoa: "Vanessa Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: "34", nomePessoa: "Talita Silva", setor: "tecnologia"}, {idPessoa: "43", nomePessoa: "Katiana Silva", setor: "tecnologia"}],
    dataInicio: "08/08/2020",
    statusProjeto: "encerrado"
}

const projeto2 = {
    idProjeto: "2",
    tituloProjeto: "CSS",
    descricaoProjeto: "Montar CSS de site",
    pessoasResponsaveis: [{idPessoa: "12", nomePessoa: "Luana Silva", setor: "tecnologia"}, {idPessoa: "13", nomePessoa: "Vitória Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: "31", nomePessoa: "Kilma Silva", setor: "tecnologia"}, {idPessoa: "14", nomePessoa: "Carlos Silva", setor: "tecnologia"}],
    dataInicio: "15/08/2020",
    statusProjeto: "encerrado"
}

const projeto3 = {
    idProjeto: "3",
    tituloProjeto: "Javascript",
    descricaoProjeto: "Fazer JS de site",
    pessoasResponsaveis: [{idPessoa: "41", nomePessoa: "Lena Silva", setor: "tecnologia"}, {idPessoa: "56", nomePessoa: "Amanda Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: "65", nomePessoa: "Alessandra Silva", setor: "tecnologia"}, {idPessoa: "67", nomePessoa: "Camila Silva", setor: "tecnologia"}],
    dataInicio: "22/08/2020",
    statusProjeto: "em andamento"
}


function adicionarProjeto(projeto){
    listaProjetos.push(projeto);
}

adicionarProjeto(projeto1);
adicionarProjeto(projeto2);
adicionarProjeto(projeto3);

function retornarListaProjetos(){
    return listaProjetos;
}

console.log("Lista de projetos \n", retornarListaProjetos());

function retornarStatusDoProjetoPelaPosicaoNaLista(posicao){
    if(typeof listaProjetos[posicao] === "object"){
        return `O projeto ${listaProjetos[posicao].tituloProjeto} na posição ${posicao} está com o status ${listaProjetos[posicao].statusProjeto}.`;
    }else{
        return "Projeto não encontrado!";
    }    
}

console.log(retornarStatusDoProjetoPelaPosicaoNaLista(0));
console.log(retornarStatusDoProjetoPelaPosicaoNaLista(1));
console.log(retornarStatusDoProjetoPelaPosicaoNaLista(2));
console.log(retornarStatusDoProjetoPelaPosicaoNaLista(100));

function retornarQtdeProjetosCadastrados(){
    let projetosCadastrados = "projetos cadastrados";
    if(listaProjetos.length === 1){
        projetosCadastrados = "projeto cadastrado";
    }
    return `Temos ${listaProjetos.length} ${projetosCadastrados}.`;
}

console.log(retornarQtdeProjetosCadastrados());
listaProjetos.pop();
listaProjetos.pop();
console.log(retornarQtdeProjetosCadastrados());
adicionarProjeto(projeto2);
adicionarProjeto(projeto3);

function retornarProjetoPeloId(id){
    const projeto = listaProjetos.find(projeto => projeto.idProjeto === id);
    if(typeof projeto === "object"){
        return projeto;
    } else{
        return "Projeto não encontrado!";
    }
}

console.log(retornarProjetoPeloId("1"));
console.log(retornarProjetoPeloId("2"));
console.log(retornarProjetoPeloId("3"));
console.log(retornarProjetoPeloId("10"));

function verificarSePessoaEhResponsavelPorProjeto(idDoProjeto, idDaPessoa){
    const projeto = retornarProjetoPeloId(idDoProjeto);
    if(typeof projeto === "object"){
        const pessoaResponsavel = projeto.pessoasResponsaveis.find(pessoa => pessoa.idPessoa === idDaPessoa);
        return (typeof pessoaResponsavel === "object");
    }
}

console.log(verificarSePessoaEhResponsavelPorProjeto("1", "12"));
console.log(verificarSePessoaEhResponsavelPorProjeto("100", "12"));
console.log(verificarSePessoaEhResponsavelPorProjeto("1", "500"));

function alterarStatusDoProjeto(idDoProjeto, idDaPessoaAEditar, novoStatus) {
    const projeto = retornarProjetoPeloId(idDoProjeto);
    if (typeof projeto === "object") {
        if (verificarSePessoaEhResponsavelPorProjeto(idDoProjeto, idDaPessoaAEditar)) {
            if (projeto.statusProjeto !== "encerrado") {
                projeto.statusProjeto = novoStatus;
                return "Projeto foi editado!";
            } else {
                return `O projeto ${projeto.tituloProjeto} já foi encerrado e não pode ser editado!`;
            }
        } else {
            return "Você não tem autorização para alterar este projeto!";
        }
    }else{
        return "Projeto não encontrado!";
    }
}

console.log(alterarStatusDoProjeto("3", "41", "novo status"));
console.log(alterarStatusDoProjeto("3", "41", "em andamento"));
console.log(alterarStatusDoProjeto("1", "12", "novo status"));
console.log(alterarStatusDoProjeto("100", "12", "novo status"));

function encerrarProjeto(idDoProjeto, idDaPessoaAEncerrar) {
    const projeto = retornarProjetoPeloId(idDoProjeto);
    if (typeof projeto === "object") {
        if (verificarSePessoaEhResponsavelPorProjeto(idDoProjeto, idDaPessoaAEncerrar)) {
            if (projeto.statusProjeto === "em andamento") {
                projeto.statusProjeto = "encerrado";
                return `Projeto ${projeto.tituloProjeto} encerrado!`;
            } else {
                return `Projeto ${projeto.tituloProjeto} já foi encerrado!`;
            }
        } else {
            return "Você não tem autorização para encerrar este projeto!";
        }
    } else {
        return "Projeto não encontrado!";
    }
}

console.log(encerrarProjeto("1", "12"));
console.log(encerrarProjeto("3", "12"));
console.log(encerrarProjeto("3", "41"));
projeto3.statusProjeto = "em andamento";

function retornarProjetosEmAndamento(){
    return listaProjetos.filter(projeto => projeto.statusProjeto === "em andamento");
}

console.log("Lista de projetos em andamento \n", retornarProjetosEmAndamento());

function retornarProjetosEncerrados(){
    return listaProjetos.filter(projeto => projeto.statusProjeto === "encerrado");
}

console.log("Lista de projetos encerrados \n", retornarProjetosEncerrados());

function excluirProjeto(idDoProjeto, idDaPessoaAExcluir) {
    const projeto = retornarProjetoPeloId(idDoProjeto);
    if (typeof projeto === "object") {
        if (verificarSePessoaEhResponsavelPorProjeto(idDoProjeto, idDaPessoaAExcluir)) {
            listaProjetos.splice(listaProjetos.indexOf(projeto), 1);
            return "Projeto excluído!";
        } else {
            return "Você não tem autorização para excluir este projeto!";
        }
    } else {
        return "Projeto não encontrado!";
    }
}

console.log(excluirProjeto("1", "12"));
console.log(listaProjetos.length);
adicionarProjeto(projeto1);
console.log(excluirProjeto("1", "500"));
console.log(excluirProjeto("100", "12"));

const modeloProjeto = {
    idProjeto: "1",
    tituloProjeto: "titulo do projeto",
    descricaoProjeto: "descrição do projeto",
    pessoasResponsaveis: [{idPessoa: "1", nomePessoa: "nome sobrenome", setor: "setor de trabalho"}, {idPessoa: "2", nomePessoa: "nome sobrenome 2", setor: "setor de trabalho"}],
    pessoasColaboradoras: [{idPessoa: "3", nomePessoa: "nome sobrenome 3", setor: "setor de trabalho"}, {idPessoa: "4", nomePessoa: "nome sobrenome 4", setor: "setor de trabalho"}],
    dataInicio: "00/00/0000",
    statusProjeto: "em andamento/encerrado"
}