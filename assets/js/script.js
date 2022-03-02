var pessoasRaw = localStorage.getItem('pessoas')
        if(pessoasRaw != null){
            var pessoas = JSON.parse(pessoasRaw)
        }else{
            var pessoas = [];
        }
    function desenhaTabela(){
 
        
        console.log(document.querySelectorAll('table.lista tbody .conteudo_dinamico'))

        linhaAtuais = [...document.querySelectorAll('table.lista tbody .conteudo_dinamico')]
        linhaAtuais.forEach((element) => {
            element.remove();
        });
        for (person in pessoas){
                document.querySelector('table.lista tbody').innerHTML += 
                `<tr class="conteudo_dinamico" style ='background-color: ${((person%2==0) ? '#FFF' : '#eee')}'>
                <td>
                    ${pessoas[person].name}
                </td>
                <td>
                    ${pessoas[person].tel}
                </td>
                <td>
                    ${(pessoas[person].exp ? '<strong style="color:green">Sim</strong>' : '<strong style="color:red">Não</strong>') }
                </td>
                <td>
                <a class="editar" href="./form.html?person=${person}">Editar</a>
                    <button onclick="apagaUsuario(${person})">Excluir</button>
                  
                </td>
            </tr>
                `
        }
}
function apagaUsuario(p) {
    pessoas.splice(p, 1); 
    desenhaTabela();
     localStorage.setItem('pessoas', JSON.stringify(pessoas))
} 
desenhaTabela()
