// // TEST JS FILE LINK
// let body = document.getElementById("body");
//  body.style.backgroundColor ="red";


// what we do -  UI CODE toggle
// TODO:CLEAN UP - DRY
$(document).ready(function () {
  $("#design-show").click(function () {
    $("#design-hidden").toggle();
    $("#design-show").toggle();
  })
  $("#design-hidden").click(function () {
    $("#design-show").toggle();
    $("#design-hidden").toggle();
  })
  $("#dev-show").click(function () {
    $("#dev-hidden").toggle();
    $("#dev-show").toggle();
  })
  $("#dev-hidden").click(function () {
    $("#dev-show").toggle();
    $("#dev-hidden").toggle();
  })
  $("#mng-show").click(function () {
    $("#mng-hidden").toggle();
    $("#mng-show").toggle();
  })
  $("#mng-hidden").click(function () {
    $("#mng-show").toggle();
    $("#mng-hidden").toggle();
  })
})

// tohover over portforlio
// TODO:take back the fadeout
// TODO:individual pics
$(document).ready(function () {
  $(".fadeout").hover(function () {
    $(".fadein-overlay").toggle();
  });
});


// pop up message
$(document).ready(function () {
  $("#feedback").submit(function (event) {
    let name = $("#name").val();
    alert(`${name} we have received your message. Thank you for reaching out to us.`);
  });
});

$(document).ready(function () {
  $('input').keyup(function (event) {
    if (event.which === "enter") {
      $("#feedback").submit(function (event) {
        event.preventDefault();
        let name = $("#name").val();
    alert(`${name} we have received your message. Thank you for reaching out to us.`);        
      });
    }
  });
});