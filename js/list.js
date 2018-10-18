$(function(){
    console.log(1)
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
        //    console.log(this)
            $(this).children(".topGapNavAbsoLeftPc").slideDown(50).show();
       })
        $(".topGapNavAbsoLeftPc").parent("li").mouseleave(function(){
            $(".topGapNavAbsoLeftPc").hide();
        })
})


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

window.onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var oNav = document.querySelector('.gapTreeLeft');
    var oul = document.querySelector(".easy_scrollable");
    var oDiv = document.querySelector("#product_list_184");

    if(scrollTop > 274 && scrollTop < 14941){
    oNav.className = "pull-left gapTreeLeft treeFixed container2";
    oul.className = "treeCenter easy_scrollable div_scroll";
    oDiv.style = "margin-left:148px; min-height:561px";
    }else{
    oNav.className = "pull-left gapTreeLeft";
    oul.className = "treeCenter easy_scrollable";
    oDiv.style = "margin-left:0px; min-height:561px";
    }

}
// $(function(){
//     $("#emailInputPc").focus(function(){
//         $(this).
//     })
// })

$(function(){
    $(".backtop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1000)
    })
})


function waterFull(){};
    waterFull.prototype.init = function(){
        this.ul = document.querySelector(".row");
        this.page_num = 0;
        this.rendering = false;
        this.loadJson().then(function(data){
            this.renderPage();
        }.bind(this));
        this.handleEvent();
    }
    waterFull.prototype.handleEvent = function(){
        onscroll = this.ifRender.bind(this);
    }
    waterFull.prototype.ifRender = function(){
        // 如果 自己元素没有创建那么就终止判定功能执行;
        var children = this.ul.children;
        // 如果正在渲染 ,那我终止判定功能;
        if(this.rendering) return 0;        
        if(children.length == 0) return 0;
        // 卷动高度;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // 屏幕高度;
        var clientHeight = document.documentElement.clientHeight;
        // 最后一个内容
        var lastChildren = children[children.length - 1];
        var lastTop = lastChildren.offsetTop;
        if(clientHeight + scrollTop > lastTop){
            this.rendering = true;
            this.page_num ++;
            this.renderPage();
        }
    }
    waterFull.prototype.loadJson = function(){
        return new Promise(function(success){
            var xhr = new XMLHttpRequest();
            xhr.open("GET","http://localhost/phpnow/gap/list.json");
            xhr.send(null);
            xhr.onload = function(){
                if(xhr.status){
                    this.json = JSON.parse(xhr.response);
                    success(xhr.response)
                }
            }.bind(this);
        }.bind(this));
    }
    waterFull.prototype.renderPage = function(){
        var html = "";
        var list = this.json.subjects;

        for(var i = this.page_num * 4 ; i <= this.page_num * 4 + 3 ; i ++){
            if(list[i] == null){
                break;
            }
            html += `
            <li class="col-xs-6 col-md-3 categoryProductItem">
                                                <img class="img-responsive" src="${list[i].images}" alt="">
                                                <h5><a href="http://localhost/phpnow/gap/details.html#${list[i].id}">${list[i].title}</a></h5>
                                                <p class="priceBox">${list[i].price}</p>
                                                <span class="red">${list[i].state}</span>
                                            </li>
                `
           }
           this.ul.innerHTML += html;
           this.rendering = false;
    }
var waterfull = new waterFull();
waterfull.init();

console.log(location.hash)