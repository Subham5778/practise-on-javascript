document.getElementById("nameInput").addEventListener("input", function(){
    const name = this.value;
    document.getElementById("liveHeading").textContent = name ? `Hello, ${name}!` :"Hello, Guest!"; //ternary operator
    
});