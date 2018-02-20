$(function(){

  var highSchools = [], citie_id;

  var picker = new Pikaday({
    field: document.getElementById('inicialDate'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}/${month}/${day}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1] - 1, 10);
        const year = parseInt(parts[1], 10);
        return new Date(year, month, day);
    }
  });

  var picker = new Pikaday({
    field: document.getElementById('finalDate'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}/${month}/${day}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1] - 1, 10);
        const year = parseInt(parts[1], 10);
        return new Date(year, month, day);
    }
  });

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
    citie_id = $("#city_select").val();
    $id = $("#city_select").val();
    let schools = atrib(highSchools, "ciudad_id", $id);
    $("#highSchool_select").empty();
    $(".schoolHide").removeClass('admD-hide');
    $("#highSchool_select").append(
      "<option value='' disabled selected>Selecciona una preparatoria</option>" +
      "<option value='all'>Todas</option>"
    );
    $.each(schools, function(i){
      $("#highSchool_select").append('<option value="' + highSchools[i].id + '">' + highSchools[i].nombre + '</option>')
    });
  });


  $("body").on('click', '.download', function(){
    $("#formExcel").validate({
       rules : {
          city_select : {required: true},
          inicialDate : {required: true},
          highSchool_select : {required: true},
          finalDate : {required: true}
       },
       messages: {
        city_select: {required: "Selecciona una ciudad"},
        inicialDate: {required: "Selecciona una fecha inicial para la busqueda"},
        highSchool_select: {required: "Selecciona una escuela"},
        finalDate: {required: "Ingresa una fecha final para la busqueda"}
      }
    });
    if ($("#formExcel").valid()){
      let data = {
        citie: citie_id,
        school: $("#highSchool_select").val(),
        iniDate: $("#inicialDate").val(),
        finDate: $("#finalDate").val()
      }

      $.ajax({
        url: "/downloadExcel",
        type: "POST",
        data: data,
        headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      })
      .done(function(data){
        let exLength = data.length;
        $.each(data, function(i){
          $("#data_table").append(
            "<tr>" +
              "<td>" + data[i].nombre_completo + "</td>" +
              "<td>" + data[i].mail + "</td>" +
              "<td>" + data[i].escuela_anterior + "</td>" +
            "</tr>"
          )

          if (exLength === (i+1)) {
            //getting data from our table
            var data_type = 'data:application/vnd.ms-excel';
            var table_div = document.getElementById('table_wrapper');
            var table_html = table_div.outerHTML.replace(/ /g, '%20');

            var a = document.createElement('a');
            a.href = data_type + ', ' + table_html;
            a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
            a.click();
          }
        });
      });
    }else {
      let BreakException = {};
      $.each($("[id*=-error]"),function(i){
        if ($($("[id*=-error]")[i]) && $($("[id*=-error]")[i]).text() != "") {
          toastr.error($($("[id*=-error]")[i]).text());
          throw BreakException;
        }
      });
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
