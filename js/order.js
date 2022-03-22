$(document).ready(function(){
    $("#drink").hide();
    $("#stew").hide();
    $("#snack").hide();



    $("#meals").click(function(){
        $("#meal").show();
        $("#drink").hide();
        $("#stew").hide();
        $("#snack").hide();

    });
    $("#drinks").click(function(){
        $("#drink").show();
        $("#meal").hide();
        $("#stew").hide();
        $("#snack").hide();

    });
    $("#stews").click(function(){
        $("#stew").show();
        $("#meal").hide();
        $("#drink").hide();
        $("#snack").hide();

    });
    $("#snacks").click(function(){
        $("#snack").show();
        $("#stew").hide();
        $("#meal").hide();
        $("#drink").hide();


    });

});