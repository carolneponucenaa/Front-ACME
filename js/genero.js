export async function getGeneros() {
    try {
        const url = 'http://localhost:8080/v2/Acme/generos'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Erro ao obter a lista de gêneros')
        }
        const data = await response.json()
        console.log('Dados recebidos:', data)
        return data.filmes 
    } catch (error) {
        console.error('Erro ao obter a lista de gêneros:', error)
        return []
    }
}



export async function getGeneroById (id){
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.genero[0]
}
export async function postGenero (genero){
  
    const url = `http://localhost:8080/v2/Acme/generos`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch (url,options)
    return response.ok
}   

export async function deleteGenero(id) {
    try{
      await fetch(`http://localhost:8080/v2/Acme/generos/${id}`, {
        method: 'DELETE',
      });
      console.log('Gênero excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir genero: ', error);
    }
  }

  export async function editGenero(id, genero) {
    try {
        const response = await fetch(`http://localhost:8080/v2/Acmegeneros/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(genero),
        })

        if (!response.ok) {
            console.error('Resposta da API não OK:', response.status, response.statusText)
            return false
        }

        const data = await response.json()
        console.log('Resposta da API:', data)

        
        return data.status === 'success'
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error)
        return false
    }
}