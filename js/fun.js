$(document).ready(function(){
    $("#puzzles").hide();
    $("#minds").hide();
    $("#others").hide();



    $("#adventure1").click(function(){
        $("#adventure").show();
        $("#puzzles").hide();
        $("#minds").hide();
        $("#others").hide();

    });
    $("#puzzle").click(function(){
        $("#puzzles").show();
        $("#minds").hide();
        $("#others").hide();
        $("#adventure").hide();

    });
    $("#mind").click(function(){
        $("#minds").show();
        $("#others").hide();
        $("#adventure").hide();
        $("#puzzles").hide();

    });
    $("#other").click(function(){
        $("#others").show();
        $("#adventure").hide();
        $("#puzzles").hide();
        $("#minds").hide();


    });

});