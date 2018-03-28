function CreateNewUser() {
    $.ajax({
        url: 'http://localhost:8080/posts/SignUp/',
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
        UserName: $('#username').val(),
        UAddress: $('#Address').val(),
        Email: $('#email').val(),
        PassCode: $('#password').val()
    }),
    contentType: 'application/json',
    mimeType: 'applicatioin/json'});

    console.log(JSON.stringify({
        UserName: $('#username').val(),
        UAddress: $('#Address').val(),
        Email: $('#email').val(),
        PassCode: $('#password').val()
    }),)


$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    CreateNewUser();
});

function main() {
    newUser();
}

$(main);
