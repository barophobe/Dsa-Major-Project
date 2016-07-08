//default field in dropdown (city)
$(document).ready(function(){ 
    $(".jqSel li a").click(function(){
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });
    $(".jqSel li a")[3].click();

//carousel

	$('#myCarousel').carousel({
	  interval: 5000
	});

	$('#carousel-text').html($('#slide-content-0').html());

	
	// When the carousel slides, auto update the text
	$('#myCarousel').on('slid.bs.carousel', function (e) {
	  var id = $('.item.active').data('slide-number');
	  $('#carousel-text').html($('#slide-content-'+id).html());
	});






$('#grnBtnr').on('click', function() {

$('li.logged').replaceWith( $('<li class="logged"><div class="btn-group btn-group-xs vrtLog" role="group" aria-label="..."><button type="button" class="btn btn-default" id="bluBtnl">My Account</button><button type="button" class="btn btn-default" id="bluBtnr">Log out</button></div></li>'));
         
});
$('#bluBtnr').click(function() {

$('li.logged').replaceWith( $('<li class="logged"><div class="btn-group btn-group-xs vrtLog" role="group" aria-label="..."><button type="button" class="btn btn-default" id="grnBtnl">Sign up</button><button type="button" class="btn btn-default" id="grnBtnr">Log in</button></div></li>'));
          
});



   


var headerHeight = 200;

$(window).bind('scroll', function () {
if ($(window).scrollTop() > headerHeight) {
    $('#myNav').removeClass('navbar-top');
    $('#myNav').addClass('navbar-fixed-top');
} else {
    $('#myNav').removeClass('navbar-fixed-top');
    $('#myNav').addClass('navbar-top');
}
});  


});