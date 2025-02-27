
const authOptions = document.getElementById('auth-options');
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const forgotPasswordForm = document.getElementById('forgot-password-form');
const userMenu = document.getElementById('user-menu');
const registerMessage = document.getElementById('register-message');
const loginMessage = document.getElementById('login-message');
const recoveryMessage = document.getElementById('recovery-message');
const themeToggle = document.getElementById('theme-toggle');

// Buttons
const showRegisterBtn = document.getElementById('show-register');
const showLoginBtn = document.getElementById('show-login');
const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const backFromRegisterBtn = document.getElementById('back-from-register');
const backFromLoginBtn = document.getElementById('back-from-login');
const logoutBtn = document.getElementById('logout');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const requestResetBtn = document.getElementById('request-reset-btn');
const backFromRecoveryBtn = document.getElementById('back-from-recovery');

// Input fields
const regFirstName = document.getElementById('reg-firstname');
const regLastName = document.getElementById('reg-lastname');
const regEmail = document.getElementById('reg-email');
const regPassword = document.getElementById('reg-password');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const recoveryEmail = document.getElementById('recovery-email');

// Error elements
const firstNameError = document.getElementById('firstname-error');
const lastNameError = document.getElementById('lastname-error');
const regEmailError = document.getElementById('reg-email-error');
const regPasswordError = document.getElementById('reg-password-error');
const loginEmailError = document.getElementById('login-email-error');
const loginPasswordError = document.getElementById('login-password-error');
const recoveryEmailError = document.getElementById('recovery-email-error');

let sessionToken = null;
let currentUser = null;

// For the demo, we'll use localStorage to store users instead of a real API
const API_URL = 'http://localhost:3000/api';

// Mock API functions for demonstration purposes
function mockApiRequest(endpoint, method, data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Get existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            if (endpoint === 'register' && method === 'POST') {
                // Check if email already exists
                const emailExists = users.some(user => user.email === data.email);
                if (emailExists) {
                    resolve({ success: false, message: 'Email already registered' });
                    return;
                }
                
                // Add new user
                const newUser = {
                    id: Date.now(),
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password // In a real app, this would be hashed
                };
                
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                
                resolve({ success: true, message: 'Registration successful' });
            } 
            else if (endpoint === 'login' && method === 'POST') {
                // Find user with matching email and password
                const user = users.find(u => 
                    u.email === data.email && u.password === data.password
                );
                
                if (user) {
                    // Generate mock token
                    const token = 'mock-jwt-token-' + Math.random().toString(36).substring(2);
                    resolve({ 
                        success: true, 
                        token: token,
                        user: {
                            id: user.id,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email
                        }
                    });
                } else {
                    resolve({ success: false, message: 'Invalid email or password' });
                }
            }
            else if (endpoint === 'request-password-reset' && method === 'POST') {
                // Check if email exists
                const userExists = users.some(user => user.email === data.email);
                if (userExists) {
                    resolve({ success: true, message: 'Password reset link sent' });
                } else {
                    resolve({ success: false, message: 'Email not found' });
                }
            }
        }, 500); // Simulate network delay
    });
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'light' ? '☀️' : '🌙';
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
});

// Load saved theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.textContent = savedTheme === 'light' ? '☀️' : '🌙';
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Use system preference if no saved preference
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '🌙';
    }
});

// Validation functions
function validateEmail(email) {
    if (!email) return 'Email is required';
    if (!email.includes('@')) return 'Email must contain @ symbol';
    return null;
}

function validateName(name, field) {
    if (!name) return `${field} is required`;
    if (name !== name.toUpperCase()) return `${field} must be in UPPERCASE`;
    return null;
}

function validatePassword(password) {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return null;
}

// Clear all form displays
function hideAllForms() {
    authOptions.style.display = 'none';
    registerForm.style.display = 'none';
    loginForm.style.display = 'none';
    forgotPasswordForm.style.display = 'none';
    userMenu.style.display = 'none';
}

// Event Listeners
showRegisterBtn.addEventListener('click', () => {
    hideAllForms();
    registerForm.style.display = 'block';
    clearErrors();
});

showLoginBtn.addEventListener('click', () => {
    hideAllForms();
    loginForm.style.display = 'block';
    clearErrors();
});

backFromRegisterBtn.addEventListener('click', () => {
    hideAllForms();
    authOptions.style.display = 'block';
    clearFormFields('register');
    clearErrors();
});

backFromLoginBtn.addEventListener('click', () => {
    hideAllForms();
    authOptions.style.display = 'block';
    clearFormFields('login');
    clearErrors();
});

forgotPasswordLink.addEventListener('click', () => {
    hideAllForms();
    forgotPasswordForm.style.display = 'block';
    clearErrors();
});

backFromRecoveryBtn.addEventListener('click', () => {
    hideAllForms();
    loginForm.style.display = 'block';
    clearFormFields('recovery');
    clearErrors();
});

function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => element.textContent = '');
    
    registerMessage.textContent = '';
    loginMessage.textContent = '';
    recoveryMessage.textContent = '';
    
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(field => field.classList.remove('error'));
}

function clearFormFields(form) {
    if (form === 'register' || form === 'all') {
        regFirstName.value = '';
        regLastName.value = '';
        regEmail.value = '';
        regPassword.value = '';
    }
    
    if (form === 'login' || form === 'all') {
        loginEmail.value = '';
        loginPassword.value = '';
    }
    
    if (form === 'recovery' || form === 'all') {
        recoveryEmail.value = '';
    }
}

registerBtn.addEventListener('click', async () => {
    clearErrors();
    let hasError = false;
    
    // Validate first name (uppercase)
    const firstNameErrorMessage = validateName(regFirstName.value, 'First Name');
    if (firstNameErrorMessage) {
        firstNameError.textContent = firstNameErrorMessage;
        regFirstName.classList.add('error');
        hasError = true;
    }
    
    // Validate last name (uppercase)
    const lastNameErrorMessage = validateName(regLastName.value, 'Last Name');
    if (lastNameErrorMessage) {
        lastNameError.textContent = lastNameErrorMessage;
        regLastName.classList.add('error');
        hasError = true;
    }
    
    // Validate email
    const emailErrorMessage = validateEmail(regEmail.value);
    if (emailErrorMessage) {
        regEmailError.textContent = emailErrorMessage;
        regEmail.classList.add('error');
        hasError = true;
    }
    
    // Validate password
    const passwordErrorMessage = validatePassword(regPassword.value);
    if (passwordErrorMessage) {
        regPasswordError.textContent = passwordErrorMessage;
        regPassword.classList.add('error');
        hasError = true;
    }
    
    if (hasError) return;

    try {
        // Use mock API for demo instead of real backend
        const data = await mockApiRequest('register', 'POST', {
            firstName: regFirstName.value,
            lastName: regLastName.value,
            email: regEmail.value,
            password: regPassword.value
        });

        if (data.success) {
            registerMessage.textContent = 'Registration successful! Please login.';
            registerMessage.className = 'success-message';

            clearFormFields('register');

            setTimeout(() => {
                hideAllForms();
                loginForm.style.display = 'block';
            }, 2000);
        } else {
            registerMessage.textContent = data.message || 'Registration failed';
            registerMessage.className = 'error-message';
        }
    } catch (error) {
        console.error('Registration error:', error);
        registerMessage.textContent = 'Server error. Please try again later.';
        registerMessage.className = 'error-message';
    }
});

loginBtn.addEventListener('click', async () => {
    clearErrors();
    let hasError = false;
    
    // Validate email
    const emailErrorMessage = validateEmail(loginEmail.value);
    if (emailErrorMessage) {
        loginEmailError.textContent = emailErrorMessage;
        loginEmail.classList.add('error');
        hasError = true;
    }
    
    // Validate password
    if (!loginPassword.value) {
        loginPasswordError.textContent = 'Password is required';
        loginPassword.classList.add('error');
        hasError = true;
    }
    
    if (hasError) return;

    try {
        // Use mock API for demo instead of real backend
        const data = await mockApiRequest('login', 'POST', {
            email: loginEmail.value, 
            password: loginPassword.value
        });

        if (data.success) {
            sessionToken = data.token;
            currentUser = data.user;

            // Display user's first name
            document.getElementById('user-name').textContent = currentUser.firstName;

            hideAllForms();
            userMenu.style.display = 'block';
            clearFormFields('login');
        } else {
            loginMessage.textContent = data.message || 'Invalid credentials';
            loginMessage.className = 'error-message';
        }
    } catch (error) {
        console.error('Login error:', error);
        loginMessage.textContent = 'Server error. Please try again later.';
        loginMessage.className = 'error-message';
    }
});

requestResetBtn.addEventListener('click', async () => {
    clearErrors();
    
    // Validate email
    const emailErrorMessage = validateEmail(recoveryEmail.value);
    if (emailErrorMessage) {
        recoveryEmailError.textContent = emailErrorMessage;
        recoveryEmail.classList.add('error');
        return;
    }

    try {
        // Use mock API for demo instead of real backend
        const data = await mockApiRequest('request-password-reset', 'POST', {
            email: recoveryEmail.value
        });

        if (data.success) {
            recoveryMessage.textContent = 'Password reset link has been sent to your email';
            recoveryMessage.className = 'success-message';
            
            setTimeout(() => {
                hideAllForms();
                loginForm.style.display = 'block';
                clearFormFields('recovery');
            }, 3000);
        } else {
            recoveryMessage.textContent = data.message || 'Email not found';
            recoveryMessage.className = 'error-message';
        }
    } catch (error) {
        console.error('Password reset error:', error);
        recoveryMessage.textContent = 'Server error. Please try again later.';
        recoveryMessage.className = 'error-message';
    }
});

logoutBtn.addEventListener('click', () => {
    sessionToken = null;
    currentUser = null;
    hideAllForms();
    authOptions.style.display = 'block';
});

// Initialize the page
window.addEventListener('load', () => {
    hideAllForms();
    authOptions.style.display = 'block';
});