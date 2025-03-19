function calcular() {
    var txtv = document.getElementById('txtvel');
    var tipoVia = document.getElementById('tipoVia');
    var res = document.getElementById('res');
    var historico = document.getElementById('historico');

    var vel = Number(txtv.value);
    var limite = Number(tipoVia.value);

    if (isNaN(vel) || vel <= 0) {
        res.innerHTML = '<p class="multado">Por favor, insira uma velocidade válida.</p>';
        return;
    }

    res.innerHTML = `Sua velocidade atual é de <strong>${vel} Km/h</strong><br>`;

    let resultado = "<p class='seguro'>Velocidade dentro do limite permitido.</p>";
    if (vel > limite) {
        let gravidade = "";

        if (vel - limite <= 10) {
            gravidade = "Leve";
        } else if (vel - limite <= 20) {
            gravidade = "Média";
        } else if (vel - limite <= 30) {
            gravidade = "Grave";
        } else {
            gravidade = "Gravíssima";
        }

        resultado = `<p class='multado'>Você está multado! Infração: <strong>${gravidade}</strong>.</p>`;
    }

    res.innerHTML += resultado;
    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`;

    // Adicionar ao histórico
    var novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td>${vel} Km/h</td>
        <td>${limite} Km/h</td>
        <td>${resultado.replace(/<[^>]*>/g, "")}</td>
    `;
    historico.appendChild(novaLinha);
}
function limparHistorico() {
    document.getElementById('historico').innerHTML = "";
}