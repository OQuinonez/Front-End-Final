function onlyNumbers(name) {
    const checking = /[\d]/;
    if (checking.test(name)) {
        return true;
    }
    return false;
}

function errorMsg(name) {
    var msg = [];
    if (name.length < 3) {
        msg.push('<li>Please enter a valid name</li>');
    }
    if (onlyNumbers(name) == true) {
        msg.push('<li>Name Cannot Contain Numbers</li>');
    }
    return msg.join('');
}

function nameErrorHtml(name) {
    var group = $('#username')
        .parent()
        .closest('.form-group');
    const html = errorMsg(name);
    $(group)
        .removeClass('has-error')
        .removeClass('has-success');
    $('#username-errors').html(html);
    if (html.length > 0) {
        $(group).addClass('has-error');
    } else {
        $(group).addClass('has-success');
    }
    return html;
}

function validName() {
    const input = $('#username');
    input.on('input', function (event) {
        nameErrorHtml(event.currentTarget.value);
    });
}

// ************************* USERNAME ***********************************

function usernameMsg(username) {
    var msg = [];
    if (username.length < 8 || username.length > 16) {
        msg.push('<li> Username must be between 8-16 characters long</li>');
    }
    return msg.join('');
}

// function userErrorHtml(username) {
//     console.log('user');
//     var group = $('#ChangedTheName')
//         .parent()
//         .closest('.form-group');
//     const html = usernameMsg(username);
//     $(group)
//         .removeClass('has-error')
//         .removeClass('has-success');
//     $('#ChangedTheName-errors').html(html);
//     if (html.length > 0) {
//         $(group).addClass('has-error');
//     } else {
//         $(group).addClass('has-success');
//     }
//     return html;
// }

// function validUsername() {
//     const input = $('#ChangedTheName');
//     input.on('input', function(event) {
//         userErrorHtml(event.currentTarget.value);
//     });
// }

// ********************************* PASSWORD ************************
function checkingLetters(password) {
    const checking = /[a-z]/;
    if (checking.test(password)) {
        return true;
    }
    return false;
}

function checkingCapitalLetters(password) {
    const checking = /[A-Z]/;
    if (checking.test(password)) {
        return true;
    }
    return false;
}

function passwordMsg(password) {
    var msg = [];
    if (password.length < 8 || password.length > 16) {
        msg.push('<li> Password must be between 8-16 characters long</li>');
    }
    if (checkingCapitalLetters(password) == false) {
        msg.push('<li>Password must contain atleast one capital Letter</li>');
    }
    if (checkingLetters(password) == false) {
        msg.push('<li>Password must contain atleast one lowercase Letter</li>');
    }
    if (onlyNumbers(password) == false) {
        msg.push('<li>Password must contain atleast one Number</li>');
    }
    return msg.join('');
}

function pwErrorHtml(password) {
    console.log('user');
    var group = $('#password')
        .parent()
        .closest('.form-group');
    const html = passwordMsg(password);
    $(group)
        .removeClass('has-error')
        .removeClass('has-success');
    $('#password-errors').html(html);
    if (html.length > 0) {
        $(group).addClass('has-error');
    } else {
        $(group).addClass('has-success');
    }
    return html;
}

function validPassword() {
    const input = $('#password');
    input.on('input', function (event) {
        pwErrorHtml(event.currentTarget.value);
    });
}

// ******************************** EMAIL **************************

function checkingSymbol(email) {
    const checking = /[@]/;
    if (checking.test(email)) {
        return true;
    }
    return false;
}

function emailMsg(email) {
    var msg = [];
    if (checkingSymbol(email) == false) {
        msg.push('<li> Email Must contain an @ symbol</li>');
    }
    return msg.join('');
}

function emailErrorHtml(email) {
    console.log('user');
    var group = $('#email')
        .parent()
        .closest('.form-group');
    const html = emailMsg(email);
    $(group)
        .removeClass('has-error')
        .removeClass('has-success');
    $('#email-errors').html(html);
    if (html.length > 0) {
        $(group).addClass('has-error');
    } else {
        $(group).addClass('has-success');
    }
    return html;
}

function validEmail() {
    const input = $('#email');
    input.on('input', function (event) {
        emailErrorHtml(event.currentTarget.value);
    });
}

// ******************************* VALIDATE FORM BUTTON ********************

function checkValidName() {
    return nameErrorHtml($('#username').val()).trim() === '';
}

// function checkValidUser() {
//     return userErrorHtml($('#ChangedTheName').val()).trim() === '';
// }

function checkValidPassword() {
    return pwErrorHtml($('#password').val()).trim() === '';
}

function checkValidEmail() {
    return emailErrorHtml($('#email').val()).trim() === '';
}

function checkSignInForm() {
    if (
        checkValidUser() &&
        checkValidPassword() &&
        checkValidEmail() &&
        checkValidName()
    ) {
        $('#signInForm').hide(1050);
        $('#afterFormMessage')
            .html('<h3 class="text-success">Successfully registered!</h3>')
            .show(250);
    } else {
        $('#afterFormMessage')
            .html('<h4 class="text-danger">Incomplete Form</h4>')
            .show(250);
    }
}

$('#signInForm').on('submit', function (event) {
    event.preventDefault();
    checkSignInForm();
});

// ******************************* SERVER *********************************

function draw() {
    $('body').html(PAGE_DATA.chirper.name);
}

// function signup(name, username, email, password) {
//     $.post(
//         'http://bcca-chirper.herokuapp.com/api/signup/',
//         JSON.stringify({
//             name: name,
//             username: username,
//             email: email,
//             password: password
//         })
//     )
//         .then()
//         .catch();
// }

// ****************************** END OF SIGN UP ********************************

var PAGE_DATA = {};

// function postServer() {
//     $('#signInForm').on('submit', function(event) {
//         $.post(
//             'https://bcca-chirper.herokuapp.com/api/signup/',
//             JSON.stringify({
//                 name: $('#username').val(),
//                 username: $('#ChangedTheName').val(),
//                 email: $('#email').val(),
//                 password: $('#password').val()
//             })
//         )
//             .then(function successulSignup(data) {
//                 console.log(data);
//             })
//             .catch(function unsuccessfulSignup(response) {
//                 console.log(response.status);
//                 console.log(response.response.JSON);
//             });
//     });
// }

// ****************************** BEGINING OF SIGN IN *******************************

// function logIn() {
//     $('#logInForm').on('submit', function(event) {
//         event.preventDefault();
//         $.post(
//             'https://bcca-chirper.herokuapp.com/api/login/',
//             JSON.stringify({
//                 username: $('#ChangedTheName').val(),
//                 password: $('#Password').val()
//             })
//         )
//             .then(function successfulLogIn(date) {
//                 console.log('Hello World');
//                 window.location = 'profile/profile.html';
//                 console.log(data);
//             })
//             .catch(function unsuccessfulSignUp(response) {
//                 // console.log(response.status);
//                 // console.log(response.response.JSON);
//             });
//     });
// }





function loadPages() {
    $('#Sign-Up').click(function () {
        $('#Store').hide();
        $('#signup-Page').show();
    });

    $('#back').click(function () {
        $('#Store').show();
        $('#signup-Page').hide();
    });
    $('#Log-In').click(function () {
        $('#Store').hide();
        $('signup-Page').hide();
        $('#login-Page').show();
    })
}

function main() {
    validName();
    // validUsername();
    validPassword();
    validEmail();
    // postServer();
    // logIn();
    // $('#signinform').on('submit', function(event) {
    //     event.preventDefault();
    //     var name = $('#username').val();
    //     console.log(name);
    //     var username = $('#ChangedTheName').val();
    //     console.log(username);
    //     var email = $('#email').val();
    //     console.log(email);
    //     var password = $('#password').val();
    //     console.log(password);
    // });
    loadPages();
}

$(main);