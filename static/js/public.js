//
$(function(){
	var dh=$(document).height();
	$(".n_sider").height(dh);
	$(".n_main").height(dh-20);
	//左侧点击
	$(".ns_nav li").click(function(){
		$(".curli .zi").text($(this).text());
	});	
	//radio
	/*
	$(".nm_ul").each(function(index){ 
		var li=$(this).find("li");			
		var t=$(this).find(".radio");
		li.click(function(){
			var _span=$(this).find("span");	
		  t.val(li.index(this));			
			$(this).addClass("open1").siblings().removeClass("open1");	
		})
	});
	*/
	$(".nm_ul li").each(function(index, element){
		$(element).click(function(event){
			if($(this).hasClass("open1")){//判断li是否包含”open1“
				$(this).removeClass("open1");
			}else{
				$(this).addClass("open1");
			};							
		});			 
	});
});
//登录图片切换
var UA = window.navigator.userAgent,IsAndroid = (/Android|HTC/i.test(UA)),IsIPad = !IsAndroid && /iPad/i.test(UA),IsIPhone = !IsAndroid && /iPod|iPhone/i.test(UA),IsIOS = IsIPad || IsIPhone,clearAnimatea = null;
var testStyle=document.createElement('div').style,
camelCase=function(str){
    return str.replace(/^-ms-/, "ms-").replace(/-([a-z]|[0-9])/ig, function(all, letter){
        return (letter+"").toUpperCase();
    });
},
cssVendor=(function(){
    var ts=testStyle,
        cases=['-o-','-webkit-','-moz-','-ms-',''],i=0;
    do {
        if(camelCase(cases[i]+'transform') in ts){
            return cases[i];
        }
    } while(++i<cases.length);
    return '';
})(),
transitionend=(function(){
    return ({
        '-o-':'otransitionend',
        '-webkit-':'webkitTransitionEnd',
        '-moz-':'transitionend',
        '-ms-':'MSTransitionEnd transitionend',
        '':'transitionend'
    })[cssVendor];
})(),
isCSS = function(property){
    var ts=testStyle,
        name=camelCase(property),
        _name=camelCase(cssVendor+property);
    return (name in ts) && name || (_name in ts) && _name || '';
};
var liebaoBrowser = {
    domAnimation: function(ele){
        ele.detBtn.hover(function(){
            $(this).addClass('btn-hover');
        },function(){
            $(this).removeClass('btn-hover');
        });
        ele.navhover.hover(function(){
            $(this).find("i").addClass('nav-hover');
        },function(){
            $(this).find("i").removeClass('nav-hover');
        });
        ele.downBtn.hover(function(){
            $(this).addClass('down-btn');
        },function(){
            $(this).removeClass('down-btn');
        });
        ele.watchLb.hover(function(){
            ele.code.addClass('code-show').show();
        },function(){
            ele.code.removeClass('code-show').hide();
        });
        ele.fnLi.hover(function(){
            var radiusEle = $(this).find('div');
            $(this).addClass('span-img');
            if(ele.aniMation){
                radiusEle.addClass('zoom');
            }else{
                radiusEle.show();
            }
        },function(){
            var radiusEle = $(this).find('div');
            $(this).removeClass('span-img');
            if(ele.aniMation){
                radiusEle.removeClass('zoom');
            }else{
                radiusEle.hide();
            }
        });
    },
    banSlide: function(item,time,ele,speed){
        clearTimeout(clearAnimatea);
        var length = ele.slide.length- 1;
        /*自动播放*/
        function autoPlay() {
            item++;
            if (item == length+1) {
                item = 0;
                aniObj(item);
            }else{
                aniObj(item);
            }
            spanCur(item);
            clearAnimatea = setTimeout(autoPlay, time);
        }
        clearAnimatea = setTimeout(autoPlay, time);
        /*点击切换动画*/
        function slidePrev(e){
            e.preventDefault();
            if(!ele.slide.is(':animated')){
                if (item == 0) {
                    item = length;
                    aniObj(item);
                } else {
                    item--;
                    aniObj(item);
                }
                spanCur(item);
            }
        };
        function slideNext(e){
            e.preventDefault();
            if(!ele.slide.is(':animated')){
                if (item == length) {
                    item = 0;
                    aniObj(item);
                } else {
                    item++;
                    aniObj(item);
                }
                spanCur(item);
            }
        };
        /* 点击切换动画 */
        ele.slideCur.click(function() {
            clearTimeout(clearAnimatea);
            ele.slideCur.removeClass('cur');
            $(this).addClass('cur');
            item = $(this).index();
            if (item <= length) {
                aniObj(item);
            }
        });
        /*执行动画方法*/
        function aniObj(getNum){
            ele.slide.hide().css({ opacity: 0.5,zIndex: 0});
            ele.slide.eq(getNum).show().stop(true,true).animate({opacity:1,zIndex:8},speed);
            if(ele.aniMation){
                ele.slide.removeClass('banAnimate');
                ele.slide.eq(getNum).addClass('banAnimate');
            }
        }
        /*当前动画指示*/
        function spanCur(eqNum) {
            ele.slideCur.removeClass('cur');
            ele.slideCur.eq(eqNum).addClass('cur');
        }
        /* 触发执行事件 */
        ele.prev.click(slidePrev);
        ele.next.click(slideNext);
        /* 手机上执行touch事件 */
        if(IsIOS || IsAndroid){
            var touchMain = document.getElementById('touchMain');
            var page = {
                x:0,
                y:0
            }
            var touched;
            touchMain.addEventListener('touchstart',function(e){
                clearTimeout(clearAnimatea);
                page.x = e.changedTouches[0].pageX;
                page.y = e.changedTouches[0].pageY;
            });
            touchMain.addEventListener('touchend',function(e){
                var pageX = e.changedTouches[0].pageX-page.x;
                var pageY = e.changedTouches[0].pageY-page.y;
                if(Math.abs(pageX)>50){
                    if(pageX>0){
                        slidePrev(e);
                    }else{
                        slideNext(e);
                    }
                }
                clearAnimatea = setTimeout(autoPlay, time);
                touched=null;
            });
            /* 防止阻止touchend事件 */
            touchMain.addEventListener('touchmove',function(e){
                if(null==touched){
                    var pageX = e.changedTouches[0].pageX-page.x;
                    var pageY = e.changedTouches[0].pageY-page.y;
                    touched=Math.abs(pageX-page.x)<Math.abs(pageY-page.y);
                }
                if(!touched)e.preventDefault();
            });
        }else{
            /*滑过主体区域停止动画*/
            ele.stopAnimte.hover(function() {
                clearTimeout(clearAnimatea);
            }, function() {
                clearAnimatea = setTimeout(autoPlay, time);
            });
        }
        /*初始化动画*/
        ele.slide.eq(0).show().addClass('banAnimate');
    },
    maxImgInit: function(ele){
        if(ele.windowMain.width()>760){
            ele.maxImg.hover(function(){
                if(ele.aniMation){
                    $(this).addClass('aniimgstyle');
                }else{
                    $(this).addClass('imgstyle');
                }
            },function(){
                if(ele.aniMation){
                    $(this).removeClass('aniimgstyle');
                }else{
                    $(this).removeClass('imgstyle');
                }
            });
        }else{
            return false;
        }
    },
    windowEvent: function(ele){
        if(!IsIOS && !IsAndroid){
            if(ele.windowMain.height() < 640){
                ele.downlaodMain.removeClass('position');
                ele.downlaodMain.addClass('padding');
            }else{
                ele.downlaodMain.removeClass('padding');
                ele.downlaodMain.addClass('position');
            }
        }
    },
    flipObj: function(ele,time){
        if(!IsIOS && !IsAndroid){
            setTimeout(function(){
                if(ele.aniMation){
                    ele.codeImg.show().addClass('flip');
                    ele.phoneImg.hide();
                }else{
                    ele.codeImg.show();
                    ele.phoneImg.hide();
                }
            },time);
            ele.phoneImg.click(function(){
                ele.phoneImg.hide().removeClass('flip');
                ele.codeImg.show().addClass('flip');
            });
            ele.codeImg.click(function(){
                ele.codeImg.hide().removeClass('flip');
                ele.phoneImg.show().addClass('flip');
            });
        }else{
            $('.pc-download').css({position:'absolute',left:'0',zIndex:'11',top:'156px;'});
            $('.phone-download').css({position:'absolute',left:'0',zIndex:'12',top:'-156px'});
        }
    },
    staJS: function(){
        $(document).on('click','a',function(e){
            var statData = $(this).attr('stat');
            try {
                _hmt.push(['_trackEvent',statData, 'webLB', 'click', 'download',statData]);
            } catch (e) {}
        });
    },
    init: function(ele){
        liebaoBrowser.banSlide(0,5000,ele,500);
        liebaoBrowser.domAnimation(ele);
        liebaoBrowser.windowEvent(ele);
        liebaoBrowser.maxImgInit(ele);
        ele.windowMain.on('resize',function(){
            liebaoBrowser.windowEvent(ele);
            liebaoBrowser.maxImgInit(ele);
        });
        liebaoBrowser.flipObj(ele,2000);
        liebaoBrowser.staJS();
    }
};
$(function(){
    var domEle = {
		navhover: $('.nav-main a'), detBtn: $('.details'),
		maxImg: $('.news-img'), fnLi: $('.ft-list li'), 
		aniMation: isCSS('animation'), watchLb: $('#watch-lb'), 
		code: $('.watch-code'), 
		downBtn: $('.beta-info a'), 
		downlaodMain: $('.downlaod-main'), 
		windowMain: $(window), 
		bodyEle: $('body'), 
		stopAnimte: $('.slide,.prev,.next,.item'), 
		prev: $('.prev'),
		next: $('.next'), 
		slide: $('.slide'), 
		slideCur: $('.item a'),
		phoneImg: $('.phone-img'),
		codeImg: $('.code-img') 
	};
	domEle.downlaodMain.show();
	liebaoBrowser.init(domEle);
});


 

//json对象转化成json字符串
//wy 2014年10月20日 13:58:38
function JsonToString(o) {
    var arr = [];
    var fmt = function (s) {
        if (typeof s == 'object' && s != null) return JsonToStr(s);
        return /^(string|number)$/.test(typeof s) ? "'" + s + "'" : s;
    }
    for (var i in o)
        arr.push("'" + i + "':" + fmt(o[i]));
    return '{' + arr.join(',') + '}';
}



///日期格式转换
////Date(1414634149966)/ 转 yyyy-MM-dd
/// wy 2014年10月30日 10:10:38
function FormatDate(strData) {
    if (!strData) return "";
    var date = eval('new ' + (strData.replace(/\//g, '')));
    //月份为0-11，所以+1，月份小于10时补个0
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return date.getFullYear() + "-" + month + "-" + currentDate;
}
//数据格式验证
// wy 2014年11月1日 17:29:15
//验证手机号
function CheckMobilePhone(Mobile) {
    var exe = /(^1[3|5|8|4|7][0-9]{9}$)/;
    if (!Mobile) return false;
    return exe.test(Mobile);
}
//验证电邮
function CheckEmail(Email) {
    var exe = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!Email) return false;
    return exe.test(Email);
}
//验证身份证号
function CheckIDCard(IDCard) {
    var exe = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    //var exe = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    if (!IDCard) return false;
    return exe.test(IDCard);
}
//处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外
function forbidBackSpace(event_e) {
    if (window.event)
        event_e = window.event;
    var obj = event_e.target || event_e.srcElement; //获取事件源 
    var t = obj.type || obj.getAttribute('type'); //获取事件源类型 
    var int_keycode = event_e.charCode || event_e.keyCode;
    //获取作为判断条件的事件类型 
    var vReadOnly = obj.readOnly;
    var vDisabled = obj.disabled;
    //处理undefined值情况 
    vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
    vDisabled = (vDisabled == undefined) ? true : vDisabled;
    //当敲Backspace键时，事件源类型为密码或单行、多行文本的， 
    //并且readOnly属性为true或disabled属性为true的，则退格键失效 
    var flag1 = event_e.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
    //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效 
    var flag2 = event_e.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
    //判断 
    if (flag2 || flag1) return false;
}

//禁止后退键 作用于Firefox、Opera
document.onkeypress = forbidBackSpace;
//禁止后退键  作用于IE、Chrome
document.onkeydown = forbidBackSpace;