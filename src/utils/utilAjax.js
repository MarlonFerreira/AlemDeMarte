export default class utilAjax {
    static requisicaoAjaxPostJson(URL, dados) {
        return fetch(URL, {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify(dados)
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (error) {
                console.log('Erro na operacao ' + error.message)
                return 0
            })
    }

    static requisicaoAjaxPatchJson(URL) {
        return fetch(URL, {
            mode: 'cors',
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            }
        })
            .then(function (response) {
                return response.json()
            })
            .catch(function (error) {
                console.log('Erro na operacao ' + error.message)
                return 0
            })
    }

    static requisicaoAjaxGetJson(URL) {
        return fetch(URL)
            .then(response => response.json())
            .then(data => {
                return data
            });
    }
}