// .text() will list out contents of selected item
$("h1").text();
// putting text into .text() will change text of selected item
$("h1").text("jQuery is kinda cool so far :)");

// .html() shows inner-html. selecting ul will show li's
$("ul").html();
// putting content inside of .html() will alter html
$("ul").html(
  "<li>HTML altered</li><li>I love my wife</li><li>I love my cats</li>"
);

// adjust size of image
$("img").css("width", "200px");

// .attr() acts as a getter & setter.
$("img:first-of-type").attr(
  "src",
  "https://static.boredpanda.com/blog/wp-content/uploads/2019/01/maine-coon-kittens-37-5c34c902b5aa5__700.jpg"
);
$("img").last().attr("src", "https://i.chzbgr.com/full/9108564480/h7CEB3479");

// .val() extracts value from input, wrapper!
$("input").val();
// putting input into val will change value
$("input").val();
$("select").val();

// .addClass()
$("h1").addClass("correct");

// .removeClass()
$("h1").removeClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");

// .toggleClass()
$("li").toggleClass("correct");
$("li").toggleClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");
$("li").toggleClass("done");
