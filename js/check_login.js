$(document).ready(function() {
    $.ajax({
        url: 'http://localhost/backend/remember.php',
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            if (!response.logged_in) {
                window.location.href = 'admin_login.html';
            }
        }
    });
});