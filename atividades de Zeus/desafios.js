
var pessoas = [];

function coletarInfo() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    if (!nome || isNaN(idade) || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("msg-coleta").textContent = "⚠️ Preencha todos os campos!";
        return;
    }

    var media = (nota1 + nota2 + nota3) / 3;

    pessoas.push({ nome: nome, idade: idade, media: media });

    document.getElementById("msg-coleta").textContent = "✅ " + nome + " adicionado(a)! Média: " + media.toFixed(2);


    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("nota1").value = "";
    document.getElementById("nota2").value = "";
    document.getElementById("nota3").value = "";
}



function processarString() {
    var frase = document.getElementById("frase").value;

    if (!frase) {
        document.getElementById("resultado-split").innerHTML = "<p>⚠️ Digite algo primeiro!</p>";
        return;
    }

    var partes = frase.split(",");

    var html = "<p><strong>String original:</strong> " + frase + "</p>";
    html += "<p><strong>Total de partes:</strong> " + partes.length + "</p>";
    html += "<p><strong>Em maiúsculo:</strong> " + frase.toUpperCase() + "</p>";
    html += "<p><strong>Em minúsculo:</strong> " + frase.toLowerCase() + "</p>";
    html += "<p><strong>Quantidade de caracteres:</strong> " + frase.length + "</p>";
    html += "<ul><strong>Itens separados pelo Split:</strong>";

    for (var i = 0; i < partes.length; i++) {
        html += "<li>" + partes[i].trim() + "</li>";
    }

    html += "</ul>";

    document.getElementById("resultado-split").innerHTML = html;
}



function apresentarDados() {
    var div = document.getElementById("lista-dados");

    if (pessoas.length === 0) {
        div.innerHTML = "<p>⚠️ Nenhuma pessoa cadastrada ainda. Use a atividade 1!</p>";
        return;
    }

    var totalMedia = 0;
    var maiores18 = [];
    var html = "<ul>";

    for (var i = 0; i < pessoas.length; i++) {
        var p = pessoas[i];
        totalMedia += p.media;

        html += "<li><strong>" + p.nome + "</strong> — Idade: " + p.idade + " — Média: " + p.media.toFixed(2) + "</li>";

        if (p.idade >= 18) {
            maiores18.push(p.nome);
        }
    }

    html += "</ul>";

    var mediaGeral = (totalMedia / pessoas.length).toFixed(2);

    html += "<p><strong>Média geral da turma:</strong> " + mediaGeral + "</p>";
    html += "<p><strong>Maiores de 18 anos:</strong> " + (maiores18.length > 0 ? maiores18.join(", ") : "Nenhum") + "</p>";

    div.innerHTML = html;
}



function testarTipo() {
    var valor = document.getElementById("valor").value;
    var div = document.getElementById("resultado-tipo");

    if (!valor) {
        div.innerHTML = "<p>⚠️ Digite um valor primeiro!</p>";
        return;
    }

    var html = "<p><strong>Valor digitado:</strong> " + valor + "</p>";
    html += "<p><strong>Tipo original (tudo vem como string do input):</strong> " + typeof valor + "</p>";


    var comoInt = parseInt(valor);
    var comoFloat = parseFloat(valor);
    var comoString = String(valor);
    var comoBool = Boolean(valor);

    html += "<hr>";
    html += "<p><strong>Como inteiro (parseInt):</strong>  " + (isNaN(comoInt) ? "Não é um número inteiro" : comoInt) + " — tipo: " + typeof comoInt + "</p>";
    html += "<p><strong>Como decimal (parseFloat):</strong> " + (isNaN(comoFloat) ? "Não é um número" : comoFloat) + " — tipo: " + typeof comoFloat + "</p>";
    html += "<p><strong>Como String (String()):</strong> " + comoString + " — tipo: " + typeof comoString + "</p>";
    html += "<p><strong>Como Boolean (Boolean()):</strong> " + comoBool + " — tipo: " + typeof comoBool + "</p>";


    html += "<hr>";
    html += "<p><strong>É número?</strong> " + (!isNaN(parseFloat(valor)) ? "Sim" : "Não") + "</p>";
    html += "<p><strong>Comprimento (length):</strong> " + valor.length + " caracteres</p>";

    div.innerHTML = html;
}