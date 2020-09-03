function posicaoDoProjeto (p){
    if(listaDeProjetos[p] === undefined){
        return `Projeto não encontrado`
    }else{
        return `O "${listaDeProjetos[p].tituloDoProjeto}" está na posição ${p} e seu status é "${listaDeProjetos[p].statusDoProjeto}"`
    }
}
console.log(posicaoDoProjeto(1))
console.log(posicaoDoProjeto(2))
console.log(posicaoDoProjeto(9))