export async function getAtores() {
    try {
        const url = 'http://localhost:8080/v2/Acme/atores'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Erro ao obter a lista de atores')
        }
        const data = await response.json()
        console.log('Dados recebidos:', data) 
        return data.ator 
    } catch (error) {
        console.error('Erro ao obter a lista de atores:', error)
        return []
    }
}


export async function getAtoresId (id){
    const url = `http://localhost:8080/v2/acmefilmes/atores/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.atores[0]
}
export async function postAtores (atores){
  
    const url = `http://localhost:8080/v2/Acme/atores`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(atores)
    }
    const response = await fetch (url,options)
    return response.ok
}   

export async function deleteAtores(id) {
    try{
      await fetch(`http://localhost:8080/v2/Acme/atores${id}`, {
        method: 'DELETE',
      });
      console.log('Ator excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir ator: ', error);
    }
  }

  export async function editAtor(id,atorAtualizado) {
    try {
      await fetch(`http://localhost:8080/v2/Acmeatores/update/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(atorAtualizado)
      });
      console.log('Ator substituído com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao substituir o ator: ', error);
  }
  }