var DATA = new Object();

function CreateNewUser() {
    console.log(
        JSON.stringify({
            UserName: $('#username').val(),
            UAddress: $('#Address').val(),
            Email: $('#email').val(),
            Password: $('#password').val()
        })
    );
    fetch('http://localhost:8080/SignUp', {
        method: 'POST',
        body: JSON.stringify({
            UserName: $('#username').val(),
            UAddress: $('#Address').val(),
            Email: $('#email').val(),
            pass_word: $('#password').val()
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        crossDomain: true
    })
        .then(function handleResponse(response) {
            var DATA = response;
            console.log(DATA);
        })
        .catch(function handleError(error) {
            console.log(error);
        });
}

function logIn() {
    console.log(
        JSON.stringify({
            Email: $('#LogIn-email').val(),
            Password: $('#Logpassword').val()
        })
    );
    fetch('http://localhost:8080/login', {
        method: 'POST',
        dataType: 'json',
        body: JSON.stringify({
            email: $('#LogIn-email').val(),
            hashedPassword: $('#Logpassword').val()
        }),
        crossDomain: true,
        data: JSON.stringify({
            Email: $('#LogIn-email').val(),
            pass_word: $('#Logpassword').val()
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        // contentType: 'application/json',
        // mimeType: 'application/json',
        dataType: 'json',
        crossDomain: true
        // error: function(data, status, er) {
        //     alert('UserName or Password incorrect please try again!!');
        // }
    })
        .then(function handleResponse(response) {
            var DATA = response;
            console.log(DATA);
        })
        .catch(function handleError(error) {
            console.log(error);
        });
}

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    CreateNewUser();
});

$('#logInForm').on('submit', function(event) {
    event.preventDefault();
    console.log('It does Something');
    $('#Store').hide();
    $('signup-Page').hide();
    $('#login-Page').show();
    logIn();
});

function main() {
    // CreateNewUser();
    // logIn();
}

$(main);
