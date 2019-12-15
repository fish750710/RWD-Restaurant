$(document).ready(function() {
	// $('.burger-menu').on('click',function(e){
	// 	e.preventDefault();
	// 	$('body').toggleClass('show-menu');
	// });

	$(".menuButton > a").click(function(e) {
		e.preventDefault();
    	$(".menuButton > a").toggleClass("change");
    	$("body").toggleClass("show-menu");
      $("#close-menu").toggleClass("close-menu");
      
 	});

  //選單以外區域點選後關閉選單
  $('#close-menu').click(function(e){
    
    e.preventDefault();
    $("body").removeClass("show-menu");
    $("#close-menu").removeClass("close-menu");
    $(".menuButton > a").removeClass("change");
  })

 	//index-lightbox效果
	 lightbox.option({
      'resizeDuration': 1000,
      'wrapAround': true
    });

	 //index-下拉選單錨點-第一種寫法

  // $('.tosecret').click(function(event) {
  //   event.preventDefault();
  //   $('html,body').animate({
  //     scrollTop: $('.secret').offset().top-50
  //   }, 1000)
  // });

  // $('.tochef').click(function(event) {
  //   event.preventDefault();
  //   $('html,body').animate({
  //     scrollTop: $('.chef').offset().top-50
  //   }, 1000)
  // });

  // $('.tomap').click(function(event) {
  //   event.preventDefault();
  //   $('html,body').animate({
  //     scrollTop: $('.map').offset().top-50
  //   }, 1000)
  // });

  //index-下拉選單錨點-第二種寫法
  $('.menu-btn').click(function(e){ //所有相同class名稱
    e.preventDefault();
    var target = $(this).attr('href'); //抓取ID名稱
    var targetPos = $(target).offset().top-50 ; //ID的 y 位置 絕對位置body，offset().left是x軸位置
     $('html , body').animate({scrollTop: targetPos},1000); //滾動到指定ID位置
  });


  //index
   $(window).scroll(function(){ //偵測畫面滾動
      var windowHeight = $(window).height(); //目前視窗高度
      var scrollPos = $(window).scrollTop(); //目前滾動到位置
 
       //css位移漸出
       $('.evaluation').each(function(){
        var thisPos = $(this).offset().top;
        // console.log(thisPos);
        if(( (windowHeight/1.3) + scrollPos ) >= thisPos ) { //視窗高度+目前滾動位置 >= evaluation的位置
            $(this).addClass('evaluation-fadeIn');
          }
       });


       //滾動到相對的ID位置，menu選單會active
       $('.menu-btn').each(function(){ //所有相同class名稱
        var target = $(this).attr('href'); //抓取ID名稱
        var targetPos = $(target).offset().top-50 ; //ID的 y 位置 絕對位置body，offset().left是x軸位置
        var targetHeight = $(target).outerHeight(); //ID的高度  含padding的外框範圍
        // console.log(target, targetPos, targetHeight);

        if(targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos ){    //滾動位置>=ID位置 && 滾動到ID區塊範圍內
      
          $('.menu-btn').removeClass('active'); //先移除menu上的avtive
          $(this).addClass('active'); //menu下面的紅線
          // console.log(this);
        
        } else{
          $(this).removeClass('active');
        }


       });
   });






  //shop-like
  
    $('.like').click(function(e){
      e.preventDefault();
        $(this).next('.like-checked').css('display','block');
        $(this).css('display','none');
        $('.like-message').hide();
        $('.dislike-message').fadeIn().delay(800).fadeOut();
                
    })
    $('.like-checked').click(function(e){
      e.preventDefault();
        $(this).css('display','none');
        $(this).prev('.like').css('display','block');
        
        $('.dislike-message').hide();
        $('.like-message').fadeIn().delay(800).fadeOut();
    })

  //shop-cart
    $('.join-cart').click(function(e){
      e.preventDefault();
      $(this).css('display','none');
      $(this).next('.joined-cart').css('display','block');
      $('.join-cart-message').hide();
      $('.joined-cart-message').fadeIn().delay(800).fadeOut();

    })
    $('.joined-cart').click(function(e){
      e.preventDefault();
      $(this).css('display','none');
      $(this).prev('.join-cart').css('display','block');
      $('.joined-cart-message').hide();
      $('.join-cart-message').fadeIn().delay(800).fadeOut();
    })


    //圖片輪播 Autoplay樣式
   var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      
    
    });
   //游標在圖檔裡暫停播放
   $(".swiper-container").hover(function() {
    (this).swiper.autoplay.stop();
   }, function() {
    (this).swiper.autoplay.start();
   });





});

// Google Map API
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('Googlemap'), {
    center: { lat: 25.084387, lng: 121.495126 },  //地圖的中心位置
    zoom: 17
  });

  let data = [
    {
      position: { lat: 25.083367, lng: 121.495756 },
      map: map, //指定到這一個map
      title: '我標註的位置一' //游標滑過去顯示文字
    },
    {
      position: { lat: 25.082842, lng: 121.496115 },
      map: map, //指定到這一個map
      title: '我標註的位置二' //游標滑過去顯示文字

    }
  ];

  for (let i = 0; i < data.length; i++) {
    let marker = new google.maps.Marker(data[i]);
  };

  //標註一個點
  // var marker = new google.maps.Marker({
  //   position: { lat: 25.083367, lng: 121.495756 },
  //   map: map, //指定到這一個map
  //   title: '我標註的位置' //游標滑過去顯示文字
  // });
}
