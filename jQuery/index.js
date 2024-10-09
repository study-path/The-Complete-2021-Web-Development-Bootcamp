$("h1").addClass("big-title margin-50");

$("button").css("color", "orange");

$("a").attr("href", "https://google.com");

$("h2").click(function () {
  $("h1").css("color", "purple");
});

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

$("h1").before("<button>NEW</button>");
//$("h1").prepend("<button>Added at the beggining </button>");

$("button").on("click", function () {
  $("h1").slideUp().slideDown().clickanimate({ opacity: 0.5 });
});

// $("button").on("click", function () {
//   $("h1").slideUP();
// });

// $("button").on("click", function () {
//   $("h1").animate({ margin: 20 });
// });
