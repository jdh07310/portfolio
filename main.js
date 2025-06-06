const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const modeToggle = document.getElementById('mode-toggle');

// 사이드바 토글
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// 다크 모드 토글
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // 버튼 아이콘 변경
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '🌞';
  } else {
    modeToggle.textContent = '🌙';
  }
});

// 타이핑 효과
const text = "안녕하세요, 정동혁의 PortFolio입니다.";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById('typing').innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();

// 프로젝트 데이터 가져오기
fetch('https://hcjdemo-smoky.vercel.app')
  .then(response => response.text())
  .then(data => {
    const projectContainer = document.getElementById('project-container');
    if (projectContainer) {
      projectContainer.innerHTML = data;
    }
  })
  .catch(error => {
    console.error('Error fetching project data:', error);
  });