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

function logIn(event) {
    console.log($('#LogIn-email').val());
    $.ajax({
        url: 'http://localhost:8080/login',
        method: 'Post',
        dataType: 'json',
        crossDomain: true,
        data: JSON.stringify({
            email: $('#LogIn-email').val(),
            password: $('#Logpassword').val()
        }),
        contentType: 'application/json',
        mimeType: 'application/json'
    })
        .then(function handleResponse(response) {
            console.log('Successfully logged IN');
            var DATA = response;
            $('#Store').hide();
            $('#signup-Page').hide();
            $('#login-Page').hide();
            $('#feed-div').show();
        })
        .catch(function handleError(error) {
            console.log('Something Is Wrong');
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
            $('#newFeed-div').hide();
            $('#signup-Page').hide();
            $('#login-Page').hide();
            $('#feed-div').hide();
            $('#purchased').hide();
            $('#sell-Page').hide();
            console.log('Did the correct thing');
        })
        .catch(function catchError(error) {});
}

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    CreateNewUser();
});

$('#logInForm').on('submit', function(event) {
    event.preventDefault();
    logIn(event);
});

function main() {}

$(main);
