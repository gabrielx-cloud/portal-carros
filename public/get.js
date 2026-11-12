fetch('/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdNome = document.createElement('td')
            var tdsobrenome = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdemail = document.createElement('td')
            var tdsenha = document.createElement('td')
            var tdrua = document.createElement('td')
            var tdcep = document.createElement('td')
            var tdcidade = document.createElement('td')
            var tdestado = document.createElement('td')
            var tdtelefone = document.createElement('td')


            //Preenche as celula da linha com as informações
            tdNome.innerText = objeto.nome
            tdsobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf
            tdemail.innerText = objeto.email
            tdsenha.innerText = objeto.senha
            tdrua.innerText = objeto.rua
            tdcep.innerText = objeto.cep
            tdcidade.innerText = objeto.cidade
            tdestado.innerText = objeto.estado
            tdtelefone.innerText = objeto.telefone

            tr.appendChild(tdNome)
            tr.appendChild(tdsobrenome)
            tr.appendChild(tdCPF)
            tr.appendChild(tdemail)
            tr.appendChild(tdsenha)
            tr.appendChild(tdrua)
            tr.appendChild(tdcep)
            tr.appendChild(tdcidade)
            tr.appendChild(tdestado)
            tr.appendChild(tdtelefone)
            tabelaCorpo.appendChild(tr)
        })
    })