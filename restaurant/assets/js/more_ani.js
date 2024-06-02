$(document).ready(function(){
    $("#more_1_btn").click(function(){
        if($("#more_1_div").css('display') == "none")
            $("#more_1_div").css('display','block');
        else
            $("#more_1_div").css('display','none');
    })
})