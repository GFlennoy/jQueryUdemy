// Check-off specific todos by clicking
// using .on("click") to the parent will effect future todos
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Click on X to delete toDo
$("ul").on("click", "span", function (event) {
  $(this)
    //   .parent() will target 'li'(parent)
    .parent()
    // .fadeOut() refers to span
    .fadeOut(500, function () {
      // removes entire "li"
      $(this).remove();
    });
  // stops event Delegation bubbling
  event.stopPropagation();
});

$("input[type = 'text']").keypress(function (event) {
  if (event.which === 13) {
    //   grabbing a new todo text from input
    let todoText = $(this).val();
    // clear input field
    $(this).val("");
    // create new li and add to ul
    // .append()will serve as a getter and setter
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus-circle").click(function () {
  $("input[type='text']").fadeToggle();
});
