function buscaCep() {
    var cep = document.getElementById("buscar").value;
    var url = "http://viacep.com.br/ws/" + cep + "/xml/";

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var xmlDoc = xhr.responseXML;
                var cepElement = xmlDoc.getElementsByTagName("cep")[0];
                var logradouroElement = xmlDoc.getElementsByTagName("logradouro")[0];
                var bairroElement = xmlDoc.getElementsByTagName("bairro")[0];
                var localidadeElement = xmlDoc.getElementsByTagName("localidade")[0];
                var ufElement = xmlDoc.getElementsByTagName("uf")[0];

                var cepValue = cepElement.textContent || cepElement.innerText;
                var logradouroValue = logradouroElement.textContent || logradouroElement.innerText;
                var bairroValue = bairroElement.textContent || bairroElement.innerText;
                var localidadeValue = localidadeElement.textContent || localidadeElement.innerText;
                var ufValue = ufElement.textContent || ufElement.innerText;

                var tabela = document.getElementById("tabela").getElementsByTagName('table')[0];
                tabela.innerHTML = "<tr><td>CEP</td><td>" + cepValue + "</td></tr>" +
                                  "<tr><td>Logradouro</td><td>" + logradouroValue + "</td></tr>" +
                                  "<tr><td>Bairro</td><td>" + bairroValue + "</td></tr>" +
                                  "<tr><td>Localidade</td><td>" + localidadeValue + "</td></tr>" +
                                  "<tr><td>UF</td><td>" + ufValue + "</td></tr>";
            } else {
                console.error("Erro na requisição:", xhr.statusText);
            }
        }
    };

    xhr.send();
}
