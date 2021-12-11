$(document).ready(function () {
  let questionCount = 1;
  let responses = [];

  $("#summary").hide();

  // Count total no of questions
  let totalQuestions = $(".question").length;

  //Set the current question to display to 1
  let currentQuestion = 0;

  // Hide the previous button
  currentQuestion === 0 && $("#prev-btn").hide();

  //Show the first question by default
  $questions = $(".question");
  $($questions.get(currentQuestion)).fadeIn();

  let prevQ;
  let prevAns;

  // On click of next
  $("#next-btn").click(function () {
    // Hide next btn to avoid conflicts
    $("#next-btn").hide();

    // Get the questions and response
    let question = $($questions.find("span")[currentQuestion]).text();
    let response = $($questions.find("#response")[currentQuestion]).val();
    prevQ = question;
    prevAns = response;

    // check that all responses are submitted
    if (response === "") {
      $("#error-message")
        .text("This field is required")
        .css("display", "inline-block")
        .show();
      $("#next-btn").show();
      return;
    }

    $("#error-message").text("erros").hide();

    // Save the response to a question
    responses.push({ question, response });

    //  Hide the current question and show the next question
    $($questions.get(currentQuestion)).fadeOut(function () {
      // Get the current question count
      currentQuestion += 1;

      // Display the previous button to go back to previous questiom
      currentQuestion >= 0 && $("#prev-btn").show();

      if (currentQuestion + 1 == totalQuestions) {
        $("#next-btn").text("Submit");
      }

      // if there are no more questions submit
      if (currentQuestion == totalQuestions) {
        $("form").hide();
        $("#summary").show();
        responses.forEach((items) => {
          $("#summary").append(
            `<h3 style="margin-top: 8%;">${items.question}</h3><p>${items.response}</p>`
          );
        });
        $("#loan_type").text(localStorage.getItem("loan_type"));
        $("#summary").append(
          `<div class="action-buttons">
              <button type="button" align="left" onclick="location.href = './index.html'"  id="next-btn">Go back home</button>
              
              <button type="button" align="left" onclick="location.href = './form.html'"  id="prev-btn">Start Again</button>
          </div>`
        );
      } else {
        if (
          question == "Have You collected a loan before?" &&
          response == "no"
        ) {
          currentQuestion += 1;
        }

        //otherwise show the next question
        $($questions.get(currentQuestion)).fadeIn();
        $("#next-btn").show();
      }
    });
  });

  // On click of Previous
  $("#prev-btn").click(function () {
    console.log(prevQ);
    // Hide prev btn to avoid conflicts
    $("#prev-btn").hide();

    // Delete the last response and question saved
    responses.pop();

    //  Hide the current question and show the prev question
    $($questions.get(currentQuestion)).fadeOut(function () {
      // Get the current question count
      currentQuestion -= 1;

      if (prevQ == "Have You collected a loan before?" && prevAns == "no") {
        currentQuestion -= 1;
      }

      // if there are no more questions do stuff
      if (currentQuestion == -1) {
        var result = 0;

        //do stuff with the result
        alert("done");
      } else {
        //otherwise show the next question
        $($questions.get(currentQuestion)).fadeIn();
        // Hide or show the prev button
        currentQuestion === 0 ? $("#prev-btn").hide() : $("#prev-btn").show();
      }
    });
  });
});

//function is
