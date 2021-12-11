function showTabInfo(event, id) {
  // Hide Current Tab Content
  $(".tab-contnet-info").hide();

  // Show new tab content
  $(`#${id}`).fadeIn(500);

  // Set the state of a tab active
  $("li").removeAttr("id");
  $(event.target).attr("id", "tabs-active");
}

function expandMenu() {
  $(".menu").slideDown();
  $(".home-icon").hide();
  $(".icon").html(
    "<a href='javascript:void(0);' class='icon' onclick='minimizeMenu()'><i class='fa fa-times'></i></a>"
  );
}

function minimizeMenu() {
  $(".menu").slideUp();
  $(".home-icon").show();
  $(".icon").html(
    "<a href='javascript:void(0);' class='icon' onclick='expandMenu()'><i class='fa fa-bars'></i></a>"
  );
}

$(window)
  .resize(function () {
    if ($(window).width() > 900) {
      $(".menu").show();
      $(".home-icon").show();
      $(".search-icon").show();
    } else {
      $(".home-icon").show();
      $(".menu").hide();
      $(".icon").html(
        "<a href='javascript:void(0);' class='icon' onclick='expandMenu()'><i class='fa fa-bars'></i></a>"
      );
      $(".search-icon").hide();
    }
  })
  .resize();

// Accordion
let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(".display-none").hide();
