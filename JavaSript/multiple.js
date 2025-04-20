document.getElementById("greetBtn").addEventListener("click", function () {
    const name = document.getElementById("nameField").value;
    if (name) {
      document.getElementById("greetingMsg").textContent = `Hi, ${name}! 👋`;
    } else {
      alert("Please enter your name!");
    }
  });
  