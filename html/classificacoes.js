
import { getClassificacoes, deleteClassificacao, postClassificacao, editClassificacao} from '../js/classificacao.js'

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
        editarButton.addEventListener('click', () => {
            abrirModalEditarClassificacao(info);
        })

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

document.getElementById('saveMovieButton').addEventListener('click', async () => {
    const faixa_etaria = document.getElementById('faixa_etaria').value
    const classificacao = document.getElementById('classificacao').value
    const caracteristica = document.getElementById('caracteristica').value
    const icone = document.getElementById('icone').value

    const filme = {
        faixa_etaria: faixa_etaria,
        classificacao: classificacao,
        caracteristica: caracteristica,
        icone: icone
    } 
    const sucesso = await postClassificacao(filme)
    if (sucesso) {
        document.getElementById('faixa_etaria').value = ''
        document.getElementById('classificacao').value = ''
        document.getElementById('caracteristica').value = ''
        document.getElementById('icone').value = ''

        const modal = new bootstrap.Modal(document.getElementById('addMovieModal'))
        modal.hide()


        window.location.reload()
    }

})


function abrirModalEditarClassificacao(info) {
    const modal = new bootstrap.Modal(document.getElementById('editarClassificacaoModal'))
    
    document.getElementById('faixa_etaria').value = info.faixaEtaria
    document.getElementById('classificacao').value = info.nome
    document.getElementById('caracteristica').value = info.caracteristica
    document.getElementById('icone').value = info.icone

    // Adiciona o ID da classificação como um atributo de dados no modal
    document.getElementById('editarClassificacaoModal').setAttribute('data-id', info.id)

    modal.show()
}

document.getElementById('salvarEdicaoButton').addEventListener('click', async () => {
    const faixa_etaria = document.getElementById('faixa_etaria').value
    const classificacao = document.getElementById('classificacao').value
    const caracteristica = document.getElementById('caracteristica').value
    const icone = document.getElementById('icone').value

    const classificacaoEditada = {
        faixaEtaria: faixa_etaria,  // Correção na chave
        nome: classificacao,        // Correção na chave
        caracteristica: caracteristica,
        icone: icone
    }

    // Recupera o ID da classificação a partir do modal
    const id = document.getElementById('editarClassificacaoModal').getAttribute('data-id')

    const sucesso = await editClassificacao(id, classificacaoEditada)

    if (sucesso) {
        window.location.reload()
    } else {
        console.error('Erro ao salvar edição da classificação')
    }
})