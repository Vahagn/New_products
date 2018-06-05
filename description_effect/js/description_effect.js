//Description effect was created by Smart Coding System(SCS - smartcodingsystem.com), author Vahagn Gabrielyan.
function mark(){		
	var htP,htL,wpWhL,wiw = window.innerWidth,
	arrFS = [[".fdTeWp",".fdTe"],[".seTeWp",".seTe"]];	
	[".fd",".se"].forEach(function(e,i){
		var c = 3*wiw/100,
		wpWhI = $(arrFS[i][0]).width(),			
		whI = wiw < 751 ? 120 : $(arrFS[i][1]).width() + c,
		htI = wiw < 751 ? 80 : $(arrFS[i][1]).height(),
		lt = -whI/2+wpWhI/2,
		po = $(arrFS[i][1]).css("position"),
		ieCh = (navigator.userAgent,navigator.userAgent == navigator.userAgent.match(/.*trident.*/gi));				
		$(e).hover(function(){
			if(po === "fixed"){
				$(arrFS[i][1]).css({"width":0,"height":".1vw","position":"absolute","visibility":"visible","top":ieCh ? 0 : "auto","left":ieCh ? 0 : "auto"});
			}
			htP = $(arrFS[i][1]).height();				
			$(arrFS[i][0]).stop(true).animate({top:wiw < 751 ? "110%" : "-90%"},{complete:function(){
				$(this).stop(true).animate({width:wiw < 351 ? "30vw" : whI,height:wiw < 351 ? "22vw" : htI,left: wiw <351 ? -15+wpWhI/2*100/wiw +"vw" : lt},{
					start:function(){
						$(arrFS[i][1]).stop(true).animate({opacity:1,width:"100%"},function(){
							$(this).stop(true).animate({height:"100%"});
						});
					}
				});
			}});			
		},function(){				
			htL = $(arrFS[i][1]).height(),
			wpWhL = $(arrFS[i][0]).width();					
			if (htL > htP) {
				$(arrFS[i][1]).stop(true).animate({height:".1vw"},function(){
					$(this).stop(true).animate({opacity:0,width:0 },{
						start:function(){
							$(arrFS[i][0]).stop(true).animate({width:"96%",height:"90%",left:0},function(){
								$(this).stop(true).animate({top:0},function(){	
									$(arrFS[i][0]).removeAttr("style");
									$(arrFS[i][1]).removeAttr("style");
								});
							});
						}
					});
				});			
			} else if (wpWhL > wpWhI) {
				$(arrFS[i][1]).stop(true).animate({opacity:0,width:0},{start:function(){
					$(arrFS[i][0]).stop(true).animate({width:"96%",height:"90%",left:0},{
						complete:function(){
							$(this).stop(true).animate({top:0},function(){	
								$(arrFS[i][0]).removeAttr("style");	
								$(arrFS[i][1]).removeAttr("style");
							});
						}
					});
				}});
			} else {
				$(arrFS[i][0]).stop(true).animate({top:0},{ start:function(){
						$(this).stop(true).animate({width:"96%",height:"90%",left:0},{start:function(){
							$(arrFS[i][3]).stop(true).animate({opacity:0,width:0,height:".1vw"});
						}});
					}, complete:function(){
						$(arrFS[i][0]).removeAttr("style");	
						$(arrFS[i][1]).removeAttr("style");
					}
				});
			}  
		});
	});		
}mark();