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
if($('.btns').size>0)
{
     $('#myIscroll').show();
$('.swiper-container').hide();
}
else{
    $('#myIscroll').hide();
$('.swiper-container').show();
}

$('#btn').tap(function(){
    $(this).addClass('btns')
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
                $('.list_1 .list_2').last().append("<div><p>"+i+"</p>"+data[j][i]+"</div>")
            }
            }
            
             myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            }


})
$('#personel li').tap(function () {
    var uls;
    // body...
    $('#header #topic').html($(this).html())
    if($(this).html()=="项目")
    {
        uls='/api/project';
    }
else if($(this).html()=="经历")
{
  uls='/api/work';  
}
else if($(this).html()=="我的")
{
  uls='/api/my';  
}
else{
    uls='/api/skill';
}
   $.ajax({
        url:uls,
        //data:obj,

        type:'POST',
        success:function(data){
            $('#box').html('')
            for(var j=0;j<data.length;j++){

                $('#box').append("<li class='list_1'><div class='list_2'></div></li>")
                for(var i in data[j]){
                    if(i=='image')
                    {
                         $('.list_1').last().append("<img src='"+data[j][i]+"'/>")
                    }
                    else{
                        $('.list_1 .list_2').last().append("<div><p>"+i+"</p>"+data[j][i]+"</div>")
                    }
                
            }
            }
            
             myScroll = new IScroll('#wrapper', { mouseWheel: true });
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
            }


})
})
})
var OC=document.getElementById('cvs');
var Ac=OC.getContext('2d');
Ac.font="bold 50px '黑体'";
Ac.textAligh='center';
bg=Ac.createLinearGradient(40,10,250,250)
bg.addColorStop(0.3,"yellow")
bg.addColorStop(0.5,"green")
bg.addColorStop(0.6,"pink")
Ac.fillStyle=bg;
Ac.fillText('个人简历',40,150 )
