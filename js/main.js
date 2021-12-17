function transmite(){
    let text = document.getElementById("intrebare").value;
    window.open("mailto:sakuratako30@gmail.com?subject=intrebare&body=" + text);
}