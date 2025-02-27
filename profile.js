function showProfile(user) {
    document.getElementById('profile').style.display = 'block';
    document.getElementById('userName').textContent = user.name;
    document.getElementById('userEmail').textContent = user.email;
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    document.getElementById('profile').style.display = 'none';
    window.location.href = "index.html";
}

window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) showProfile(user);
};
