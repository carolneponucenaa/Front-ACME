import { getClassificacoes, deleteClassificacao, postClassificacao } from '../js/classificacao.js'

document.addEventListener('DOMContentLoaded', async function() {
    const listaClassificacoes = await getClassificacoes()

    function criarCardClassificacao(info) {
        const container = document.getElementById('tbody')
        const tr = document.createElement('tr')

        const id = document.createElement('th')
        id.setAttribute('scope', 'row')
        id.textContent = info.id

        const faixaEtaria = document.createElement('th')
        faixaEtaria.textContent = info.faixa_etaria

        const classificacao = document.createElement('th')
        classificacao.textContent = info.classificacao

        const caracteristica = document.createElement('th')
        caracteristica.textContent = info.caracteristica

        const icone = document.createElement('th')
        icone.innerHTML = `<img src="${info.icone}" alt="${info.classificacao}" width="30" height="30">`

        const botoes = document.createElement('th')
        const editarButton = document.createElement('button')
        editarButton.classList.add('btn', 'btn-warning', 'btn-sm')
        editarButton.textContent = "Editar"
        const excluirButton = document.createElement('button')
        excluirButton.classList.add('btn', 'btn-danger', 'btn-sm')
        excluirButton.textContent = "Excluir"
        excluirButton.addEventListener('click', async () => {
            await deleteClassificacao(info.id)
            window.location.reload()
        })

        botoes.append(editarButton, excluirButton)
        tr.append(id, faixaEtaria, classificacao, caracteristica, icone, botoes)
        container.appendChild(tr)
    }

    listaClassificacoes.forEach(classificacao => {
        criarCardClassificacao(classificacao)
    })

    const saveClassificacaoButton = document.getElementById('saveClassificacaoButton')
    if (saveClassificacaoButton) {
        saveClassificacaoButton.addEventListener('click', async () => {
            
        })
    }

    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = './classificacoes.html'
    })
})
