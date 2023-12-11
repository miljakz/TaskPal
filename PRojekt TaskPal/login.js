function checkUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    if (database[username] !== undefined && database[username] === password) {
        // User exists and password is correct
        window.location.href = 'index.html';
    } else {
        // User does not exist or password is incorrect
        alert('Login failed!');
    }
}

function signUpUser() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('psw').value;
    if (database[username] !== undefined) {
        // User already exists
        alert('User already exists!');
    } else {
        // Add new user to database
        database[username] = password;
        alert('User signed up successfully!');
        // Redirect to main page after successful sign up
        window.location.href = 'index.html';
    }
}
