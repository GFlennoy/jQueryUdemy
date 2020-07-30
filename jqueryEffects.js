// .fadeOut() & .fadeIn()
// $("button").on("click", function () {
//   $("div").fadeOut(1000, function () {
//     console.log("Fade Completed");
//   });
// });

// upon inspection, divs are still there, just not visible
// to delete completely, use .remove()
// $("button").on("click", function () {
//   $("div").fadeOut(1000, function () {
//     $(this).remove();
//   });
// });

// .fadeToggle()
$("button").on("click", function () {
  $("div").fadeToggle(500);
});

// .slideDown()
// $("button").on("click", function () {
//   $("div").slideDown();
// });

// .slideUp()
// $("button").on("click", function () {
//   $("div").slideUp();
// });

// .slideToggle()
$("button").on("click", function () {
  $("div").slideToggle(1000, function () {
    $(this).remove();
  });
});
