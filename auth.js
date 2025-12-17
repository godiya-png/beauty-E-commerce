// Check if user is already logged in
if (localStorage.getItem('currentUser')) {
    window.location.href = 'shop.html';
}

// Form toggle functionality
document.getElementById('showSignup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
});

// Login functionality
document.getElementById('loginFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Set current user
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect to shop
        window.location.href = 'shop.html';
    } else {
        alert('Invalid email or password. Please try again or create an account.');
    }
});

// Signup functionality
document.getElementById('signupFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const phone = document.getElementById('signupPhone').value;
    const address = document.getElementById('signupAddress').value;
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        alert('An account with this email already exists. Please login.');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        phone,
        address,
        createdAt: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Set as current user
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    // Redirect to shop
    window.location.href = 'shop.html';
});
