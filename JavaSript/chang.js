document.getElementById("btn").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "You clicked the button!";
    message.style.color= "blue";//for adding css on in it.
    const button = document.getElementById("btn");
    button.style.backgroundColor="green";
  });
  