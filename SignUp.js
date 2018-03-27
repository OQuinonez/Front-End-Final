function newUser() {
    $.ajax({
        url: 'http://localhost:8080/newUser',
        method: 'Post',
        dataType: 'json',
        crossDomain: true,
        data: JSON.stringify({
            UserName: $('#username').val(),
            Address: $('#Address').val(),
            Email: $('#email').val(),
            password: $('#password').val()
        }),
        error: function(data, status, er) {
            alert('status: ' + status);
        }
    }).then(function handleStoreResponse(response) {
        console.log(response);
        var products = response;
        $('body').prepend(
            "<div class='jumbotron'><center><h4>" +
                response.UserName +
                '</h3></center></div>'
        );
    });
}

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    newUser();
});

function main() {
    newUser();
}

$(main);
