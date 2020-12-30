var dados = []

function populaTabela() {
    if (Array.isArray(dados)) {

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //TEMPLATE STRING
            $("#tblDados tbody").append(`<tr>
                <td>$${item.ID}</td>
                <td>$${item.Nome}</td>
                <td>$${item.Sobrenome}</td>
                <td>$${item.DtNascimento}</td>
                <td>$${item.Formacao}</td>
            </tr>`)
        })
    }
}

$(function () {
    //EXERCUTA AO CARREGAR DA TELA
    dados = JSON.parse(localStorage.getItem("__dados__"))
 
    if (dados) {
        populaTabela
    }
})