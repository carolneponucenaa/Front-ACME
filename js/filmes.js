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
  
  console.log(filme)
    const url = `http://localhost:8080/v2/Acme/filme`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch (url,options)
    return response.ok
}   

export async function deleteFilme(id) {
    try{
      await fetch(`http://localhost:8080/v2/acmefilmes/delete/${id}`, {
        method: 'DELETE',
      });
      console.log('Filme excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir filme: ', error);
    }
  }

  export async function editFilme(id,filmeAtualizado) {
    try {
      await fetch(`http://localhost:8080/v2/acmefilmes/filme/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(filmeAtualizado)
      });
      console.log('Filme substituído com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao substituir o filme: ', error);
  }
  }