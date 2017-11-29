$(function(){

  var news = [], idNew;

  $.ajax({
    url: "/allAdminNews",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    news = data;
    $.each(data, function(i){
        // news.push(g);
        $("#newsCont").append(
          "<div class='col-md-4'>" +
            "<div class='card contNew'>" +
              "<img src='/packages/assets/img/universities/logos/" + data[i].logo + "' alt=''>" +
              "<div class='card-body container elip'>" +
                "<p>" + data[i].avance + "</p>" +
              "</div>" +
              "<div class='card-data fooCard'>" +
               "<ul class='viewMore'>" +
                  "<li><i class='fa fa-play'></i></li>" +
                  "<li><a href='#' class='read' data-id='" + data[i].id + "'> Leer</a></li>" +
               "</ul>" +
             "</div>" +
            "</div>" +
          "</div>"
        );
    });

  });



  $("body").on('click', '.read', function(){
    idNew = $(this).data('id');
    $('.newsContent').empty();
    $id = $(this).data('id');
    $(".firstLevel").fadeOut('slow', function(){
      $('#secondLevelNews').fadeIn('slow', function(){
        let single = atrib(news, "id", $id)
        $(".newsContent").append(single[0].cuerpo);
      });
    });
  });



  $("body").on('click', '.back', function(){
    $('#secondLevelNews').fadeOut('slow', function(){
      $(".firstLevel").fadeIn('slow', function(){
      });
    });

  });

  $("body").on('click', '.btnDelNew', function(){
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado ya no podras recuperar el informacion!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $.ajax({
          url: "/adminDelNews",
          type: "POST",
          data: data,
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        })
        .done(function(data){
          swal("Listo! La noticia ha sido eliminada!", {
            icon: "success",
          });
          window.location.reload();
        });
      } else {
        swal("Todo esta como lo dejaste!");
      }
    });
    let data = {
      id: idNew
    }

  });

});

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response.push(obj);
    }
  });
  return response;
}
