$(function () {
    $(".loginRegisterPc").click(function () {

        if ($(".loginRegisterOpenPc").is(":hidden")) {
            $(".loginRegisterOpenPc").show();
        } else {
            $(".loginRegisterOpenPc").hide();
        }
    })

    $(".onlineService").mouseover(function () {
        $(".Reminder2").show();
    })
    $(".onlineService").mouseout(function () {
        $(".Reminder2").hide();
    })
})

$(function () {

    $(".listUl2").click(function () {
        if ($(".advert-backgroundPc").is(":hidden")) {
            $(".advert-backgroundPc").show();
            $(".listLi2 img").attr("src", "img/181008_SIT222TOP-BANNER_CN_CLOSE.jpg")
        } else {
            $(".advert-backgroundPc").hide();
            $(".listLi2 img").attr("src", "img/181008_SIT222TOP-BANNER_CN_OPEN.jpg")
        }
        if ($(".dropUl2").is(":hidden")) {
            $(".dropUl2").show();
        } else {
            $(".dropUl2").hide();
        }

    })
})

$(function () {

    $(".topGapNavAbsoLeftPc").parent("li").mouseenter(function () {
        //    console.log(this)
        $(this).children(".topGapNavAbsoLeftPc").slideDown(50).show();
    })
    $(".topGapNavAbsoLeftPc").parent("li").mouseleave(function () {
        $(".topGapNavAbsoLeftPc").hide();
    })
})


$(function () {
    $("#guanzhu_weixin .footWrapper_img_scale").mouseover(function () {
        $(".qr").show();
        // $("#guanzhu_weixin .footWrapper_img_scale").toggleClass(active)
    })
    $("#guanzhu_weixin .footWrapper_img_scale").mouseout(function () {
        $(".qr").hide();
    })
    $(".footWrapper_onlineService").mouseover(function () {
        $(".Reminder2").show();

    })

    $(".footWrapper_onlineService").mouseout(function () {
        $(".Reminder2").hide();
    })
})

window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var oNav = document.querySelector('.gapTreeLeft');
    var oul = document.querySelector(".easy_scrollable");
    var oDiv = document.querySelector(".gapProductCenter");
    if (scrollTop > 274 && scrollTop < 12500) {
        oNav.className = "pull-left gapTreeLeft treeFixed container2";
        oul.className = "treeCenter easy_scrollable div_scroll";
        oDiv.style = "margin-left:148px; min-height:561px";
    } else {
        oNav.className = "pull-left gapTreeLeft";
        oul.className = "treeCenter easy_scrollable";
        oDiv.style = "";
    }

}
// $(function(){
//     $("#emailInputPc").focus(function(){
//         $(this).
//     })
// })

$(function () {
    $(".backtop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })

})

$(function () {
    $("#color_options_15510").mousemove(function () {
        $("#showColor").html("驼色")
    })
    $("#color_options_15510").click(function () {
        $(this).addClass("now", "act")
        $(this).siblings().removeClass("now")
    })
    $("#color_options_15").mousemove(function () {
        $("#showColor").html("石楠灰")
    })
    $("#color_options_15").click(function () {
        $(this).addClass("now")
        $(this).siblings().removeClass("now")
    })
    $("#color_options_16").mousemove(function () {
        $("#showColor").html("正黑色")
    })
    $("#color_options_16").click(function () {
        $(this).addClass("now")
        $(this).siblings().removeClass("now")
    })
})

$(function () {
    $("#size_options_entity_2128910").click(function () {
        $("#show_choose_size").html($(this).html())
    })
    $("#size_options_entity_2128906").click(function () {
        $("#show_choose_size").html($(this).html())
    })
    $("#size_options_entity_2128920").click(function () {
        $("#show_choose_size").html($(this).html())
    })
    $("#size_options_entity_2128926").click(function () {
        $("#show_choose_size").html($(this).html())
    })
    $("#size_options_entity_2128904").click(function () {
        $("#show_choose_size").html($(this).html())
    })
    $("#size_options_entity_2128916").click(function () {
        $("#show_choose_size").html($(this).html())
    })
})


$(function () {
    $("#set_qty_pc_1").click(function () {

        $("#pdpAddNumDrawerPc").stop().animate({
            width: 122,
            height: 42
        })
        $(this).parent("li").siblings().css({
            left: 0
        })
    })
})



$(function () {
    $("#li_disc").click(function () {
        $(this).addClass("borderBottom");
        $(this).siblings().removeClass("borderBottom")
        $("#product_disc").show();
        $("#product_pay").hide();
        $("#product_trs").hide();
    })
    $("#li_pay").click(function () {
        $(this).addClass("borderBottom");
        $(this).siblings().removeClass("borderBottom")
        $("#product_pay").show();
        $("#product_disc").hide();
        $("#product_trs").hide();
    })
    $("#li_trs").click(function () {
        $(this).addClass("borderBottom");
        $(this).siblings().removeClass("borderBottom")
        $("#product_trs").show();
        $("#product_pay").hide();
        $("#product_disc").hide();
    })
})

$(function () {
    $("#wrap").mouseover(function () {
        $("#cloud-zoom-big").show();
    });
    $("#wrap").mouseout(function () {
        $("#cloud-zoom-big").hide();
    });
    $("#con").mousemove(function (e) {
        var e = e || window.event;
        var left = e.offsetX;
        var top = e.offsetY;

        var chaX = $("#wrap").offsetWidth;
        var chaY = $("#wrap").offsetHeight;
        top = top <= 0 ? 0 : top >= chaY ? chaY : top;
        left = left <= 0 ? 0 : left >= chaX ? chaX : left;

        // console.log(e)
        // $(document).style.left = left + "px";


        // $(document).style.top = top + "px";
        // $(document).style.backgroundPosition = `${-left}px  ${-top}px`;

        var multipleY = 4.5;
        var multipleX = 4;
        // $("#cloud.zoom-big").style.backgroundPositionX = - left * multipleX + "px";
        // $("#cloud.zoom-big").style.backgroundPositionY = - top * multipleY + "px";
        $("#cloud-zoom-big").css({
            backgroundPositionX: -left * multipleX,
            backgroundPositionY: -top * multipleY
        })
    })

})
console.log(location.hash)

var loadJson = $.ajax({
    url: "http://localhost/phpnow/gap/list.json"
}).promise()
loadJson.done(function (res) {
    var renderPage = new RenderPage();
    renderPage.init(res.subjects)
})

function RenderPage() {}
$.extend(RenderPage.prototype, {
    init: function (res) {
        this.data = res;
        this.renderpage();
    },
    renderpage: function () {
        var id = location.hash.replace(/\#/, "");
        var list;
        for (var i = 0; i < this.data.length - 1; i++) {
            if (id == this.data[i].id) {
                list = this.data[i];

            }
        }
        var html;
        // console.log(list)
        html += `
        <div class="product-view pull-left">
        <div class="product-img-box">
        <div class="pro-new" id="15" style="display:none;"></div>
        <div class="containerBigimage" id="ViewData">
            <div class="all-images-box" id="wrap" style="top: 0px; z-index: 600; position: relative;">
                <a href="#" class="cloud-zoom" id="a_big_image_15" style="height: 401px; width: 308px; position: relative; display: block; top: 0px; float: right">
                    <img style="display: block; height: 401px; width: 308px;" src="${list.images}" alt="">
                </a>
                <img id="placeholder" style="width: 100%; display: none; position: absolute; top: 0%;" src="../gap/img/337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg">
                <div id="con"></div>
                <div class="cloud-zoom-big" id="cloud-zoom-big"  style="display:none;position:absolute;left:309px;top:80px;width:352px;height:250px;background-image:url(${list.images});z-index:99;background-position: 0px 0px;"></div>
            </div>
        </div>
        <div class="gapzoomshowPic" id="idshowPic"></div>
        <p class="pro_zoom clearfix">
            <span id="mouse_detail_show" class="mouse_detail pulll-left">点击图片查看细节</span>
            <span id="showbingNow" class="zoom pull-right">
                <a href="#" class="glyphicons no-js zoom_in">
                    <i></i>
                </a>
                "放大"
            </span>
        </p>
        <a href="#" class="prev browse left"></a>
        <div class="scrollable" style="width:265px;">
            <ul class="items more-views">
                <div style="width: 265px;">
                    <!-- video 控制按钮开始 -->
                                                            <li onmouseover="showVideo()" onmouseout="toggleButton()" style="display: none;">
                    <div class="selected vidThumbA" style="visibility:visible; width: 45px;height: 60px;border: 1px solid #ddd;background-size: contain; position: relative; background-image: url('../gap/img/337062.jpg');" id="vidTrigger">
                        <img id="playbuttonImg" src="../gap/img/vidbtn51c.png" style="position: relative; left: -1px; top: -107px; height: 205px;">
                    </div>
                </li>
                                                        <!-- video 控制按钮结束 -->
                                                        <li  id="smallPic_0" style="display: block;">
                    <a id="image_15510" picnumber="0" href="https://www.gap.cn/media/catalog/product/3/3/337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg" class="cloud-zoom-gallery selected" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_1" style="display: block;">
                    <a id="image_15" picnumber="1" href="https://www.gap.cn/media/catalog/product/d/1/d15ff15382a36312340b36319823fd4f_1.jpg" rev="https://www.gap.cn/media/catalog/product/d/1/d15ff15382a36312340b36319823fd4f_1.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/d15ff15382a36312340b36319823fd4f_1.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/d/1/d15ff15382a36312340b36319823fd4f_1.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_2" style="display: block;">
                    <a id="image_0" picnumber="2" href="https://www.gap.cn/media/catalog/product/5/0/50a8a8d17def632e3ab015fef326ff2a_1.jpg" rev="https://www.gap.cn/media/catalog/product/5/0/50a8a8d17def632e3ab015fef326ff2a_1.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/50a8a8d17def632e3ab015fef326ff2a_1.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/5/0/50a8a8d17def632e3ab015fef326ff2a_1.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_3" style="display: block;">
                    <a id="image_0" picnumber="3" href="https://www.gap.cn/media/catalog/product/2/6/2604132bd9a9718bf4565cfbd3119cb3_1.jpg" rev="https://www.gap.cn/media/catalog/product/2/6/2604132bd9a9718bf4565cfbd3119cb3_1.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/2604132bd9a9718bf4565cfbd3119cb3_1.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/2/6/2604132bd9a9718bf4565cfbd3119cb3_1.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_4" style="display: block;">
                    <a id="image_0" picnumber="4" href="https://www.gap.cn/media/catalog/product/1/b/1bd56b81dcd7f0b85d5e72311ea99713_1.jpg" rev="https://www.gap.cn/media/catalog/product/1/b/1bd56b81dcd7f0b85d5e72311ea99713_1.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/1bd56b81dcd7f0b85d5e72311ea99713_1.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/1/b/1bd56b81dcd7f0b85d5e72311ea99713_1.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_5" style="display: none;">
                    <a id="image_16" picnumber="5" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_1_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_1_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_1_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_1_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_6" style="display: none;">
                    <a id="image_0" picnumber="6" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_3_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_3_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_3_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_3_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_7" style="display: none;">
                    <a id="image_0" picnumber="7" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_2_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_2_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_2_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_2_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_8" style="display: none;">
                    <a id="image_0" picnumber="8" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_5_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_5_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_5_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_5_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li id="smallPic_9" style="display: block;">
                    <a id="image_0" picnumber="9" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_6_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_6_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_6_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_6_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li id="smallPic_10" style="display: none;">
                    <a id="image_0" picnumber="10" href="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_4_180930.jpg" rev="https://www.gap.cn/media/catalog/product/3/3/337062TRUE BLACK_M_1500_4_180930.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/337062TRUE BLACK_M_1500_4_180930.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/3/3/337062TRUE BLACK_M_1500_4_180930.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                                                        <li  id="smallPic_11" style="display: none;">
                    <a id="image_0" picnumber="11" href="https://www.gap.cn/media/catalog/product/7/e/7eb8fae30e851af5e898ff8695765d8f_1.jpg" rev="https://www.gap.cn/media/catalog/product/7/e/7eb8fae30e851af5e898ff8695765d8f_1.jpg" class="" onclick="void(0);return false;" title="">
                        <img rel="../gap/img/7eb8fae30e851af5e898ff8695765d8f_1.jpg" class="zoom-tiny-image" src="https://www.gap.cn/media/catalog/product/cache/1/image/68x90/9df78eab33525d08d6e5fb8d27136e95/7/e/7eb8fae30e851af5e898ff8695765d8f_1.jpg" alt="" height="60" width="45">
                    </a>
                </li>
                
            </div>
            </ul></div>
        <a class="next browse right" number="0"></a>
    </div>
    <div class="product-shop">
        <div class="product-name">
                <div style="font-weight:bold;color: #134881;font-size: 18px;line-height: 25px">
                ${list.title}</div>
                <div class="clear"></div>
        </div>
        <div class="product-options">
            <dl>
                <dd id="pc_prom_label" class="sale prom-label minimal-price-link prom_product_2344006 prom_ccProduct_15510" style="display:block;"> <span>正价商品限时6折</span><br></dd>
            </dl>
            <dl><dd><span id="salesRulePcLabel" class="salesRulePc" style="">(优惠价在购物袋页面生效)</span></dd></dl>
        </div>
        <div class="price-box pdpIndex">
            <div class="clearfix">
            <span class="regular-price pull-left">
                <span>现价：</span>
                <span class="price" id="current_price" style="color: rgb(0, 0, 0);">￥				<span id="productShowPrice">${list.price}</span>
                </span>
            </span>
        </div>
        </div>
        <p class="availability">款号：000337062</p>
        <div>
            <div class="product-options" id="product-options-wrapper">
                <dl class="last">
                    <div class="product-options mulity-block-boxes" id="product-options-wrapper clearfix">
                        <div class="dt">颜色：<span class="choose" id="showColor">石楠灰</span></div>
                        <div class="dd">
                            <ul id="color_options_list" class="options-list">
                                <li class="onelist">
                                <a key="15510" title="驼色" defprice="1,699" id="color_options_15510" class="">
                                    <img src="../gap/img/800_600337062CAMEL 859 GLOBAL_M_1500_1_180930.jpg" title="驼色" alt="驼色">
                                </a>
                                <a key="15" title="石楠灰" defprice="1,699" id="color_options_15" class="now">
                                    <img src="../gap/img/515_1100d15ff15382a36312340b36319823fd4f_1.jpg" title="石楠灰" alt="石楠灰">
                                </a>
                                <a key="16" title="正黑色" defprice="1,699" id="color_options_16" class="">
                                    <img src="../gap/img/493_625337062TRUE BLACK_M_1500_1_180930.jpg" title="正黑色" alt="正黑色">
                                </a>
                                </li>
                            </ul>
                        </div>
                        <div class="dt">
                            尺码： 
                            <span class="choose" id="show_choose_size">请选择</span>
                            <span class="chooseerror" id="show_choose_size_error"></span>
                        </div>
                        <div class="size_choose growupsize dd clearfix">
                            <div id="size_options_list">
                                <span class="gapSizeBigPc size_options_entity_15510">
                                    <a id="size_options_entity_2128910" price="1,699.00" final_price="1,699.00" entity_id="2128910" sku="309459201" title="155/76A(XXXS)" stcok="13">155/76A(XXXS)</a>	
                                    <a id="size_options_entity_2128906" price="1,699.00" final_price="1,699.00" entity_id="2128906" sku="309459200" title="160/80A(XXS)" stcok="38">160/80A(XXS)</a>	
                                    <a id="size_options_entity_2128920" price="1,699.00" final_price="1,699.00" entity_id="2128920" sku="309459186" title="165/84A(XS)" stcok="48">165/84A(XS)</a>	
                                    <a id="size_options_entity_2128926" price="1,699.00" final_price="1,699.00" entity_id="2128926" sku="309459187" title="165/88A(S)" stcok="49">165/88A(S)</a>	
                                    <a id="size_options_entity_2128904" price="1,699.00" final_price="1,699.00" entity_id="2128904" sku="309459188" title="170/96A(M)" stcok="55">170/96A(M)</a>	
                                    <a id="size_options_entity_2128916" price="1,699.00" final_price="1,699.00" entity_id="2128916" sku="309459189" title="170/100A(L)" stcok="48">170/100A(L)</a>	
                                </span>
                            </div>
                           
                        </div>
                        <div class="amount dd clearfix" id="qty-options">
                            <label class="pull-left">数量：&nbsp;</label>
                            <ul class="pdpAddNumDrawerPc" style="float: left; width: 42px; height: 42px;">
                                <li class="cur active" style="left: 0px;"><a id="set_qty_pc_1" href="javascript:void(0);" class="set_qty_pc now active">1</a></li>
                                <li style="left: 0px;"><a id="set_qty_pc_2" href="javascript:void(0);" class="set_qty_pc">2</a></li>
                                <li style="left: 0px;" class=""><a id="set_qty_pc_3" href="javascript:void(0);" class="set_qty_pc">3</a></li>
                            </ul>
                            <label class="pull-left labelPull">&nbsp;件</label>
                        </div>
                        
                    </div>
                </dl>
            </div>
            <div class="product-options-bottom">
                <div class="price-box">
                    <span>颜色：</span>
                    <span id="totalShowColor">石楠灰</span><br> 
                    <span>尺码：</span>
                    <span id="totalShowSize">请选择</span><br>
                    <span> 计价：</span>
                    <span class="price">￥											<span id="totalShowPrice">1,699.00</span>
                    </span>
                </div>
                <div class="add-to-cart pull-right">
                    <div id="addCartLoading" class="loading" style="display: none"></div>
                    <div id="submitCheck" class="tipPosition hideAll">
                            <div id="tipText" class="tipText">请先选择合适尺码然后购买</div>
                            <div id="tipIcon" class="tipIcon"></div>
                        </div>
                    <button type="button" id="addButton" title="加入购物袋" class="btn-nocart" onclick="addCart()">加入购物袋</button>
                    <div id="ajax-loading"></div>
                </div>
            <div id="addPprompt" class></div>
            </div>
        </div>
    </div>
</div>
        
                    `
        $("#rightmain").html(html)

    }

})