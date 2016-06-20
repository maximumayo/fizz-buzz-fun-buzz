function fizzBuzzer() {

    for (var i = 1; i <= 200; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            $('#display').append("<div class='fizzbuzz'>fizzbuzz</div>");
            console.log("fizzbuzz");
        }
        else if (i === 200) {
            $('#display').append("<div class='end'>End</div>");
            console.log("end");
        }
        else if (i % 5 === 0) {
            $('#display').append("<div class='buzz'>buzz</div>");
            console.log("buzz");
        }
        else if (i % 3 === 0) {
            $('#display').append("<div class='fizz'>fizz</div>");
            console.log("fizz");
        }
        else {
            $('#display').append("<div>" + i + "</div>");
            console.log(i);
        }
    }
}

$(document).ready(function () {
    $('#buzzer').click(function () {
        fizzBuzzer();
    });
    $('#clear').click(function () {
        $('#display').html(" ");
    });

});