function calcularPopulacao(){
    var count = 1
    var txtPopulacao = Number(document.getElementById("populacao").value)
    var txtAnofim = Number(document.getElementById("final").value)
    var txtAnoini = Number(document.getElementById("inicial").value)
    var txtTaxa = Number(document.getElementById("taxa").value)
    var tabl = document.getElementById("tabela")
    var contador = tabl.childElementCount

    taxa=((txtPopulacao * ( txtTaxa / 100 ))+txtPopulacao)

    ano = txtAnoini

    while(ano<txtAnofim){
        ano = txtAnoini + count
        var coluna1 = document.createElement('td')
        var linha = document.createElement('tr')
        coluna1.innerHTML = `Ano: ${ano} |  População: ${taxa}`
        taxa = taxa + (txtPopulacao * ( txtTaxa / 100 ))
        linha.appendChild(coluna1)
        tabl.appendChild(linha) 
        count++
    }
}    