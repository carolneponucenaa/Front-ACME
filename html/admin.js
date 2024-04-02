import {getFilmes,deleteFilme} from '../js/filmes.js'
const listaFilmes = await getFilmes()

function criarCard(info){
    const container = document.querySelector('tbody')

    const tr = document.createElement('tr')

    const id = document.createElement('th')
    id.setAttribute('scope','row')
    id.textContent=info.id
    const nome = document.createElement('th')
    nome.textContent=info.nome
    const sinopse = document.createElement('th')
    sinopse.textContent = info.sinopse
    sinopse.classList.add('sinope')
    const anoLancamento = document.createElement('th')
    anoLancamento.textContent=tratar(info.data_lancamento)
    const botoes = document.createElement('th')
    const editarButton = document.createElement('button')
    editarButton.classList.add('btn','btn-warning','btn-sm')
    editarButton.textContent="Editar"
    const excluirButton = document.createElement('button')
    excluirButton.classList.add('btn','btn-danger','btn-sm')
    excluirButton.textContent="Excluir"
    excluirButton.addEventListener('click',()=>{
        deleteFilme(info.id)
        window.location.reload()
    })

    botoes.replaceChildren(editarButton,excluirButton)
    tr.replaceChildren(id,nome,sinopse,anoLancamento,botoes)
    container.appendChild(tr)

}
listaFilmes.forEach(filme => {
    criarCard(filme)
});

function tratar(string){
    string = string.substr(0,4)
    return string
}

document.getElementById('logo').addEventListener('click',()=>{
    window.location.href='./landing.html'
})