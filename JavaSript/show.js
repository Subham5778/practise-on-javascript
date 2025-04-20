document.getElementById("toggleCheck").addEventListener("change", function(){
    const message = document.getElementById("secretMessage");
    message.style.display = this.checked ? "block" : "none";
});