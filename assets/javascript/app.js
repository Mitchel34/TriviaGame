var time = 30;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var correctAns = ["3a", "1b", "1c"];

function timer() {
    setInterval(function () {
        time--;
        if (time >= 0) {
            $("#timer").text(time);
        }
        // Display 'counter' wherever you want to display it.
        if (time === 0) {
            $("#triviaContainer").hide();
            $("#resultsContainer").show();
        }
    }, 1000);
};

function answerChecker() {
    for (var i = 0; i < correctAns.length; i++) {
        if (!$("input[name='q"+[i+1]+"']:checked").val()) {
            unanswered++;
        }
        else if ($("#" + correctAns[i]).is(":checked")) {
            correct++;
        } else {
            incorrect++;
        }
    }
    $("#correct-text").text(correct);
    $("#incorrect-text").text(incorrect);
    $("#unanswered-text").text(unanswered);
}


$("#buttonStart").on("click", function () {
    $("#mainContainer").hide();
    $("#triviaContainer").show();
    timer();
});

$("#resultsButton").on("click", function () {

    $("#triviaContainer").hide();
    $("#resultsContainer").show();
    answerChecker();

});

$("#triviaContainer").hide();
$("#resultsContainer").hide();
