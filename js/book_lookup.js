$(document).ready(function() {
    $('#lookup-form').on('submit', function(event) {
        event.preventDefault(); // 防止表單提交
        var phone = $('#phone').val();

        $.ajax({
            url: 'http://localhost/backend/book_lookup.php',
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({ phone: phone }),
            contentType: 'application/json; charset=utf-8',
            success: function(response) {
                if (response.success) {
                    var bookingInfo = '';
                    response.data.forEach(function(booking) {
                        bookingInfo += '<p>日期: ' + booking.date + '</p>';
                        bookingInfo += '<p>時間: ' + booking.time + '</p>';
                        bookingInfo += '<p>姓名: ' + booking.name + '</p>';
                        bookingInfo += '<p>人數: ' + booking.people + '</p>';
                        bookingInfo += '<p>其他: ' + booking.other + '</p><hr>';
                    });
                    $('#booking-info').html(bookingInfo);
                    $('#success').show();
                    alert("a")
                    //$("#success").css('display','block');
                    $('#fail').hide();
                } else {
                    $('#fail-reason').html(response.message);
                    $('#fail').show();
                    //$("#fail").css('display','block');
                    $('#success').hide();
                }
            },
            error: function() {
                $('#fail-reason').html('查詢失敗，請稍後再試。');
                $('#fail').show();
                $('#success').hide();
            }
        });
    });
});
