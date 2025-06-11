document.addEventListener("DOMContentLoaded", function () {
  // 🔁 1. 작가 소개창 사진 카드 뒤집기
  const card = document.querySelector(".flip-card");
  if (card) {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });
  }

  // ▶️ 2. 짤툰의 최신 유튜브 영상 기능
  const youtubeURL = "https://www.youtube.com/watch?v=hKys6dSA4vM";
  const videoId = youtubeURL.split("v=")[1];
  const embedURL = `https://www.youtube.com/embed/${videoId}`;

  const iframe = document.getElementById("recent_video");
  if (iframe) iframe.src = embedURL;

  const explanation = "이 영상은 우리가 다음 단계로 나아가기 위해 꼭 봐야 할 이야기입니다. 지금 확인해보세요!";
  const explainSpan = document.getElementById("recent_video_explain");
  if (explainSpan) explainSpan.innerText = explanation;

  // 📊 3. 랭킹 동영상 보기
  const globalContainer = document.getElementById('global_iframe_container');
  let currentVideoId = null;

  document.querySelectorAll('#ranking_video_container .video_box').forEach(box => {
    const videoId = box.getAttribute('data-video-id');
    const thumbnail = box.querySelector('.video_thumnail');

    if (videoId && thumbnail) {
      const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      thumbnail.style.backgroundImage = `url(${thumbUrl})`;

      thumbnail.addEventListener('click', () => {
        if (currentVideoId === videoId) {
          globalContainer.style.display = 'none';
          globalContainer.innerHTML = '';
          currentVideoId = null;
        } else {
          globalContainer.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>`;
          globalContainer.style.display = 'flex';
          currentVideoId = videoId;
        }
      });
    }
  });
});


// 캐릭터 컨테이너 창 기능
const characterData1 = [
  {
    name: '유수민',
    img: 'images/human_modal_img.png',
    description: `<p>&nbsp;짐승친구들의 주인공 겸 영원한 집사. 모티브는 작가 본인.</p>
              <p>&nbsp;나이는 만 25세, 경기도 의정부시에 살고 있으며 낙성대학교 국어국문학과에 졸업한 백수다.</p>
              <p>&nbsp;(6기 부터는 천마 파크에 취업하였다.)</p>
            <br>
              <p>&nbsp;자취방에서 짐승친구들을 키우며 항상 짐승친구들에게 당하고산다.</p>
              <p>&nbsp;둘리로 치면 고길동 포지션.</p>
              <p>&nbsp;찌질한 성격을 가지고 있지만 마음은 따뜻하며 항상 짐승친구들에게 짜증이나 화를 내지만
              내심 짐승친구들을 아끼고 소중히 여긴다.</p>
              <p>&nbsp;기본적인 외형은 대머리에 노란색 꽁지털만 한 가닥 나 있다</p>`
  },
  {
    name: '땅땅이',
    img: 'images/cat_modal_img.png',
    description: `<p>&nbsp;건방지고 성격이 더럽지만 귀여운 아기고양이다.</p> 
              <p>&nbsp;건방지고 성격이 더럽지만 귀여운 아기고양이다.<p> 
              <p>&nbsp;짐승친구들의 리더.</p>
               <p>&nbsp;말을 할때 –깡! –땅! –씨오! 등 쎈 발음이 특징.</p>
              <br>
               <p>&nbsp;원래 부잣집에서 풍족하게 살던 집고양이었으나 상남자라면 
              길고양이로 살아야한다는 생각에 집을 나왔다가 일주일만에 
              포기하고 집으로 돌아가려한다.</p>
              <p> 그러나 돌아가는 길을 
              잊어버려 우연히 만난 유수민의 집에서 눌러 살기 시작했다.</p> 
              <br>        
              <p> 싸가지 없고 욕을 입에 달고 사는 거친 성향에 짐승친구들 중 
              발암짓을 제일 노골적으로 많이 하며 작중 대부분의 사건의 
              원흉이 되는지라 유수민의 혈압 올림에 가장 큰 기여를 
              한 캐릭터이다.</p>`
  },
  {
    name: '김현식',
    img: 'images/dog_modal_img.png',
    description: `<p>&nbsp;능글맞고 세상 물정에 밝은 시바견.</p>
              <p>&nbsp;야동을 좋아하며 항상 팻말로 의사소통을 하는 게 특징.</p>
              <br>
              <p>&nbsp;수백만 인스타 팔로워를 보유하고 있는 인플루언서이며, 수민을 '형' 이라고 부른다.</p>
              <br>              
              <p>&nbsp;일본 개지만 독도를 한국땅이라고 주장하는 등 애국심이 투철한 편이다.</p>
              <p>&nbsp;팻말로만 의사소통을 하는 데에는 어린시절 헤어진 엄마와의 가슴 아픈 사연이 있다.</p>`
  },
  {
    name: '새대갈',
    img: 'images/pigeon_modal_img.png',
    description: `<p>어느 날 수민이네 자취방 창문에 갑자기 머리를 박으면서 등장한 비둘기.</p>
              <p>평상시에는 멍청하지만 이따금 팩폭에 능숙한 독설가.</p>
              <p>‘누구세용?’ 이란 말버릇을 가지고 있다.</p>
              <br>
              <p>&nbsp;머리에 강한 충격을 받으면 굉장히 똑똑해지는 특징을 가지고 있다. </p>
              <p>&nbsp;날개가 있지만 비둘기답게 거의 날아다니지 않고 대부분 걸어 다닌다.</p>
              <p>&nbsp;단, 필요한 순간에는 날아다닐 수 있다.</p>
              <br>
              <p>&nbsp;유수민의 집 유리창에 머리를 부딪혀 기절하고 병원에 갔지만 하필 간 병원이 동물병원이 아닌 동물진료도 가능한 비뇨기과였다.</p>
               <br>
              <p>&nbsp; 게다가 의사의 개업 기념 서비스로 의도치 않게 공짜로 중성화 수술을 당해서 
              고자가 되며, 이것 때문에 여러 번 고자 드립을 당한다.</p>`
  },
  {
    name: '슘댱이',
    img: 'images/mouse_modal_img.png',
    description: `<p>가장 마지막으로 등장한 짐승 친구이다.</p>
              <p>"~습니다"는 "~슘댱!" ~습니까는 "~슘걍?", ~합니다는 "~함댱", 
              ~합니까?는 "함걍?"이라고 말해서 이름이 슘댱이다.</p>
              <br>      
              <p>&nbsp; 근육강화 실험을 받아서 제대로 열 받으면 사람도 압도하는 크기의 근육떡대가 된다.</p>
              <p>&nbsp; 이 상태에서는 사람을 주먹질 한 번에 기절시킬 정도의 괴력을 쓸 수 있다.</p>
              <p>&nbsp; 짐승친구들 중 제일 개념 있고 얌전한 데다 유수민을 제대로 주인 취급해 주는 녀석.</p>
              <p>&nbsp; 사고 치고 팩폭 및 쌍욕이 일상인 나머지 셋에 비해 슘댱이는 
              항상 존댓말을 사용하며 수민에게 무슨 일이 생기면 일단 비꼬기부터 
              하는 다른 세 마리와는 다르게 그를 진심으로 걱정해주는 편.<p>
              <p>&nbsp;사고도 제일 안 치고 욕도 거의 하지 않는 등 행적도 제일 얌전한 편이다.<p>`
  }
];

 const characterData2 = [
  {
    name: '빵상 깨랑까랑 빵빵 또로로롱 땅땅 따라라라 땅 띵 똥똥똥똥 띵똥똥 김덕배',
    img: 'images/ailen1_modal_img.png',
    description: `지구정복을 위해 지구에 왔다고 했으나, 사실 잠복근무를 위한 컨셉이었다.
            <br> 초기에는 평범한 조연이었으나,
            <br> 새대갈 특별편에서 엄청난 활약을 하며 네임드 조연으로 격상했다.
            <br>우주경찰 측 입장에서는 어떻게 우주경찰에 합격한 것인지 의문이 될 정도로
            <br>성격은 나름 선량하고 순진한 외계인이지만,
            <br>엄청난 폐급, 고문관 경찰이자 트롤러다. 지구 물건으로 위장해서 잠입한답시고
            <br>우주선을 컴퓨터로 위장해 그대로 날아다니는가 하면,
            <br>장비를 잘못 건드려 일을 망치질 않나, 짐친들한테 속아 외계 무기 2개를
            <br>꽁으로 넘기는 호구짓을 하거나 지구 생물에게 정체를 들켰음에도 기억을
            <br>지우는 뒤처리 하나 안하고 그냥 간 것도 모자라서 그 사실을 상사인 박동팔과 김말숙한테
            <br>아무렇지 않게 떠벌이다 처맞기도 했다. 새대갈을 체포하고 심문할때도 유독 경찰답지 못하게
            <br>감정에 휩쓸려 우는 모습을 자주 보여 박차장에게 욕먹고, 심지어 뒷처리도 엉망으로 해 짐벤져스와
            <br>유수민이 경찰본부까지 쳐들어오는 결과를 낳았다. 다만 우주경찰이 아닌 짐벤져스의 동맹으로서는 
            <br>아주 유능한 모습을 보여주었다. 새대갈 구출작전의 참모 역할을 했을 뿐만 아니라 경비들과
            <br>김과장을 제압하고 직접적으로 새대갈을 구출해내기까지 했다.
            <br>마지막에는 아기 새대갈이 타고 온 우주선을 타임머신으로 개조까지 하는데,
            <br>이로 보아 거의 만전상태의 새대갈에 근접한 지능을 가졌을 수도 있다.
            <br>능력이나 머리 자체가 나쁘다기보다는 그냥 성향이 경찰이라는 직업과 안 맞는 듯.
            <br>그래도 전투력만큼은 우주경찰이라고 할 수 있을 정도로 강하다.`
  },
  {
    name: '빵상빵상 빵빵 또로로롱 땅땅 띵띵 똥똥 땅땅따라라라 깨랑까랑 김말숙',
    img: 'images/ailen2_modal_img.png',
    description: `<p>&nbsp;우주경찰 셋 중 중간에 있는 만큼 가장 고생하는 편인데,
    박동팔의 꼬장을 들어줘야 하는 데다, 폐급 부하인 김덕배가 사고치는 것을 수습해야 하기 때문이다.</p>
    <p>물론, 아예 노예인 김춘식에 비하면 양반이고, 김덕배가 사고칠 수도 있는 상황을 방조했다가
    <p>&nbsp;사고가 나버리는 상황까지 가버리게 만드는 데다,
     김덕배가 사고 친 것을 수습하는 과정에서 
    박동팔의 지시로 은폐하는 것을 방조하거나 명령 그대로 실행하는 것만 해도
     김덕배와 박동팔보다 상대적으로 낫다는 의견도 있지만
      이 외계인도 별반 다를 것 없는 폐급인 것은 마찬가지이다.</p>
      <p>&nbsp; 우주경찰로서의 양심도 땅바닥에 내다버린 지 오래다.</p>
    <p>기억을 지워 증거를 인멸하면 그만이라는 말에 바로 동의한 것을 보면 거기서 거기다.</p>`
  },
  {
    name: '빵빵 또로로롱 땅땅 따라라라 땅 땅 띵띵띵띵 땅똥똥 박동팔',
    img: 'images/ailen3_modal_img.png',
    description: `<p>김덕배와 같은 깨랑까랑별의 외계인으로, 김덕배와 김말숙의 우주 경찰 상사이자 수십년 경력을 가진 베테랑.</p>
    <p>&nbsp; 승진을 노리는 만년 차장이지만 김덕배의 수많은 폐급 행위 때문에 계속 승진을 못하고 있다.<p>
    <p>&nbsp;콧수염이 있고 피부색은 노란색에, 뱅뱅이 안경을 쓰고 있다.</p>
    <p>&nbsp;이래저래 실수도 많이 하고 감성에 매달리기도 하는 김덕배와 달리 우주 경찰답게 감정을 절제하고 냉정한 결정을 내리는 현실적인 경찰.</p>
    <p>&nbsp;주인공들의 적이고 비록 새대갈 에피소드의 최종보스이긴 하지만 악당이 아닌 반동인물 포지션이다.</p>
    <br>
    <p>우주 경찰로서 우주의 질서를 지키기 위해서 행동할 뿐 악의를 가진 인물이 아니고 딱히 새대갈을 잡겠답시고 
    짐승친구들을 납치하여 인질로 삼은 것 외에는 악행을 저지르는 모습을 보이지 않았다.</p>
    <p>애초에 이들의 조직인 우주경찰 자체가 각 짐승친구들 과거/전용 에피소드에서 유일하게 적이지만 빌런이 아닌 인물들이다.</p>
   <p>우주경찰들 편에서는 이견의 여지가 없는 폐급이자 악인으로 비토레텔 별의 김춘식을 노예로 부려먹는 것만 봐도 알수있다.</p>`
  },
  {
    name: '김춘식',
    img: 'images/ailen4_modal_img.png',
    description: ` <p>&nbsp; 본명은 '보라돌이 뚜비 나나 보라돌이 뚜비 뚜비 나나 뽀뽀 키스 쪽쪽 뚜비 뚜비 보라돌이 나나 뽀 퍼렁돌이'.
                <p>&nbsp; 우주경찰의 노예계약으로 인해 김춘식으로 강제로 개명당했으며, 이후 영상에서는 본인을 김춘식으로 소개한다.</p>
                <p>&nbsp; 전직 비토레텔 별 대통령이며 김덕배가 원래 납치대상이었던 여가부 장관 대신 실수로 납치하는 바람에 억울하게
                <p>&nbsp; 고문을 당했으나 그 사이에 비토레텔 별이 운석 충돌로 멸망해서 유일한 생존자가 되었다.</p>
                <br>
                <p>&nbsp; 외계어 번역기를 쓰지 않은 상태에서 말할 때 
                "보라돌이뚜비나나뽀"라고 말하는 것과 행성 이름인
                <p>&nbsp; 비토레텔이 텔레토비를 거꾸로 한 단어인 것.</p>
                <p>&nbsp; 비토리텔 별이 멸망할 때 텔레토비에 나오는 웃고 있는
                해와 비슷한 해가 나오는 것을 보면 모티브는 꼬꼬마 텔레토비로 보인다.</p>`
  },
  {
    name: '햄부기',
    img: 'images/ailen_dog_modal_img.png',
    description: `<p>울음 소리는 햄북이 밈 에 나오는 단어들로 구성되어 있다.</p>
                <p>그래서 이름이 '햄부기 햄북 햄북스딱스 함부르크 햄부가우가 햄비기 햄북어 햄부가티 햄 부기온앤온'이 될 뻔 하다가,
                <br>김덕배가 너무 길다고 짜증을 내서 햄부기가 되었다.</p>
                <p>참깨빵 같은 귀에 몸통은 소시지 같고, 꼬리에는 빨간색 공 같은게 달려있다.</p>
                <p>햄부기가 힘을 주면 꼬리에 빛이 나며 점멸한다. 또한 꼬리를 변형시켜 손처럼 사용 할 수 있다.</p>
                <br><p>김덕배는 처음 봤을 때부터 귀여워 했으며 박동팔은 밖에 버리라고 할 정도로 싫어했지만 김덕배의 반대로 계속 우주선에서 살게 되었다.</p>
                <p>우주경찰청장이 시찰 왔을때 박동팔이 햄부기를 경찰견이라고 둘러댔는데,
                <br>실제로 물건의 냄새를 맡고 물건의 주인을 찾아내는 등 경찰견 역할을 해내기도 한다.</p>`
  }
];

let currentIndex = 0;
let currentData = [];

function showModal(index, data) {
  currentData = data;
  currentIndex = index;
  const character = currentData[currentIndex];

  if (!character) return;

  document.getElementById('modalImg').src = character.img;
  document.getElementById('modalName').textContent = character.name;
  document.getElementById('modalDescription').innerHTML = character.description;
  document.querySelector('.characters_modal_overlay').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  // 모든 .characters_container 처리
  document.querySelectorAll('.characters_container').forEach((container, groupIndex) => {
    const data = groupIndex === 0 ? characterData1 : characterData2;
    container.querySelectorAll('.characters_thumnail').forEach((el, index) => {
      el.addEventListener('click', () => showModal(index, data));
    });
  });

  // 닫기 버튼
  const closeBtn = document.getElementById('modal_close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.querySelector('.characters_modal_overlay').style.display = 'none';
    });
  }

  // 이전/다음 버튼
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
      showModal(currentIndex, currentData);
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % currentData.length;
      showModal(currentIndex, currentData);
    });
  }
});

function showModal(index, data) {
  const modalImg = document.getElementById('modalImg');
  const character = data[index];

  // 슬라이드 효과: 페이드아웃 → 내용 변경 → 페이드인
  modalImg.style.opacity = 0;
  modalImg.style.transform = 'translateX(0px)';

  setTimeout(() => {
    currentData = data;
    currentIndex = index;

    modalImg.src = character.img;
    document.getElementById('modalName').textContent = character.name;
    document.getElementById('modalDescription').innerHTML = character.description;

    modalImg.style.transform = 'translateX(0px)';
    modalImg.style.opacity = 1;
  }, 200); // transition 시간과 맞춤

  document.querySelector('.characters_modal_overlay').style.display = 'block';
}
