

$(document).ready(function(){

    let wins = 0;
    let losses = 0;
    let userTotal = 0;

    let match = Math.floor(Math.random()*101+19);
    $("#random-match").append(match);

    let blue = Math.floor(Math.random() * 11+1);
    let green = Math.floor(Math.random() * 11+1);
    let pink = Math.floor(Math.random() * 11+1);
    let yellow = Math.floor(Math.random() * 11+1);

    $("#blue").on("click", function(){
        $("#user-total").empty();
        userTotal += blue;
        $("#user-total").append("Your total: " + userTotal);
        check();
    })

    $("#green").on("click", function(){
        $("#user-total").empty();
        userTotal += green;
        $("#user-total").append("Your total: " + userTotal);
        check();
    })    

    $("#pink").on("click", function(){
        $("#user-total").empty();
        userTotal += pink;
        $("#user-total").append("Your total: " + userTotal);
        check();
    })

    $("#yellow").on("click", function(){
        $("#user-total").empty();
        userTotal += yellow;
        $("#user-total").append("Your total: " + userTotal);
        check();
    })

    function check(){
        if (userTotal === match){
            alert("You Win!!");
            $("#num-wins").empty();
            wins++;
            $("#num-wins").append("Wins: " + wins);
            reset();
        }
        else {

        }
        if (userTotal > match){
            alert("You Loose!")
            $("#num-losses").empty();
            losses++;
            $("#num-losses").append("Losses: " + losses);
            reset();
        }

        function reset(){
            $("#random-match").empty()
            match = Math.floor(Math.random()*101+19);
            $("#random-match").append("See if you can match this number: " + match);

            blue = Math.floor(Math.random() * 11+1);
            green = Math.floor(Math.random() * 11+1);
            pink = Math.floor(Math.random() * 11+1);
            yellow = Math.floor(Math.random() * 11+1);
           
            $("user-total").empty();
            userTotal = 0;
        }
        
    }
})