/*================================
==================================

       CUSTOM Js    

==================================
================================*/

// if(jQuery){

// 	console.log("Hi My Name Is Jquery Thank You For Adding Me In Your Project And  I Am Loaded Successfully");
// }else{

// 	console.log("There is Something Wrong in Your Code Please Check again");
// }



// On Each Click toggle Class

$("ul").on("click","li",function(){

$(this).toggleClass("checked");

});

// Remove Li

$("ul").on("click","li span",function(event){

$(this).parent().fadeOut(1000,function(){

  $(this).remove();

});

event.stopPropagation();
});


// Click Show Value in Li List

$("input").on("keypress",function(event){

	if(event.which === 13){

		 var todoText = $(this).val();

      $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+todoText+"</li>");
      $(this).val("");


	}
});

$(".fa-plus").on("click",function(){

$("input[type='text']").fadeToggle();


});

