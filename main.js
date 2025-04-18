const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

fetch('https://hcjdemo-smoky.vercel.app')  // 프로젝트 URL을 입력
    .then(response => response.text())
    .then(data => {
        document.getElementById('project-container').innerHTML = data;
    });
