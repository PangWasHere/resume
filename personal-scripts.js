/* Main Navigation Buttons */
$(document).ready( function(){
	$(".nav-btn").click( function(){
		var page = $(this).attr("page");
		$(".main-div").hide();
		$('.nav-btn').removeClass("nav-btn-selected");
		var shown_div = "#div-" + page;
		var btn_selected ="#btn-" + page;
		$(shown_div).show();
		$(btn_selected).addClass("nav-btn-selected");
});
	
/* Tabs in Skills section */
$(".tab-btn").click( function() {
	var code_lang = $(this).attr("lang");
	$(".tab-content").hide();
	var shown_tab = "#div-Code" + code_lang;
	$(shown_tab).show();
});
		
/* Code Snippet Syntax Highlighter using HighlightJS */	
  document.querySelectorAll('pre code').forEach((block) => {
	hljs.highlightBlock(block);
	hljs.lineNumbersBlock(block);
 });
	  
	
var img_arrs = {
	'DigitalArt': ['imgs/creativity-not-overthinking.jpg', 'imgs/rogue.png', 'imgs/october-creepy.jpg', 'imgs/janette-ruiz.jpg', 'imgs/ano-hana-anjou.png', 'imgs/ano-hana-tsurimi.png'],
	'Facebook Banners': ['imgs/fb-goat.png', 'imgs/fb-are-you-okay.png', 'imgs/fb-smiling-kid.png'],
	'Sketches': ['imgs/hand-drawing.PNG', 'imgs/devil-angel-pang.PNG', 'imgs/lava-doodle.PNG', 'imgs/stuck-in-ayala.PNG', 'imgs/ten-years-after.PNG']
}
	
	$.each(img_arrs, function(header, img_arr){
		var header_title = $('<h2/>',{
				html: header
			});
		$(header_title).appendTo($('#div-Gallery'));
		
		var div_image_container_id = "div-" + header.replace(/ /g, '');
		var div_image_container = $('<div/>', {
			"class": "div-ImageContainer",
			"id": div_image_container_id
		});
		$(div_image_container).appendTo($('#div-Gallery'));
		$.each(img_arr,	function(i, value){	
			var image_holder = $( "<a/>", {
				html: "<img src='" + value + "' />",
				"class": "div-Image",
				"source" : value,
				href: "#"
			});
			$('#' + div_image_container_id).append(image_holder);				
		});
		
	});
	
	$(".div-Image").click( function() {
		$(".div-ShowImage").empty();
		//alert($(this).attr("source"));
		var image = $('<img/>', {
			"src": $(this).attr("source"),
			"style": "max-width: 80%"
		});
		
		$(".div-ShowImage").append(image);
	});
});	