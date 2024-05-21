import { getGeneros, deleteGenero, postGenero, editGenero } from '../js/genero.js'

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
        editarButton.addEventListener('click', () => {
            abrirModalEditarGenero(info)
        })

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

    document.getElementById('saveMovieButton').addEventListener('click', async () => {
        const nome = document.getElementById('generoNome').value
    
        const genero = {
            nome: nome
        } 
        const sucesso = await postGenero(genero)
        if (sucesso) {
            document.getElementById('generoNome').value = ''
    
            const modal = new bootstrap.Modal(document.getElementById('addMovieModal'));
            modal.hide();
    
    
            window.location.reload();
        }
    })
})

function abrirModalEditarGenero(info) {
    const modal = new bootstrap.Modal(document.getElementById('editarGeneroModal'))
    
    document.getElementById('nome').value = info.nome
    document.getElementById('editarGeneroModal').setAttribute('data-id', info.id)

    modal.show()
}

document.getElementById('salvarEdicaoButton').addEventListener('click', async () => {
    const nome = document.getElementById('nome').value
    const id = document.getElementById('editarGeneroModal').getAttribute('data-id') 

    if (!id) {
        console.error('ID não encontrado.')
        return
    }

    const generoEditado = {
        nome: nome
    }

    try {
        const sucesso = await editGenero(id, generoEditado)
    } catch (error) {
        console.error('Erro:', error)
        alert('Erro ao editar.')
    }

    window.location.reload()

})