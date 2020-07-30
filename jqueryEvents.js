// $("button").click(function () {
//   let text = $(this).text();
//   console.log("You clicked " + text);
// });
// $(this) is the jQuery vanilla JS version of this.
// much shorter code than running a for loop

// .keypress()
// $("#target").keypress(function(){console.log("handler for .keypress() called.")});

// $("input").keypress(function () {
//   console.log("You pressed a key!");
// });

// keycodes, 13 = enter key

//

// .on() most popular jQuery method
// jQuery version of vanilla JS' addEventListener
// supports ALL events
// $("h1").on("click", function () {
//   $(this).css("color", "purple");
// });

// $("input").on("keypress", function () {
//   console.log("Key pressed!");
// });

$("button").on("mouseenter", function () {
  $(this).css("font-weight", "bold");
});
$("button").on("mouseleave", function () {
  $(this).css("font-weight", "normal");
});

// click() vs. on('click)
