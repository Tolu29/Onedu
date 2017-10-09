$(function(){

  var numCard = 0, saveInfo = [], plansInfo = [], updInfo = [], updSave = [], camps = ["accreditation", "extra_activities", "schedules", "scholarships", "admission"];



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
      updInfo = data;
      $.each(data.study_plans, function(i){
        plansInfo[i] = {namePlan: data.study_plans[i].nombre_plan, descriptionPlan:data.study_plans[i].descripcion, id:data.study_plans[i].id };
      });
      $("[name='1']").css("background-color", "#5172a1");
      if (data.video != null) {
        $("#title").val(data.video.nombre);
        $("#url").val(data.video.embed);
      }
      btnUpdate()
    }
    numCard += 1;
  });


  $("body").on('click', '.backSec', function(){
    $("[name='info" + numCard + "']").addClass('infoHide');
    numCard -= 1;
    $(".cardInfo").css("background-color", "#d5d2d2");
    $("[name='info" + numCard + "']").removeClass('infoHide');
    $("[name='" + numCard + "']").css("background-color", "#5172a1");
    if (numCard == 1) {
      $(".backSec").remove();
    }
    switch (numCard) {
      case 1:
        saveInfo = [];
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        saveInfo.splice(numCard);
        if (numCard == 6) {
          $(".save").remove();
          btnSave();
        }
      break;
    }
  });


  // click next va guardando todos lo valores de los campos
  $("body").on('click', '.next', function(){
    switch (numCard) {
      case 1:
      let whiteSpaces = $("#url").val();
        if (/^\s+$/.test(whiteSpaces)) {
          $("#url").val("");
        }
        if ($("#url").val() == "" || $("#url").val() == undefined) {
          saveInfo.push(null);
          saveInfo.push("vid_error404");
        }else {
          if (!youtubeEmbed.validLink($("#url").val())) {
            swal("El URL que ingresaste no es valido!", "Ingresa el EMBED de YOUTUBE!", "warning");
            return ;
          }
          let url = youtubeEmbed.makeCode($("#url").val());
          saveInfo.push($("#title").val());
          saveInfo.push(url);
        }
        if ($("#btnBackSec").children().length == 1) {
          $("#btnBackSec").append("<button type='button' class='btn z-depth-2 backSec'>Atras</button>");
        }
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        let content = tinyMCE.get('info'+numCard).getContent();
        if (content == "" || content == undefined || content == null) {
          toastr.error("Debes de ingresar un texto para continuar");
          return ;
        }
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
    if ($(".saveUpd")) {
      $(".saveUpd").addClass('infoHide');
    }
    $(".save").addClass('infoHide');
    $("#btnBackSec").addClass('infoHide');
    $(".btnCont").append("<button type='button' class='btn z-depth-2 savePlan'>Guardar</button>");
  });


  // click para guardar un nuevo plan
  $("body").on('click', '.savePlan', function(){
    if (tinyMCE.get('PlanDesc').getContent() == "" || $("#PlanName").val() == "") {
      toastr.error("Debes de ingresar un texto y un titulo para guardar");
      return ;
    }
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
    if ($(".saveUpd")) {
      $(".saveUpd").addClass('infoHide');
    }
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
    if ($(".saveUpd")) {
      $(".saveUpd").removeClass('infoHide');
    }
    $("#btnBackSec").removeClass('infoHide');
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
    $(".back").trigger('click');
  });

  // click para borrar planes
  $("body").on('click', '.btnDelete', function(){

    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado ya no podras recuperar la informacion!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        $i = $(this).data('id');
        let single = $( "td:contains('" + plansInfo[$i].namePlan + "')" );
        single.parent().remove();
        if (plansInfo[$i].hasOwnProperty('id')) {
          plansInfo.splice($i, 1, {id:plansInfo[$i].id});
        }else {
          plansInfo.splice($i, 1, null);
        }
        swal("Listo! El plan de estudios ha sido eliminado!", {
          icon: "success",
        });
      } else {
        swal("Muy bien todo esta seguro!");
      }
    });
  });

  //  click para guardar toda la informacion (final)
  $("body").on('click', '.save', function(){
    // alert('si entro');
    $check = 0;
    $.each(plansInfo, function(i){
      if(plansInfo[i] != null){
        $check += 1;
      }
    });
    if ($check < 1) {
      toastr.error("Debes de ingresar al menos un plan de estudios para continuar");
      return ;
    }else if (plansInfo == "" || plansInfo == undefined || plansInfo == null) {
      toastr.error("Debes de ingresar al menos un plan de estudios para continuar");
      return ;
    }
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

    console.log(data);

    // $.ajax({
    //   url: "/saveAll",
    //   type: "POST",
    //   data: data,
    //   headers: {
    //   'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //   }
    // })
    // .done(function(data){
    //   if (data == "La informacion se ha guardado con exito") {
    //     toastr.success("La informacion se ha guardado con exito");
    //     setTimeout(function(){ window.location.href = "/schools" }, 1500);
    //   }else {
    //     toastr.error("Ah ocurrido un error podrias recargar la pagina");
    //   }
    // });


  });

  /*update section*/
  $("body").on('click', '.nextUpd', function(){
    switch (numCard) {
      case 1:
        let whiteSpaces = $("#url").val();
        if (/^\s+$/.test(whiteSpaces)) {
          $("#url").val("");
        }
        if ($("#url").val() == "" || $("#url").val() == undefined) {
          updSave.push(null);
          updSave.push("vid_error404");
        }else {
          if (!youtubeEmbed.validLink($("#url").val())) {
            swal("El URL que ingresaste no es valido!", "Ingresa el EMBED de YOUTUBE!", "warning");
            return ;
          }
          let url = youtubeEmbed.makeCode($("#url").val());
          updSave.push($("#title").val());
          updSave.push(url);
        }
        break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          let content = tinyMCE.get('info'+numCard).getContent();
          if (content == "" || content == undefined || content == null) {
            toastr.error("Debes de ingresar un texto para continuar");
            return ;
          }
          updSave.push(tinyMCE.get('info'+numCard).getContent());
        break;
      default:

    }
    if (numCard == 6) {
      $(".nextUpd").remove();
      $(".btnCont").append("<button type='button' class='btn z-depth-2 saveUpd'>Guardar</button>");
      $("[name='info" + numCard + "']").addClass('infoHide');
      numCard += 1;
      $.each(plansInfo, function(i){
        $("#tBodyCont").append(
          "<tr>" +
            "<td class='text-center'>" + plansInfo[i].namePlan + "</td>" +
            "<td>" +
              "<div class='text-center'>" +
                "<button type='button' data-id='" + i + "' class='btn btn-sm btnDetails'>Detalles</button>" +
                "<button type='button' data-id='" + i + "' class='btn btn-sm btnDelete'>Eliminar</button>" +
              "</div>" +
            "</td>" +
          "</tr>"
        );
      });
    }else if (numCard <= 5) {
      $("[name='info" + numCard + "']").addClass('infoHide');
      numCard += 1;
      let info = atrib(updInfo.informations, 'titulo', camps[(numCard-2)]);
      tinyMCE.get('info'+numCard).setContent(info.descripcion);
    }
    $(".cardInfo").css("background-color", "#d5d2d2");
    $("[name='info" + numCard + "']").removeClass('infoHide');
    $("[name='" + numCard + "']").css("background-color", "#5172a1");
  });



  $("body").on('click', '.saveUpd', function(){
    $check = 0;
    $.each(plansInfo, function(i){
      if(plansInfo[i] != null && Object.keys(plansInfo[i]).length != 1){
        $check += 1;
      }
    });
    if ($check != 0) {
      let data = {
        title: updSave[0],
        url: updSave[1],
        accreditation: updSave[2],
        extra_activities: updSave[3],
        schedules: updSave[4],
        scholarships: updSave[5],
        admission: updSave[6],
        plans: plansInfo
      }
       $.ajax({
         url: "/updateInfo",
         type: "POST",
         data: data,
         headers: {
         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
         }
       })
       .done(function(data){

       });
    }else {
      toastr.error("Debes de ingresar al menos 1 plan de estudios para continuar");
      return ;
    }
  });



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
      response = obj;
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
