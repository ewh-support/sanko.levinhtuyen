$(function(){
	
	$('nav#menu').mmenu();
	

/*	var menubar = $('#menubar').position();
	$(window).scroll(function (event) {
		if ($(this).scrollTop() > (menubar.top + 60)) {
			$('#menubar').css( { 'position' : 'fixed', 'top' : '0px','z-index' : '9999999', 'left':'0px','border-bottom':'solid 1px #e77817' } );
			
			$('.home-logo').show();
		}else{
			$('#menubar').css( { 'position' : '', 'top' : '','border-bottom':'none' } );
			
			$('.home-logo').hide();
		
		} 
	}); 
	*/
	$('.icon-hotline-right').click(function(event){
		event.stopPropagation();
		$('.icon-hotline-right').css({ 'width' : '0px' });
		$("ul",this).show().animate({
			width: "250px",
		  }, 500 );
	});
	
	$('.icon-hotline-right .fa-chevron-right').click(function(event){
		event.stopPropagation();
		$('.icon-hotline-right').css({ 'width' : '39px' });
		$('.icon-hotline-right ul').animate({
			width: "0px",
		  }, 500 ).hide()
	});
	
	
	var divi=0;
	$('.table-list').each(function(){
		var me = $(this);
		divi++;
		$('<div id ="div-scroll-'+ divi +'" class="div-scroll" />').insertBefore(me);
		 $("#div-scroll-" + divi).html(me);
	});	
	
	$('.p-relative').hover(function(){
		$('.info-cell',this).stop().delay(300).fadeIn();
	},function(){
		$('.info-cell',this).stop().hide();	
	});
	
	$('.printpage').click(function(){
		printIt($('.princontent').html());
		return false;
	});
	
	$('#showsearchmobile').click(function(){
		$('.box-search-m').stop().slideToggle();	
	})
	
	var win=null;
function printIt(printThis)
{
	win = window.open();
	self.focus();
	win.document.open();
	win.document.write('<'+'html'+'><'+'head'+'><'+'style'+'>');
	win.document.write('body, td { font-family: arial; font-size: 10pt;}');
	win.document.write('<'+'/'+'style'+'><'+'/'+'head'+'><'+'body'+'>');
	win.document.write(printThis);
	win.document.write('<'+'/'+'body'+'><'+'/'+'html'+'>');
	win.document.close();
	win.print();
	win.close();
}
	
	$('#langhover').hover(function(){
		$('.select-lang').stop().slideDown();
	},function(){
		$('.select-lang').hide();	
	});
	$('.nav li').hover(function(){
		$('ul:first',this).stop().show();
	},function(){
		$('ul',this).stop().hide();	
	});
	
	$("#button-btt").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	
	$('.menuleft li').hover(function(){
		$('ul.mnu-hiden',this).stop().slideDown(200);
	},function(){
		$('ul.mnu-hiden',this).stop().slideUp(100);
	});
	
	$(window).scroll(function (event) {
		if ($(this).scrollTop() > 10) {
			$('#button-btt').fadeIn(); 
		} else { 
			$('#button-btt').fadeOut(); 
		}
	});
	$('.tab-detail-pro a').click(function(){
		$('.tab-detail-pro a').removeClass('active');
		$(this).addClass('active');
		$('.content-detail-tab').hide();
		$('#'+$(this).attr('href')).fadeIn();
		return false;
	});
	
	$(window).load(function(){
		if($(window).width() > 967){
			$('.box-about-home').css( { 'height' : $('.slide').height() } );
		}else{
			$('.box-about-home').css( { 'height' : '230px', 'margin-bottom' : '10px'} );	
		}
	});
	$(window).resize(function(){
		if($(window).width() > 967){
			$('.box-about-home').css( { 'height' : $('.slide').height() } );
		}else{
			$('.box-about-home').css( { 'height' : '230px', 'margin-bottom' : '10px'} );	
		}
		if($(window).width() > 767){
			$('.box-search-mobile').hide();
		}
	});
	
	$('.content-text img').each(function () {
        $(this).removeAttr('height');
        $(this).css({'height': ''});
    });
	
	
	
	$('#btn_search_mobile').click(function(){
		$('.box-search-mobile').slideToggle();
	});
	
	
	$('a.disabled').click(function() { return false; });
	
});

