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

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    CreateNewUser();
});

function main() {
    // CreateNewUser();
}

$(main);
