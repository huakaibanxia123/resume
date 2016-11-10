//js的入口文件
//引入zepto
var $=require('zepto-modules/zepto')
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
  var IScroll=require('./components/iscroll/iscroll');
var Swiper=require('./components/swiper/swiper-3.3.1.min');
var swiperAnimate=require('./components/swiper/swiper.animate1.0.2.min');
var  solid=require('./components/iscroll/iscroll');
var swiper = new Swiper('.swiper-container',
     {
  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
  }, 
  onSlideChangeEnd: function(swiper){ 
    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
  } 
  });
module.exports=$;
$('#myIscroll').hide();
$('.swiper-container').show();
$('#btn').tap(function(){
    $('#myIscroll').show();
$('.swiper-container').hide();
 
    var myScroll;

   
$.ajax({
        url:'/api/skill',
        //data:obj,

        type:'POST',
        success:function(data){
            for(var j=0;j<data.length;j++){
                $('#box').append("<li class='list_1'><div class='list_2'></div></li>")
                for(var i in data[j]){
                $('.list_1 .list_2').last().append("<div>"+data[j][i]+"</div>")
            }
            }
            
             myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            }


})
$('#personel li').tap(function () {
    // body...
    $('#header').html($(this).html())
    /*$.ajax({
        url:'/api/skill',
        //data:obj,

        type:'POST',
        success:function(data){*/

 myScroll = new IScroll('#wrapper', { mouseWheel: true });
//alert(data)

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
      /*  }
    })*/
})
})
var OC=document.getElementById('cvs');
var Ac=OC.getContext('2d');
Ac.font="bold 50px '黑体'";
Ac.textAligh='center';
bg=Ac.createLinearGradient(100,100,300,300)
bg.addColorStop(0.3,"yellow")
bg.addColorStop(0.5,"green")
bg.addColorStop(0.6,"pink")
Ac.fillStyle=bg;
Ac.fillText('个人简历',60,200 )