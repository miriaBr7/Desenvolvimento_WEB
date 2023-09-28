    function totalCompras(){
    label= document.getElementById("total");
    frutas=document.getElementsByName("box");
    total=0;
    resumo="";

    for(i=0; i<frutas.length;i++) {
        if(frutas[i].checked) {
            total+=parseFloat(frutas[i].value);
            resumo+=frutas[i].id+ ", ";
        }
    }
            
    label.innerHTML="<hr>Frutas compradas<br>"+resumo+"<br>Total :"+total;
}
    