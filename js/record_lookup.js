$(document).ready(function(){
    Date.prototype.getWeek = function() {
        var dt = new Date(this.getFullYear(),0,1);
        return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
    };
    let obj_Date = new Date();
    var year = obj_Date.getFullYear();
    var month = obj_Date.getMonth();
    var day = obj_Date.getDate();
    let strDate = `${year}-${month}-${day}`;
    $.ajax({
        type: "POST",
		url: "http://localhost/backend/record_lookup.php",
		datatype: "json",
		data:{
			date: strDate,
            week: obj_Date.getWeek(),
            month: month,
		},
		contentType: "application/x-www-form-urlencoded;charset=UTF-8",
		success: function(data) {
            console.log(data);
            var jdata = JSON.parse(data);
            console.log(jdata['date']);
            $("#p_day").text("$" + jdata['date']);
            $("#p_week").text("$" + jdata['week']);
            $("#p_month").text("$" + jdata['month']);
        },
        error: function(jqXHR) {
            alert("error" + jqXHR.status);
        }
    })
});