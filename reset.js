async function resetPassword() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const newPassword = document.getElementById('newPassword').value;

    const response = await fetch('http://localhost:5000/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, newPassword })
    });

    const data = await response.json();
    if (response.ok) {
        alert('Password reset successful! You can now login.');
        window.location.href = "index.html";
    } else {
        alert(data.message);
    }
}
