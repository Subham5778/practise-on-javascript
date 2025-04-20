document.getElementById("showTextCheck").addEventListener("change", function(){
    const msg = document.getElementById("toggleText");
    msg.style.display =this.checked ? "block" : "none";
});