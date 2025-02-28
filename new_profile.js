document.addEventListener("DOMContentLoaded", async () => {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "index.html"; // Redirect to login if no token
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/profile", {
            method: "GET",
            headers: {
                "Authorization": token,  // Send the token to authenticate
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user data");
        }

        const user = await response.json();
        document.getElementById("userName").textContent = user.name;
        document.getElementById("userEmail").textContent = user.email;
    } catch (error) {
        console.error("Error fetching profile:", error);
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "index.html"; // Redirect to login if error occurs
    }
});

function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "index.html";
}
