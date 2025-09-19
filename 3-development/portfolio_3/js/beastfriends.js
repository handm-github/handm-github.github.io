// 캐릭터 컨테이너 창 기능
const NookieCharacterData= [
	{
		name: '유수민',
		img: 'images/human_wholebody.png',
		description: `<p>&nbsp;짐승친구들의 주인공 겸 영원한 집사. 모티브는 작가 본인.</p>
              <p>&nbsp;나이는 만 25세,
		경기도 의정부시에 살고 있으며 낙성대학교 국어국문학과에 졸업한 백수다.</p>
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
              <p>&nbsp;수백만 인스타 팔로워를 보유하고 있는 인플루언서이며,
		수민을 '형' 이라고 부른다.</p>
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
              <p>&nbsp;단,
		필요한 순간에는 날아다닐 수 있다.</p>
              <br>
              <p>&nbsp;유수민의 집 유리창에 머리를 부딪혀 기절하고 병원에 갔지만 하필 간 병원이 동물병원이 아닌 동물진료도 가능한 비뇨기과였다.</p>
               <br>
              <p>&nbsp; 게다가 의사의 개업 기념 서비스로 의도치 않게 공짜로 중성화 수술을 당해서 
              고자가 되며,
		이것 때문에 여러 번 고자 드립을 당한다.</p>`,
		quote:`누구세용?`
	},
	{
		name: '슘댱이',
		img: 'images/mouse_wholebody.png',
		description: `<p>&nbsp; 가장 마지막으로 등장한 짐승 친구이다.</p>
              <p>&nbsp; "~습니다"는 "~슘댱!" ~습니까는 "~슘걍?",
		~합니다는 "~함댱",
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
//=================================================================
// GridCharactersData: 16개 캐릭터 샘플 구조 생성
const GridCharactersData = [
	{
		name: "임혜정",
		simpleExplain: "유수민 엄마",
		img: "grid_characters/grid_character01.png",
		description: `<p>유수민의 어머니. 성은 밝혀지지 않았다가 어느 영상에서 임씨임이 밝혀졌다.</p>
                  <br>
                  <p>&nbsp;막장 끝판왕인 짐승친구들조차 꼼짝 못하는 천적 중 한 명이다.</p>
                  <p>&nbsp; 2기에서는 주연 5인방이 휴가를 나오거나 군대에 있는 유수민을 만나러 갔을 때만 등장했고,
		          3기에서는 3화 사이버 추석 편과 16화 비트코인 편,
		          39화 슬픈 젖꼭지 증후군 편과 41화 고양이 목욕시키기 대작전에서 등장했고 4기에서도 심심치 않게 등장한다. 덤으로 직업도 공개가 되었는데,
		          교회집사로 8년차라고 한다.</p>
                  <p>&nbsp; 건장한 자기 아들과 반려묘 행동 전문가인 묘형욱을 때려눕힌 땅땅이를 다른 교회 집사들과 함께 상처 하나 없이 제압하는 매우 강력한 전투력을 지니고 있다.</p>`
	},
	{
		name: "유정남",
		simpleExplain: "유수민 아빠",
		img: "grid_characters/grid_character02.png",
		description: `<p>유수민의 아버지.</p>
                  <br>
                  <p> 2기에서 유수민이 이등병일 시절에 항문이 파열돼서 병원에 실려갔다고 나왔으나 다 뻥이었고 아들 수민의 깜짝 생일 축하를 해 주었다.</p>
                  <p> 3기에서는 사이버 추석,추석 특집! 욕쟁이 앵무새 VS 짐승친구들 편에서 등장.</p>
                  <br>
                  <p>이후 5기 24화에서는 아내에게 비상금 숨긴 게 탄로 나서 아내의 화가 풀릴 때까지 수민의 집에서 한 달간 얹혀 살다가 수민의 신고가 두려워 비상금 반띵을 제안했으니 하필이면 5000원이 전부라 결국 수민에게 호출된 아내가 처음에는 걱정하면서 갖고 싶어하는 걸 사다주는 걸로 해피엔딩으로 끝날 줄 알았으나 결국 아내에게 얻어맞는다.</p>
                  <br>
                  <p>의외로 전투력은 아내에 준하는 준최강자인데 강도살인범을 단 한방에 제압했고,웬만한 탈인간급의 전투력을 보여주는 짐승친구들의 뺨을 연달아 때릴 정도로 무시무시한 전투력을 보여준다</p>`
	},
	{
		name: "김다슬",
		simpleExplain: "유수민 여친",
		img: "grid_characters/grid_character03.png",
		description: `<p>짐승친구들의 메인 히로인.</p>
                  <br>
                  <p>&nbsp; 유수민보다 1기수 아래인 98년생 17학번 후배이다.</p>
                  <p>&nbsp; 땅땅이의 원래 주인으로,길고양이었던 땅땅이와 어머니,여동생을 거두어 키웠다.</p>
                  <br>
                  <p>&nbsp; 땅땅이의 원래 주인답게 찰지게 딜을 넣는 게 특징. 또한 히로인답게 주인공과 연애 플래그가 생길 법한 스토리로 이어지고 있었으나 3기에서 수민과의 저녁 약속을 깨며 독자들의 기대를 처참하게 부쉈다.</p>
                  <p>&nbsp; 다만 래귤러 등장인물인 것은 여전하므로 작가가 다슬을 퇴장시킬 게 아니라면 수민과의 관계는 계속 이어질 가능성이 높다.</p>
                  <p>&nbsp;고백해서 혼내주기 편에서 친구의 부탁으로 편의점 알바 대타를 하다가 유수민에게 고백을 당한다.</p>
                  <p>&nbsp;유수민은 바로 그자리 에서 뛰쳐나오고 절망까지했지만 김다슬은 고백을 승낙한다.</p>`
	},
	{
		name: "노공남",
		simpleExplain: "씹덕 교수",
		img: "grid_characters/grid_character04.png",
		description: `<p>&nbsp; 짤툰 오리지널과 짐승친구들의 등장인물. 낙성대 교수로 몽골철학개론 교양 수업을 담당하고 있으며,
		유수민,
		김다슬,
		사탄 등이 해당 수업을 수강한 바 있다.</p>
                  <br>
                  <p>&nbsp; Nintendo Switch의 모여봐요 동물의 숲을 즐겨 하며 그외에도 피규어를 집에 전시해놨으며 애니메이션과 게임,
		                애니송,덕질,피규어 등 서브컬쳐를 매우 좋아하며 코스프레를 즐겨한다.</p>
                  <p>&nbsp; 짤툰 세계관 공식 오타쿠이며,
		                단순히 취미로만 파는것을 넘어서 자기 제자들도 잘 모를만한 온갖 서브컬처 장르를 다 섭렵하고 있다.</p>
                  <br>
                  <p>&nbsp; 특히 모노가타리 시리즈를 엄청 좋아하는지 바케모노가타리의 센고쿠 나데코가 최애캐이며[
			5
		]연애 서큘레이션이 최애곡이다.</p>
                  <p>&nbsp; 또한 인방에서 땅땅이에게 도네할 때 쓰는 닉이 아라라기 코요미다.</p>`
	},
	{
		name: "정지찬",
		simpleExplain: "현식이 전주인",
		img: "grid_characters/grid_character05.png",
		description: `<p>&nbsp; 김현식이 날마다 노트북으로 짝짓기 영상을 보는 통에 애완동물을 기르는 게 금지되어 있는 원룸 주인의 의심을 사고 있다.</p>
                  <p>&nbsp; 결국 자신과 달리 주인이 다른 데 살아서 들킬 걱정이 적은 유수민에게 현식을 떠넘기듯 맡겼다.</p>
                  <br>
                  <p>&nbsp; 이후 등장은 수민의 자취방이 무너져서 수민네 식구들이 잠시 신세질 때,
		              짐승친구들과의 서열문제 때문에 조언을 구하기 위해 전화를 걸 때,
		              훈련소에 입대하게 된 수민을 배웅할 때가 전부다.</p>
                  <br>
                  <p>&nbsp; 시즌 6에서는 대학교 졸업식때 유수민의 언급에 따르면 군대에 갔다고 한다. 때문에 당분간은 등장이 어려울 것으로 보이고 또한 정지찬 담당 성우인 김상자 성우도 3월 31일을 마지막으로 짤툰을 퇴사하였기 때문에 성우가 변경될지는 미지수다.</p>`
	},
	{
		name: "흑두",
		simpleExplain: "주인공 일행의 맞후임",
		img: "grid_characters/grid_character06.png",
		description: `<p>&nbsp;일본 출신의 검은색 시바견.</p>
                  <p>&nbsp; 일인칭은 와타시. 주인공 일당의 개는 아니고,
		              일본에서 주인과 함께 코스프레에 참석하려 한국에 왔다가 주인을 잃어버려 길거리 생활을 하며 자주 등장했다.</p>
                  <p>&nbsp; 본래 한국말을 전혀 못했지만 살기 위해서 악착같이 배운 덕에 어느 정도 할 줄 알게 된다.</p>
                  <br>
                  <p>&nbsp; 일본에서 자란 지라 사무라이 컨셉 때문인지 주인인 야마모토 야마토포에 대한 충성도가 높은 편이다.</p>
                  <p>&nbsp; 애초에 시바견이 주인에게 충성심이 높은 개인 이유도 있을 듯.</p>
                  <p>&nbsp; 다만 야마토포가 한심한 말이나 짓거리를 할때면 야마토포를 주인으로 모시는 것에 회의감을 느끼기도 한다.</p>
                  <p>&nbsp; 짐벤져스 편에서 박정범이 준 피카추 돈까스를 맛본 이후로 그걸 좋아하기 시작했다.</p>
                  <br>
                  <p>&nbsp; 참고로 이름의 흑두(黑頭)는 검은 머리,젊은이라는 뜻이다.</p> `
	},
	{
		name: "김덕배",
		simpleExplain: "자주 놀러오는 외계인",
		img: "grid_characters/grid_character07.png",
		description: `<p>&nbsp;지구정복을 위해 지구에 왔다고 했으나,사실 잠복근무를 위한 컨셉이었다.</p>
                  <p> &nbsp;초기에는 평범한 조연이었으나,새대갈 특별편에서 엄청난 활약을 하며 네임드 조연으로 격상했다.</p>
                  <p>&nbsp;우주경찰 측 입장에서는 어떻게 우주경찰에 합격한 것인지 의문이 될 정도로
                  <p>&nbsp;성격은 나름 선량하고 순진한 외계인이지만,엄청난 폐급,고문관 경찰이자 트롤러다.</p>
                  <P> &nbsp;새대갈을 체포하고 심문할때도 유독 경찰답지 못하게 감정에 휩쓸려 우는 모습을 자주 보여 박차장에게 욕먹고, 심지어 뒷처리도 엉망으로 해 짐벤져스와 유수민이 경찰본부까지 쳐들어오는 결과를 낳았다.</P>
                  <P>&nbsp;다만 우주경찰이 아닌 짐벤져스의 동맹으로서는 아주 유능한 모습을 보여주었다.</P>
                  <P>&nbsp; 새대갈 구출작전의 참모 역할을 했을 뿐만 아니라 경비들과 김과장을 제압하고 직접적으로 새대갈을 구출해내기까지 했다.</P>
                  <br>
                  <p>&nbsp;능력이나 머리 자체가 나쁘다기보다는 그냥 성향이 경찰이라는 직업과 안 맞는 듯.</p>
                  <p>&nbsp;그래도 전투력만큼은 우주경찰이라고 할 수 있을 정도로 강하다.</p>`
	},
	{
		name: "유잼민",
		simpleExplain: "유수민 사촌동생",
		img: "grid_characters/grid_character08.png",
		description: `<p>&nbsp; 브리트니 점례의 주인이다.</p>
                  <br>
                  <p>&nbsp; 다른 유수민의 가족,
		친척처럼 머리카락이 한가닥 나있는 것이 특징. 하지만 머리카락의 색은 노란색이 아니라 검은색이다.</p>
                  <p>&nbsp; 브리트니 점례의 주인이다.</p>
                  <p>&nbsp; 게임이 취미이자 특기인듯 하다. 사이버 추석편에서는 롤티어가 챌린저인것이 공개됐다.</p>
                  <p>&nbsp; 잼민이편에서도 파피 플레이타임과 프라이데이 나이트 펑킨을 즐긴다는 사실이 밝혀졌다.</p>
                  <p>&nbsp; 브리트니 점례의 주인이다.</p>`
	},
	{
		name: "브리트니 점례",
		simpleExplain: "욕쟁이 앵무새",
		img: "grid_characters/grid_character09.png",
		description: `<p>&nbsp; 짐승친구들의 등장동물. 유수민의 사촌 동생 유잼민이 기르는 큰유황앵무.</p>
                  <br>
                  <p>&nbsp; 욕을 매우 잘 하며,앵무새답게 상대방의 목소리를 똑같이 성대모사 할 수 있다.</p>
                  <p>&nbsp; 성격은 그야말로 이중인격 그 자체. 사람 앞에서만 귀신같이 천사처럼 행동하고 반대로 사람이 없으면 악마로 돌변한다.</p>
                  <p>&nbsp; 다만,	이는 짐승친구들이 먼저 시비를 걸어서 그런 거고 짐승친구들 외에는 욕을 하는 모습은 일절 보이지 않은 거 보면 만약 이들이 시비를 걸지 않았다면 모를 일이다.</p>
                  <br>
                  <p>&nbsp; 시즌1 8화, 유수민이 땅땅이의 이름을 짓기 위해 방문한 사이트에서 브리트니 점례라는 이름이 잠시 언급된 적이 있는데,거기서 이름을 따 온 것.</p>
                  <p>&nbsp; 그리고 시즌2에서 맥심이름이 부리트니 점례화보라고도 언급되었다.</p>`
	},
	{
		name: "까보르나라 1세",
		simpleExplain: "땅땅이 엄마",
		img: "grid_characters/grid_character10.png",
		description: `<p> 본래 이름은 '크리스틴 엘리자베스 아길레라 폰 까르보나라 1세' 인데,
		줄여서 '까르보나라 1세'이다.</p>
                  <br>
                  <p>&nbsp; 1기에서 첫증장 하였으며,
		길바닥에서의 혹독한 삶을 살았던 본인의 경험을 토대로 땅땅이와 곱창 2세에게 가출을 하지 말라고 신신당부한다.</p>
                  <p>&nbsp; 하지만 땅땅이는 길고양이 생활의 매력을 느껴 첫 번째 에피소드가 끝나기 전에 집을 나간다.</p>
                  <p>&nbsp; 이후 몇 달만에 돌아온 땅땅이를 반기려 하지만 자신의 말을 귀똥으로도 듣지 않은 땅땅이에 대해 만감이 교차하여 골프채로 폭력을 행사한다.</p>
                  <p>&nbsp; 게다가 여동생에게 감히 고양이 짝짓기 영상을 보여 준 땅땅이에게 참교육 차원으로 한번 더 폭력을 행사한다.</p>
                  <p>&nbsp; 그 다음 가출하려는 땅땅이에 열이 받아 골프채를 든 채로 가출을 하려는 땅땅이를 쫓으려 했다.</p>
                  <br>
                  <p>&nbsp; 땅땅이도 함부로 못하는 존재 중 하나.</p>`
	},
	{
		name: "곱창2세",
		simpleExplain: "땅땅이 여동생",
		img: "grid_characters/grid_character11.png",
		description: `<p>&nbsp; 본래 이름은 '킹갓 엠페러 충무공 마제스티 하이퍼 곱창 2세' 인데,
		줄여서 '곱창 2세'이다.</p>
                  <br>
                  <p>&nbsp; 1기에서부터 등장. 엄마와 함께 김다슬의 집에서 살고 있다. 원래 땅땅이도 같이 살고 있었으나 가출했다. 나중에 땅땅이가 돌아왔지만 다시 수민의 집으로 가기 위해 탈출할 때,
		여동생이 오빠의 가죽을 입고 연기해서 시간을 벌어준다.</p>
                  <br>
                  <p>&nbsp; 2기에서 동물들마저 수컷이라면 군대 징집 대상이라는 말을 듣고,
		자신 또한 군대 징집 대상에 포함되지 않는다는 이유로 엄마와 다슬이와 함께 기뻐했다.</p>
                  <br>
                  <p>&nbsp; 3기 출생의 비밀 편에서도 등장했는데,
		슘댱이를 자신을 위해 구해 온 간식으로 착각하여 손으로 집어 먹으려는 모습을 보여주었다.</p>`
	},
	{
		name: "레이몬드 민식",
		simpleExplain: "땅땅이 아빠",
		img: "grid_characters/grid_character12.png",
		description: `<p>&nbsp; 외모도 무늬가 없고 색이 옅을 뿐이지 외모가 땅땅이와 판박이로,
		땅땅이 외모도 전적으로 아버지한테서 물려받은 것.</p>
                  <p>&nbsp; 늙은 길고양이가 말한 째깐둥이의 이목구비는 땅땅이처럼 생겼다고 했다.</p>
                  <br>
                  <p>&nbsp; 이 이야기를 듣고 머릿속 퍼즐이 맞아떨어진 땅땅이는 레이몬드 민식이 자신의 아버지라는
                   사실을 알아채며 경악하고는,
		뒷사정을 알기 위해 어머니를 찾아가 아버지의 이야기를 부탁한다.</p>
                  <br>
                   <p>&nbsp; 어머니 왈 레이몬드 민식은 낭만과 음악을 사랑하지만 속으로는 돈 많은 집사에게 간택되어 호의호식을 하고 싶어하던 특이한 고양이였으며,
		어머니도 그런 민식이 싫지 않아 민식의 연인이 되어 곳곳을 여행하며 지냈었다.</p>`
	},
	{
		name: "순이",
		simpleExplain: "현식이 엄마",
		img: "grid_characters/grid_character13.png",
		description: `<p>&nbsp; 집 한칸없이 길거리에서 보따리 장사를 하며 현식과 살아가고 있었다.</p>
    <p>&nbsp; 또한 말을 할 수 있지만 장사할 때는 늘 지금의 현식처럼 팻말을 들고 말을 못하는 척 사람들의 동정심을 유발시켜서 사람들이 물건을 사가게끔 만들었다.</p>
    <p>&nbsp; 그러던 어느 날,
		아들하고는 개껌과 사소한 말다툼을 벌이게 됐고 다음날에도 관계는 나아지지 않았다</p>
    <br>
    <p>&nbsp; 이를 끌고온 건 개장수들이었고 끌려온 순이는 목청껏 짖어댔다. 그러자 짜증이 난 개장수들은 순이의 입을 케이블 타이로 막아버렸다. 이때 순이의 과거가 밝혀지는데 사실 순이는 개장수들의 공장에서 강아지를 낳는 개였지만 공장을 탈출해서 현식을 낳은 것이었다. 개장수들은 같이 있는 현식이 어딨는지 말하면 살려준다고 했지만 순이는 장사할 때 쓰던 팻말에다 "좆까 이 씨발새끼들아"[
			9
		]라고 적어 보여주며 그들을 도발했다. 결국 자식을 위해 목숨을 버리기로 한 것. 결국 뚜껑이 제대로 열린 개장수들에게 기절할 때까지 두들겨 맞는다.</p>
    <br>
    <p>&nbsp; 현식까지 개장수들에게 잡힐 위기라 판단한 순이는 급하게 제안을 하나 했다.<p>
    <p>&nbsp; "지금부터 현식이가 아무말도 안하고 아무 소리도 안 내야 엄마가 여기서 나갈 수 있다고 한 것."</p>
    <p>&nbsp; 그 말을 들은 현식은 잽싸게 입을 막았다.</p>
    <p>&nbsp; 그리고 아들에게 전해주지 못한 개껌과 팻말까지 쥐어주고 도망치게 했고 자신은 그 후 개장수들에게 폭행당해 사망했다.</p>`
	},
	{
		name: "찌찌",
		simpleExplain: "슘댱이 친구",
		img: "grid_characters/grid_character14.png",
		description: `<p>&nbsp; 얼빠진 면이 있지만 당시 오랜 실험생활에 찌들어서 마음의 문을 닫았던 슘댱이와는 달리 밝고 긍정적인 이미지를 갖고 있었다. 그래서 처음 만난 슘댱이가 이름을 없다는 사실을 알고는 멋대로 여러 가지 이름을 짓다가
		말끝마다 슘댱을 갖다붙인다는 이유로 지금의 '슘댱이'라는 이름을 지었다.</p>
                  <p>&nbsp; 그 말에 슘댱이 또한 지금까지 말한 이름들 중 가장 낫다며 동의했다.</p>
                  <br>
                  <p>&nbsp; 이후에는 날마다 슘댱이와 즐겁게 지냈고 덕분에 병들었던 슘댱이의 마음도 활짝 열게 된다.</p>
                  <p>&nbsp; 그러다 연구원들이 자신을 제외한 모든 실험동물들을 폐기처분 하려든다는걸 알고는 황급히 슘댱이에게 달려와 이 사실을 알리며 탈출하라고 한다.</p>
                  <br>
                  <p>&nbsp; 슘댱이가 같이 가기로 하지 않았냐고 했지만 자기는 둔하고 느려서 금방 잡히니 혼자라도 탈출하라고 했다.</p>
                  <p>&nbsp; 이어 자신도 언젠가 탈출을 할테니 밖에서 꼭 다시 만나자는 약속을 했다.</p>
                  <p>&nbsp; 그리고 연구원들이 나타나자 슘댱이를 창밖으로 내던지며 탈출시켰다.</p>
                  <p>&nbsp; 하지만 안타깝게도 찌찌 본인은 탈출에 실패했고 연구원들의 온갖 실험대상이 되어버려 흉폭한 괴물로 개조당하고 만다.</p>
                  <br>
                  <p>&nbsp; 이후 짐벤져스: 찌찌 구출작전에선 세뇌 당하는 바람에 최종 보스로 군림했다.</p>
                  <p>&nbsp; 이후 짐승친구들의 집에서 신세를 졌지만 드디어 세상 밖으로 나왔으니 자신도 슘댱이처럼 경험을 쌓고 친구도 사귈거라며 떠나기로 했다.</p>`
	},
	{
		name: "순돌이",
		simpleExplain: "흑화한 말티즈",
		img: "grid_characters/grid_character15.png",
		description: `<p>&nbsp; 짐승친구들에게 돈을 빼앗긴 이후로 자기도 남들의 돈을 뜯는 포지션으로 흑화되었던 말티즈.</p>
                  <br>
                  <p>&nbsp; '말티즈 삥뜯기'편에서 첫 등장.</p>
                  <p>&nbsp; 만원을 들고 먹을거리를 구매하러 동물 수제 간식 전문점에 가다가 짐승친구들에게 눈에 띄어 돈이 있냐면서 삥뜯기 추궁을 당한다. </p>
                  <p>&nbsp; 막판에 엉덩이에 돈을 끼워 숨긴 것이 들켜서 결국 돈을 빼앗겨버리고 돈이 없으면 굶는다며 싹싹 빌지만 땅땅이는 꼬우면 너도 삥을 뜯으라며 그냥 가버린다.</p>
                  <p>그리고 짐친들 사료를 사려던 유수민이 말티즈에게 삥을 뜯겨서 짐승친구들은 당분간 굶게 되었다.</p>
                  <br>
                  <p>&nbsp; 처음엔 단역이었지만 귀여운 외모와 목소리 등으로 다시 출연했으면 좋겠다는 의견이 많으며,
		              이 녀석이 재등장한 에피가 100만 조회수까지 넘은 것을 통해 알 수 있듯이 인기가 상당한 편이다.<p/>
                  <p>&nbsp; 그 때문에 1기의 흑두 정도의 비중의 조연으로 자주 출연한다.</p>`
	},
	{
		name: "김태식",
		simpleExplain: "김다슬 아빠",
		img: "grid_characters/grid_character16.png",
		description: `<p>&nbsp; 김다슬의 인스타에 항상 댓글을 다는 남자. 굉장히 잘생긴 미남이다. </p>
                  <p>&nbsp; 피부가 까맣게 탄 미남인 것으로 보아 모티브는 명탐정 코난의 등장인물 핫토리 헤이지이나 외형은 카드캡터 사쿠라의 등장인물 키노모토 후지타카로 추정. </p>
                  <br>
                  <p>&nbsp; 유수민이 허세부린 것에 대해 딸을 지키는 멋진 남자라고 칭찬하고 유수민이 눈치없이 군 것을 잘 포장해주는 등 유수민을 굉장히 좋게 보고 있다. </p>`
	},
	{
		name: "유남정",
		simpleExplain: "유수민 할아버지",
		img: "grid_characters/grid_character17.png",
		description: `<p>데이트편에서 이름이 밝혀젔다. 가족의 단결을 중요하게 생각하며,
		코로나 사태를 아주 우습게 여기는 모습을 보였다.</p>
                  <br>
                  <p>아무리 유수민의 행적이 노답이라도 자신의 손자에게 '호로새끼','찐따'라고 하는 걸 보면 손자와 사이가 안 좋은 듯하다.</p>
                  <p>'썅','호로새끼','개새끼' 등 쌍욕을 자주 퍼붓는다. 유수민 뿐만아니라 아들들과도 사이가 좋진 않은 것을 보면 그닥 자상한 아버지는 아니었는듯.</p>
                  <br>
                  <p>롤티어는 다이아. 가족들 중 티어가 가장 높다.</p>`
	},
];
//=================================================================
document.addEventListener('DOMContentLoaded',
() => {
	const mainSection = document.querySelector('.main-section');
  const gridWrapper = document.querySelector('.grid-wrapper');
 // 주연 캐릭터 렌더링
  NookieCharacterData.forEach((char,
	index) => {
		const container = document.createElement('div');
    container.classList.add('nookie_character_container');
    const quoteElement = document.createElement('span');
    quoteElement.className = 'representative_ment';
    quoteElement.style.writingMode = 'vertical-rl';
    quoteElement.setAttribute('data-seq',
		index % 2 === 0 ? '2' : '0');
    quoteElement.textContent = char.quote;
    const introElement = document.createElement('div');
    introElement.className = 'nookie_character_introbox';
    introElement.setAttribute('data-seq',
		'1');
    introElement.innerHTML = `
      <div class="nookie_character_name">${
			char.name
		}</div>
      <div class="nookie_character_explain">${
			char.description
		}</div>
    `;
    const imgElement = document.createElement('div');
    imgElement.className = 'nooki_character';
    imgElement.setAttribute('data-seq',
		index % 2 === 0 ? '0' : '2');
    imgElement.innerHTML = `<img src="${char.img}" alt="${char.name}">`;
    if (index % 2 === 0) {
			container.appendChild(imgElement);
      container.appendChild(introElement);
      container.appendChild(quoteElement);
		}else {
			container.appendChild(quoteElement);
      container.appendChild(introElement);
      container.appendChild(imgElement);
		}mainSection.appendChild(container);
	});
  // 스크롤 등장/사라짐 애니메이션 관찰자
  const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
			}else {
				entry.target.classList.remove('visible');
			}
		});
	},
	{
		threshold: 0.3,
		rootMargin: '0px 0px -10% 0px' // 약간 빨리 반응하게 유도
	});
  document.querySelectorAll('.nookie_character_container').forEach(container => {
		observer.observe(container);
	});
// =================================================
  // 조연 캐릭터 썸네일 렌더링 및 이벤트 설정
  GridCharactersData.forEach((char,
	index) => {
		const thumbnail = document.createElement("div");
    thumbnail.classList.add("characters_thumnail");
    thumbnail.setAttribute("data-key",
		index);
    thumbnail.innerHTML = `
      <img src="${char.img}" alt="${char.name}">
      <span class="characters_name">${
			char.name
		}</span>
      <span class="characters_simple_explain">${
			char.simpleExplain
		}</span>
      <span class="characters_open">자세히보기</span>
    `;
    thumbnail.addEventListener("click",
		() => showModal(index,
		GridCharactersData));
    gridWrapper.appendChild(thumbnail);
	});
  // 모달 닫기 버튼
  const closeBtn = document.getElementById('modal_close');
  if (closeBtn) {
		closeBtn.addEventListener('click',
		() => {
			document.querySelector('.characters_modal_overlay').style.display = 'none';
		});
	}// 모달 네비게이션
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  if (prevBtn && nextBtn) {
		prevBtn.addEventListener('click',
		() => {
			currentIndex = (currentIndex - 1 + currentData.length) % currentData.length;
      showModal(currentIndex,
			currentData);
		});
    nextBtn.addEventListener('click',
		() => {
			currentIndex = (currentIndex + 1) % currentData.length;
      showModal(currentIndex,
			currentData);
		});
	}
});
// 모달 관련 상태 및 함수
let currentIndex = 0;
let currentData = [];
function showModal(index,
data) {
	currentData = data;
  currentIndex = index;
  const character = data[
		index
	];
  const modalImg = document.getElementById('modalImg');
  modalImg.style.opacity = 0;
  modalImg.style.transform = 'translateX(0px)';
  setTimeout(() => {
		modalImg.src = character.img;
    document.getElementById('modalName').textContent = character.name;
    document.getElementById('modalDescription').innerHTML = character.description;
    modalImg.style.opacity = 1;
	},
	200);
  document.querySelector('.characters_modal_overlay').style.display = 'block';
}// =================================================
  // 비디오 영상 렌더링
const VideosData = [
	{
		youtubeId: "UOzMv8TffOo",
		// 유튜브 영상 ID
    subjectName: "짐승친구들",
		uploadDate: " 2025. 6. 7",
		title: "[짐승친구들] 쌍꺼풀 수술"
	},
	{
		youtubeId: "wvntlaJDnjM",
		// 유튜브 영상 ID
    subjectName: "짐승친구들",
		uploadDate: " 2025. 5. 24",
		title: "[짐승친구들] 인생 첫 월급 받은 날⭐"
	},
	{
		youtubeId: "y_EiMOGvsKk",
		// 유튜브 영상 ID
    subjectName: "짐승친구들",
		uploadDate: "  2025. 5. 3",
		title: "[짐승친구들] 퉁퉁퉁 사후르 VS 짐승친구들"
	},
	{
		youtubeId: "RocMeTsaojY",
		// 유튜브 영상 ID
    subjectName: "짐승친구들",
		uploadDate: "  2025. 4. 26",
		title: "[짐승친구들] 말티즈가 털을 안깎으면 생기는 일"
	},
	{
		youtubeId: "KD1lQJa7ruE",
		// 유튜브 영상 ID
    subjectName: "충성! 짐승친구들",
		uploadDate: " 2025. 4. 23",
		title: "[[충성! 짐승친구들] 행복한 말년 휴가"
	},
	{
		youtubeId: "Ra96JYnJeXg",
		// 유튜브 영상 ID
    subjectName: "충성! 짐승친구들",
		uploadDate: " 2025. 4. 16",
		title: "[충성! 짐승친구들] 안녕, 수영이형!"
	},
	{
		youtubeId: "VpJ3C73hzcY",
		// 유튜브 영상 ID
    subjectName: "짐승친구들",
		uploadDate: "  2025. 4. 12",
		title: "[짐승친구들] 고양이 전용 클럽"
	},
	// 원하는 만큼 추가
];
// 페이징
const VIDEOS_PER_PAGE = 5;
let currentPage = 1;
function renderVideos(page = 1) {
	const container = document.querySelector(".video_section");
  const paginationWrapper = document.querySelector('.video_pagination_wrapper');
  const start = (page - 1) * VIDEOS_PER_PAGE;
  const end = start + VIDEOS_PER_PAGE;
  const pageData = VideosData.slice(start,
	end);
  // 이전 비디오 삭제
  container.querySelectorAll(".video_container").forEach(e => e.remove());
  // 영상 렌더링
  pageData.forEach(video => {
		const videoDiv = document.createElement("div");
    videoDiv.className = "video_container";
    videoDiv.innerHTML = `
      <div class="video_thumnail">
        <img src="https://img.youtube.com/vi/${video.youtubeId}/0.jpg" alt="썸네일">
      </div>
      <div class="video_text_box">
        <div class="upload_subject_and_date">
          <span class="upload_subject">${
			video.subjectName
		}</span>
          <time class="upload_date">${
			video.uploadDate
		}</time>
        </div>
        <div class="video_title">${
			video.title
		}</div>
      </div>
    `;
    videoDiv.style.cursor = "pointer";
    videoDiv.addEventListener("click",
		() => {
			window.open(`https://www.youtube.com/watch?v=${
				video.youtubeId
			}`,
			"_blank");
		});
    // 이러면 영상들 다음 아래에 번호 이동판들이 배열됨.
    container.insertBefore(videoDiv,
		paginationWrapper);
	});
  renderPagination();
}function renderPagination() {
	const pagination = document.querySelector(".video_pagination");
  pagination.innerHTML = "";
  const totalPages = Math.ceil(VideosData.length / VIDEOS_PER_PAGE);
  for (let i = 1; i <= totalPages; i++) {
		const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.addEventListener("click",
		() => {
			currentPage = i;
      renderVideos(currentPage);
		});
    pagination.appendChild(btn);
	}
}document.addEventListener("DOMContentLoaded",
() => {
	renderVideos(currentPage);

});
