$(function(){

  var numCard = 0, saveInfo = [], plansInfo = [], url, updInfo = [];



  // obtenemos la informacion de la carrera en caso de que hubiese alguna
  $.ajax({
    url: "/getAllInfo",
    type: "POST",
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })
  .done(function(data){
    if (data == null || data == "") {
      btnSave();
      $("[name='1']").css("background-color", "#5172a1");
    } else {
      $("[name='1']").css("background-color", "#5172a1");
      $("#title").val(data.video.nombre);
      $("#url").val(data.video.embed);
      btnUpdate()
    }
    numCard += 1;
  });


  $("#url").on('change', function(){
    if (youtubeEmbed.validLink($("#url").val())) {
      url = youtubeEmbed.makeCode($("#url").val());
    }else {
      toastr.error("El URL que ingresaste no es valido");
    }

  });


  // click next va guardando todos lo valores de los campos
  $("body").on('click', '.next', function(){
    switch (numCard) {
      case 1:
        if (url == "" || url == undefined) {
          saveInfo.push(null);
          saveInfo.push("vid_error404");
        }else {
          saveInfo.push($("#title").val());
          saveInfo.push(url);
        }
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        saveInfo.push(tinyMCE.get('info'+numCard).getContent());
      break;
      default:

    }
    if (numCard == 6) {
      $(".next").remove();
      $(".btnCont").append("<button type='button' class='btn z-depth-2 save'>Guardar</button>");
    }
    $("[name='info" + numCard + "']").addClass('infoHide');
    numCard += 1;
    $(".cardInfo").css("background-color", "#d5d2d2");
    $("[name='info" + numCard + "']").removeClass('infoHide');
    $("[name='" + numCard + "']").css("background-color", "#5172a1");
  });

  // click para agregar plan de estudios
  $("body").on('click', '.addPlan>a', function(){
    $("#PlanName").val("");
    tinyMCE.get('PlanDesc').setContent("");
    $(".planLvl1").addClass('infoHide');
    $(".planLvl2").removeClass('infoHide');
    $(".save").addClass('infoHide');
    $(".btnCont").append("<button type='button' class='btn z-depth-2 savePlan'>Guardar</button>");
  });


  // click para guardar un nuevo plan
  $("body").on('click', '.savePlan', function(){
    let singlePlan = {
      namePlan: $("#PlanName").val(),
      descriptionPlan: tinyMCE.get('PlanDesc').getContent(),
    }
    plansInfo.push(singlePlan);

    $("#tBodyCont").append(
      "<tr>" +
        "<td class='text-center'>" + singlePlan.namePlan + "</td>" +
        "<td>" +
          "<div class='text-center'>" +
            "<button type='button' data-id='" + (plansInfo.length - 1) + "' class='btn btn-sm btnDetails'>Detalles</button>" +
            "<button type='button' data-id='" + (plansInfo.length - 1) + "' class='btn btn-sm btnDelete'>Eliminar</button>" +
          "</div>" +
        "</td>" +
      "</tr>"
    );
    $(".back").trigger('click');
  });


  // click en btn detalles
  $("body").on('click', '.btnDetails', function(){
    tinyMCE.get('PlanDesc').setContent("");
    $i = $(this).data('id');
    let temp = {
      namePlan: plansInfo[$i].namePlan,
      descriptionPlan: plansInfo[$i].descriptionPlan
    }
    $("#PlanName").val(temp.namePlan);
    tinyMCE.get('PlanDesc').setContent(temp.descriptionPlan);
    $(".planLvl1").addClass('infoHide');
    $(".planLvl2").removeClass('infoHide');
    $(".save").addClass('infoHide');
    $(".btnCont").append("<button type='button' data-id='" + $(this).data('id') + "' class='btn z-depth-2 updPlan'>Guardar</button>");
  });


  // click para retroseder en seccion planes
  $("body").on('click', '.back', function(){
    if ($(".updPlan")) {
      $(".updPlan").remove();
    }
    $(".planLvl2").addClass('infoHide');
    $(".planLvl1").removeClass('infoHide');
    $(".save").removeClass('infoHide');
    $(".savePlan").remove();
  });


  $("body").on('click', '.updPlan', function(){
    let singlePlan = {
      namePlan: $("#PlanName").val(),
      descriptionPlan: tinyMCE.get('PlanDesc').getContent(),
    }
    let i = $(this).data('id');
    let name = $( "td:contains('" + plansInfo[i].namePlan + "')" );
    plansInfo[i].namePlan = singlePlan.namePlan;
    plansInfo[i].descriptionPlan = singlePlan.descriptionPlan;
    name.text(singlePlan.namePlan);
    $(".").trigger('click');
  });

  // click para borrar planes
  $("body").on('click', '.btnDelete', function(){
    $i = $(this).data('id');
    let single = $( "td:contains('" + plansInfo[$i].namePlan + "')" );
    single.parent().remove();
    plansInfo.splice($i, 1, null);
  });

  //  click para guardar toda la informacion (final)
  $("body").on('click', '.save', function(){
    $(".save").remove();
    let data = {
      title: saveInfo[0],
      url: saveInfo[1],
      accreditation: saveInfo[2],
      extra_activities: saveInfo[3],
      schedules: saveInfo[4],
      scholarships: saveInfo[5],
      admission: saveInfo[6],
      plans: plansInfo
    }
    $.ajax({
      url: "/saveAll",
      type: "POST",
      data: data,
      headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    })
    .done(function(data){
      if (data == "La informacion se ha guardado con exito") {
        toastr.success("La informacion se ha guardado con exito");
        setTimeout(function(){ window.location.href = "/schools" }, 1500);
      }else {
        toastr.error("Ah ocurrido un error podrias recargar la pagina");
      }
    });


  });

  /*update section*/
  // $("body").on('click', '.nextUpd', function(){
  //   switch (numCard) {
  //     case 1:
  //     console.log(url);
  //       updInfos.push();
  //       updInfos.push();
  //       break;
  //     default:
  //
  //   }
  //   numCard += 1;
  //
  // });

// cierre jquery
});
// cierre jquery


function btnSave(){
  $(".btnCont").append("<button type='button' class='btn z-depth-2 next'>Siguiente</button>");
}

function btnUpdate(){
  $(".btnCont").append("<button type='button' class='btn z-depth-2 nextUpd'>Siguiente</button>");
}


var youtubeEmbed = {
  makeCode : function(url){
     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
     var match = url.match(regExp);
     if (match && match[2].length == 11) {
        return 'https://www.youtube.com/embed/' + match[2] + '?rel=0&amp;showinfo=0';
     }
     else {
        console.error("Error trying to make a codeEmbed");
        return null;
     }
  },
  validLink : function(codeEmbed){
     if(/^https\:\/\/www\.youtube\.com\/embed\/\S*$/.test(codeEmbed)){
        return true;
     }
     else{
        return false;
     }
  }
}

function atrib(obj,attr,data){
  var response=[];
  $.each(obj,function(index,obj,i){
    if (obj[attr] == data) {
      response[index] = obj;
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
})
wow.init();





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
