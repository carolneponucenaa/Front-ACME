import {getFilmes,deleteFilme,postFilme} from '../js/filmes.js'
const listaFilmes = await getFilmes()

async function getClassificacaoIdByNome(nome) {
    
}

function criarCard(info) {
    const container = document.querySelector('tbody')

    const tr = document.createElement('tr')

    const id = document.createElement('th')
    id.setAttribute('scope', 'row')
    id.textContent = info.id

    const nome = document.createElement('td')
    nome.textContent = info.nome

    const sinopse = document.createElement('td')
    sinopse.textContent = info.sinopse
    sinopse.classList.add('sinopse')

    const duracao = document.createElement('td')
    duracao.textContent = info.duracao

    const dataLancamento = document.createElement('td')
    dataLancamento.textContent = tratar(info.data_lancamento)

    const dataRelancamento = document.createElement('td')
    dataRelancamento.textContent = info.data_relancamento ? tratar(info.data_relancamento) : 'N/A'

    const foto = document.createElement('td')
    const img = document.createElement('img')
    img.setAttribute('src', info.foto_capa)
    img.setAttribute('alt', `${info.nome} - Foto`)
    img.style.width = '100px'
    img.style.height = 'auto'
    img.style.display = 'block'
    foto.appendChild(img)

    const valor = document.createElement('td')
    valor.textContent = info.valor_unitario

    const classificacao = document.createElement('td')
    classificacao.textContent = info.id_classificacao

    const botoes = document.createElement('td')
    const editarButton = document.createElement('button')
    editarButton.classList.add('btn', 'btn-warning', 'btn-sm')
    editarButton.textContent = "Editar"

    const excluirButton = document.createElement('button')
    excluirButton.classList.add('btn', 'btn-danger', 'btn-sm')
    excluirButton.textContent = "Excluir"
    excluirButton.addEventListener('click', () => {
        deleteFilme(info.id)
        window.location.reload()
    })

    botoes.appendChild(editarButton)
    botoes.appendChild(excluirButton)

    tr.appendChild(id)
    tr.appendChild(nome)
    tr.appendChild(sinopse)
    tr.appendChild(duracao)
    tr.appendChild(dataLancamento)
    tr.appendChild(dataRelancamento)
    tr.appendChild(foto)
    tr.appendChild(valor)
    tr.appendChild(classificacao)
    tr.appendChild(botoes)

    container.appendChild(tr)
}

listaFilmes.forEach(filme => {
    criarCard(filme)
})

function tratar(string) {
    return string.substr(0, 4)
}

document.getElementById('logo').addEventListener('click', () => {
    window.location.href = './landing.html'
})

document.getElementById('saveMovieButton').addEventListener('click', async () => {
    const title = document.getElementById('movieTitle').value
    const synopsis = document.getElementById('movieSynopsis').value
    const releaseDate = document.getElementById('movieReleaseDate').value
    const reReleaseDate = document.getElementById('movieReReleaseDate').value
    const posterURL = document.getElementById('moviePosterURL').value
    const duration = document.getElementById('movieDuration').value
    const price = document.getElementById('moviePrice').value
    const classificacaoId = await getClassificacaoIdByNome('classificacao')

    const filme = {
        nome: title,
        sinopse: synopsis,
        data_lancamento: releaseDate,
        data_relancamento: reReleaseDate,
        foto_capa: posterURL,
        duracao: duration,
        valor_unitario: price,
        id_classificacao: classificacaoId
    }

    const sucesso = await postFilme(filme)
    if (sucesso) {
        document.getElementById('movieTitle').value = ''
        document.getElementById('movieSynopsis').value = ''
        document.getElementById('movieReleaseDate').value = ''
        document.getElementById('movieReReleaseDate').value = ''
        document.getElementById('moviePosterURL').value = ''
        document.getElementById('movieDuration').value = ''
        document.getElementById('moviePrice').value = ''

        const modal = new bootstrap.Modal(document.getElementById('addMovieModal'))
        modal.hide()

        window.location.reload()
    }
})
