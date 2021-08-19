
document.addEventListener("DOMContentLoaded",function(){
    'use strict';
    document.querySelector('.s-header-user a').addEventListener('click', function(e){
        e.preventDefault();
    if(e.target.closest('.s-header-user').classList.contains('active')){
      e.target.closest('.s-header-user').classList.remove('active');
      document.querySelector('.s-header-user-nav').classList.remove('active');
    } else{
      e.target.closest('.s-header-user').classList.add('active');
      document.querySelector('.s-header-user-nav').classList.add('active');
      document.querySelector('.s-header-toggle').classList.remove('active');
        document.querySelector('.s-header-list').classList.remove('active');
    }

    });
    var specifiedElement = document.getElementById('usernav');

//I'm using "click" but it works with any event
document.addEventListener('click', function(event) {
  var isClickInside = specifiedElement.contains(event.target);

  if (!isClickInside) {
 document.querySelector('.s-header-user').classList.remove('active');
      document.querySelector('.s-header-user-nav').classList.remove('active');
  } else{
 
  }
});

    let edits =  document.querySelectorAll('.js-edit');
     if (typeof(edits) != 'undefined' && edits != null) {
for(let i=0; i<edits.length; i++) { 
	edits[i].addEventListener('click', function(e){
        e.preventDefault();
        e.target.closest('.text').classList.add('active');
        e.target.closest('.text').nextElementSibling.classList.remove('active');
   
    });
}
}
  let checked =  document.querySelectorAll('.js-check');
     if (typeof(checked) != 'undefined' && checked != null) {
for(let i=0; i<checked.length; i++) { 
	checked[i].addEventListener('click', function(e){
        e.preventDefault();
        e.target.closest('.input').classList.add('active');
        e.target.closest('.input').previousElementSibling.classList.remove('active');
   
    });
}
}
  let closed =  document.querySelectorAll('.js-close');
     if (typeof(closed) != 'undefined' && closed != null) {
for(let i=0; i<closed.length; i++) { 
	closed[i].addEventListener('click', function(e){
        e.preventDefault();
        e.target.closest('.input').classList.add('active');
        e.target.closest('.input').previousElementSibling.classList.remove('active');
   
    });
}
}
 document.querySelector('.s-header-toggle').addEventListener('click', function(e){
        e.preventDefault();
         document.querySelector('.s-header-toggle').classList.toggle('active');
        document.querySelector('.s-header-list').classList.toggle('active');
         document.querySelector('.s-header-user').classList.remove('active');
      document.querySelector('.s-header-user-nav').classList.remove('active');
    });
 let fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
 if (typeof(fileInput) != 'undefined' && fileInput != null) {
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    preview_2(event.target); 
});  
}
});
function preview_2(obj)
{
  if (FileReader)
  {
    var reader = new FileReader();
    reader.readAsDataURL(obj.files[0]);
    reader.onload = function (e) {
    var image=new Image();
    image.src=e.target.result;
    image.onload = function () {
      document.getElementById('js-img').src=image.src;
    };
    }
  }
  else
  {
        // Not supported
  }
}
$(document).ready(function(){   
	$(".open-popup").magnificPopup(
	{
		type:'inline',
		midClick: true,
 removalDelay: 500, //delay removal by X to allow out-animation
 callbacks: {
 	beforeOpen: function() {
 		this.st.mainClass = this.st.el.attr('data-effect');
 	}
 },
});
  $('.js-btn-more').click(function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.s-about-info li.hidden').hide();
     $(this).text("Показать все поля");
    } else{
      $(this).addClass('active');
      $(this).text("Скрыть все поля");
      if ($(window).width() < 768) {
        $('.s-about-info li.hidden').attr('style','display: block !important');
      } else{
        $('.s-about-info li.hidden').attr('style','display: flex !important');
      }
    }
    return false;
  });
   $(".js-select").select2({
  placeholder: "Выберите опцию",
   minimumResultsForSearch: Infinity
});
});
 $(document).on('click', '.mfp-close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

