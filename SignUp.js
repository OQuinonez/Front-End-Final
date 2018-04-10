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

function getParameterByUserName(username) {
    var url = window.location.href;
    username = username.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + username + '(=([^&#]*)|&|#|$)');
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function logout() {
    var UserName = getParameterByUserName('username');
    fetch('http://localhost:8080/logout/' + UserName, {
        method: 'POST',
        dataType: 'json',
        crossDomain: true,
        contentType: 'applicatioin/json',
        error: function(data, status, er) {
            alert('status: ' + status);
        }
    })
        .then(function handleResponse(response) {
            $('#username')
                .val('')
                .val();
            $('#Address')
                .val('')
                .val();
            $('#email')
                .val('')
                .val();
            $('#password')
                .val('')
                .val();

            $('#Store').show();
            $('#signup-Page').hide();
            $('#login-Page').hide();
            $('#feed-div').hide();
            console.log('Did the correct thing');
            // var DATA = response;
            // console.log(DATA);
        })
        .catch(function catchError(error) {});
}

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    CreateNewUser();
});

$('#logInForm').on('submit', function(event) {
    event.preventDefault();
    logIn();
    console.log('It does Something');
    $('#Store').hide();
    $('#signup-Page').hide();
    $('#login-Page').hide();
    $('#feed-div').show();
});

function main() {
    // CreateNewUser();
    // logIn();
}

$(main);
