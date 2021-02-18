
function editar(id){
    document.getElementById(id).style.display = "none";
    document.getElementById(id+"-div-text").style.display = "block";

}
function cancelar(id){
    document.getElementById(id).style.display = "block";
    document.getElementById(id+"-div-text").style.display = "none";
}
function salvar(id){
    document.getElementById(id).style.display = "block";
    document.getElementById(id+"-div-text").style.display = "none";
    // pegar texto da text area
    var texto_antigo = document.getElementById(id+"-texto").innerHTML;
    var texto_inserido = document.getElementById(id+"-text-edited").value;
    // inserir texto na tag p
    if(texto_inserido === ''){
        document.getElementById(id+"-texto").innerHTML = texto_antigo;
    }else{
        document.getElementById(id+"-texto").innerHTML = texto_inserido;
    }
}
