var produtos = [[1000, 1001, 1002],
["Mouse", "Teclado", "Monitor"],
[35, 50, 350]];
    var pos;
function buscarProduto() {
    var cod=document.frVendas.cod.value;    
    pos= produtos[0].indexOf(parseInt(cod));
    document.frVendas.produto.value=produtos[1][pos];
}
function incluir() {
        var qtd = parseInt(document.frVendas.qtd.value);
        var pai = document.getElementById("tabela");
        tr= document.createElement("tr");
        for (let i=0; i<3; i++) {
            var td = document.createElement("td");
            td.innerHTML=produtos[i][pos];
            tr.appendChild(td);
    }
    var td = document.createElement("td");
        td.innerHTML=qtd*produtos[2][pos];
        tr.appendChild(td);

    pai.appendChild(tr);                           
}
