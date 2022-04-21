function generar_enlace(){
    var textbox = document.getElementById('textbox');
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textbox.value);
    link.style.display = 'block';
}