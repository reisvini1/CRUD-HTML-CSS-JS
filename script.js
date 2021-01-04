var dados = new Array()

function apagaRegistro(id) {
    let _confirm = confirm("Deseja realmente excluir este registro?")

    if (_confirm) {
        for(let i = 0; i < dados.length; i++) {
            if(dados[i].ID == id) {
                dados.splice(i, 1)
            }
        }
        populaTabela()
    }
}

function editaRegistro(id) {

}

function populaTabela() {
    if (Array.isArray(dados)) {

        localStorage.setItem("__dados__", JSON.stringify(dados))
        
         $("#tblDados tbody").html("")

        dados.forEach(function (item) {
            //TEMPLATE STRING
            $("#tblDados tbody").append(`
            <tr>
                <td>${item.ID}</td>
                <td>${item.Nome}</td>
                <td>${item.Sobrenome}</td>
                <td>${item.DtNascimento}</td>
                <td>${item.Formacao}</td>
                <td><button type="button" class="btn btn-primary"><i class="fas fa-edit"></i></button></td>
                <td><button type="button" class="btn btn-danger" onclick="javascript:apagaRegistro(${item.ID});"><i class="fas fa-trash"></i></button></td>
            </tr>`)
        })
    }
}

$(function() {
    //EXECUTA AO CARREGAR DA TELA
    if (JSON.parse(localStorage.getItem("__dados__"))) {
        dados = JSON.parse(localStorage.getItem("__dados__")) 
        populaTabela()
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

        registro.ID = dados.length + 1
        dados.push(registro)    
        
        alert("Registro salvo com sucesso!")
        $("#modalRegistro").modal("hide")

        //LIMPEZA DOS DADOS
        $(":input").val("")

        populaTabela()
    })
})
