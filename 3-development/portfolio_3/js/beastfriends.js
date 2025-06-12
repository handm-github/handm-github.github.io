// 캐릭터 컨테이너 창 기능
const NookieCharacterData= [
  {
    name: '유수민',
    img: 'images/human_wholebody.png',
    description: `<p>&nbsp;짐승친구들의 주인공 겸 영원한 집사. 모티브는 작가 본인.</p>
              <p>&nbsp;나이는 만 25세, 경기도 의정부시에 살고 있으며 낙성대학교 국어국문학과에 졸업한 백수다.</p>
              <p>&nbsp;(6기 부터는 천마 파크에 취업하였다.)</p>
            <br>
              <p>&nbsp;자취방에서 짐승친구들을 키우며 항상 짐승친구들에게 당하고산다.</p>
              <p>&nbsp;둘리로 치면 고길동 포지션.</p>
              <p>&nbsp;찌질한 성격을 가지고 있지만 마음은 따뜻하며 항상 짐승친구들에게 짜증이나 화를 내지만
              내심 짐승친구들을 아끼고 소중히 여긴다.</p>
              <p>&nbsp;기본적인 외형은 대머리에 노란색 꽁지털만 한 가닥 나 있다</p>`,
     quote: `하... 이런 개씨ㅂ...`
  },
  {
    name: '땅땅이',
    img: 'images/cat_wholebody.png',
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
              한 캐릭터이다.</p>`,
     quote: `야 이 찌발럼아!`
  },
  {
    name: '김현식',
    img: 'images/dog_wholebody.png',
    description: `<p>&nbsp;능글맞고 세상 물정에 밝은 시바견.</p>
              <p>&nbsp;야동을 좋아하며 항상 팻말로 의사소통을 하는 게 특징.</p>
              <br>
              <p>&nbsp;수백만 인스타 팔로워를 보유하고 있는 인플루언서이며, 수민을 '형' 이라고 부른다.</p>
              <br>              
              <p>&nbsp;일본 개지만 독도를 한국땅이라고 주장하는 등 애국심이 투철한 편이다.</p>
              <p>&nbsp;팻말로만 의사소통을 하는 데에는 어린시절 헤어진 엄마와의 가슴 아픈 사연이 있다.</p>`,
    quote: `(팻말)또옹~`
  },
  {
    name: '새대갈',
    img: 'images/pigeon_wholebody.png',
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
              고자가 되며, 이것 때문에 여러 번 고자 드립을 당한다.</p>`,
    quote:`누구세용?`
  },
  {
    name: '슘댱이',
    img: 'images/mouse_wholebody.png',
    description: `<p>가장 마지막으로 등장한 짐승 친구이다.</p>
              <p>"~습니다"는 "~슘댱!" ~습니까는 "~슘걍?", ~합니다는 "~함댱", 
              ~합니까?는 "함걍?"이라고 말해서 이름이 슘댱이다.</p>
                          
              <p>&nbsp; 근육강화 실험을 받아서 제대로 열 받으면 사람도 압도하는 크기의 근육떡대가 된다.</p>
              <p>&nbsp; 이 상태에서는 사람을 주먹질 한 번에 기절시킬 정도의 괴력을 쓸 수 있다.</p>
              <p>&nbsp; 짐승친구들 중 제일 개념 있고 얌전한 데다 유수민을 제대로 주인 취급해 주는 녀석.</p>
              <p>&nbsp; 사고 치고 팩폭 및 쌍욕이 일상인 나머지 셋에 비해 슘댱이는 
              항상 존댓말을 사용하며 수민에게 무슨 일이 생기면 일단 비꼬기부터 
              하는 다른 세 마리와는 다르게 그를 진심으로 걱정해주는 편.<p>
              <p>&nbsp;사고도 제일 안 치고 욕도 거의 하지 않는 등 행적도 제일 얌전한 편이다.<p>`,
    quote:`~슘댱!`
  }
];

    // GridCharactersData: 16개 캐릭터 샘플 구조 생성
const GridCharactersData = [
    {
    name: "임혜정",
    simpleExplain: "유수민 엄마",
    img: "grid_characters/grid_character01.png",
    description: "<p>임혜정 설명</p>"
  },
  {
    name: "유정남",
    simpleExplain: "유수민 아빠",
    img: "grid_characters/grid_character02.png",
    description: "<p>유정남 설명</p>"
  },
    {
    name: "김다슬",
    simpleExplain: "유수민 여친",
    img: "grid_characters/grid_character03.png",
    description: "<p>유정남 설명</p>"
  },
    {
    name: "노공남",
    simpleExplain: "씹덕 교수",
    img: "grid_characters/grid_character04.png",
    description: "<p>노공남 설명</p>"
  },

    {
    name: "정지찬",
    simpleExplain: "현식이 전주인",
    img: "grid_characters/grid_character05.png",
    description: "<p>정지찬 설명</p>"
  },
    {
    name: "흑두",
    simpleExplain: "주인공 일행의 맞후임",
    img: "grid_characters/grid_character06.png",
    description: "<p>흑두 설명</p>"
  },
    {
    name: "김덕배",
    simpleExplain: "자주 놀러오는 외계인",
    img: "grid_characters/grid_character07.png",
    description: `지구정복을 위해 지구에 왔다고 했으나, 사실 잠복근무를 위한 컨셉이었다.
            <br> 초기에는 평범한 조연이었으나,
            <br> 새대갈 특별편에서 엄청난 활약을 하며 네임드 조연으로 격상했다.
            <br>우주경찰 측 입장에서는 어떻게 우주경찰에 합격한 것인지 의문이 될 정도로
            <br>성격은 나름 선량하고 순진한 외계인이지만,엄청난 폐급, 고문관 경찰이자 트롤러다. 지구 물건으로 위장해서 잠입한답시고
            <P> 새대갈을 체포하고 심문할때도 유독 경찰답지 못하게 감정에 휩쓸려 우는 모습을 자주 보여 박차장에게 욕먹고, 심지어 뒷처리도 엉망으로 해 짐벤져스와 유수민이 경찰본부까지 쳐들어오는 결과를 낳았다.</P>
            <P>다만 우주경찰이 아닌 짐벤져스의 동맹으로서는 아주 유능한 모습을 보여주었다.</P>
            <P> 새대갈 구출작전의 참모 역할을 했을 뿐만 아니라 경비들과 김과장을 제압하고 직접적으로 새대갈을 구출해내기까지 했다.</P>
            <br>
            <p>능력이나 머리 자체가 나쁘다기보다는 그냥 성향이 경찰이라는 직업과 안 맞는 듯.
            그래도 전투력만큼은 우주경찰이라고 할 수 있을 정도로 강하다.</p>`
  },
    {
    name: "유잼민",
    simpleExplain: "유수민 사촌동생",
    img: "grid_characters/grid_character08.png",
    description: "<p>유잼민 설명</p>"
  },
    {
    name: "브리트니 점례",
    simpleExplain: "욕쟁이 앵무새",
    img: "grid_characters/grid_character09.png",
    description: "<p>유정남 설명</p>"
  },

    {
    name: "까보르나라 1세",
    simpleExplain: "땅땅이 엄마",
    img: "grid_characters/grid_character10.png",
    description: "<p>까보르나라 1세</p>"
  },
    {
    name: "곱창2세",
    simpleExplain: "땅땅이 여동생",
    img: "grid_characters/grid_character11.png",
    description: `<p>곱창2세 설명</p>`
  },

    {
    name: "레이몬드 민식",
    simpleExplain: "땅땅이 아빠",
    img: "grid_characters/grid_character12.png",
    description: `<p>레이몬드 민식 설명</p>`
  },
    {
    name: "순이",
    simpleExplain: "현식이 엄마",
    img: "grid_characters/grid_character13.png",
    description: `<p>순이 설명</p>`
  },
    {
    name: "찌찌",
    simpleExplain: "슘댱이 친구",
    img: "grid_characters/grid_character14.png",
    description: `<p>찌찌 설명</p>`
  },
      {
    name: "순돌이",
    simpleExplain: "흑화한 말티즈",
    img: "grid_characters/grid_character15.png",
    description: `<p>찌찌 설명</p>`
  },
      {
    name: "김태식",
    simpleExplain: "김다슬 아빠",
    img: "grid_characters/grid_character16.png",
    description: `<p>김태식 설명</p>`
  },
  // ... 나머지 캐릭터들 16개 전부 동일한 방식으로
];
document.addEventListener('DOMContentLoaded', () => {
  const mainSection = document.querySelector('.main-section');
  const gridWrapper = document.querySelector('.grid-wrapper');

 // 주연 캐릭터 렌더링
  NookieCharacterData.forEach((char, index) => {
    const container = document.createElement('div');
    container.classList.add('nookie_character_container');

    const quoteEl = document.createElement('span');
    quoteEl.className = 'representative_ment';
    quoteEl.style.writingMode = 'vertical-rl';
    quoteEl.setAttribute('data-seq', index % 2 === 0 ? '2' : '0');
    quoteEl.textContent = char.quote;

    const introEl = document.createElement('div');
    introEl.className = 'nookie_character_introbox';
    introEl.setAttribute('data-seq', '1');
    introEl.innerHTML = `
      <div class="nookie_character_name">${char.name}</div>
      <div class="nookie_character_explain">${char.description}</div>
    `;

    const imgEl = document.createElement('div');
    imgEl.className = 'nooki_character';
    imgEl.setAttribute('data-seq', index % 2 === 0 ? '0' : '2');
    imgEl.innerHTML = `<img src="${char.img}" alt="${char.name}">`;

    if (index % 2 === 0) {
      container.appendChild(imgEl);
      container.appendChild(introEl);
      container.appendChild(quoteEl);
    } else {
      container.appendChild(quoteEl);
      container.appendChild(introEl);
      container.appendChild(imgEl);
    }

    mainSection.appendChild(container);
  });

  // 스크롤 등장/사라짐 애니메이션 관찰자
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -10% 0px' // 약간 빨리 반응하게 유도
  });

  document.querySelectorAll('.nookie_character_container').forEach(container => {
    observer.observe(container);
  });

// =================================================

  // 조연 캐릭터 썸네일 렌더링 및 이벤트 설정
  GridCharactersData.forEach((char, index) => {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("characters_thumnail");
    thumbnail.setAttribute("data-key", index);

    thumbnail.innerHTML = `
      <img src="${char.img}" alt="${char.name}">
      <span class="characters_name">${char.name}</span>
      <span class="characters_simple_explain">${char.simpleExplain}</span>
      <span class="characters_open">자세히보기</span>
    `;

    thumbnail.addEventListener("click", () => showModal(index, GridCharactersData));
    gridWrapper.appendChild(thumbnail);
  });

  // 모달 닫기 버튼
  const closeBtn = document.getElementById('modal_close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      document.querySelector('.characters_modal_overlay').style.display = 'none';
    });
  }

  // 모달 네비게이션
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

// 모달 관련 상태 및 함수
let currentIndex = 0;
let currentData = [];

function showModal(index, data) {
  currentData = data;
  currentIndex = index;
  const character = data[index];

  const modalImg = document.getElementById('modalImg');
  modalImg.style.opacity = 0;
  modalImg.style.transform = 'translateX(0px)';

  setTimeout(() => {
    modalImg.src = character.img;
    document.getElementById('modalName').textContent = character.name;
    document.getElementById('modalDescription').innerHTML = character.description;

    modalImg.style.opacity = 1;
  }, 200);

  document.querySelector('.characters_modal_overlay').style.display = 'block';
}
