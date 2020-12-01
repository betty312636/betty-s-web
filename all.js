$(document).ready(function() {
    // $('html').niceScroll();

    /* $('html').niceScroll({
      cursorcolor: "#d4c4a9",
      background: "#f0e8db",
      autohidemode: false, 
      cursorwidth: "10px", 
      cursorborder: "0",
      cursorborderradius: "20px",
      cursorminheight: 100,
      scrollspeed: 60,
    }); */

    // 歡迎視窗和pad手機時間軸浮現
    // $('.greet_title').animate({ opacity: 1 }, 1000);
    // $('.pad_time_bar_all').addClass('fadeInUp');
    // $('.mob_time_bar_all').addClass('fadeInUp');

    // ================================================

    // 導覽列滾動到該位置
    $(".move").on("click", function() {
        var to = $(this).attr("href");
        $("html").animate({
            scrollTop: $(to).position().top - 50
        }, 1000);

        return false;
    });

    // ================================================

    // 手機導覽列
    $('.menu_mob_btn_all').on('click', function() {
        $('.menu_mob_list_all').slideToggle();
    })

    // ================================================

    // 按下箭頭捲到經驗區塊
    $('.arrow').click(function() {
        $('html,body').animate({ scrollTop: $('main').offset().top - 50 }, 700);
    });

    // ================================================

    // 圖片輪播
    // $('.slider').slick({
    //     arrows: false,
    //     dots: true,
    //     fade: true,
    //     infinite: true,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 2000,
    // });

    // ================================================

    // 邊捲動邊浮現各個區塊
    $(window).scroll(function() {

        // 如果卷軸高度大於等於experience最上面高度又-300px時
        // 時間軸往上fade in
        // 往下以此類推
        if ($(window).scrollTop() >= $('#experience').offset().top - 500) {
            $('.time_bar_all').addClass('fadeInUp');
        }

        if ($(window).scrollTop() >= $('#about').offset().top - 500) {
            $('.about_content_all').addClass('fadeInUp');
        }

        if ($(window).scrollTop() >= $('#skills').offset().top - 500) {
            $('.skills_content').addClass('fadeInUp');

            $('.progress1').addClass('animated1');
            $('.progress2').addClass('animated2');
            $('.progress3').addClass('animated3');
            $('.progress4').addClass('animated4');
            $('.progress5').addClass('animated5');
            $('.progress6').addClass('animated6');
            $('.progress7').addClass('animated7');

            $('.hex1').addClass('hex1_ani');
            $('.hex2').addClass('hex2_ani');
            $('.hex3').addClass('hex3_ani');
            $('.hex4').addClass('hex4_ani');
            $('.hex5').addClass('hex5_ani');
            $('.hex6').addClass('hex6_ani');
            $('.hex7').addClass('hex7_ani');
        }

        if ($(window).scrollTop() >= $('#profolio').offset().top - 500) {
            $('.profolio_content').addClass('fadeInUp');
        }
    });


    // ================================================

    // gotop卷軸到最上面

    $("#gotop").on('click', function() {
        // $(this).toggleClass('gotop-opacity');

        $("html, body").animate({
            scrollTop: 0,
            /* 到達網頁最上面 */
        }, 1000);

    });

    if ($(window).scrollTop() == 0) {
        $("#gotop").hide();
    }


    $(window).scroll(function() {

        if ($(window).scrollTop() == 0) {
            $("#gotop").hide();
        }

        if ($(window).scrollTop() >= 500) {
            $("#gotop").show();
        }

    })


    // ================================================

    let date = new Date();
    let nowYear = date.getFullYear();
    $(".copyright").html(`
        <i class="fas fa-copyright"></i>copyright ${nowYear} Kayla
    `);
})