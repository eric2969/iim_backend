$(document).ready(function() {
    $('#admin-register-form').on('submit', function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            url: 'http://localhost/backend/admin_register.php',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ username: username, password: password }),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                $('#register-result').html(response.message);
                if (response.success) {
                    $('#admin-register-form')[0].reset();
                }
            }
        });
    });

    $('#admin-login-form').on('submit', function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        var remember = $('#remember').is(':checked');

        $.ajax({
            url: 'http://localhost/backend/admin_login.php',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ username: username, password: password, remember: remember }),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                $('#login-result').html(response.message);
                if (response.success) {
                    window.location.href = 'index.html';
                }
            }
        });
    });
});
