const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const modeToggle = document.getElementById('mode-toggle');

// 사이드바 토글
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
});

document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target) && !overlay.contains(event.target)) {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
});

// 다크 모드 토글
modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeToggle.textContent = '🌞';
    localStorage.setItem('theme', 'dark');
  } else {
    modeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  modeToggle.textContent = '🌞';
} else {
  modeToggle.textContent = '🌙';
}

// 타이핑 효과 (index.html 및 aboutme.html에 적용)
const typingElement = document.getElementById('typing');
if (typingElement) {
  const phrases = [
    '안녕하세요, 정동혁의 PortFolio입니다.',
    '제 소개를 확인해보세요!',
    '저희 팀을 만나보세요!'
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    typingElement.innerHTML = currentPhrase.substring(0, charIndex);

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500);
    }
  }
  typeEffect();
}

// 연락처 복사 (모든 페이지에 적용)
const emailElement = document.querySelector('.email');
const telElement = document.querySelector('.tel');
if (emailElement) {
  emailElement.addEventListener('click', () => {
    navigator.clipboard.writeText(emailElement.textContent)
      .then(() => alert('이메일이 복사되었습니다!'))
      .catch(() => alert('복사에 실패했습니다.'));
  });
}
if (telElement) {
  telElement.addEventListener('click', () => {
    const phoneNumber = telElement.textContent.replace('Tel: ', '');
    navigator.clipboard.writeText(phoneNumber)
      .then(() => alert('전화번호가 복사되었습니다!'))
      .catch(() => alert('복사에 실패했습니다.'));
  });
}

// 스크롤 위로 버튼 (모든 페이지에 적용)
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '↑';
scrollTopBtn.classList.add('scroll-top');
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 패럴랙스 효과 (index.html 및 aboutme.html에 적용)
const backgroundImage = document.querySelector('.background-image');
if (backgroundImage) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    backgroundImage.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
}

// 키보드 접근성 (모든 페이지에 적용)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
  }
});

sidebar.addEventListener('keydown', (e) => {
  const focusable = sidebar.querySelectorAll('a');
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// 프로젝트 데이터 (index.html에 적용)
const projectContainer = document.getElementById('project-container');
if (projectContainer) {
  const projects = [
    {
      title: "프로젝트 1",
      description: "멋진 웹 개발 프로젝트입니다.",
      link: "https://example.com/project1"
    },
    {
      title: "프로젝트 2",
      description: "모바일 앱 개발 경험입니다.",
      link: "https://example.com/project2"
    }
  ];
  projectContainer.innerHTML = projects.map(project => `
    <div class="project-item fade-in">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">자세히 보기</a>
    </div>
  `).join('');
}

// project.html iframe 크기 조정
const projectIframe = document.querySelector('.project-container iframe');
if (projectIframe) {
  window.addEventListener('resize', () => {
    projectIframe.height = window.innerHeight - 100 + 'px';
  });
  projectIframe.height = window.innerHeight - 100 + 'px';
}

// secon.html 텍스트 토글
const toggleButton = document.getElementById('toggle-text');
const seconText = document.getElementById('secon-text-content');
if (toggleButton && seconText) {
  toggleButton.addEventListener('click', () => {
    seconText.classList.toggle('active');
    toggleButton.textContent = seconText.classList.contains('active') ? '참여 후기 닫기' : '참여 후기 보기';
  });
}

// secon.html 이미지 클릭 시 확대
const seconImages = document.querySelectorAll('.secon-image');
if (seconImages.length > 0) {
  seconImages.forEach(img => {
    img.addEventListener('click', () => {
      img.classList.toggle('enlarged');
    });
  });
}

// team.html 이미지 호버 효과
const teamImages = document.querySelectorAll('.about-box img');
if (teamImages.length > 0) {
  teamImages.forEach(img => {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.05)';
      img.style.transition = 'transform 0.3s ease';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  });
}

// 프로필 이미지 드래그 애니메이션 (aboutme.html에 적용)
const profileImage = document.querySelector('.profile-img');
if (profileImage) {
  profileImage.setAttribute('draggable', 'true'); // 드래그 가능 설정
  profileImage.addEventListener('dragstart', () => {
    profileImage.classList.add('dragging'); // 드래그 시작 시 클래스 추가
  });
  profileImage.addEventListener('dragend', () => {
    profileImage.classList.remove('dragging'); // 드래그 종료 시 클래스 제거
  });
}

// 애니메이션 효과 추가
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  const slideElements = document.querySelectorAll('.slide-in');

  const handleScrollAnimation = () => {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });

    slideElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }
    });
  };

  window.addEventListener('scroll', handleScrollAnimation);
  handleScrollAnimation(); // 초기 로드 시 실행
});