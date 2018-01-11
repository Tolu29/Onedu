$(function(){

  var news = [];

  $('.newsHide').hide();
  $('.newsHide').removeClass('newsHide');

  $.ajax({
    url: "/likeNews",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){

    $.each(data.onedu_news, function(i){
      news.push(data.onedu_news[i]);
      $("#newsCont").append(
        "<div class='col-md-4'>" +
          "<div class='card contNew'>" +
            "<img src='/packages/assets/img/universities/logos/" + data.onedu_news[i].logo + "' alt=''>" +
            "<div class='card-body container elip'>" +
              "<p>" + data.onedu_news[i].avance + "</p>" +
            "</div>" +
            "<div class='card-data fooCard' style='background-color:" + data.onedu_news[i].color + "'>" +
             "<ul class='viewMore'>" +
                "<li><i class='fa fa-play'></i></li>" +
                "<li><a href='#' class='read' data-id='" + data.onedu_news[i].id + "'> Leer</a></li>" +
             "</ul>" +
           "</div>" +
          "</div>" +
        "</div>"
      );
    });

    $.each(data.news, function(i){

      // news.push(g);
      $("#newsCont").append(
        "<div class='col-md-4'>" +
          "<div class='card contNew'>" +
            "<img src='/packages/assets/img/universities/logos/" + data.news[i].logo + "' alt=''>" +
            "<div class='card-body container elip'>" +
              "<p>" + data.news[i].avance + "</p>" +
            "</div>" +
            "<div class='card-data fooCard' style='background-color:" + data.news[i].color + "'>" +
             "<ul class='viewMore'>" +
                "<li><i class='fa fa-play'></i></li>" +
                "<li><a href='#' class='read' data-id='" + data.news[i].id + "'> Leer</a></li>" +
             "</ul>" +
           "</div>" +
          "</div>" +
        "</div>"
      );      
    });

  });


  $("body").on('click', '.read', function(){
    $('.newsContent').empty();
    $id = $(this).data('id');
    $(".firstLevel").fadeOut('slow', function(){
      $('#secondLevelNews').fadeIn('slow', function(){
        let single = atrib(news, "id", $id);
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

});

// funciones

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response.push(obj);
    }
  });
  return response;
}

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
