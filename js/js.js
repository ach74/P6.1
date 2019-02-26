$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
	});
	$("#fade").click(function(){
		$("#panel-fade").fadeToggle();
	});
	$("#fade-2").click(function(){
		$("#panel-fade-2").fadeToggle();
	});
	$("#fade-3").click(function(){
		$("#panel-fade-3").fadeToggle();
	});
	$("#animation").click(function(){
		$("#panel-animation").animate({
			height: 'toggle'
		});
	});
	$("#button-addon1").click(function(){
		window.location.href = "filtro.html";
	});
});

