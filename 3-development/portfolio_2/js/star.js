const icons = document.querySelectorAll('.ikon');
const centerX = 150; // five_ikon_box의 중심 (300px의 절반)
const centerY = 150;
const radius = 120; // 중심 별에서 아이콘까지 거리
const total = icons.length;

icons.forEach((icon, index) => {
  const angle = (-90 + index * 72) * (Math.PI / 180); // -90도는 12시 방향
  const x = centerX + radius * Math.cos(angle);
  const y = centerY + radius * Math.sin(angle);

  icon.style.left = `${x}px`;
  icon.style.top = `${y}px`;
  icon.style.transform = 'translate(-50%, -50%)';
});

console.log("아이콘 수:", document.querySelectorAll('.ikon').length);

document.querySelectorAll('.ikon').forEach((el, i) => {
  console.log(`아이콘 #${i + 1}:`, el.style.backgroundImage);
});

