import {getFilmes} from '../js/filmes.js'

const listaFilmes = await getFilmes()

function criarCard(info){
    const container = document.getElementById('containerRow')

    const divImg = document.createElement('div')
    divImg.classList.add('col-md-2')

    const img = document.createElement('img')
    img.classList.add('card-img')
    img.src = info.foto_capa

    img.setAttribute('data-bs-toggle',"modal")
    img.setAttribute('data-bs-target',"#modalExemplo")
    divImg.replaceChildren(img)
    container.appendChild(divImg)

    divImg.addEventListener('click',()=>{
        abrirFilme(info)
    })
    
}

listaFilmes.forEach(filme => {
    criarCard(filme)
});

function abrirFilme(info){
    console.log(info)
    const imagem = document.getElementById('imagemFilme')
    imagem.src = info.foto_capa

    const sinopse = document.getElementById('sinopse')
    sinopse.textContent = info.sinopse
    sinopse.style.fontSize='30px'
}

document.getElementById('logo').addEventListener('click',()=>{
    window.location.href='./admin.html'
})