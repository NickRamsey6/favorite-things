var array = new Array();

$(document).ready(function() {
  console.log("ready");

  $("#add_btn").click(function(event) {
    var favorite_thing = $("input#favorite_thing").val();
    console.log(favorite_thing);
    $("favorite_thing").text(favorite_thing)

    array.push(favorite_thing);
    console.log(array);
    event.preventDefault();
  });

  $("#fav_form").submit(function(event) {
    $('#array_view li').remove();

    array.forEach(function(thing) {
      $('#array_view').append('<li>' + thing + '</li>');
    });
    $('#form-result').show();
    event.preventDefault();

  });
});
