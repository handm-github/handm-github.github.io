$(document).ready(function() {
  // 모든 아이콘을 초기에 중앙 로고 위치로 설정
  const centerX = 50; // 중앙 로고의 left 값
  const centerY = 50; // 중앙 로고의 top 값
  
  // 각 아이콘을 중앙 위치로 초기화
  $('.pos1, .pos2, .pos3, .pos4, .pos5, .pos6').each(function() {
    $(this).css({
      'top': centerY + '%',
      'left': centerX + '%',
      'transform': 'translate(-50%, -50%) scale(0)',
      'opacity': '0'
    });
  });
  
  // 고리 초기화 - 원래 위치에서 scale만 0으로 설정
  $('.circle-bg').css({
    'transform': 'scale(0)',
    'opacity': '0',
    'transform-origin': 'center center' // 중심점에서 확대되도록
  });

  // 중앙 로고도 초기화
  $('.gongcha_logo_ikon').css({
    'transform': 'translate(-50%, -50%) scale(0)',
    'opacity': '0'
  });

  // 1. 중앙 로고 페이드인 (제자리에서)
  setTimeout(function() {
    $('.gongcha_logo_ikon').css({
      'transform': 'translate(-50%, -50%) scale(1)',
      'opacity': '1'
    });
  }, 200);

  // 2. 로고 등장 후 -> 고리 중앙에서 확대
  setTimeout(function() {
    $('.circle-bg').css({
      'transform': 'scale(1)',
      'opacity': '1'
    });
  }, 800);

  // 3. 고리 등장과 동시에 아이콘들이 중앙에서 각자 위치로 퍼져나감
  setTimeout(function() {
    // 각 아이콘을 순차적으로 최종 위치로 이동
    const icons = ['.pos1', '.pos2', '.pos3', '.pos4', '.pos5', '.pos6'];
    const finalPositions = [
      { top: '10%', left: '55%', transform: 'translate(-50%, 0)' },
      { top: '39%', left: '87%', transform: 'translate(-50%, -50%)' },
      { top: '71%', left: '85%', transform: 'translate(-50%, -50%)' },
      { top: '97%', left: '53%', transform: 'translate(-50%, -100%)' },
      { top: '71%', left: '21%', transform: 'translate(-50%, -50%)' },
      { top: '39%', left: '21%', transform: 'translate(-50%, -50%)' }
    ];

    icons.forEach((iconClass, index) => {
      setTimeout(() => {
        const $icon = $(iconClass);
        const finalPos = finalPositions[index];
        
        // 최종 위치로 이동하면서 크기와 투명도 조절
        $icon.css({
          'top': finalPos.top,
          'left': finalPos.left,
          'transform': finalPos.transform + ' scale(1)',
          'opacity': '1'
        });
        
        // show 클래스도 추가 (hover 효과를 위해)
        $icon.addClass('show');
      }, index * 100); // 각 아이콘이 0.1초 간격으로 퍼져나감
    });
  }, 1200);
});