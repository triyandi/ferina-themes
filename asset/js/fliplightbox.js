/*
 * flipLightBox - Responsive Lightbox jQuery Plugin
 * version: 1.1.0
 * @requires jQuery v1.5 or later
 *
 * License at http://flipgallery.net/fliplightbox.html#download
 * 
 * Example at http://flipgallery.net/fliplightbox.html
 *
 * Copyright 2014 flipGallery.net
 *
 */
!function(t){t.fn.flipLightBox=function(i){function e(){1==R?y=z:(y=z,y+=R),t("."+y)[0]&&(t("."+y+" span").hide(),v=0,t("."+y).each(function(){v+=1,t(this).attr("class",y+"-"+v),null==k?k="."+y+"-"+v:k+=", ."+y+"-"+v}),C[y]=v,R++,e())}function o(t){var i=new Image;return i.src=t,i.width}function l(t){var i=new Image;return i.src=t,i.height}function n(){return-1!=navigator.platform.indexOf("iPhone")||-1!=navigator.platform.indexOf("iPod")}function g(){t("#flb-load").html('<div id="flb-loading-img"></div>').show(),setTimeout(function(){t("#flb-loading-img").html("<br />Loading Image")},500),setTimeout(function(){t("#flb-loading-img").prepend('<img width="5" src="'+O+'" /> ')},1e3),setTimeout(function(){t("#flb-loading-img").prepend('<img width="5" src="'+O+'" /> ')},1500),setTimeout(function(){t("#flb-loading-img").prepend('<img width="5" src="'+O+'" /> ')},2e3),setTimeout(function(){t("#flb-loading-img").fadeOut(500)},2500),r=setTimeout(function(){g()},3e3)}var b,a,h,d,x,f,c,r,s,_,p,u,m,A,w,y,v,k,T=t.extend({flip_mode:1,lightbox_background_opacity:.8,lightbox_border_width:10,lightbox_border_color:"#fff",lightbox_z_index:"1000",lightbox_flip_speed:800,lightbox_text_status:1,lightbox_text_style:"font-size: 14px; line-height: 1.4; color: #000; text-align: center;",lightbox_text_background_style:"background-color: #fff; opacity:0.8;",lightbox_text_area_position:"bottom",lightbox_navigation_status:1,next_image_text:"Next &rsaquo;&rsaquo;",back_image_text:"&lsaquo;&lsaquo; Back",next_and_back_image_text_style:"font-weight: bold; color: #000;",image_number_page:"Image",image_number_of:"of",image_number_text_style:"color: #000;",loading_text_color:"#fff",loading_text_opacity:"0.3"},i),O="data:image/gif;base64,R0lGODlhCgARAIABAP///////yH5BAEAAAEALAAAAAAKABEAAAIWTIBpl80No5y00gdXXBjxD4biSJZGAQA7",I="data:image/gif;base64,R0lGODlhMgAyAIABAP///////yH5BAEAAAEALAAAAAAyADIAAALPjI+py+0Po5y0HoCz3rx7/HziKDbkiWZLyp5Kd7VcvL01ImvJvOu2vPLhVAxgkTgEmVIOIQ0QcjWRT+i0dFUmqUFP1GmAZcE/sndsXfK2N3X6KGa3j5BPOW4JjO54ConfJ/HXMygoJWcXwUR46FZYtffVGIZiOKl3iXaGuDZx+egXyclVIQpJ1iPZSRnIqGrWKveqdTr71gWLOnrLd2erW1X2O4cr7GhqvHUMqszIi2mUDOnc4kudljO3Cp3djdsdfQ3OvDu+nYeerr7Ojl4AADs=",B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=",P="box-sizing: content-box; -moz-box-sizing: content-box; -webkit-box-sizing: content-box;",z="flipLightBox",R=1,C=new Array;e(),t(this).append('<div id="flb-lightbox" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: '+T.lightbox_z_index+"; "+P+'"><div id="flb-lightbox-background" style="width: 100%; height: 100%; background-color: #000; opacity:'+T.lightbox_background_opacity+"; "+P+'"></div><div id="flb-lightbox-content" style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; background: none; text-align: center; '+P+'"></div><div id="flb-load" style="position: fixed; top: 40%; left: 0px; width: 100%; text-align: center; font-size: 14px; color: '+T.loading_text_color+"; opacity: "+T.loading_text_opacity+"; "+P+'"></div><div id="flb-lightbox-text" style="position: fixed; '+T.lightbox_text_area_position+": 0px; width: 90%; padding-left: 5%; padding-right: 6%; margin-right: auto; margin-left: auto;"+T.lightbox_text_background_style+" "+T.lightbox_text_style+" "+P+' padding-top: 15px; padding-bottom: 15px;"></div><div id="flb-load2" style="position: fixed; top: 40%; left: 0px; width: 100%; text-align: center; font-size: 14px; color: '+T.loading_text_color+"; opacity: "+T.loading_text_opacity+';"></div>'),t("#flb-lightbox, #flb-lightbox-content, #flb-lightbox-text").hide(),t(k).click(function(i){i.preventDefault(),_=t(this).attr("href"),p=t(this).attr("class"),u=t("."+p+" span").html(),m=p.split("-"),A=C[m[0]],t("#flb-lightbox-text").html(""),null!=u&&""!=u&&1==T.lightbox_text_status&&(1==T.lightbox_navigation_status&&A>1&&t("#flb-lightbox-text").append("<br /><br />"),t("#flb-lightbox-text").append(u)),t("#flb-lightbox").fadeIn(T.lightbox_flip_speed/2),g(),s=document.createElement("img"),t("<img />").attr("src",_).load(function(){s.onload=function(){t("#flb-load").html(""),clearTimeout(r),t("#flb-lightbox-content").html('<img src="'+_+'" id="flb-lightbox-image" style="border: solid '+T.lightbox_border_width+"px "+T.lightbox_border_color+"; "+P+'"/>'),navigator.userAgent.toLowerCase().indexOf("chrome")>-1||navigator.userAgent.match("CriOS")?(d=flb_image_width=s.width,h=flb_image_height=s.height):(d=flb_image_width=o(_),h=flb_image_height=l(_)),1!=T.lightbox_navigation_status&&1!=T.lightbox_text_status||1!=T.lightbox_navigation_status&&(null==u||""==u)||1>=A&&(null==u||""==u)||1>=A&&1!=T.lightbox_text_status?(t("#flb-lightbox-text").css("visibility","hidden"),w=50):(t("#flb-lightbox-text").css("visibility","visible"),w=70),t("#flb-lightbox-content").hide(),setTimeout(function(){function i(i){27==i.keyCode&&t("#flb-close").trigger("click")}t(window).resize(),t("#flb-lightbox-image").attr("src",_).css({width:b,height:h,opacity:0}),setTimeout(function(){t("#flb-lightbox-text").is(":hidden")&&(navigator.userAgent.match(/iPad/i)||n()?t("#flb-lightbox-text").show():t("#flb-lightbox-text").slideToggle())},T.lightbox_flip_speed),window.setTimeout(function(){t("#flb-lightbox-content").show(),t("#flb-lightbox-image").attr("src",_).animate({width:d,height:h,opacity:1},{duration:T.lightbox_flip_speed/2})},T.lightbox_flip_speed/2),a=h+2*T.lightbox_border_width+25,a=(t(window).height()-a)/2-(t("#flb-lightbox-text").height()/2+20)+x,0>a&&(a=10),t("#flb-lightbox-content").prepend('<img id="flb-close" src="'+B+'" width="25px" height="25px" alt="Close" style="margin-top: '+a+"px; margin-left: "+c+"px;"+P+'"/><br />'),t("#flb-close").click(function(){t(document).unbind("keyup",i),t("#flb-close, #flb-next-pic, #flb-back-pic").unbind("click"),t("#flb-close").attr("src",B),t("#flb-lightbox-image").attr("src",_).animate({width:b,opacity:0},{duration:T.lightbox_flip_speed/2}),setTimeout(function(){t("#flb-lightbox").fadeOut(500),t("#flb-lightbox-text").is(":visible")&&(navigator.userAgent.match(/iPad/i)||n()?t("#flb-lightbox-text").fadeOut():t("#flb-lightbox-text").slideToggle())},T.lightbox_flip_speed/2)}),window.setTimeout(function(){t("#flb-close").attr("src",I),clearTimeout(r)},T.lightbox_flip_speed),1==T.lightbox_navigation_status&&A>1&&(m[1]<A&&(t("#flb-lightbox-text").prepend('<a href="next" id="flb-next-pic" style="'+T.next_and_back_image_text_style+P+'">'+T.next_image_text+"</a>"),t("#flb-next-pic").click(function(e){t(document).unbind("keyup",i),t("#flb-close, #flb-next-pic, #flb-back-pic").unbind("click"),t("#flb-lightbox-text").is(":visible")&&(navigator.userAgent.match(/iPad/i)||n()?t("#flb-lightbox-text").fadeOut():t("#flb-lightbox-text").slideToggle()),e.preventDefault(),setTimeout(function(){t("."+m[0]+"-"+(Math.floor(m[1])+1)).trigger("click")},T.lightbox_flip_speed/2),t("#flb-close").attr("src",B),t("#flb-lightbox-image").attr("src",_).animate({width:b,opacity:0},{duration:T.lightbox_flip_speed/2})})),t("#flb-lightbox-text").prepend('<span style="'+T.image_number_text_style+P+'"> '+T.image_number_page+" "+m[1]+" "+T.image_number_of+" "+A+" </span>"),m[1]>1&&(t("#flb-lightbox-text").prepend('<a href="next" id="flb-back-pic" style="'+T.next_and_back_image_text_style+P+'">'+T.back_image_text+"</a>"),t("#flb-back-pic").click(function(e){t(document).unbind("keyup",i),t("#flb-close, #flb-next-pic, #flb-back-pic").unbind("click"),t("#flb-lightbox-text").is(":visible")&&(navigator.userAgent.match(/iPad/i)||n()?t("#flb-lightbox-text").fadeOut():t("#flb-lightbox-text").slideToggle()),e.preventDefault(),setTimeout(function(){t("."+m[0]+"-"+(Math.floor(m[1])-1)).trigger("click")},T.lightbox_flip_speed/2),t("#flb-close").attr("src",B),t("#flb-lightbox-image").attr("src",_).animate({width:b,opacity:0},{duration:T.lightbox_flip_speed/2})}))),t(document).keyup(i)},100)},s.src=_}).error(function(){t("#flb-load").html(""),clearTimeout(r),setTimeout(function(){clearTimeout(r)},3e3),t("#flb-lightbox").fadeOut(500),t("#flb-lightbox-content, #flb-lightbox-text").html(""),t("#flb-lightbox-text").hide()})}),t(window).resize(function(){f=1,t(window).height()<flb_image_height+t("#flb-lightbox-text").height()+w+2*T.lightbox_border_width&&(h=t(window).height()-2*T.lightbox_border_width-t("#flb-lightbox-text").height()-w,d=flb_image_width/flb_image_height*h,f=0),t(window).width()<flb_image_width+60+2*T.lightbox_border_width&&t(window).width()-flb_image_width<t(window).height()-flb_image_height-(t("#flb-lightbox-text").height()+w)&&(d=t(window).width()-2*T.lightbox_border_width-60,h=flb_image_height/flb_image_width*d,f=0),1==f&&(d=flb_image_width,h=flb_image_height),x="top"==T.lightbox_text_area_position&&70==w?2*(t("#flb-lightbox-text").height()/2+15):0,t("#flb-lightbox-image").css({width:d,height:h}),a=h+2*T.lightbox_border_width+25,a=(t(window).height()-a)/2-(t("#flb-lightbox-text").height()/2+20)+x,0>a&&(a=10),t("#flb-close").css({"margin-top":a,"margin-left":t(window).width()-85+2*T.lightbox_border_width+(t("#flb-lightbox-text").height()/2+20)-x}),c=d+25+2*T.lightbox_border_width,t("#flb-close").attr("style","margin-top: "+a+"px; margin-left: "+c+"px; "+P),b=0==T.flip_mode?d:0})}}(jQuery);
