export async function getDiretores() {
    try {
        const url = 'http://localhost:8080/v2/Acme/diretores'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Erro ao obter a lista de diretores')
        }
        const data = await response.json()
        console.log('Dados recebidos:', data)
        return data.diretores
    } catch (error) {
        console.error('Erro ao obter a lista de diretores:', error)
        return [];
    }
}


export async function getDiretoresId (id){
    const url = `http://localhost:8080/v2/acmefilmes/diretores/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data.diretores[0]
}
export async function postDiretores (diretores){
  
    const url = `http://localhost:8080/v2/Acme/diretores`
    const options = {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(diretores)
    }
    const response = await fetch (url,options)
    return response.ok
}   

export async function deleteDiretores(id) {
    try{
      await fetch(`http://localhost:8080/v2/Acme/diretores/${id}`, {
        method: 'DELETE',
      });
      console.log('Diretor excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir diretor: ', error);
    }
  }

  export async function editDiretores(id,diretorAtualizado) {
    try {
      await fetch(`http://localhost:8080/v2/Acme/update/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(diretorAtualizado)
      });
      console.log('Diretor substituído com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao substituir o ator: ', error);
  }
  }