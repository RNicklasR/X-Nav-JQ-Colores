
$(document).ready(function() {
	$("#orderedlist2").addClass("red");
	$("#orderedlist2 > li").addClass("blue");
	/*hover acepta dos function, una para entrada y otra para salida. si solo hay una se aplicara en ambos casos*/
	$("#orderedlist2 > li:last").hover(function() {
		$(this).addClass("green");
	},function(){
		$(this).removeClass("green");
	});
	/**(function(){
       		$(this).css("color", "green");
        },function(){
       		$(this).css("color", "blue");
    });**/
});
