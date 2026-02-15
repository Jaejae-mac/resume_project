/* ==================== 네비게이션 스크롤 효과 ==================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

/* ==================== 모바일 메뉴 ==================== */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  btn.addEventListener('click', () => {
    const isOpen = menu.style.maxHeight && menu.style.maxHeight !== '0px';

    if (isOpen) {
      closeMobileMenu();
    } else {
      menu.style.maxHeight = menu.scrollHeight + 'px';
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  // 메뉴 항목 클릭 시 닫기
  mobileLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');

  menu.style.maxHeight = '0px';
  menuIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
}

/* ==================== 활성 메뉴 하이라이트 ==================== */
function initActiveNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px',
    },
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==================== 타이핑 애니메이션 ==================== */
function initTypingAnimation() {
  const texts = ['풀스택 웹 개발자', 'java & Spring', 'UI/UX 엔지니어'];
  const el = document.getElementById('typingText');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const current = texts[textIndex];

    if (isDeleting) {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === current.length) {
      delay = 2000; // 완성 후 대기
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      delay = 500; // 다음 텍스트 전 대기
    }

    setTimeout(type, delay);
  }

  type();
}

/* ==================== 스킬 프로그레스 바 애니메이션 ==================== */
function initSkillProgressAnimation() {
  const skillsSection = document.getElementById('skills');
  const progressBars = document.querySelectorAll('.progress-bar');
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          progressBars.forEach((bar) => {
            const width = bar.getAttribute('data-width');
            // 약간의 딜레이를 주어 자연스럽게
            setTimeout(() => {
              bar.style.width = width + '%';
            }, 200);
          });
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(skillsSection);
}

/* ==================== 맨 위로 버튼 ==================== */
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==================== 다크모드 ==================== */
function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;

  // 초기 상태: localStorage 확인 → 시스템 설정 확인
  const stored = localStorage.getItem('darkMode');
  if (stored === 'true') {
    html.classList.add('dark');
  } else if (stored === 'false') {
    html.classList.remove('dark');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    html.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    const isDark = html.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);

    // feather icons 재렌더링 (다크모드 아이콘 전환)
    feather.replace();
  });
}

/* ==================== 스크롤 페이드인 애니메이션 ==================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  elements.forEach((el) => observer.observe(el));
}

/* ==================== 초기화 ==================== */
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initActiveNavHighlight();
  initTypingAnimation();
  initSkillProgressAnimation();
  initBackToTop();
  initDarkMode();
  initScrollAnimations();
});
