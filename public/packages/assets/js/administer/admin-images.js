$(function(){

  $.ajax({
    url: "/getAllImg",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $.each(data, function(i){
      $("#tableImgs").append(
        "<tr>" +
          "<td>" + data[i].foto + "</td>" +
          "<td>" +
          "<div class=''>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn btnDelete btn-sm'>Borrar</button>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn btnDetail btn-sm' data-toggle='modal' data-target='#updModal'>Detalles</button>" +
          "</div>" +
          "</td>" +
        "</tr>"
      )
    });
  });

  $("#property-img").on('change', function(){
    selectFile($("#property-img"), "#previewInsta");
  });

  $("body").on('click', '.btnSave', function(){
    let formData = new FormData($("#formProperty")[0]);
    formData.append('name', $("#imgName").val());

    $.ajax({
      contentType: false,
      processData: false,
      url: "/saveImg",
      type: "POST",
      data: formData,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      toastr.success("La imagen se ha gusardado con exito");
      window.location.reload()
    });
  });

  $("body").on('click', '.btnDetail', function(){
    $(".btnUpd").attr('data-id', $(this).data('id'));
    let data = {
      id: $(this).data('id')
    }

    $.ajax({
      url: "/getImgInfo",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      $("#lab").addClass('active');
      $("#updName").val(data.foto);
      $("#previewUpd").attr('src', "/packages/assets/img/universities/installation/" + data.inmueble)
    });

  });

  $("#property-imgUpd").on('change', function(){
    selectFile($("#property-imgUpd"), "#previewUpd");
  });

  $("body").on('click', '.btnUpd', function(){
    formData = new FormData($("#formUpd")[0]);
    if ($("#property-imgUpd").val() == "" || $("#property-imgUpd").val() == null || $("#property-imgUpd").val() == undefined) {
      formData.append('formUpd', 'notImg404')
    }
    formData.append('name', $("#updName").val());
    formData.append('id', $(this).data('id'));

    $.ajax({
      contentType: false,
      processData: false,
      url: "/updImg",
      type: "POST",
      data: formData,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      toastr.success("La imagen se ha gusardado con exito");
    });
  });



  $("body").on('click', '.btnDelete', function(){
    let data = {
      id: $(this).data('id')
    }
    swal({
      title: "Estas segiro de eliminar la imagen?",
      text: "Una vez eliminada no podras recuperarla!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $.ajax({
          url: "/deleteImg",
          type: "POST",
          data: data,
          headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          }
        })
        .done(function(data){
          toastr.success("Listo! La imagen ha sido eliminada!");
          setTimeout(function(){ window.location.reload(); }, 1000);          
        });
      } else {
        swal("Todo esta seguro!");
      }
    });
  });


});


var file = {
  validExtension : function ($file, $types) {
     extension = ($file.substring($file.lastIndexOf("."))).toLowerCase();
     $available = false;
     for (var i = 0; i < $types.length; i++) {
        if ($types[i] == extension) {
           $available = true;
           break;
        }
     }
     if ($available) {
        return true;
     }else{
        return false;
     }
  },
  validSize : function($idInput, $mb){
     var files = document.getElementById($idInput).files;
     $max = (1024000 * $mb);
     if(files[0].size > $max){
        return null;
     }
     else{
        return files[0];
     }
  }
}

function makeBlob($idInput){
      try {
         var files = document.getElementById($idInput).files;
         var browser = window.URL || window.webkitURL;
         var url = browser.createObjectURL(files[0]);
         return url;
      } catch (e) {
         return null;
      }
}

function selectFile($input, $prev){
     var exts = new Array(".png", ".jpg", "jpeg", "JPEG", "JPG", "PNG");
     var $file = $input;
     var maxMegas = 2;
     if ($file.val() != ""){
        if(file.validExtension($file.val(), exts)){
           var files = file.validSize($file.attr("id"), maxMegas);
           if (files != null){
              var url = makeBlob($file.attr("id"));
              $($prev).attr("src", url);
           }
           else{
              this.resetImage();
              Curiosity.noty.warning("El archivo excede los "+maxMegas+" MB máximos permitidos", "Demasiado grande");
           }
        }
        else{
           $file.val("");
           Curiosity.noty.info("Selecciona un archivo de imagen valido", "Formato invalido");
        }
     }
  }
