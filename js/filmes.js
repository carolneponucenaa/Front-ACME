export async function getFilmes() {
    const url = 'http://localhost:8080/v2/Acme/filmes'
    const response = await fetch(url)
    const data = await response.json()
    console.table(data.filmes)
    return data.filmes
}

export async function getFilme (id){
    const url = `http://localhost:8080/v2/Acme/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.filme[0]
}
export async function postFilme (filme){
    const url = `http://localhost:8080/v2/Acme/filme`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(filme)
    }
    const response = await fetch (url,options)
    return response.ok
}