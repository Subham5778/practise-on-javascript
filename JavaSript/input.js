document.getElementById("liveInput").addEventListener("input", function(){
    document.getElementById("liveOutput").textContent= `you typed: ${this.value}`;
});