// ========== DOM 요소 선택 ==========
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const header = document.getElementById('header');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('.nav-link');

// ========== 햄버거 메뉴 토글 ==========
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 메뉴 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// ========== 다크모드 토글 ==========

// 다크모드는 항상 활성화 (html.dark 기본값)
function initDarkMode() {
    const isDark = true;
    updateThemeIcons(isDark);
}

// 다크모드 아이콘 업데이트
function updateThemeIcons(isDark) {
    if (isDark) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
}

// 다크모드 토글 버튼 클릭 이벤트 (토글 기능 유지)
themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark);
    updateThemeIcons(isDark);
});

// 초기화
initDarkMode();

// ========== 스크롤 이벤트 (헤더 배경 변경) ==========
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    lastScrollTop = window.scrollY;
});

// ========== 포트폴리오 필터링 ==========
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 활성 버튼 업데이트
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // 필터 카테고리
        const filterValue = btn.getAttribute('data-filter');

        // 포트폴리오 아이템 필터링
        portfolioItems.forEach(item => {
            if (filterValue === 'all') {
                item.classList.remove('hidden');
                item.style.animation = 'fadeInUp 0.6s ease-out';
            } else {
                const category = item.getAttribute('data-category');
                if (category === filterValue) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});

// ========== Intersection Observer (스크롤 애니메이션) ==========

// Fade-in 애니메이션을 위한 요소들 선택
const observerElements = document.querySelectorAll('.fade-in, .portfolio-item');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

observerElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ========== 연락 폼 유효성 검사 및 전송 ==========
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 폼 데이터 가져오기
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 유효성 검사
    if (!name || !email || !message) {
        alert('모든 필드를 입력해주세요.');
        return;
    }

    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 형식을 입력해주세요.');
        return;
    }

    // mailto 링크 생성 및 전송
    const subject = encodeURIComponent(`포트폴리오 문의 - ${name}`);
    const body = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n메시지:\n${message}`);
    const mailtoLink = `mailto:kim@example.com?subject=${subject}&body=${body}`;

    // 기본 이메일 클라이언트로 열기
    window.location.href = mailtoLink;

    // 폼 초기화
    contactForm.reset();

    // 전송 완료 메시지
    alert('메시지 전송이 준비되었습니다. 이메일 클라이언트에서 전송을 완료해주세요.');
});

// ========== 부드러운 스크롤 (네비게이션 링크) ==========
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========== 추가 유틸리티 함수 ==========

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('포트폴리오 사이트가 로드되었습니다!');

    // 스크롤 복원 (뒤로가기 시)
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
    }

    // 성능 최적화: 이미지 lazy loading
    const images = document.querySelectorAll('img');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
});

// ========== 활성 네비게이션 업데이트 ==========
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('text-blue-600', 'dark:text-blue-400');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('text-blue-600', 'dark:text-blue-400');
                }
            });
        }
    });
});

// ========== 키보드 접근성 ==========
// Escape 키로 모바일 메뉴 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenu.classList.add('hidden');
    }
});

// ========== 창 크기 변경 시 모바일 메뉴 닫기 ==========
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
    }
});
