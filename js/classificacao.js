export async function getClassificacoes() {
    try {
        const url = 'http://localhost:8080/v2/Acme/classificacao'
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Erro ao obter a lista de classificações')
        }
        const data = await response.json()
        console.log('Dados recebidos:', data)
        return data.classificacao
    } catch (error) {
        console.error('Erro ao obter a lista de classificações:', error)
        return []
    }
}

export async function getClassificacaoById(id) {
    try {
        const url = `http://localhost:8080/v2/acmefilmes/classificacao/${id}`
        const response = await fetch(url)
        const data = await response.json()
        return data.classificacoes[0]
    } catch (error) {
        console.error('Erro ao obter a classificação por ID:', error)
        return null
    }
}

export async function postClassificacao(classificacao) {
    try {
        const url = 'http://localhost:8080/v2/Acme/classificacao'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classificacao)
        }
        const response = await fetch(url, options)
        return response.ok
    } catch (error) {
        console.error('Erro ao adicionar classificação:', error)
        return false
    }
}

export async function deleteClassificacao(id) {
    try {
        await fetch(`http://localhost:8080/v2/Acme/classificacao/${id}`, {
            method: 'DELETE'
        })
        console.log('Classificação excluída com sucesso')
    } catch (error) {
        console.error('Erro ao excluir classificação:', error)
    }
}

export async function editClassificacao(id, classificacaoAtualizada) {
    try {
        const url = `http://localhost:8080/v2/Acmeclassificacao/update/${id}`
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classificacaoAtualizada)
        }
        const response = await fetch(url, options)
        if (response.ok) {
            console.log('Classificação atualizada com sucesso')
            return true
        } else {
            console.error('Erro na resposta do servidor:', response.statusText)
            return false
        }
    } catch (error) {
        console.error('Erro ao editar classificação:', error)
        return false
    }
}