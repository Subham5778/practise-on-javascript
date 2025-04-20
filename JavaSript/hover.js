const box = document.getElementById("hoverBox");

box.addEventListener("mouseover", function(){
    document.getElementById("hoverMsg").textContent="you're hovering";
});
box.addEventListener("mouseout",function(){
    document.getElementById("hoverMsg").textContent="you left the box.";
});
