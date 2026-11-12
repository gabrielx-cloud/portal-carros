fetch('/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        var tabelaCorpo = document.getElementById('tabela-corpo')

        dados.forEach(objeto => {

            var tr = document.createElement('tr')

            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdTelefone = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdCEP = document.createElement('td')
            var tdRG = document.createElement('td')
            var tdCPF = document.createElement('td')
            var tdIdade = document.createElement('td')
            var tdCurso = document.createElement('td')
            var tdEscola = document.createElement('td')

            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdTelefone.innerText = objeto.telefone
            tdEmail.innerText = objeto.email
            tdRua.innerText = objeto.rua
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdCEP.innerText = objeto.cep
            tdRG.innerText = objeto.rg
            tdCPF.innerText = objeto.cpf
            tdIdade.innerText = objeto.idade
            tdCurso.innerText = objeto.curso
            tdEscola.innerText = objeto.escola

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdTelefone)
            tr.appendChild(tdEmail)
            tr.appendChild(tdRua)
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdCEP)
            tr.appendChild(tdRG)
            tr.appendChild(tdCPF)
            tr.appendChild(tdIdade)
            tr.appendChild(tdCurso)
            tr.appendChild(tdEscola)

            tabelaCorpo.appendChild(tr)
        })
    })

function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('/pessoas', {
        method: 'GET'
    })
        .then(resposta => resposta.json())
        .then(dados => {
            let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf)

            if (pessoaEncontrada) {
                document.getElementById('identificador').value = pessoaEncontrada.id
                document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf
                document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
                document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade
                document.getElementById('rgAtualizar').value = pessoaEncontrada.rg
                document.getElementById('emailAtualizar').value = pessoaEncontrada.email
                document.getElementById('senhaAtualizar').value = pessoaEncontrada.senha
                document.getElementById('telefoneAtualizar').value = pessoaEncontrada.telefone
                document.getElementById('cepAtualizar').value = pessoaEncontrada.cep
                document.getElementById('ruaAtualizar').value = pessoaEncontrada.rua
                document.getElementById('cidadeAtualizar').value = pessoaEncontrada.cidade
                document.getElementById('estadoAtualizar').value = pessoaEncontrada.estado
                document.getElementById('cursoAtualizar').value = pessoaEncontrada.curso
                document.getElementById('escolaAtualizar').value = pessoaEncontrada.escola
            } else {
                alert("Pessoa não encontrada")
            }
        })
}

function atualizarDados() {
    var id = document.getElementById('identificador').value
    var cpf = document.getElementById('identificadorCPF').value
    var nome = document.getElementById('nomeAtualizar').value
    var idade = document.getElementById('idadeAtualizar').value
    var rg = document.getElementById('rgAtualizar').value
    var email = document.getElementById('emailAtualizar').value
    var senha = document.getElementById('senhaAtualizar').value
    var telefone = document.getElementById('telefoneAtualizar').value
    var cep = document.getElementById('cepAtualizar').value
    var rua = document.getElementById('ruaAtualizar').valuea
    var cidade = document.getElementById('cidadeAtualizar').value
    var estado = document.getElementById('estadoAtualizar').value
    var curso = document.getElementById('cursoAtualizar').value
    var escola = document.getElementById('escolaAtualizar').value

    fetch(`/pessoas`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ nome: nome, idade: idade, cpf: cpf, rg: rg, email: email, senha: senha, telefone: telefone, cep: cep, rua: rua, cidade: cidade, estado: estado, curso: curso, escola: escola }) 
    })
        .then(resposta => resposta.JSON) 
}