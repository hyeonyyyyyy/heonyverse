$(document).ready(function(){

    //스킬바 실행
    function skillActive(){
        $('.gauge').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.animate({
                width: per + "%"
            },1000);
        });
    }
    //스킬바 멈춤
    function skillStop(){
        $('.gauge').each(function () {
            var $this = $(this);
            var per = $this.attr('per');
            $this.animate({
                width: 0
            });
        });
    }
    
    if($(window).width()>=1281){

        
        $('#fullpage').fullpage({
            anchors:['','profile','review','guestbook','contactus',''],
            navigation:true,
            navigationTooltips:['Main','Profile','Review','Guestbook','Contact Us','Copyright'],
        
            onLeave:function(index){
                if(index==1){
                    skillActive();  
                    $('.like').addClass('active');
                }
                if(index==2){                
                    skillStop();
                    $('.like').removeClass('active');
                }
                if(index==3){
                    skillActive();
                    $('.like').addClass('active');
                }
                if(index==4){
                    skillStop();
                }
                if(index==5){
                    skillStop();
                }
                
            }
            
            
        });

        // 리뷰 슬라이드

        var swiper = new Swiper(".reviewSwiper", {
            loop : true,
            loopAdditionalSlides : 1,
            slidesPerView: 3,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".review .swiper-button-next",
                prevEl: ".review .swiper-button-prev",
              },
          });
    
    }else{
            $("a").on('click', function(event) {
            if (this.hash !== "") {
            event.preventDefault();
             var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
                });
            } 
          });
       
        $('.ham').click(function(){
            $('.popup').animate({'top':'0' });
            // 화면 스크롤 막음
          });
          //팝업 메뉴의 닫기 버튼을 클릭하면 팝업 메뉴가 위로 들어감
          $('.close').click(function(){
            $('.popup').animate({'top':'-100%'})
            //윈도우의 화면 스크롤 활성화
            $('html,body').css('overflow-y','visible');
    
          });
          $('.popup ul li a').click(function(){
            $('.popup').animate({'top':'-100%'})
            //윈도우의 화면 스크롤 활성화
            $('html,body').css('overflow-y','visible');
    
          });
 
          
        // 모바일 스킬바
        $(window).scroll(function(){
            //윈도우 스크롤탑 값을 cur_pos에 저장
            var cur_pos=$(this).scrollTop();
            //프로필영역 시작 위치를 top 변수에 저장
            var top=$('.profile').offset().top;
            //프로필영역 마지막 위치를 bottom 변수에 저장
            var bottom=top + $('.profile').outerHeight();
            //스킬바의 위치가 top과 bottom사이에 있으면
            if(cur_pos >= top && cur_pos <= bottom){
                $('.like').addClass('active');
            }else{
                $('.like').removeClass('active');
            }
        });
        $(window).scroll(function(){
            //윈도우 스크롤탑 값을 cur_pos에 저장
            var cur_pos=$(this).scrollTop();
            //프로필영역 시작 위치를 top 변수에 저장
            var top=$('.leftbox').offset().top;
            //프로필영역 마지막 위치를 bottom 변수에 저장
            var bottom=top + $('.leftbox').outerHeight();
            //스킬바의 위치가 top과 bottom사이에 있으면
            if(cur_pos >= top && cur_pos <= bottom){
                $('.progressbar').addClass('active');
            }else{
                $('.progressbar').removeClass('active');
            }
        });
    

        // 리뷰 슬라이드

        var swiper = new Swiper(".reviewSwiper", {
            loop : true,
            loopAdditionalSlides : 1,
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
                nextEl: ".review .swiper-button-next",
                prevEl: ".review .swiper-button-prev",
              },
          });

    }
                   // ScrollMagic 사용
            // 그 외 scrollreveal 등등
            const spyEls = document.querySelectorAll('section.scroll-spy');
            spyEls.forEach(function (spyEl) {
            // 메소드 체이닝
            new ScrollMagic.Scene({ // 감시할 장면(Scene) 추가 및 옵션 지정
                triggerElement: spyEl, // 감시할 요소를 지정
                triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시(0~1 사이 지정)
            })
                .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
                .addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당
            });



});

