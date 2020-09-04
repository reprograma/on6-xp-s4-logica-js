/// Exercicio 1
const listaDeProjetos = [];
// Exercício 2
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