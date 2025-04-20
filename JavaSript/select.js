document.getElementById("language").addEventListener("change",function(){
    const selected =this.value;
    document.getElementById("selectedLang").textContent = selected ? `you selected:${selected}` : "";

});