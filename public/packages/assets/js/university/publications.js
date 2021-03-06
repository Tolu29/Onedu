$(function(){

  $.ajax({
    url: "/getUniNews",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $.each(data.news, function(i){
      $("#newsCont").append(
        "<div class='col-md-4'>" +
          "<div class='card contNew'>" +
            "<img src='/packages/assets/img/universities/logos/" + data.university.logo + "' alt=''>" +
            "<div class='card-body container elip'>" +
              "<p>" + data.news[i].avance + "..." + "</p>" +
            "</div>" +
            "<div class='card-data fooCard'>" +
             "<ul class='viewMore'>" +
                "<li><i class='fa fa-play'></i></li>" +
                "<li><a href='#' class='newComplete' data-id='" + data.news[i].id + "'> Editar</a></li>" +
             "</ul>" +
           "</div>" +
          "</div>" +
        "</div>"
      )
      $(".fooCard").css("background-color", data.university.color);
    });
  });

// funcion para hacer upd a publicacion
  $("body").on('click', '.newComplete', function(){
    let data = {
      id: $(this).data('id')
    }
    $.ajax({
      url: "/sessionUni",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      window.location.href = "/updNew";
    });
  });

  $("body").on('click', '.addPub', function(){
    window.location.href = "/newPublications";
  });


});
