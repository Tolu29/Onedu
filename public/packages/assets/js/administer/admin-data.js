$(function(){

  var highSchools = [];

  var picker = new Pikaday({ field: $('#inicialDate')[0] });
  var picker = new Pikaday({ field: $('#finalDate')[0] });

  $.ajax({
    url: "/dataBaseInfo",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    highSchools = data.highSchools;
    $.each(data.cities, function(i){
      $("#city_select").append('<option value="' + data.cities[i].id + '">' + data.cities[i].nombre + '</option>');
    });
  });


  $("body").on('change', '#city_select', function(){
    $id = $("#city_select").val()
    let schools = atrib(highSchools, "ciudad_id", $id);
    $("#highSchool-select").empty();
    $("#highSchool-select").append("<option value='' disabled selected>Selecciona una preparatoria</option>");
    $.each(schools, function(i){
      $("#highSchool-select").append('<option value="' + highSchools[i].id + '">' + highSchools[i].nombre + '</option>')
    });
  });


  $("body").on('click', '.download', function(){
    let data = {
      school: $("#highSchool-select").val(),
      iniDate: $("#inicialDate").val(),
      finDate: $("#finalDate").val()
    }
    console.log(data);
    // $.ajax({
    //   url: "/downloadExcel",
    //   type: "POST",
    //   data: data,
    //   headers: {
    //   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //   }
    // })
    // .done(function(data){
    //
    // });

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
