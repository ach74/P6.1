$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle("slow");
	});
	$("#fade").click(function(){
		$("#panel-fade").fadeToggle();
	});
	$("#animation").click(function(){
		$("#panel-animation").animate({
			height: 'toggle'
		});
	});
});

