/*! Layer v3.1.1 */
;!function(e,t){"use strict";var i,n,a=e.layui&&layui.define,o={getPath:function(){var e=document.currentScript?document.currentScript.src:function(){for(var e,t=document.scripts,i=t.length-1,n=i;n>0;n--)if("interactive"===t[n].readyState){e=t[n].src;break}return e||t[i].src}();return e.substring(0,e.lastIndexOf("/")+1)}(),config:{},end:{},minIndex:0,minLeft:[],btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"],getStyle:function(t,i){var n=t.currentStyle?t.currentStyle:e.getComputedStyle(t,null);return n[n.getPropertyValue?"getPropertyValue":"getAttribute"](i)},link:function(t,i,n){}},r={v:"3.1.1",ie:function(){var t=navigator.userAgent.toLowerCase();return!!(e.ActiveXObject||"ActiveXObject"in e)&&((t.match(/msie\s(\d+)/)||[])[1]||"11")}(),index:e.layer&&e.layer.v?1e5:0,path:o.getPath,config:function(e,t){return e=e||{},r.cache=o.config=i.extend({},o.config,e),r.path=o.config.path||r.path,"string"==typeof e.extend&&(e.extend=[e.extend]),o.config.path&&r.ready(),e.extend?(a?layui.addcss("modules/layer/"+e.extend):o.link("theme/"+e.extend),this):this},ready:function(e){},alert:function(e,t,n){var a="function"==typeof t;return a&&(n=t),r.open(i.extend({content:e,yes:n},a?{}:t))},confirm:function(e,t,n,a){var s="function"==typeof t;return s&&(a=n,n=t),r.open(i.extend({content:e,btn:o.btn,yes:n,btn2:a},s?{}:t))},msg:function(e,n,a){var s="function"==typeof n,f=o.config.skin,c=(f?f+" "+f+"-msg":"")||"layui-layer-msg",u=l.anim.length-1;return s&&(a=n),r.open(i.extend({content:e,time:3e3,shade:!1,skin:c,title:!1,closeBtn:!1,btn:!1,resize:!1,end:a},s&&!o.config.skin?{skin:c+" layui-layer-hui",anim:u}:function(){return n=n||{},(n.icon===-1||n.icon===t&&!o.config.skin)&&(n.skin=c+" "+(n.skin||"layui-layer-hui")),n}()))},load:function(e,t){return r.open(i.extend({type:3,icon:e||0,resize:!1,shade:.01},t))},tips:function(e,t,n){return r.open(i.extend({type:4,content:[e,t],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:210},n))}},s=function(e){var t=this;t.index=++r.index,t.config=i.extend({},t.config,o.config,e),document.body?t.creat():setTimeout(function(){t.creat()},30)};s.pt=s.prototype;var l=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];l.anim=["layer-anim-00","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],s.pt.config={type:0,shade:.3,fixed:!0,move:l[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,icon:-1,moveType:1,resize:!0,scrollbar:!0,tips:2},s.pt.vessel=function(e,t){var n=this,a=n.index,r=n.config,s=r.zIndex+a,f="object"==typeof r.title,c=r.maxmin&&(1===r.type||2===r.type),u=r.title?'<div class="layui-layer-title" style="'+(f?r.title[1]:"")+'">'+(f?r.title[0]:r.title)+"</div>":"";return r.zIndex=s,t([r.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+a+'" times="'+a+'" style="'+("z-index:"+(s-1)+"; ")+'"></div>':"",'<div class="'+l[0]+(" layui-layer-"+o.type[r.type])+(0!=r.type&&2!=r.type||r.shade?"":" layui-layer-border")+" "+(r.skin||"")+'" id="'+l[0]+a+'" type="'+o.type[r.type]+'" times="'+a+'" showtime="'+r.time+'" conType="'+(e?"object":"string")+'" style="z-index: '+s+"; width:"+r.area[0]+";height:"+r.area[1]+(r.fixed?"":";position:absolute;")+'">'+(e&&2!=r.type?"":u)+'<div id="'+(r.id||"")+'" class="layui-layer-content'+(0==r.type&&r.icon!==-1?" layui-layer-padding":"")+(3==r.type?" layui-layer-loading"+r.icon:"")+'">'+(0==r.type&&r.icon!==-1?'<i class="layui-layer-ico layui-layer-ico'+r.icon+'"></i>':"")+(1==r.type&&e?"":r.content||"")+'</div><span class="layui-layer-setwin">'+function(){var e=c?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return r.closeBtn&&(e+='<a class="layui-layer-ico '+l[7]+" "+l[7]+(r.title?r.closeBtn:4==r.type?"1":"2")+'" href="javascript:;"></a>'),e}()+"</span>"+(r.btn?function(){var e="";"string"==typeof r.btn&&(r.btn=[r.btn]);for(var t=0,i=r.btn.length;t<i;t++)e+='<a class="'+l[6]+t+'">'+r.btn[t]+"</a>";return'<div class="'+l[6]+" layui-layer-btn-"+(r.btnAlign||"")+'">'+e+"</div>"}():"")+(r.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],u,i('<div class="layui-layer-move"></div>')),n},s.pt.creat=function(){var e=this,t=e.config,a=e.index,s=t.content,f="object"==typeof s,c=i("body");if(!t.id||!i("#"+t.id)[0]){switch("string"==typeof t.area&&(t.area="auto"===t.area?["",""]:[t.area,""]),t.shift&&(t.anim=t.shift),6==r.ie&&(t.fixed=!1),t.type){case 0:t.btn="btn"in t?t.btn:o.btn[0],r.closeAll("dialog");break;case 2:var s=t.content=f?t.content:[t.content||"http://layer.layui.com","auto"];t.content='<iframe scrolling="'+(t.content[1]||"auto")+'" allowtransparency="true" id="'+l[4]+a+'" name="'+l[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+t.content[0]+'"></iframe>';break;case 3:delete t.title,delete t.closeBtn,t.icon===-1&&0===t.icon,r.closeAll("loading");break;case 4:f||(t.content=[t.content,"body"]),t.follow=t.content[1],t.content=t.content[0]+'<i class="layui-layer-TipsG"></i>',delete t.title,t.tips="object"==typeof t.tips?t.tips:[t.tips,!0],t.tipsMore||r.closeAll("tips")}if(e.vessel(f,function(n,r,u){c.append(n[0]),f?function(){2==t.type||4==t.type?function(){i("body").append(n[1])}():function(){s.parents("."+l[0])[0]||(s.data("display",s.css("display")).show().addClass("layui-layer-wrap").wrap(n[1]),i("#"+l[0]+a).find("."+l[5]).before(r))}()}():c.append(n[1]),i(".layui-layer-move")[0]||c.append(o.moveElem=u),e.layero=i("#"+l[0]+a),t.scrollbar||l.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),i("#layui-layer-shade"+e.index).css({"background-color":t.shade[1]||"#000",opacity:t.shade[0]||t.shade}),2==t.type&&6==r.ie&&e.layero.find("iframe").attr("src",s[0]),4==t.type?e.tips():e.offset(),t.fixed&&n.on("resize",function(){e.offset(),(/^\d+%$/.test(t.area[0])||/^\d+%$/.test(t.area[1]))&&e.auto(a),4==t.type&&e.tips()}),t.time<=0||setTimeout(function(){r.close(e.index)},t.time),e.move().callback(),l.anim[t.anim]){var u="layer-anim "+l.anim[t.anim];e.layero.addClass(u).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){i(this).removeClass(u)})}t.isOutAnim&&e.layero.data("isOutAnim",!0)}},s.pt.auto=function(e){var t=this,a=t.config,o=i("#"+l[0]+e);""===a.area[0]&&a.maxWidth>0&&(r.ie&&r.ie<8&&a.btn&&o.width(o.innerWidth()),o.outerWidth()>a.maxWidth&&o.width(a.maxWidth));var s=[o.innerWidth(),o.innerHeight()],f=o.find(l[1]).outerHeight()||0,c=o.find("."+l[6]).outerHeight()||0,u=function(e){e=o.find(e),e.height(s[1]-f-c-2*(0|parseFloat(e.css("padding-top"))))};switch(a.type){case 2:u("iframe");break;default:""===a.area[1]?a.maxHeight>0&&o.outerHeight()>a.maxHeight?(s[1]=a.maxHeight,u("."+l[5])):a.fixed&&s[1]>=n.height()&&(s[1]=n.height(),u("."+l[5])):u("."+l[5])}return t},s.pt.offset=function(){var e=this,t=e.config,i=e.layero,a=[i.outerWidth(),i.outerHeight()],o="object"==typeof t.offset;e.offsetTop=(n.height()-a[1])/2,e.offsetLeft=(n.width()-a[0])/2,o?(e.offsetTop=t.offset[0],e.offsetLeft=t.offset[1]||e.offsetLeft):"auto"!==t.offset&&("t"===t.offset?e.offsetTop=0:"r"===t.offset?e.offsetLeft=n.width()-a[0]:"b"===t.offset?e.offsetTop=n.height()-a[1]:"l"===t.offset?e.offsetLeft=0:"lt"===t.offset?(e.offsetTop=0,e.offsetLeft=0):"lb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=0):"rt"===t.offset?(e.offsetTop=0,e.offsetLeft=n.width()-a[0]):"rb"===t.offset?(e.offsetTop=n.height()-a[1],e.offsetLeft=n.width()-a[0]):e.offsetTop=t.offset),t.fixed||(e.offsetTop=/%$/.test(e.offsetTop)?n.height()*parseFloat(e.offsetTop)/100:parseFloat(e.offsetTop),e.offsetLeft=/%$/.test(e.offsetLeft)?n.width()*parseFloat(e.offsetLeft)/100:parseFloat(e.offsetLeft),e.offsetTop+=n.scrollTop(),e.offsetLeft+=n.scrollLeft()),i.attr("minLeft")&&(e.offsetTop=n.height()-(i.find(l[1]).outerHeight()||0),e.offsetLeft=i.css("left")),i.css({top:e.offsetTop,left:e.offsetLeft})},s.pt.tips=function(){var e=this,t=e.config,a=e.layero,o=[a.outerWidth(),a.outerHeight()],r=i(t.follow);r[0]||(r=i("body"));var s={width:r.outerWidth(),height:r.outerHeight(),top:r.offset().top,left:r.offset().left},f=a.find(".layui-layer-TipsG"),c=t.tips[0];t.tips[1]||f.remove(),s.autoLeft=function(){s.left+o[0]-n.width()>0?(s.tipLeft=s.left+s.width-o[0],f.css({right:12,left:"auto"})):s.tipLeft=s.left},s.where=[function(){s.autoLeft(),s.tipTop=s.top-o[1]-10,f.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left+s.width+10,s.tipTop=s.top,f.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",t.tips[1])},function(){s.autoLeft(),s.tipTop=s.top+s.height+10,f.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",t.tips[1])},function(){s.tipLeft=s.left-o[0]-10,s.tipTop=s.top,f.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",t.tips[1])}],s.where[c-1](),1===c?s.top-(n.scrollTop()+o[1]+16)<0&&s.where[2]():2===c?n.width()-(s.left+s.width+o[0]+16)>0||s.where[3]():3===c?s.top-n.scrollTop()+s.height+o[1]+16-n.height()>0&&s.where[0]():4===c&&o[0]+16-s.left>0&&s.where[1](),a.find("."+l[5]).css({"background-color":t.tips[1],"padding-right":t.closeBtn?"30px":""}),a.css({left:s.tipLeft-(t.fixed?n.scrollLeft():0),top:s.tipTop-(t.fixed?n.scrollTop():0)})},s.pt.move=function(){var e=this,t=e.config,a=i(document),s=e.layero,l=s.find(t.move),f=s.find(".layui-layer-resize"),c={};return t.move&&l.css("cursor","move"),l.on("mousedown",function(e){e.preventDefault(),t.move&&(c.moveStart=!0,c.offset=[e.clientX-parseFloat(s.css("left")),e.clientY-parseFloat(s.css("top"))],o.moveElem.css("cursor","move").show())}),f.on("mousedown",function(e){e.preventDefault(),c.resizeStart=!0,c.offset=[e.clientX,e.clientY],c.area=[s.outerWidth(),s.outerHeight()],o.moveElem.css("cursor","se-resize").show()}),a.on("mousemove",function(i){if(c.moveStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1],l="fixed"===s.css("position");if(i.preventDefault(),c.stX=l?0:n.scrollLeft(),c.stY=l?0:n.scrollTop(),!t.moveOut){var f=n.width()-s.outerWidth()+c.stX,u=n.height()-s.outerHeight()+c.stY;a<c.stX&&(a=c.stX),a>f&&(a=f),o<c.stY&&(o=c.stY),o>u&&(o=u)}s.css({left:a,top:o})}if(t.resize&&c.resizeStart){var a=i.clientX-c.offset[0],o=i.clientY-c.offset[1];i.preventDefault(),r.style(e.index,{width:c.area[0]+a,height:c.area[1]+o}),c.isResize=!0,t.resizing&&t.resizing(s)}}).on("mouseup",function(e){c.moveStart&&(delete c.moveStart,o.moveElem.hide(),t.moveEnd&&t.moveEnd(s)),c.resizeStart&&(delete c.resizeStart,o.moveElem.hide())}),e},s.pt.callback=function(){function e(){var e=a.cancel&&a.cancel(t.index,n);e===!1||r.close(t.index)}var t=this,n=t.layero,a=t.config;t.openLayer(),a.success&&(2==a.type?n.find("iframe").on("load",function(){a.success(n,t.index)}):a.success(n,t.index)),6==r.ie&&t.IE6(n),n.find("."+l[6]).children("a").on("click",function(){var e=i(this).index();if(0===e)a.yes?a.yes(t.index,n):a.btn1?a.btn1(t.index,n):r.close(t.index);else{var o=a["btn"+(e+1)]&&a["btn"+(e+1)](t.index,n);o===!1||r.close(t.index)}}),n.find("."+l[7]).on("click",e),a.shadeClose&&i("#layui-layer-shade"+t.index).on("click",function(){r.close(t.index)}),n.find(".layui-layer-min").on("click",function(){var e=a.min&&a.min(n);e===!1||r.min(t.index,a)}),n.find(".layui-layer-max").on("click",function(){i(this).hasClass("layui-layer-maxmin")?(r.restore(t.index),a.restore&&a.restore(n)):(r.full(t.index,a),setTimeout(function(){a.full&&a.full(n)},100))}),a.end&&(o.end[t.index]=a.end)},o.reselect=function(){i.each(i("select"),function(e,t){var n=i(this);n.parents("."+l[0])[0]||1==n.attr("layer")&&i("."+l[0]).length<1&&n.removeAttr("layer").show(),n=null})},s.pt.IE6=function(e){i("select").each(function(e,t){var n=i(this);n.parents("."+l[0])[0]||"none"===n.css("display")||n.attr({layer:"1"}).hide(),n=null})},s.pt.openLayer=function(){var e=this;r.zIndex=e.config.zIndex,r.setTop=function(e){var t=function(){r.zIndex++,e.css("z-index",r.zIndex+1)};return r.zIndex=parseInt(e[0].style.zIndex),e.on("mousedown",t),r.zIndex}},o.record=function(e){var t=[e.width(),e.height(),e.position().top,e.position().left+parseFloat(e.css("margin-left"))];e.find(".layui-layer-max").addClass("layui-layer-maxmin"),e.attr({area:t})},o.rescollbar=function(e){l.html.attr("layer-full")==e&&(l.html[0].style.removeProperty?l.html[0].style.removeProperty("overflow"):l.html[0].style.removeAttribute("overflow"),l.html.removeAttr("layer-full"))},e.layer=r,r.getChildFrame=function(e,t){return t=t||i("."+l[4]).attr("times"),i("#"+l[0]+t).find("iframe").contents().find(e)},r.getFrameIndex=function(e){return i("#"+e).parents("."+l[4]).attr("times")},r.iframeAuto=function(e){if(e){var t=r.getChildFrame("html",e).outerHeight(),n=i("#"+l[0]+e),a=n.find(l[1]).outerHeight()||0,o=n.find("."+l[6]).outerHeight()||0;n.css({height:t+a+o}),n.find("iframe").css({height:t})}},r.iframeSrc=function(e,t){i("#"+l[0]+e).find("iframe").attr("src",t)},r.style=function(e,t,n){var a=i("#"+l[0]+e),r=a.find(".layui-layer-content"),s=a.attr("type"),f=a.find(l[1]).outerHeight()||0,c=a.find("."+l[6]).outerHeight()||0;a.attr("minLeft");s!==o.type[3]&&s!==o.type[4]&&(n||(parseFloat(t.width)<=260&&(t.width=260),parseFloat(t.height)-f-c<=64&&(t.height=64+f+c)),a.css(t),c=a.find("."+l[6]).outerHeight(),s===o.type[2]?a.find("iframe").css({height:parseFloat(t.height)-f-c}):r.css({height:parseFloat(t.height)-f-c-parseFloat(r.css("padding-top"))-parseFloat(r.css("padding-bottom"))}))},r.min=function(e,t){var a=i("#"+l[0]+e),s=a.find(l[1]).outerHeight()||0,f=a.attr("minLeft")||181*o.minIndex+"px",c=a.css("position");o.record(a),o.minLeft[0]&&(f=o.minLeft[0],o.minLeft.shift()),a.attr("position",c),r.style(e,{width:180,height:s,left:f,top:n.height()-s,position:"fixed",overflow:"hidden"},!0),a.find(".layui-layer-min").hide(),"page"===a.attr("type")&&a.find(l[4]).hide(),o.rescollbar(e),a.attr("minLeft")||o.minIndex++,a.attr("minLeft",f)},r.restore=function(e){var t=i("#"+l[0]+e),n=t.attr("area").split(",");t.attr("type");r.style(e,{width:parseFloat(n[0]),height:parseFloat(n[1]),top:parseFloat(n[2]),left:parseFloat(n[3]),position:t.attr("position"),overflow:"visible"},!0),t.find(".layui-layer-max").removeClass("layui-layer-maxmin"),t.find(".layui-layer-min").show(),"page"===t.attr("type")&&t.find(l[4]).show(),o.rescollbar(e)},r.full=function(e){var t,a=i("#"+l[0]+e);o.record(a),l.html.attr("layer-full")||l.html.css("overflow","hidden").attr("layer-full",e),clearTimeout(t),t=setTimeout(function(){var t="fixed"===a.css("position");r.style(e,{top:t?0:n.scrollTop(),left:t?0:n.scrollLeft(),width:n.width(),height:n.height()},!0),a.find(".layui-layer-min").hide()},100)},r.title=function(e,t){var n=i("#"+l[0]+(t||r.index)).find(l[1]);n.html(e)},r.close=function(e){var t=i("#"+l[0]+e),n=t.attr("type"),a="layer-anim-close";if(t[0]){var s="layui-layer-wrap",f=function(){if(n===o.type[1]&&"object"===t.attr("conType")){t.children(":not(."+l[5]+")").remove();for(var a=t.find("."+s),r=0;r<2;r++)a.unwrap();a.css("display",a.data("display")).removeClass(s)}else{if(n===o.type[2])try{var f=i("#"+l[4]+e)[0];f.contentWindow.document.write(""),f.contentWindow.close(),t.find("."+l[5])[0].removeChild(f)}catch(c){}t[0].innerHTML="",t.remove()}"function"==typeof o.end[e]&&o.end[e](),delete o.end[e]};t.data("isOutAnim")&&t.addClass("layer-anim "+a),i("#layui-layer-moves, #layui-layer-shade"+e).remove(),6==r.ie&&o.reselect(),o.rescollbar(e),t.attr("minLeft")&&(o.minIndex--,o.minLeft.push(t.attr("minLeft"))),r.ie&&r.ie<10||!t.data("isOutAnim")?f():setTimeout(function(){f()},200)}},r.closeAll=function(e){i.each(i("."+l[0]),function(){var t=i(this),n=e?t.attr("type")===e:1;n&&r.close(t.attr("times")),n=null})};var f=r.cache||{},c=function(e){return f.skin?" "+f.skin+" "+f.skin+"-"+e:""};r.prompt=function(e,t){var a="";if(e=e||{},"function"==typeof e&&(t=e),e.area){var o=e.area;a='style="width: '+o[0]+"; height: "+o[1]+';"',delete e.area}var s,l=2==e.formType?'<textarea class="layui-layer-input"'+a+">"+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}(),f=e.success;return delete e.success,r.open(i.extend({type:1,btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:l,skin:"layui-layer-prompt"+c("prompt"),maxWidth:n.width(),success:function(e){s=e.find(".layui-layer-input"),s.focus(),"function"==typeof f&&f(e)},resize:!1,yes:function(i){var n=s.val();""===n?s.focus():n.length>(e.maxlength||500)?r.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",s,{tips:1}):t&&t(n,i,s)}},e))},r.tab=function(e){e=e||{};var t=e.tab||{},n="layui-this",a=e.success;return delete e.success,r.open(i.extend({type:1,skin:"layui-layer-tab"+c("tab"),resize:!1,title:function(){var e=t.length,i=1,a="";if(e>0)for(a='<span class="'+n+'">'+t[0].title+"</span>";i<e;i++)a+="<span>"+t[i].title+"</span>";return a}(),content:'<ul class="layui-layer-tabmain">'+function(){var e=t.length,i=1,a="";if(e>0)for(a='<li class="layui-layer-tabli '+n+'">'+(t[0].content||"no content")+"</li>";i<e;i++)a+='<li class="layui-layer-tabli">'+(t[i].content||"no  content")+"</li>";return a}()+"</ul>",success:function(t){var o=t.find(".layui-layer-title").children(),r=t.find(".layui-layer-tabmain").children();o.on("mousedown",function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0;var a=i(this),o=a.index();a.addClass(n).siblings().removeClass(n),r.eq(o).show().siblings().hide(),"function"==typeof e.change&&e.change(o)}),"function"==typeof a&&a(t)}},e))},r.photos=function(t,n,a){function o(e,t,i){var n=new Image;return n.src=e,n.complete?t(n):(n.onload=function(){n.onload=null,t(n)},void(n.onerror=function(e){n.onerror=null,i(e)}))}var s={};if(t=t||{},t.photos){var l=t.photos.constructor===Object,f=l?t.photos:{},u=f.data||[],d=f.start||0;s.imgIndex=(0|d)+1,t.img=t.img||"img";var y=t.success;if(delete t.success,l){if(0===u.length)return r.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}else{var p=i(t.photos),h=function(){u=[],p.find(t.img).each(function(e){var t=i(this);t.attr("layer-index",e),u.push({alt:t.attr("alt"),pid:t.attr("layer-pid"),src:t.attr("layer-src")||t.attr("src"),thumb:t.attr("src")})})};if(h(),0===u.length)return;if(n||p.on("click",t.img,function(){var e=i(this),n=e.attr("layer-index");r.photos(i.extend(t,{photos:{start:n,data:u,tab:t.tab},full:t.full}),!0),h()}),!n)return}s.imgprev=function(e){s.imgIndex--,s.imgIndex<1&&(s.imgIndex=u.length),s.tabimg(e)},s.imgnext=function(e,t){s.imgIndex++,s.imgIndex>u.length&&(s.imgIndex=1,t)||s.tabimg(e)},s.keyup=function(e){if(!s.end){var t=e.keyCode;e.preventDefault(),37===t?s.imgprev(!0):39===t?s.imgnext(!0):27===t&&r.close(s.index)}},s.tabimg=function(e){if(!(u.length<=1))return f.start=s.imgIndex-1,r.close(s.index),r.photos(t,!0,e)},s.event=function(){s.bigimg.hover(function(){s.imgsee.show()},function(){s.imgsee.hide()}),s.bigimg.find(".layui-layer-imgprev").on("click",function(e){e.preventDefault(),s.imgprev()}),s.bigimg.find(".layui-layer-imgnext").on("click",function(e){e.preventDefault(),s.imgnext()}),i(document).on("keyup",s.keyup)},s.loadi=r.load(1,{shade:!("shade"in t)&&.9,scrollbar:!1}),o(u[d].src,function(n){r.close(s.loadi),s.index=r.open(i.extend({type:1,id:"layui-layer-photos",area:function(){var a=[n.width,n.height],o=[i(e).width()-100,i(e).height()-100];if(!t.full&&(a[0]>o[0]||a[1]>o[1])){var r=[a[0]/o[0],a[1]/o[1]];r[0]>r[1]?(a[0]=a[0]/r[0],a[1]=a[1]/r[0]):r[0]<r[1]&&(a[0]=a[0]/r[1],a[1]=a[1]/r[1])}return[a[0]+"px",a[1]+"px"]}(),title:!1,shade:.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,isOutAnim:!1,skin:"layui-layer-photos"+c("photos"),content:'<div class="layui-layer-phimg"><img src="'+u[d].src+'" alt="'+(u[d].alt||"")+'" layer-pid="'+u[d].pid+'"><div class="layui-layer-imgsee">'+(u.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(a?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(u[d].alt||"")+"</a><em>"+s.imgIndex+"/"+u.length+"</em></span></div></div></div>",success:function(e,i){s.bigimg=e.find(".layui-layer-phimg"),s.imgsee=e.find(".layui-layer-imguide,.layui-layer-imgbar"),s.event(e),t.tab&&t.tab(u[d],e),"function"==typeof y&&y(e)},end:function(){s.end=!0,i(document).off("keyup",s.keyup)}},t))},function(){r.close(s.loadi),r.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:3e4,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){u.length>1&&s.imgnext(!0,!0)}})})}},o.run=function(t){i=t,n=i(e),l.html=i("html"),r.open=function(e){var t=new s(e);return t.index}},e.layui&&layui.define?(r.ready(),layui.define("jquery",function(t){r.path=layui.cache.dir,o.run(layui.$),e.layer=r,t("layer",r)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return o.run(e.jQuery),r}):function(){o.run(e.jQuery),r.ready()}()}(window);


/*!
 * clipboard.js v1.6.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.Clipboard=e()}}(function(){var e,t,n;return function e(t,n,o){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n?n:e)},s,s.exports,e,t,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(e,t,n){function o(e,t){for(;e&&e.nodeType!==i;){if(e.matches(t))return e;e=e.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}t.exports=o},{}],2:[function(e,t,n){function o(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,o){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&o.call(e,n)}}var r=e("./closest");t.exports=o},{"./closest":1}],3:[function(e,t,n){n.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},n.nodeList=function(e){var t=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===t||"[object HTMLCollection]"===t)&&"length"in e&&(0===e.length||n.node(e[0]))},n.string=function(e){return"string"==typeof e||e instanceof String},n.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}},{}],4:[function(e,t,n){function o(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!c.string(t))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(e))return i(e,t,n);if(c.nodeList(e))return r(e,t,n);if(c.string(e))return a(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function r(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function a(e,t,n){return l(document.body,e,t,n)}var c=e("./is"),l=e("delegate");t.exports=o},{"./is":3,delegate:2}],5:[function(e,t,n){function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}t.exports=o},{}],6:[function(e,t,n){function o(){}o.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){i.off(e,o),t.apply(n,arguments)}var i=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,a=o.length;r<a;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},t.exports=o},{}],7:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","select"],r);else if("undefined"!=typeof o)r(n,t("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=n(t),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){o(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function e(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function e(){var t=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function e(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function e(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function e(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function e(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function e(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function e(){this.removeFake()}},{key:"action",set:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function e(){return this._action}},{key:"target",set:function e(t){if(void 0!==t){if(!t||"object"!==("undefined"==typeof t?"undefined":r(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function e(){return this._target}}]),e}();e.exports=c})},{select:5}],8:[function(t,n,o){!function(i,r){if("function"==typeof e&&e.amd)e(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if("undefined"!=typeof o)r(n,t("./clipboard-action"),t("tiny-emitter"),t("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(e,t,n,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var u=i(t),s=i(n),f=i(o),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return c(t,e),d(t,[{key:"resolveOptions",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText}},{key:"listenClick",value:function e(t){var n=this;this.listener=(0,f.default)(t,"click",function(e){return n.onClick(e)})}},{key:"onClick",value:function e(t){var n=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new u.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})}},{key:"defaultAction",value:function e(t){return l("action",t)}},{key:"defaultTarget",value:function e(t){var n=l("target",t);if(n)return document.querySelector(n)}},{key:"defaultText",value:function e(t){return l("text",t)}},{key:"destroy",value:function e(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof t?[t]:t,o=!!document.queryCommandSupported;return n.forEach(function(e){o=o&&!!document.queryCommandSupported(e)}),o}}]),t}(s.default);e.exports=h})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

/*Powered by mobantu.com*/

jQuery(function($){
    popupTemplate = {
        toast: function(t) {
            var e = t.type,
            n = t.icon,
            a = t.text,
            s = t.display;
            return '\n            <section class="wppay-toast ' + e + " " + s + '" id="toast">\n                ' + (n && "text" !== e ? "\n                    " + ("icon-loading" === n ? '\n                        <section class="icon">\n                            <svg class="circular" viewBox="25 25 50 50">\n                                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="3" stroke-miterlimit="10"/>\n                            </svg>\n                        </section>\n                    ': '\n                    <section class="icon">\n                        <i class="wppay ' + n + '"></i>\n                    </section>\n                    ') + "\n                ": "") + "\n                " + (a && "icon" !== e ? '\n                    <section class="text">\n                        <p>' + a + "</p>\n                    </section>\n                ": "") + "\n            </section>\n        "
        },
        customModal: function(t) {
            return '\n            <section class="wppay-custom-modal-box" data-lib="popup" data-popup-action="layerClose" data-layer="customModal" id="customModal">\n                <section class="wppay-modal layui-layer-iframe">\n                    <section data-popup-action="customModalClose"><div class="layui-layer-title">支付</div><span class="layui-layer-setwin"><a class="layui-layer-ico layui-layer-close layui-layer-close1" href="javascript:;"></a></span></section>\n                    ' + t + "\n                </section>\n            </section>\n        "
        }
    },
    customModalTemplate = {
        erphpWppayQrcode: function(t) {
        	var payment = _ERPHPDOWN.payment,
        		paymentImg = '扫一扫',
        		bgstyle = '';
        	if(payment == 6){
        		bgstyle = 'style="background-color: #21ab36 !important;"';
                var aliqr = '',wxqr = '',wxtit='',alitit='',warning='',warning2='';
                if(t.code){
                	if(t.gift){
                		warning = '<div class="warning">随机减免，请务必支付金额￥'+t.price+'</div>';
                	}
                    if(!t.code2){
                        aliqr = '<section class="item">\n        <div class="wppay-title">扫一扫支付 <span class="price">'+t.price+'</span> 元</div>'+warning+'                <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p><p class="wap"><a href="'+t.aliurl+'" target="_blank">启动支付宝APP支付</a></p>\n                    </section>';
                        alitit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="alipay" class="active wppay-alipay" >支付宝</a>\n';
                        bgstyle = 'style="background-color: #00a3ee !important;"';
                    }else{
                        aliqr = '<section class="item" style="display:none">\n       <div class="wppay-title">扫一扫支付 <span class="price">'+t.price+'</span> 元</div>'+warning+'                 <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p><p class="wap"><a href="'+t.aliurl+'" target="_blank">启动支付宝APP支付</a></p>\n                    </section>';
                        alitit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="alipay" class="wppay-alipay" >支付宝</a>\n';
                    }
                }

                if(t.code2){
                	if(t.gift2){
                		warning2 = '<div class="warning">随机减免，请务必支付金额￥'+t.price2+'</div>';
                	}
                    wxqr = '<section class="item">\n           <div class="wppay-title">扫一扫支付 <span class="price">'+t.price2+'</span> 元</div>'+warning2+'             <section class="qr-code">\n                            <img src="'+t.code2+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p><p class="wap">请截屏，打开微信扫一扫，从相册里选择截图</p>\n                    </section>';
                    wxtit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="weixin" class="active wppay-weixin">微信</a>\n';
                }

                return '\n            <section class="erphp-wppay-qrcode mobantu-wppay">\n                 <section class="tab">\n                        '+wxtit+alitit+'                        </section>\n                <section class="tab-list" '+bgstyle+'>\n                    '+wxqr+'\n              '+aliqr+'\n                                        </section>\n            </section>\n        '
        	}else if(payment == 4){
        		bgstyle = 'style="background-color: #00a3ee !important;"';
        		return '\n            <section class="erphp-wppay-qrcode mobantu-wppay">\n       <div class="wppay-title2">扫一扫支付 <span class="price">'+t.price+'</span> 元</div>          <section class="tab">\n                    <a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="alipay" class="active wppay-alipay" >支付宝</a>\n    <a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="weixin" class="wppay-weixin">微信</a>\n                         </section>\n                <section class="tab-list" '+bgstyle+'>\n                    <section class="item">\n                        <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p><p class="wap"><a href="'+t.aliurl+'" target="_blank">启动支付宝APP支付</a></p>\n                    </section>\n              <section class="item" style="display:none">\n                        <section class="qr-code">\n                            <img src="'+t.code2+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p><p class="wap">请截屏，打开微信扫一扫，从相册里选择截图</p>\n                    </section>\n                                        </section>\n            </section>\n        '
        	}else if(payment == 5){
        		/* Powered by mobantu.com */
        		bgstyle = 'style="background-color: #21ab36 !important;"';
        		var aliqr = '',wxqr = '',wxtit='',alitit='',aliwap = '',wxwap = '<p class="wap">请截屏，打开微信扫一扫，从相册里选择截图</p>';
        		if(t.code){
        			if(t.aliurl){
        				aliwap = '<p class="wap"><a href="'+t.aliurl+'" target="_blank">启动支付宝APP支付</a></p>';
        			}

        			if(!t.code2){
        				aliqr = '<section class="item">\n                        <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p>'+aliwap+'\n                    </section>';
        				alitit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="alipay" class="active wppay-alipay" >支付宝</a>\n';
        				bgstyle = 'style="background-color: #00a3ee !important;"';
        			}else{
	        			aliqr = '<section class="item" style="display:none">\n                        <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p>'+aliwap+'\n                    </section>';
	        			alitit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="alipay" class="wppay-alipay" >支付宝</a>\n';
	        		}
        		}

        		if(t.code2){

        			if(t.wxurl){
        				wxwap = '<p class="wap"><a href="'+t.wxurl+'" target="_blank">启动微信APP支付</a></p>';
        			}

        			wxqr = '<section class="item">\n                        <section class="qr-code">\n                            <img src="'+t.code2+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        <p class="desc wtime"></p>'+wxwap+'\n                    </section>';
        			wxtit = '<a href="javascript:;" data-custom-action="switchWppayPayment" data-payment="weixin" class="active wppay-weixin">微信</a>\n';
        		}

        		return '\n            <section class="erphp-wppay-qrcode mobantu-wppay">\n       <div class="wppay-title2">扫一扫支付 <span class="price">'+t.price+'</span> 元</div>          <section class="tab">\n                        '+wxtit+alitit+'                        </section>\n                <section class="tab-list" '+bgstyle+'>\n                    '+wxqr+'\n              '+aliqr+'\n                                        </section>\n            </section>\n        '
        	}else{
        		var wap = '';
	        	if(payment == 1){
	        		paymentImg = '<div class="payment"><img src="'+_ERPHPDOWN.uri+'/static/images/payment-alipay.png"></div>';
	        		bgstyle = 'style="background-color: #00a3ee !important;"';
	        		wap = '<p class="wap"><a href="'+t.aliurl+'" target="_blank">启动支付宝APP支付</a></p>';
	        	}else if(payment == 3){
	        		paymentImg = '<div class="payment"><img src="'+_ERPHPDOWN.uri+'/static/images/payment-weixin.png"></div>';
	        		bgstyle = 'style="background-color: #21ab36 !important;"';
	        		wap = '<p class="desc">手机端请截屏，打开微信扫一扫，从相册里选择截图</p>';
	        	}

	            return '\n            <section class="erphp-wppay-qrcode mobantu-wppay">\n                <section class="tab">\n                    '+paymentImg+'\n                           </section>\n                <section class="tab-list" '+bgstyle+'>\n                    <section class="item">\n         <div class="wppay-title">扫一扫支付 <span class="price">'+t.price+'</span> 元</div>               <section class="qr-code">\n                            <img src="'+t.code+'" class="img" alt="">\n                        </section>\n                        <p class="account">支付完成后请等待5秒左右，期间请勿关闭此页面</p>\n                        '+wap+'\n                    </section>\n                                                      </section>\n            </section>\n        '
	        }
        }
    },
    customModalFunc = {
        addEvent: function() {
            var t = this;
            $(popup.element.customModal).on("click", "*[data-custom-action]",
            function(e) {
                var n = $(this).data("custom-action");
                t[n]($(this), e)
            })
        },
        removeEvent: function() {
            $(popup.element.customModal).off("click", "*[data-custom-action]")
        },
        switchWppayPayment: function(t) {
        	var ptype = t.data("payment");
			var e = t.index();

			if(ptype == "weixin"){
				$(".tab-list").css("background-color", "#21ab36");
			}else{
				$(".tab-list").css("background-color", "#00a3ee");
			}

			t.addClass("active").siblings().removeClass("active"),
			$(".tab-list .item").eq(e).show().siblings().hide()
		},
    };
    window.popup = {
        element: {
            body: "body",
            head: "head",
            toast: "#toast",
            modal: "#modal",
            customModal: "#customModal",
            scrollBodyStyle: "#scrollBodyStyle"
        },
        addEvent: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = this,
            a = null !== e ? '*[data-popup-action="' + e + '"]': "*[data-popup-action]";
            $(this.element[t]).on("click", a,
            function(t) {
                var e = $(this).data("popup-action");
                n[e]($(this), t)
            })
        },
        removeEvent: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "body",
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = null !== e ? '*[data-popup-action="' + e + '"]': "*[data-popup-action]";
            $(this.element[t]).off("click", n)
        },
        showToast: function() {
            var t = this,
            e = arguments,
            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            a = n.type,
            s = void 0 === a ? "icon": a,
            o = n.icon,
            i = void 0 === o ? "icon-loading": o,
            c = n.text,
            l = void 0 === c ? "加载中...": c,
            d = n.display,
            p = void 0 === d ? "fs": d,
            m = n.el,
            u = void 0 === m ? "": m,
            r = n.time,
            h = void 0 === r ? 1500 : r,
            v = n.callback;
            $(this.element.body).find(this.element.toast).length <= 0 ? ("el" === p ? (u = "string" == typeof u ? $(u) : u, u.append(popupTemplate.toast({
                type: s,
                icon: i,
                text: l,
                display: p
            }))) : $(this.element.body).append(popupTemplate.toast({
                type: s,
                icon: i,
                text: l,
                display: p
            })), $(this.element.toast).animate({
                opacity: 1
            },
            300), this.toastTimer = setTimeout(function() {
                $(t.element.toast).animate({
                    opacity: 0
                },
                300,
                function() {
                    $(t.element.toast).remove(),
                    "function" == typeof v && v()
                })
            },
            h)) : this.hideToast(function() {
                t.showToast.call(t, e[0])
            })
        },
        hideToast: function(t) {
            var e = this;
            $(this.element.toast).animate({
                opacity: 0
            },
            300,
            function() {
                $(e.element.toast).remove(),
                clearTimeout(e.toastTimer),
                e.toastTimer = null,
                "function" == typeof t ? t() : void 0
            })
        },
        showCustomModal: function(t) {
            var e = t.template,
            n = void 0 === e ? "": e,
            a = t.data,
            s = void 0 === a ? {}: a,
            o = t.callback,
            i = t.layerClose,
            c = void 0 === i ? !1 : i,
            l = this;
            $(this.element.body).find(this.element.customModal).length <= 0 && ($(this.element.body).append(popupTemplate.customModal(customModalTemplate[n](s))), this.addEvent("body", "customModalClose"), customModalFunc.addEvent(), c && $(this.element.customModal).on("click",
            function(t) {
                l.layerClose($(this), t)
            }), $(this.element.customModal).find("*[data-custom-submit]").length > 0 && $(this.element.customModal).on("click", "*[data-custom-submit]",
            function() {
                var t = {};
                $(l.element.customModal).find("*[name]").each(function() {
                    var e = $(this).attr("name");
                    t[e] = $(this).val() || ""
                }),
                "function" == typeof o ? o($(this), t) : function() {}
            }))
        },
        hideModal: function(t) {
            $("#" + t).remove(),
            this.commonHide()
        },
        customModalClose: function(t) {
            t.parents("" + this.element.customModal).remove(),
            this.commonHide()
        },
        layerClose: function(t, e) {
            var n = e.target,
            a = t.data("layer");
            n.id && n.id === a && ($("#" + a).off("click").remove(), this.commonHide())
        },
        commonHide: function() {
            var t = $(this.element.body).find("*[data-lib]").length;
            0 >= t && (this.removeEvent()),
            $(this.element.body).off("click", '*[data-popup-action="customModalClose"]'),
            customModalFunc.removeEvent(),
            $(this.element.customModal).off("click", "*[data-custom-submit]")
        }
    };

    var erphpWppayTimer, erphpWppayOrder;
    $("body").on("click", ".erphp-wppay-loader", function(){
    	clearInterval(erphpWppayOrder);
        clearInterval(erphpWppayTimer);
        var post_id = $(this).data("post");
        if(post_id){
            popup.showToast({
                type: "it",
                text: "处理中...",
                time: 1e5
            });
            $.post(_ERPHP.ajaxurl, {
                "action": "epd_wppay",
                "post_id": post_id
            }, function(result) {
            	if( result.status == 202 ){
                    $.post(_ERPHP.ajaxurl, {
                        "action": "epd_wppay_pay",
                        "post_id": post_id,
                        "order_num": result.num
                    }, function(data) {
                        if(data.status == "1"){
                            clearInterval(erphpWppayOrder);
                            popup.hideModal('customModal');
                            popup.showToast({
                                type: "text",
                                text: "支付成功！"
                            });
                            location.reload();
                        }
                    });
                }else if( result.status == 200 ){
                    popup.hideToast();

                    popup.showCustomModal({
                        template: "erphpWppayQrcode",
                        layerClose: 0,
                        data: {
                        	price: result.price,
                        	price2: result.price2,
                        	code: result.code,
                        	code2: result.code2,
                        	gift: result.gift,
                        	gift2: result.gift2,
                        	aliurl: result.aliurl,
                        	wxurl: result.wxurl
                        }
                    });

                    var m = 5;
                    if(result.minute) m = result.minute;

                    erphpWppayOrder = setInterval(function() {
                        $.post(_ERPHP.ajaxurl, {
                            "action": "epd_wppay_pay",
                            "post_id": post_id,
                            "order_num": result.num
                        }, function(data) {
                            if(data.status == "1"){
                                clearInterval(erphpWppayOrder);
                                popup.hideModal('customModal');
                                popup.showToast({
                                    type: "text",
                                    text: "支付成功！"
                                });
                                location.reload();
                            }
                        });
                    }, 5000);

                    var s = 0;  
                    wppayCountdown();
                    erphpWppayTimer = setInterval(function(){ wppayCountdown(); },1000);
                    function wppayCountdown(){
                        $(".wtime").html("支付倒计时：<span>0"+m+"分"+s+"秒</span>");
                        if( m == 0 && s == 0 ){
                            clearInterval(erphpWppayOrder);
                            clearInterval(erphpWppayTimer);
                            popup.hideModal('customModal');
                            m = 4;
                            s = 59;
                        }else if( m >= 0 ){
                            if( s > 0 ){
                                s--;
                            }else if( s == 0 ){
                                m--;
                                s = 59;
                            }
                        }
                    }

                }else if( result.status == 201 ){
                    popup.showToast({
                        type: "text",
                        text: result.msg
                    });
                }else{
                    popup.showToast({
                        type: "text",
                        text: "获取支付信息失败！"
                    });
                }
            }, 'json'); 
        }else{
            popup.showToast({
                type: "text",
                text: "获取支付信息失败！"
            });
        }
        return false;
    });

    $("body").on("click", ".erphpdown-buy-index", function(){
        var post_id = $(this).data("post"),
            index_id = $(this).data("index"),
            price = $(this).data("price"),
            that = $(this);

        if(post_id && index_id && price){
            popup.showToast({
                type: "it",
                text: "处理中...",
                time: 1e5
            });
            $.post(_ERPHP.ajaxurl, {
                "action": "epd_index",
                "post_id": post_id,
                "index_id": index_id,
                "price": price
            }, function(result) {
                if( result.status == 200 ){
                    popup.showToast({
                        type: "text",
                        text: "购买成功！"
                    });
                    location.reload();
                }else if( result.status == 201 ){
                    popup.showToast({
                        type: "text",
                        text: result.msg
                    });
                }else if( result.status == 202 ){
                	that.after('<a href="'+result.recharge+'" target="_blank" class="erphpdown-vip">立即充值</a>');
                    popup.showToast({
                        type: "text",
                        text: result.msg
                    });
                }else{
                    popup.showToast({
                        type: "text",
                        text: "购买失败，请稍后重试！"
                    });
                }
            }, 'json'); 
        }else{
            popup.showToast({
                type: "text",
                text: "购买失败，请稍后重试！"
            });
        }
        return false;
    });

    var bodyWidth = $(window).width();


	$("body").on("click", ".erphpdown-iframe", function(){
        var href = $(this).attr("href");
        layer.open({
            type: 2,
            area: ['350px', '420px'],
            title: '购买',
            resize:false,
            scrollbar: false,
            shadeClose: true,
            content: href
        });
        return false;
    });


    $("body").on("click", ".erphpdown-down-layui", function(){
        var href = $(this).attr("href");
        layer.open({
            type: 2,
            area: ['350px', '445px'],
            title: '下载',
            resize:false,
            scrollbar: false,
            shadeClose: true,
            content: href
        });
        return false;
    });


    $("body").on("click", ".erphpdown-see-btn", function(){
    	var post_id = $(this).data("post");
        if(post_id){
            popup.showToast({
                type: "it",
                text: "处理中...",
                time: 1e5
            });
            $.post(_ERPHP.ajaxurl, {
                "action": "epd_see",
                "post_id": post_id
            }, function(result) {
                
                if( result.status == 200 ){
                    popup.hideToast();
                    location.reload();
                }else{
                    popup.showToast({
                        type: "text",
                        text: "查看失败，请检查今天的查看次数是否已用光！"
                    });
                }
            }, 'json'); 
        }else{
            popup.showToast({
                type: "text",
                text: "查看失败！"
            });
        }
        return false;
    });

    $("body").on("click", ".erphp-checkin", function(){
    	var that = $(this);
    	if(!that.hasClass("disabled")){
    		that.addClass("disabled");
	    	if(!that.hasClass("active")){
		    	that.text("签到中...");
		        $.post(_ERPHP.ajaxurl, {
		            "action": "epd_checkin"
		        }, function(result) {
		            
		            if( result.status == 200 ){
		            	that.addClass("active").text("签到成功");
		            	alert("签到成功");
		            }else{
		                that.text("今日签到");
		                alert(result.msg);
		            }
		        }, 'json'); 
		    }
		}

        return false;
    });

    if($(".erphpdown-see-pay").length > 1){
    	$(".erphpdown-see-pay .erphpdown-buy, .erphpdown-see-pay .erphp-see-must").after('<span class="erphpdown-see-tips">（购买一个，查看所有）</span>');
    }


    var clipboard = new Clipboard(".erphpdown-copy");
    clipboard.on("success", function(e) {
        layer.msg("已复制",{time:500});
    });

});
/* Powered by QQ:82708210 */