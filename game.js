$(document).ready(function(){


    $(".tom1").draggable({ revert: 'invalid' });
    $(".dora1").draggable({ revert: 'invalid' });
    $(".cookie1").draggable({ revert: 'invalid' });

    $(".tom0").droppable({
        accept:(".tom1"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("red")
                .html("Tom");
            // $(".tom1").hide();
            console.log("tom1");
        }
    });

    $(".dora0").droppable({
        accept:(".dora1"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("red")
                .html("Dora");
            // $(".tom1").hide();
            console.log("dora1");
        }
    });

    $(".cookie0").droppable({
        accept:(".cookie1"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("red")
                .html("Cookie");
            // $(".tom1").hide();
            console.log("cookie1");
        }
    });

    $('#refreshBtn').click(function() {
        location.reload();
    });

});