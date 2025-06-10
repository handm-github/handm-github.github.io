        $(function(){
            // 이미지가 넘어가는 시간 간격
            const INTERVAL = 2000;

            //프로그램에서 참조하는 요소를 미리 탐색
            const $imageList = $('#imageSlide > ul');

            // 1. 일정한 시간마다
            let timerId = window.setInterval(slideImage, INTERVAL);
            //========================================================
            $('#imageSlide').on({
                // 2. #imageSlide 요소의 영역에 마우스 포인터가 들어가면
                mouseenter: function(){
                    // 2.1. <ul> 요소의 움직임을 멈추게 한다.
                    window.clearInterval(timerId);
                },
                
                // 3. #imageSlide 요소의 영역에서 마우스 포인터가 빠져나가면
                mouseleave: function(){
                    // 3.1. <ul> 요소가 다시 움직이세 한다.
                    timerId = window.setInterval(slideImage,INTERVAL);
                }
            });
            //========================================================

            // window.setInterval(function(){
            //     // 1.1. <ul> 요소를 #imageList 요소의 너비만큼 왼쪽으로 이동시킨다.
            //     $imageList.animate({marginLeft:'-100%'},function()
            //     {
            //          $imageList.removeAttr('style').children(':first').appendTo(this); 
            //     });

            // },INTERVAL);

        
    //===================================================================================

    $('#next').on('click',slideImage);
    // 5. #prev 요소를 클릭하면
    $('#prev').on('click', function(){
        /*
         * 5.1. #imageListSlide 요소의 영역에 표시된 이미지의 이전 이미지를 표시한다.
         * 5.1.1. 이전 이미지, 즉 <ul> 요소의 마지막 자식 요소를 <ul> 요소의 처음으로 옮긴다.
         * 
         // $imageList.children(':last').prependTo($imageList);
         $imageList.prepend( $iamgeList.children(':last') );    //반환하는 객체: $imageList

         * 5.1.2. <ul>요소의 첫 번째 자식 요소가 #imageSlide 요소의 영역 왼쪽에 배치되도록,
                  <ul> 요소를 #iamgeSlide 요소의 너비만큼 왼쪽으로 이동한다.
         $imageList.css('margin-left')
 
         * 5.1.3. <ul>요소를 #imageList 요소의 너비만큼 오른쪽으로 이동시킨다.
         $imageList.animate({marginleft: 0});
         */
        // $imageList.children(':last').prependTo($imageList);
        $imageList.prepend($imageList.children(':last')) //반환하는 객체: $imageList
                  .css('margin-left' , '-100%').animate({marginLeft: 0});
    });
    //===================================================================================
        function slideImage()
        {
            // 1.1. <ul> 요소를 #imageSlide 요소의 너비만큼 왼쪽으로 이동시킨다.
            $imageList.animate({ marginLeft: '-100%'}, function(){
                // 1.2. <ul> 요소의 움직임이 끝나면
                // 1.3. <ul> 요소에 설정했던 스타일 속성들을 제거하고
                // 1.4. <ul> 요소의 첫 번째 자식 요소를 <ul> 요소의 마지막으로 옮긴다.
                $imageList.removeAttr('style').children(':first').appendTo(this);
            });
        }
    });