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
		console.log(shown_div);
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
	  
/*Email JS scripts */
    emailjs.init("user_d7C879uAXjNHoEVoyQi3r");
	document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_sljO5xT4', this).then(function(response) {
		alert('Message sent! Thank you for your email!');
		}, function(error) {
		   alert('There seems to be a problem sending your message.');
		});
	});
});	