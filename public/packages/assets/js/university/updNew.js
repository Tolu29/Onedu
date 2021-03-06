$(function(){

  $.ajax({
		url: "/infoNew",
		type:"POST",
		headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		}
	})
	.done(function(data){
		setTimeout(function(){ tinyMCE.activeEditor.setContent(data.cuerpo); }, 3000);
	});


  $("body").on('click', '.UpdbtnSend', function(){
    let rawText = tinyMCE.activeEditor.getBody().textContent;
		let cleanText = rawText.substring(0,219);

    let data = {
      titulo: null,
      cuerpo: tinyMCE.activeEditor.getContent(),
      preview: cleanText
    }

    $.ajax({
      url: "/updateNew",
      type: "POST",
      data: data,
      headers: {
  		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
  		}
    })
    .done(function(data){
      window.location.href = "/publications";
    });

  });


});



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
