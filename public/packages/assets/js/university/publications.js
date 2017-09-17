$(function(){

  $.ajax({
    url: "/getUniNews",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){

    $.each(data, function(i){
      $("#newsCont").append(
        "<div class='col-md-4'>" +
          "<div class='card contNew'>" +
            "<img src='/packages/assets/img/universities/logos/zdIEq1811280762_030917.png' alt=''>" +
            "<div class='card-body container elip'>" +
              "<p>" + data[i].avance + "..." + "</p>" +
            "</div>" +
            "<div class='card-data fooCard'>" +
             "<ul class='viewMore'>" +
                "<li><i class='fa fa-play'></i></li>" +
                "<li><a href='#' class='newComplete' data-id='" + data[i].id + "'> Editar</a></li>" +
             "</ul>" +
           "</div>" +
          "</div>" +
        "</div>"
      )
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
