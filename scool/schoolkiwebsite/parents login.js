document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (email === "parent@example.com" && password === "password123") {
        alert("Login Successful");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").textContent = "Invalid email or password!";
    }
});
