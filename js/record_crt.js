function append(num){$("#m_input").val($("#m_input").val() + num);}
function cls(){$("#m_input").val("");}
$(document).ready(function(){
    Date.prototype.getWeek = function() {
        var dt = new Date(this.getFullYear(),0,1);
        return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
    };
    $(".record_crt").click(function(){
        let obj_Date = new Date();
        var year = obj_Date.getFullYear();
        var month = obj_Date.getMonth();
        var day = obj_Date.getDate();
        let strDate = `${year}-${month}-${day}`;
        var hour = obj_Date.getHours();
        var minute = obj_Date.getMinutes();
        let strTime = `${hour}:${minute}`;
        var m_price = $("#m_input").val();
        $("#m_input").val("");
        $.ajax({
            type: "POST",
			url: "http://localhost/backend/record_crt.php",
			datatype: "json",
			data:{
				date: strDate,
                month: month,
                week: obj_Date.getWeek(),
                time: strTime,
                price: m_price,
			},
			contentType: "application/x-www-form-urlencoded;charset=UTF-8",
			success: function(data) {
                if(data == "successful"){
                    alert("輸入成功!");
                }
                else{
                    alert("出現錯誤");
                }
            },
            error: function(jqXHR) {
                alert("系統錯誤，代碼"+jqXHR.status+"\n");
            }
        })
    })
});