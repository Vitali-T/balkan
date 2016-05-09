$( document ).ready(function() {
	
//highlight current tab	

		var page =  $(location).attr('href');
		$('.nav-menu li').each(function(){
			if(page.indexOf($(this).text().toLowerCase().replace(/\s/g, ''))>=0){				
				$(this).css('background','rgba(103,120,9,1.00)').css('color', '#FFFFFF');
			}
		});
		
//sticky nav-bar effect	

	$(window).scroll(function(){
	if($(this).scrollTop() > 90){
		$('.nav-menu').addClass('nav-menu-scrolled');
	}
	else{
		$('.nav-menu').removeClass('nav-menu-scrolled');
	}
});

//career section -> switch job description

$('.job').click(function(){
		if($(this).hasClass('driver')){
			$('.job-driver').addClass('view').addClass("flipInX");
			if($('.job-account').hasClass('view')){
				$('.job-account').removeClass('view');
				}
			else if($('.job-agent').hasClass('view')){
				$('.job-agent').removeClass('view');
				}
			}
		else if($(this).hasClass("account")){
			$(".job-account").addClass("view").addClass("flipInX");
			if($(".job-driver").hasClass("view")){
				$(".job-driver").removeClass("view");
				}
			else if($('.job-agent').hasClass('view')){
				$('.job-agent').removeClass('view');
				}
		}
		else if($(this).hasClass("agent")){
			$(".job-agent").addClass("view").addClass("flipInX");
			if($(".job-driver").hasClass("view")){
				$(".job-driver").removeClass("view");
				}
			else if($('.job-account').hasClass('view')){
				$('.job-account').removeClass('view');
				}
		}
    });
//----------------------------------------------
//FAQ Accordion
/*
$('.qa').click(function(){
		if($(this).hasClass('question-area')){
			$(this).next().toggleClass('show');
			}
		else {
				$(this).removeClass('show');
		}
	});
	*/
	
//FAQ Accordion smoother transition -------------

$('.qa').click(function(){
	if($(this).hasClass('question-area')){
			$(this).next().stop().slideToggle(300);
			}
	else{
		$(this).stop().slideUp(300);
		}
	});
//-----------------------------------------------
//Toggle Mobile menu

$('#mob-menu').click(function(){
	if($('.nav-menu').css('display')=='none'){
		$('.nav-menu').css('display','block');
	}
	else{
		$('.nav-menu').css('display','none');
	}
});

});
