// Programa de Gerenciamento de Projetos

const listaProjetos = [];

const projeto1 = {
    idProjeto: 1,
    tituloProjeto: "HTML",
    descricaoProjeto: "Estruturar HTML de site",
    pessoasResponsaveis: [{idPessoa: 12, nomePessoa: "Luana Silva", setor: "tecnologia"}, {idPessoa: 21, nomePessoa: "Vanessa Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: 34, nomePessoa: "Talita Silva", setor: "tecnologia"}, {idPessoa: 43, nomePessoa: "Katiana Silva", setor: "tecnologia"}],
    dataInicio: "08/08/2020",
    statusProjeto: "encerrado"
}

const projeto2 = {
    idProjeto: 2,
    tituloProjeto: "CSS",
    descricaoProjeto: "Montar CSS de site",
    pessoasResponsaveis: [{idPessoa: 12, nomePessoa: "Luana Silva", setor: "tecnologia"}, {idPessoa: 13, nomePessoa: "Vitória Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: 31, nomePessoa: "Kilma Silva", setor: "tecnologia"}, {idPessoa: 14, nomePessoa: "Carlos Silva", setor: "tecnologia"}],
    dataInicio: "15/08/2020",
    statusProjeto: "encerrado"
}

const projeto3 = {
    idProjeto: 3,
    tituloProjeto: "Javascript",
    descricaoProjeto: "Fazer JS de site",
    pessoasResponsaveis: [{idPessoa: 41, nomePessoa: "Lena Silva", setor: "tecnologia"}, {idPessoa: 56, nomePessoa: "Amanda Silva", setor: "tecnologia"}],
    pessoasColaboradoras: [{idPessoa: 65, nomePessoa: "Alessandra Silva", setor: "tecnologia"}, {idPessoa: 67, nomePessoa: "Camila Silva", setor: "tecnologia"}],
    dataInicio: "22/08/2020",
    statusProjeto: "em andamento"
}


function adicionarProjeto(projeto){
    listaProjetos.push(projeto);
}

adicionarProjeto(projeto1);
adicionarProjeto(projeto2);
adicionarProjeto(projeto3);

function retornarListaProjetosComoString(){
    return `Lista de projetos \n ${JSON.stringify(listaProjetos)}`;
}

console.log(retornarListaProjetosComoString());

function retornarListaProjetosEmAndamento(){
    return listaProjetos.filter(projeto => projeto.statusProjeto === "em andamento");
}

console.log("Lista de projetos em andamento \n", retornarListaProjetosEmAndamento());

function retornarListaProjetosEncerrados(){
    return listaProjetos.filter(projeto => projeto.statusProjeto === "encerrado");
}

console.log("Lista de projetos encerrados \n", retornarListaProjetosEncerrados());

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

function retornarQtdeProjetosEmAndamento(){
    const projetosEmAndamento = retornarListaProjetosEmAndamento();
    let projetos = "projetos";
    if(projetosEmAndamento.length === 1){
        projetos = "projeto";
    }
    return `Temos ${projetosEmAndamento.length} ${projetos} em andamento.`;
}

console.log(retornarQtdeProjetosEmAndamento());

function retornarQtdeProjetosEncerrados(){
    const projetosEncerrados = retornarListaProjetosEncerrados();
    let stringProjetosEncerrados = "projetos encerrados";
    if(projetosEncerrados.length === 1){
        stringProjetosEncerrados = "projeto encerrado";
    }
    return `Temos ${projetosEncerrados.length} ${stringProjetosEncerrados}.`;
}

console.log(retornarQtdeProjetosEncerrados());

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


function retornarProjetoPeloId(id){
    const projeto = listaProjetos.find(projeto => projeto.idProjeto === id);
    if(typeof projeto === "object"){
        return projeto;
    } else{
        return "Projeto não encontrado!";
    }
}

console.log(retornarProjetoPeloId(3));
console.log(retornarProjetoPeloId(10));

function verificarSePessoaEhResponsavelPorProjeto(idDoProjeto, idDaPessoa){
    const projeto = retornarProjetoPeloId(idDoProjeto);
    if(typeof projeto === "object"){
        const pessoaResponsavel = projeto.pessoasResponsaveis.find(pessoa => pessoa.idPessoa === idDaPessoa);
        return (typeof pessoaResponsavel === "object");
    }
}

console.log(verificarSePessoaEhResponsavelPorProjeto(1, 12));
console.log(verificarSePessoaEhResponsavelPorProjeto(100, 12));
console.log(verificarSePessoaEhResponsavelPorProjeto(1, 500));

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

console.log(alterarStatusDoProjeto(3, 41, "novo status"));
console.log(alterarStatusDoProjeto(3, 41, "em andamento"));
console.log(alterarStatusDoProjeto(1, 12, "novo status"));
console.log(alterarStatusDoProjeto(100, 12, "novo status"));

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

console.log(encerrarProjeto(1, 12));
console.log(encerrarProjeto(3, 12));
console.log(encerrarProjeto(3, 41));
projeto3.statusProjeto = "em andamento";

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

console.log(excluirProjeto(1, 12));
console.log(listaProjetos.length);
adicionarProjeto(projeto1);
console.log(excluirProjeto(1, 500));
console.log(excluirProjeto(100, 12));

const modeloProjeto = {
    idProjeto: 1,
    tituloProjeto: "titulo do projeto",
    descricaoProjeto: "descrição do projeto",
    pessoasResponsaveis: [{idPessoa: 1, nomePessoa: "nome sobrenome", setor: "setor de trabalho"}, {idPessoa: 2, nomePessoa: "nome sobrenome 2", setor: "setor de trabalho"}],
    pessoasColaboradoras: [{idPessoa: 3, nomePessoa: "nome sobrenome 3", setor: "setor de trabalho"}, {idPessoa: 4, nomePessoa: "nome sobrenome 4", setor: "setor de trabalho"}],
    dataInicio: "00/00/0000",
    statusProjeto: "em andamento/encerrado"
}

// INTERFACE
const query = require('synchronous-user-input');

function adicionarPessoasResponsaveisAProjeto(projeto){
    let adicionarPessoaResponsavel = 1;
    projeto.pessoasResponsaveis = [];
    let pessoaResponsavel;
    while (adicionarPessoaResponsavel === 1) {
        pessoaResponsavel = new Object();
        pessoaResponsavel.idPessoa = query("Digite o id da pessoa responsável pelo projeto: ");
        pessoaResponsavel.nomePessoa = query("Digite o nome da pessoa responsável pelo projeto: ");
        pessoaResponsavel.setor = query("Digite o setor de trabalho da pessoa responsável pelo projeto: ");
        projeto.pessoasResponsaveis.push(pessoaResponsavel);

        adicionarPessoaResponsavel = parseInt(query("Deseja adicionar outra pessoa responsável pelo projeto? (1 - Sim, 2 - Não) "));
    }
}

function adicionarPessoasColaboradorasAProjeto(projeto){
    let adicionarPessoaColaboradora = 1;
    projeto.pessoasColaboradoras = [];
    let pessoaColaboradora;
    while (adicionarPessoaColaboradora === 1) {
        pessoaColaboradora = new Object();
        pessoaColaboradora.idPessoa = query("Digite o id da pessoa colaboradora do projeto: ");
        pessoaColaboradora.nomePessoa = query("Digite o nome da pessoa colaboradora do projeto: ");
        pessoaColaboradora.setor = query("Digite o setor de trabalho da pessoa colaboradora do projeto: ");
        projeto.pessoasColaboradoras.push(pessoaColaboradora);

        adicionarPessoaColaboradora = parseInt(query("Deseja adicionar outra pessoa colaboradora pelo projeto? (1 - Sim, 2 - Não) "));
    }
}

function criarNovoProjeto() {
    const novoProjeto = {};
    novoProjeto.idProjeto = parseInt(query("Digite o id do novo projeto: "));
    novoProjeto.tituloProjeto = query("Escreva o título do projeto: ");
    novoProjeto.descricaoProjeto = query("Adicione uma descrição ao projeto: ");
    adicionarPessoasResponsaveisAProjeto(novoProjeto);
    adicionarPessoasColaboradorasAProjeto(novoProjeto);
    novoProjeto.dataInicio = query("Digite a data de início na forma dd/mm/aaaa: ");
    novoProjeto.statusProjeto = query("Digite o status do projeto (em andamento/encerrado/outro): ");
    adicionarProjeto(novoProjeto);

}

const menu = "MENU: \n Digite o número da opção que você quer selecionar: \n 1 - Criar Projeto \n 2 - Listar projetos \n 3 - Ver quantidade de projetos \n 4 - Ver status de projeto na posição dada \n 5 - Buscar projeto pelo seu id \n 6 - Alterar status de projeto \n 7 - Encerrar projeto \n 8 - Excluir projeto da lista de cadastrados \n";

const menuSecundario = "Digite o número da opção que você quer selecionar: \n 1 - Projetos cadastrados \n 2 - Projetos em andamento \n 3 - Projetos Encerrados \n";

let continuarMenu = 1;
while (continuarMenu === 1) {
    console.log(menu);

    let opcaoEscolhida1 = parseInt(query("Número: "));

    switch (opcaoEscolhida1) {
        case 1:
            criarNovoProjeto();
            break;
        case 4:
            const posicao = parseInt(query("Digite a posição do projeto na lista: "));
            console.log(retornarStatusDoProjetoPelaPosicaoNaLista(posicao));
            break;
        case 5:
            idDoProjeto = parseInt(query("Digite o id do projeto: "));
            console.log(retornarProjetoPeloId(idDoProjeto));
            break;
        default:
            break;
    }

    if (opcaoEscolhida1 === 2) {
        console.log(menuSecundario);
        const opcaoEscolhida2 = parseInt(query("Número: "));
        switch (opcaoEscolhida2) {
            case 1:
                console.log(retornarListaProjetosComoString());
                break;
            case 2:
                console.log("Lista de projetos em andamento \n", retornarListaProjetosEmAndamento());
                break;
            case 3:
                console.log("Lista de projetos encerrados \n", retornarListaProjetosEncerrados());
                break;
            default:
                break;
        }
    }

    if (opcaoEscolhida1 === 3) {
        console.log(menuSecundario);
        const opcaoEscolhida2 = parseInt(query("Número: "));
        switch (opcaoEscolhida2) {
            case 1:
                console.log(retornarQtdeProjetosCadastrados());
                break;
            case 2:
                console.log(retornarQtdeProjetosEmAndamento());
                break;
            case 3:
                console.log(retornarQtdeProjetosEncerrados());
                break;
            default:
                break;
        }
    }

    if ((opcaoEscolhida1 >= 6) && opcaoEscolhida1 <= 8) {
        const idDoProjeto = parseInt(query("Digite o id do projeto: "));
        const idDaPessoa = parseInt(query("Digite seu id: "));
        switch (opcaoEscolhida1) {
            case 6:
                const novoStatus = query("Digite o novo status do projeto: ");
                console.log(alterarStatusDoProjeto(idDoProjeto, idDaPessoa, novoStatus));
                break;
            case 7:
                console.log(encerrarProjeto(idDoProjeto, idDaPessoa));
                break;
            case 8:
                console.log(excluirProjeto(idDoProjeto, idDaPessoa));
                break;
            default:
                break;
        }
    }

    continuarMenu = parseInt(query("Deseja usar menu principal novamente? (1 - Sim, 2 - Não): "));
}
