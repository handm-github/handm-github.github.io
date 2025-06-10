$(function() {
    const $htmlBody = $('html, body');             // html + body 스크롤 대상
    const $window = $(window);                     // window
    let windowHeight = $window.height();           // 창 높이
    let currentPage = Math.round($window.scrollTop() / windowHeight); // 현재 페이지 인덱스
    const lastPageindex = $('.page').length - 1;   // 마지막 페이지 인덱스

    // 페이지로 스크롤하는 함수
    function scrollToPage(index, duration = 500) {
        const targetTop = windowHeight * index;
        currentPage = index;
        $htmlBody.stop().animate({ scrollTop: targetTop }, duration);
    }

    // 초기 정렬
    scrollToPage(currentPage, 10);

    // 마우스 휠 이벤트
    window.addEventListener('wheel', function(e) {
        const isModalOpen = $('#videoModal').is(':visible') || $('#imagePopup').hasClass('show');
        if (isModalOpen) return; // 팝업/모달 떠 있으면 무시

        e.preventDefault();
        if ($htmlBody.is(':animated')) return;

        if (e.deltaY > 0 && currentPage < lastPageindex) {
            scrollToPage(currentPage + 1);
        } else if (e.deltaY < 0 && currentPage > 0) {
            scrollToPage(currentPage - 1);
        }
    }, { passive: false });


    // 창 크기 변경 시
    $window.on('resize', function() {
        windowHeight = $window.height();
        scrollToPage(currentPage, 10);
        console.log('RESIZE: windowHeight = ' + windowHeight);
    });

    // 메뉴 클릭 시
    $('#nav a').click(function(e) {
        e.preventDefault();
        const href = $(this).attr('href');
        const $target = $(href);

        if ($target.length > 0) {
            const offsetTop = $target.offset().top;
            const targetindex = Math.round(offsetTop / windowHeight);
            scrollToPage(targetindex);
            console.log('메뉴 클릭: 이동할 href=' + href + ', currentPage=' + targetindex);
        }
    });

    // 페이지 애니메이션
    function animatePagesOnScroll() {
        $('.page').each(function() {
            const $page = $(this);
            const pgTop = $page.offset().top;
            const scrollTop = $window.scrollTop();

            if (scrollTop + windowHeight * 0.5 > pgTop) {
                $page.addClass('visible');
            } else {
                $page.removeClass('visible');
            }
        });
    }

    animatePagesOnScroll();
    $window.on('scroll resize', function() {
        windowHeight = $window.height();
        animatePagesOnScroll();
    });

    // Top 버튼 클릭
    $('#top_button').click(function() {
        currentPage = 0;
        $htmlBody.stop().animate({ scrollTop: 0 }, 500);
    });

    // 코딩 동영상 방향 클래스 추가
    $('.video-box').each(function(i) {
        $(this).addClass(i % 2 === 0 ? 'from-left' : 'from-right');
    });

    function animateVideoBoxesOnScroll() {
        $('.video-box').each(function() {
            const $box = $(this);
            const boxTop = $box.offset().top;
            const boxBottom = boxTop + $box.outerHeight();
            const scrollTop = $window.scrollTop();
            const scrollBottom = scrollTop + $window.height();
            const isVisible = scrollBottom > boxTop + 30 && scrollTop < boxBottom - 30;

            if (isVisible) {
                $box.addClass($box.hasClass('from-left') ? 'slide-in-left' : 'slide-in-right')
                    .removeClass($box.hasClass('from-left') ? 'slide-in-right' : 'slide-in-left');
            } else {
                $box.removeClass('slide-in-left slide-in-right');
            }
        });
    }

    $window.on('scroll load resize', animateVideoBoxesOnScroll);

// 동영상 모달
$('.video-box').click(function () {
    const videoUrl = $(this).data('video');
    const $modal = $('#videoModal');
    const $iframe = $('#modalIframe');

    $iframe.attr('src', videoUrl);
    $modal.fadeIn();
    $('body').addClass('no-scroll');  // 스크롤 비활성화
});
//닫기 버튼
$('.close-button').click(function () {
    $('#modalIframe').attr('src', '');
    $('#videoModal').fadeOut();
    $('#imagePopup').removeClass('show');
    $('body').removeClass('no-scroll'); // 스크롤 다시 활성화
});

// 이미지 팝업
$('#banner_projects img, .poster_image').on('click', function () {
    const imgSrc = $(this).attr('src');
    const exit = imgSrc.substring(imgSrc.lastIndexOf('.'));
    const baseName = imgSrc.substring(0, imgSrc.lastIndexOf('.'));
    const orginImg = baseName + '_origin' + exit;

    $('#popupImage').attr('src', orginImg);
    $('#imagePopup').addClass('show');
    $('body').addClass('no-scroll');  // 스크롤 비활성화
});
// ===============================================
// 모달 영상 및 이미지 팝업시 페이지 스크롤링 차단
function closeAllPopups() {
    $('#modalIframe').attr('src', '');
    $('#videoModal').fadeOut();
    $('#imagePopup').removeClass('show');

    // 팝업이 완전히 닫히고 나서 scroll 해제
    setTimeout(function () {
        const modalVisible = $('#videoModal').is(':visible');
        const popupVisible = $('#imagePopup').hasClass('show');
        if (!modalVisible && !popupVisible) {
            $('body').removeClass('no-scroll');
        }
    }, 400); // fadeOut 시간보다 약간 여유 있게
}

$('.close-button').click(closeAllPopups);
// ===============================================
// 헬퍼 함수: 요소가 뷰포트 안에 있는지 확인
//이걸로 중복된 함수를 통합해 버렸다.
function isInView($element, offset = 0) {
    const scrollTop = $window.scrollTop();
    const scrollBottom = scrollTop + $window.height();
    const elementTop = $element.offset().top;
    const elementBottom = elementTop + $element.outerHeight();
    return scrollBottom > elementTop + offset && scrollTop < elementBottom - offset;
}
// ===============================================

// li 요소 순차 애니메이션 (숨김 해제)
// 이걸로 모바일 너비일때, 페이지가 본래 한페이지당 화면에 보이는 걸 숨겨진 기능을 막았다.
function revealOnScroll() {
    const isMobile = window.innerWidth <= 768;
    $('.hidden').each(function(i) {
        const $element = $(this);

        if (isMobile || isInView($element, 0)) {
            if (!$element.hasClass('show')) {
                setTimeout(() => $element.addClass('show'), i * 200);
            }
        } else {
            $element.removeClass('show');
        }
    });
}

    $window.on('scroll resize', revealOnScroll);
    revealOnScroll();

    // 외부 링크 새창
    $('.page_warp').on('click', function() {
        const link = $(this).data('link');
        if (link) window.open(link, '_blank');
    });

    // 스킬 그래프 애니메이션
    function animateSkillBars() {
        $('.skill-bar').each(function() {
            const $bar = $(this);
            const $fill = $bar.find('.fill');
            const $percent = $bar.find('.percentage');
            if ($fill.hasClass('animate-on-visible')) return;

            const rect = $fill[0].getBoundingClientRect();
            const visible = rect.top < window.innerHeight && rect.bottom > 0;

            if (visible) {
                $fill.addClass('animate-on-visible');
                const target = parseInt($percent.text());
                $({ countNum: 0 }).animate({ countNum: target }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function() {
                        $percent.text(Math.floor(this.countNum) + '%');
                    },
                    complete: function() {
                        $percent.text(target + '%');
                    }
                });
            }
        });
    }

    $window.on('scroll resize', animateSkillBars);
    animateSkillBars();

// 배너 이미지 확대 애니메이션
function checkVisibleAnimations() {
    $('.zoom-in').each(function(i) {
        const $element = $(this);

        if (isInView($element, 50)) {
            if (!$element.hasClass('visible')) {
                setTimeout(() => $element.addClass('visible'), i * 200);
            }
        } else {
            $element.removeClass('visible');
        }
    });
}

    $window.on('scroll resize', checkVisibleAnimations);
    checkVisibleAnimations();

});
