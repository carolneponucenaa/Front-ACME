import { getGeneros, deleteGenero, postGenero } from '../js/genero.js'

document.addEventListener('DOMContentLoaded', async function() {
    const listaGeneros = await getGeneros()

    function criarCardGenero(info) {
        const container = document.getElementById('tbody')

        const tr = document.createElement('tr')

        const id = document.createElement('th')
        id.setAttribute('scope', 'row')
        id.textContent = info.id

        const nome = document.createElement('th')
        nome.textContent = info.nome

        const botoes = document.createElement('th')
        const editarButton = document.createElement('button')
        editarButton.classList.add('btn', 'btn-warning', 'btn-sm')
        editarButton.textContent = "Editar"
        const excluirButton = document.createElement('button')
        excluirButton.classList.add('btn', 'btn-danger', 'btn-sm')
        excluirButton.textContent = "Excluir"
        excluirButton.addEventListener('click', async () => {
            await deleteGenero(info.id) 
            window.location.reload()
        })

        botoes.append(editarButton, excluirButton)
        tr.append(id, nome, botoes)
        container.appendChild(tr)
    }

    listaGeneros.forEach(genero => {
        criarCardGenero(genero)
    })

    const saveGeneroButton = document.getElementById('saveGeneroButton')
    if (saveGeneroButton) {
        saveGeneroButton.addEventListener('click', async () => {
            
        })
    }

    document.getElementById('logo').addEventListener('click', () => {
        window.location.href = './genero.html'
    })
})
