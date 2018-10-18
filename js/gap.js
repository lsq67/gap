$(function(){
    $(".loginRegisterPc").click(function(){
        
        if($(".loginRegisterOpenPc").is(":hidden")){
            $(".loginRegisterOpenPc").show();
        }else{
            $(".loginRegisterOpenPc").hide();
        }
    })
    
    $(".onlineService").mouseover(function(){
        $(".Reminder2").show();
    })
    $(".onlineService").mouseout(function(){
        $(".Reminder2").hide();
    })
})

$(function(){
    
    $(".listUl2").click(function(){
        if($(".advert-backgroundPc").is(":hidden")){
            $(".advert-backgroundPc").show();
            $(".listLi2 img").attr("src","img/181008_SIT222TOP-BANNER_CN_CLOSE.jpg")
        }else{
            $(".advert-backgroundPc").hide();
            $(".listLi2 img").attr("src","img/181008_SIT222TOP-BANNER_CN_OPEN.jpg")
        }
        if($(".dropUl2").is(":hidden")){
            $(".dropUl2").show();
        }else{
            $(".dropUl2").hide();
        }
        
    })
})

$(function(){
        
       $(".topGapNavAbsoLeftPc").parent("li").mouseenter(function(){
           console.log(this)
            $(this).children(".topGapNavAbsoLeftPc").slideDown(50).show();
       })
        $(".topGapNavAbsoLeftPc").parent("li").mouseleave(function(){
            $(".topGapNavAbsoLeftPc").hide();
        })
})

//-------------Lunbo---------
function Banner(){}
$.extend(Banner.prototype,{
    init:function(options){
        this.item = $(options.item);
        this.left_btn = $(options.left_btn);
        this.right_btn = $(options.right_btn);
        this.list = this.item.parent();
        this.nowIndex = 0;
        this.item_num = this.item.length;
        // console.log(1)
        this.bindEvent();
        if(this.autoplay()){
            this.autoplay();
        }
    },
    
    bindEvent:function(){  
        this.left_btn.click($.proxy(this.prev , this))
        this.right_btn.click($.proxy(this.next , this))
        console.log(1)
    },
    next:function(){
        // console.log(this.item_num)
        if(this.nowIndex == this.item_num - 5){  
            this.list.css({
                left : 0 
            })
            this.nowIndex = 1;
            
        }else{
            this.nowIndex++;
        }
        // console.log(this.nowIndex)
        this.animate();
    },
    prev:function(){
        if(this.nowIndex == 0){
            this.nowIndex = this.item_num -5
            this.list.css({
                left : - (this.item_num - 1) * 230
            })
        }else{
            this.nowIndex--;
        }
        console.log(this.nowIndex)
        this.animate();

    },
    toIndex:function(event){
        var target = event.target;
        target.nowIndex  = $(target).index();
        this.animate();
        
    },
    autoplay:function(){
        this.left_btn.click(function(){
            clearInterval(this.Timer)
        }.bind(this))
        this.left_btn.blur(function(){
            this.Timer = setInterval(()=>{
                this.next();
                },2000)
            }.bind(this)).trigger("blur")
            if(this.nowIndex == this.item_num - 1){
                this.prev();
            }
    },
    animate:function(){
        this.list.stop().animate({
            left: - 230 * this.nowIndex 
        })
        console.log(this.list)
        // this.slider_btn.removeClass("slider_indicators_btn_active")
        // var num;
        // // console.log(this.item_num)
        // if(this.nowIndex == this.item_num ){
        //     num = this.item_num / 5;
        // }else{
        //     num = this.nowIndex;
        // }
        // this.slider_btn.eq(num).addClass("slider_indicators_btn_active")
    }
})
var banner = new Banner()
banner.init({
    item : ".categoryProductItem",
    left_btn : ".leftArrow",
    right_btn : ".rightArrow",
    autoplay: true,

})

//---------------------------------------------

$(function(){
    $("#guanzhu_weixin .footWrapper_img_scale").mouseover(function(){
        $(".qr").show();
        // $("#guanzhu_weixin .footWrapper_img_scale").toggleClass(active)
    })
    $("#guanzhu_weixin .footWrapper_img_scale").mouseout(function(){
        $(".qr").hide();
    })
    $(".footWrapper_onlineService").mouseover(function(){
        $(".Reminder2").show();
        
    })

    $(".footWrapper_onlineService").mouseout(function(){
        $(".Reminder2").hide();
    })
})