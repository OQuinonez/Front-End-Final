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
    input.on('input', function(event) {
        nameErrorHtml(event.currentTarget.value);
        // button();
    });
}

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
    input.on('input', function(event) {
        pwErrorHtml(event.currentTarget.value);
        // button();
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
    input.on('input', function(event) {
        emailErrorHtml(event.currentTarget.value);
    });
}

// ******************************* VALIDATE FORM BUTTON ********************

function checkValidName() {
    return nameErrorHtml($('#username').val()).trim() === '';
}

function checkValidPassword() {
    return pwErrorHtml($('#password').val()).trim() === '';
}

function checkValidEmail() {
    return emailErrorHtml($('#email').val()).trim() === '';
}

function checkValidAddress() {
    return;
}

function checkSignInForm() {
    if (
        // checkValidUser() &&
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

$('#signInForm').on('submit', function(event) {
    event.preventDefault();
    checkSignInForm();
});

function loadPages() {
    $('#Sign-Up').click(function() {
        $('#Store').hide();
        $('#signup-Page').show();
    });
    $('#back').click(function() {
        $('#Store').show();
        $('#signup-Page').hide();
    });
    $('#Back').click(function() {
        $('#Store').show();
        $('#signup-Page').hide();
        $('#login-Page').hide();
    });
    $('#Log-In').click(function() {
        $('#Store').hide();
        $('signup-Page').hide();
        $('#login-Page').show();
    });
}

// function CreateNewUser(UserName, UAddress, Email, PassCode) {
//     fetch('http://localhost:8080/posts/new/', {
//         method: 'POST',
//         mode: 'cors',
//         body: JSON.stringify({
//             UserName: UserName,
//             UAddress: UAddress,
//             Email: Email,
//             PassCode: PassCode
//         })
//     });
// }

// document.getElementById('signInForm').onsubmit = event => {
//     let UserName = form.UserName.value;
//     let UAddress = form.UAddress.value;
//     let Email = form.Email.value;
//     let PassCode = form.PassCode.value;

//     CreateNewUser(UserName, UAddress, Email, PassCode);
//     return false;
// };

// window.onload = () => fetch('http://localhost:8080/products/');

function main() {
    validName();
    validPassword();
    validEmail();
    loadPages();
}

$(main);
