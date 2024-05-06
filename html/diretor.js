import { getDiretores, deleteDiretores, postDiretores } from '../js/diretores.js'

document.addEventListener('DOMContentLoaded', async function() {
    const listaDiretores = await getDiretores()

    function criarCardDiretor(info) {
        const container = document.getElementById('tbody')

        const tr = document.createElement('tr')

        const id = document.createElement('th')
        id.setAttribute('scope', 'row')
        id.textContent = info.id
        const nome = document.createElement('th')
        nome.textContent = info.nome
        const nomeArtistico = document.createElement('th')
        nomeArtistico.textContent = info.nome_artistico
        const sexo = document.createElement('th')
        sexo.textContent = info.sexo 
        const dataNascimento = document.createElement('th')
        dataNascimento.textContent = tratar(info.data_nascimento)
        const dataFalecimento = document.createElement('th')
        dataFalecimento.textContent = info.data_falecimento ? tratar(info.data_falecimento) : 'Ainda vivo'

    container.appendChild(tr)
    const botoes = document.createElement('th')
    const editarButton = document.createElement('button')
    editarButton.classList.add('btn','btn-warning','btn-sm')
    editarButton.textContent="Editar"
    const excluirButton = document.createElement('button')
    excluirButton.classList.add('btn','btn-danger','btn-sm')
    excluirButton.textContent="Excluir"
    excluirButton.addEventListener('click',()=>{
        deleteDiretores(info.id)
        window.location.reload()
    })

    botoes.replaceChildren(editarButton,excluirButton)
    tr.replaceChildren(id,nome,nomeArtistico,sexo,dataFalecimento,dataNascimento,botoes)
    container.appendChild(tr)

    }

    listaDiretores.forEach(diretor => {
        criarCardDiretor(diretor)
    })


    const saveActorButton = document.getElementById('saveActorButton')
    if (saveActorButton) {
        saveActorButton.addEventListener('click', async () => {
        })
    }

    function tratar(string) {
        string = string.substr(0, 4)
        return string
    }

    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = './diretores.html'
    })
})
