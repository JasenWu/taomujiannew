<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<div class="banner">
    <div class="slider js-slider3">
        <ul class="pic js-slider-img-wrap">
            <li><a title="大将军新服" href="#"><img width="437" height="306" src="<?php echo IMG_PATH;?>1.jpg" alt=""></a></li>
            <li><a title="铁血大宋新服" href="#"><img width="437" height="306" src="<?php echo IMG_PATH;?>2.jpg" alt=""></a></li>
            <li><a title="梦幻之城新服" href="#"><img width="437" height="306" src="<?php echo IMG_PATH;?>4.jpg" alt=""></a></li>
        </ul>
        <ul class="num js-slider-num-wrap">
            <li class="cur">1<div class="tip">demo1</div><div class="triangle">sj</div></li>
            <li class="">2<div class="tip">demo2 </div><div class="triangle">sj</div></li>
            <li class="">4<div class="tip">demo4 </div><div class="triangle">sj</div></li>
        </ul>
    </div><!-- .slider -->

</div>
<article class="main">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <img src="<?php echo IMG_PATH;?>subject/images/technology.png"/>
            </div>
            <div class="col-md-4">
                <img src="<?php echo IMG_PATH;?>subject/images/manufacturing.png"/>
            </div>
            <div class="col-md-4">
                <img src="<?php echo IMG_PATH;?>subject/images/salse&service.png"/>
            </div>

        </div>
    </div>
    <div class="three-column">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <title>
                        关于我们
                    </title>
                    <article>
                        海桃木剑电子科技有限公司坐落于中国上海，依托上海强大的科研和工业技术优势，长期致力于各类防盗标签产吕的研发和制作长期致力于各类防盗标签产吕的研发和制作长期致力于各类防盗标签产吕的研发和制作长期致力于各类防盗标签产吕的研发和制作。通过公司七年的努力和发展，已经成为集研发、生产销售为一体...
                    </article>
                </div>


            </div>
        </div>
    </div>

</article>

<?php include template("content","footer"); ?>

<script src="<?php echo JS_PATH;?>zepto.js"></script>
<script src="<?php echo JS_PATH;?>zepto.slider-min.js"></script>
<script>
    $(function(){
        function rightVal(){
            var winWidth = parseInt($(window).width()),
                    focusWidth = parseInt($(".js-slider-num-wrap").width());
            return  (winWidth - focusWidth) / 2;
        }
        $(".js-slider-num-wrap").css("right",+rightVal()+"px").css("bottom","10px");

        $(".js-slider3").slider({direction: "left"});

    })

</script>