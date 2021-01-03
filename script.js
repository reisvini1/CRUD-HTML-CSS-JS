var dados = [1]

function populaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))

        $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //TEMPLATE STRING
            $("#tblDados tbody").append(`<tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>
            </tr>`)
        })
    }
}

$(function() {
    //EXERCUTA AO CARREGAR DA TELA
    dados = JSON.parse(localStorage.getItem("__dados__"))
 
    if (dados) {
        populaTabela
    }

    $("#btnSalvar").click(function() {
        //EVENTO CLICK DO BOTÃO SALVAR

        let Nome = $("#txtNome").val()
        let Sobrenome = $("#txtSobrenome").val()
        let DtNascimento = new Date($("#txtDtNascimento").val()).toLocaleDateString("pt-br", { timeZone: "UTC" })
        let Formacao = $("#txtFormacao").val()

        let registro = {}

        registro.Nome = Nome
        registro.Sobrenome = Sobrenome
        registro.DtNascimento = DtNascimento
        registro.Formacao = Formacao

        registro.ID = dados + 1

        dados.push(registro)    
        
        alert("Registro salvo com sucesso!")
        $("#modalRegistro").modal("hide")

        //LIMPEZA DOS DADOS
        $("txtNome").val("")
        $("txtSobrenome").val("")
        $("txtDtNascimento").val("")
        $("txtFormacao").val("")


        populaTabela
    })
})
