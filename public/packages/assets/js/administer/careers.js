$(function(){
  var infoArray = [], nameCard = 1, bndUpd = false , updInfo = [], newInfo = [], updAjax = [];

  $.ajax({
    url: "/allCareers",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    $.each(data,function(i){
      $("#tableCareers").append(
        "<tr class='colorRow1'>" +
          "<td>" + data[i].nombre + "</td>" +
          "<td>" + data[i].nivel_educativo + "</td>" +
          "<td>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn adminDelBtn btnDelCareer btn-sm z-depth-2'>Eliminar</button>" +
            "<button type='button' data-id='" + data[i].id + "' class='btn btnUpd adminUpdBtn btn-sm z-depth-2'>Editar</button>" +
          "</td>" +
        "</tr>"
      )

    });

  });

  $("body").on('click', '.btnCancel', function(){
    window.location.reload();
  });


  $("body").on('click', '.backSec', function(){
    $("[name='contInfo" + nameCard + "']").addClass('careerHide');
    nameCard -= 1;
    $("[name='contInfo" + nameCard + "']").removeClass('careerHide');
    $(".cardColor").css("background-color", "#d5d2d2");
    $("[name=" + nameCard + "]").css("background-color", "#5172a1");
    if (nameCard == 1) {
      $(".backSec").remove();
    }
    
    switch (nameCard) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        if (bndUpd == true) {
          if (nameCard == 1) {
            newInfo.splice(1);
          }else {
            newInfo.splice((nameCard - 1))
          }
          if (nameCard == 5) {
            $(".btnUpdCareer").remove();
            updBtn();
          }
        }else {
          infoArray.splice((nameCard - 1))
          if (nameCard == 5) {
            $(".btnRegCareer").remove();
            saveBtn();
          }
        }

        break;
      default:

    }
  });


  $("body").on('click', '.btnmodalReg', function(){
    $(".careerLvl2").removeClass('careerHide');
    $(".careerLvl1").addClass('careerHide');
    $("[name='1']").css("background-color", "#5172a1");
    saveBtn();
  });


  $("body").on('click', '.next', function(){
    switch (nameCard) {
      case 1:
      case 2:
      case 5:
        let whiteSpaces = $("[name='textInfo" + nameCard + "']").val(), singleInput = $("[name='textInfo" + nameCard + "']");
        if (/^\s+$/.test(whiteSpaces)) {
          singleInput.val("");
        }
        if (singleInput.val() == "" || singleInput.val() == undefined) {
          toastr.error("Ingresa un texto para continuar");
          return ;
        }
        infoArray.push(singleInput.val());
        if ($(".backCont").children().length == 1) {
          $(".backCont").append("<button type='button' class='btn z-depth-2 backSec'>Atras</button>");
        }
        break;
      case 4:
      case 3:
        let content = tinyMCE.get('textInfo'+nameCard).getContent();
        if (content == "" || content == undefined || content == null) {
          toastr.error("Debes de ingresar un texto para continuar");
          return ;
        }
        infoArray.push(content);
      default:
    }

    if (nameCard == 5) {
      $(".next").remove();
      $(".btnSave").append("<button type='button' class='btn z-depth-2 btnRegCareer'>Guardar</button>");
    }
    $("[name='contInfo" + nameCard + "']").addClass('careerHide');
    nameCard += 1;
    $("[name='contInfo" + nameCard + "']").removeClass('careerHide');
    $(".cardColor").css("background-color", "#d5d2d2");
    $("[name=" + nameCard + "]").css("background-color", "#5172a1");
  });



  $("body").on('click', '.btnRegCareer', function(){
    let content = tinyMCE.get('textInfo6').getContent();
    if (content == "" || content == undefined || content == null) {
      toastr.error("Debes de ingresar un texto para continuar");
      return ;
    }
    infoArray.push(content);
    let data = {
      career: infoArray[0],
      level: infoArray[1],
      description: infoArray[2],
      profile: infoArray[3],
      group: infoArray[4],
      lab_camp: infoArray[5]
    }

    $.ajax({
      url: "/saveCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La carrera se ha registrado con exito") {
        toastr.success('La carrera se ha borrado con exito');
        window.location.reload();
      }else {
        toastr.error('Esto es incomodo... Podrias recargar la pagina');
      }
    });

  });



  $("body").on('click', '.btnUpd', function(){
    $(".careerLvl2").removeClass('careerHide');
    $(".careerLvl1").addClass('careerHide');
    let id = $(this).data('id')
    let data = {
      id: id
    }

    $.ajax({
      url: "/infoCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      newInfo = [id];
      $i = 1
      $.each(data, function(i){
        updInfo[$i] = data[i];
        $i += 1;
      });
      $("[name='1']").css("background-color", "#5172a1");
      $("[name='textInfo" + nameCard + "']").val(updInfo[1]);
      nameCard = 1;
      updBtn();
      bndUpd = true;
    });

  });



  $("body").on('click', '.nextUpd', function(){
    switch (nameCard) {
      case 1:
      case 2:
      case 5:
        let whiteSpaces = $("[name='textInfo" + nameCard + "']").val(), singleInput = $("[name='textInfo" + nameCard + "']");
        if (/^\s+$/.test(whiteSpaces)) {
          singleInput.val("");
        }
        if (singleInput.val() == "" || singleInput.val() == undefined) {
          toastr.error("Ingresa un texto para continuar");
          return ;
        }
        newInfo.push(singleInput.val());
        if ($(".backCont").children().length == 1) {
          $(".backCont").append("<button type='button' class='btn z-depth-2 backSec'>Atras</button>");
        }
        break;
      case 3:
      case 4:
        let content = tinyMCE.get('textInfo'+nameCard).getContent();
        if (content == "" || content == undefined || content == null) {
          toastr.error("Debes de ingresar un texto para continuar");
          return ;
        }
        newInfo.push(content);
      default:

    }
    $("[name='contInfo" + nameCard + "']").addClass('careerHide');
    updInfo[nameCard] = newInfo[nameCard];
    nameCard += 1;
    if (nameCard == 3 || nameCard == 4) {
      let temp = {
        content: updInfo[(nameCard)]
      }
      setTimeout(function(){ tinyMCE.get('textInfo'+nameCard ).setContent(temp.content); }, 0000);
      $("[name='contInfo" + nameCard + "']").removeClass('careerHide');
    }else {
      $("[name='contInfo" + nameCard + "']").removeClass('careerHide');
      $("[name='textInfo" + nameCard + "']").val(updInfo[nameCard]);
    }
    $(".cardColor").css("background-color", "#d5d2d2");
    $("[name=" + nameCard + "]").css("background-color", "#5172a1");
    if (nameCard == 6) {
      let temp = {
        content: updInfo[(6)]
      }
      setTimeout(function(){ tinyMCE.get('textInfo'+nameCard ).setContent(temp.content); }, 0000);
      $("[name='contInfo" + nameCard + "']").removeClass('careerHide');
      $(".nextUpd").remove();
      $(".btnSave").append("<button type='button' class='btn z-depth-2 btnUpdCareer'>Guardar</button>");
    }

  });



  $("body").on('click', '.btnUpdCareer', function(){
    let content = tinyMCE.get('textInfo6').getContent();
    if (content == "" || content == undefined || content == null) {
      toastr.error("Debes de ingresar un texto para continuar");
      return ;
    }
    newInfo.push(tinyMCE.get('textInfo6').getContent());
    let data = {
      career: newInfo[1],
      level: newInfo[2],
      description: newInfo[3],
      profile: newInfo[4],
      group: newInfo[5],
      id: newInfo[0],
      lab_camp: newInfo[6]
    }
    $.ajax({
      url: "/updateCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if(data == "La carrera se actualizo correctamente"){
        toastr.success('La carrera se actualizo correctamente');
        window.location.reload();
      }else {
        toastr.error('Ingresa los datos correctamente');
      }
    });

  });


  $("body").on('click', '.btnDelCareer', function(){
    let trParent = $(this).parent().parent();
    let data = {
      id: $(this).data('id')
    }
    $.ajax({
      url: "/deleteCareer",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La carrera se ha borrado con exito") {
        toastr.success('La carrera se ha borrado con exito');
        trParent.remove();
      }else {
        toastr.error('No se puede borrar intentalo mas tarde');
      }
    });
  });



});


function updBtn(){
  $(".btnSave").append("<button type='button' class='btn z-depth-2 nextUpd'>Siguiente</button>");
}

function saveBtn(){
  $(".btnSave").append("<button type='button' class='btn z-depth-2 next'>Siguiente</button>");
}


/*TiNYMCE*/

tinymce.init({
	/* replace textarea having class .tinymce with tinymce editor */
	selector: "textarea.tinymce",

  branding: false,

	/* theme of the editor */
	theme: "modern",
	skin: "lightgray",

	/* width and height of the editor */
	width: "100%",
	height: 300,

	/* display statusbar */
	statubar: true,

	/* plugin */
	plugins: [
		"advlist autolink link image lists charmap print preview hr anchor pagebreak",
		"searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
		"save table contextmenu directionality emoticons template paste textcolor"
	],

	/* toolbar */
	toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor emoticons",

	/* style */
	style_formats: [
		{title: "Headers", items: [
			{title: "Header 1", format: "h1"},
			{title: "Header 2", format: "h2"},
			{title: "Header 3", format: "h3"},
			{title: "Header 4", format: "h4"},
			{title: "Header 5", format: "h5"},
			{title: "Header 6", format: "h6"}
		]},
		{title: "Inline", items: [
			{title: "Bold", icon: "bold", format: "bold"},
			{title: "Italic", icon: "italic", format: "italic"},
			{title: "Underline", icon: "underline", format: "underline"},
			{title: "Strikethrough", icon: "strikethrough", format: "strikethrough"},
			{title: "Superscript", icon: "superscript", format: "superscript"},
			{title: "Subscript", icon: "subscript", format: "subscript"},
			{title: "Code", icon: "code", format: "code"}
		]},
		{title: "Blocks", items: [
			{title: "Paragraph", format: "p"},
			{title: "Blockquote", format: "blockquote"},
			{title: "Div", format: "div"},
			{title: "Pre", format: "pre"}
		]},
		{title: "Alignment", items: [
			{title: "Left", icon: "alignleft", format: "alignleft"},
			{title: "Center", icon: "aligncenter", format: "aligncenter"},
			{title: "Right", icon: "alignright", format: "alignright"},
			{title: "Justify", icon: "alignjustify", format: "alignjustify"}
		]}
	]

});
