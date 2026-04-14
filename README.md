# 개발자 웹 이력서 포트폴리오

HTML5, CSS3, Tailwind CSS, Vanilla JavaScript를 활용한 반응형 개발자 포트폴리오 웹사이트

## 📋 프로젝트 개요

사용자 경험을 중심으로 생각하는 풀스택 개발자의 포트폴리오 사이트입니다.

**주요 특징:**
- 🎨 Tailwind CSS를 활용한 모던한 디자인
- 📱 완벽한 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 🌙 다크모드/라이트모드 지원
- ⚡ 빠른 로딩 속도 (순수 HTML/CSS/JS)
- ♿ 웹 접근성 고려
- 🔍 SEO 최적화

## 🚀 빠른 시작

### 요구사항
- 웹 브라우저 (Chrome, Firefox, Safari, Edge)
- Python 또는 Node.js (로컬 서버 실행용)

### 설치 및 실행

**방법 1: Python 사용**
```bash
cd claude-code-mastery
python -m http.server 8000
```

**방법 2: Node.js 사용 (live-server)**
```bash
cd claude-code-mastery
npx live-server
```

브라우저에서 `http://localhost:8000` 접속

## 📁 프로젝트 구조

```
claude-code-mastery/
├── index.html          # 메인 HTML 파일
├── css/
│   └── styles.css      # 커스텀 CSS (Tailwind 보완)
├── js/
│   └── script.js       # 상호작용 기능
├── assets/
│   └── images/         # 이미지 파일
├── README.md           # 이 파일
├── ROADMAP.md          # 개발 로드맵
├── CLAUDE.md           # Claude Code 가이드
└── .gitignore
```

## ✨ 주요 기능

### 1. 헤더 & 네비게이션
- 고정(sticky) 네비게이션 바
- 반응형 햄버거 메뉴 (모바일)
- 부드러운 스크롤 네비게이션
- 다크모드 토글 버튼

### 2. Hero Section
- 프로필 소개
- CTA 버튼 (포트폴리오 보기, 연락하기)
- 배경 그라디언트

### 3. 경력 섹션
- 타임라인 레이아웃
- 회사, 직책, 기간, 업무 상세

### 4. 기술 스택
- Frontend / Backend / Tools 카테고리
- 스킬 배지 태그

### 5. 포트폴리오
- 프로젝트 카드 그리드
- 카테고리 필터링 (전체, 웹, 모바일, 기타)
- 호버 효과

### 6. 학력 & 자격증
- 학교명, 전공, 학점
- 자격증 정보

### 7. SNS 섹션
- GitHub, YouTube, Instagram, LinkedIn, Twitter/X, 블로그
- 각 플랫폼별 색상 구분
- 호버 애니메이션

### 8. 연락처
- 이메일, 전화, 위치 정보
- 연락 폼 (폼 검증 포함)

### 9. 푸터
- 빠른 링크
- 소셜 링크
- 저작권 정보

## 🎨 디자인 특징

### 색상 팔레트
- **주요 색**: 파란색 (#0284c7)
- **보조 색**: 인디고 (#4f46e5)
- **라이트 배경**: #ffffff
- **다크 배경**: #111827

### 반응형 브레이크포인트
- 모바일: < 640px
- 태블릿: 768px ~ 1024px
- 데스크톱: > 1024px

### 애니메이션
- Fade-in 애니메이션 (스크롤 진입)
- 버튼 호버 효과
- 네비게이션 링크 언더라인
- 카드 스케일 효과

## 🔧 기술 스택

| 범주 | 기술 |
|------|------|
| **마크업** | HTML5 |
| **스타일** | Tailwind CSS 3 (CDN) |
| **스크립트** | Vanilla JavaScript (ES6+) |
| **배포** | GitHub Pages / Vercel / Netlify |

## 📱 반응형 테스트 체크리스트

- [x] 모바일 (320px 이상)
- [x] 태블릿 (768px 이상)
- [x] 데스크톱 (1024px 이상)
- [x] 크로스 브라우저 (Chrome, Firefox, Safari, Edge)
- [x] 다크모드 전환
- [x] 터치 인터페이스

## 🚀 배포

### GitHub Pages
```bash
# 저장소 설정에서 GitHub Pages 활성화
# main 브랜치 선택
```

### Vercel
```bash
vercel
```

### Netlify
```bash
netlify deploy
```

## 📝 수정 가능 영역

**개인 정보 수정 위치:**
- `index.html` - 이름, 직책, 소개, 경력, 기술, 프로젝트, 학력, SNS 링크
- `CLAUDE.md` - 프로젝트 관련 설정

## 🤝 기여

이 프로젝트는 개인 포트폴리오이지만, 개선 사항이 있으면 이슈를 등록해주세요.

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 📞 연락처

- 이메일: kim@example.com
- 전화: 010-1234-5678
- GitHub: https://github.com
- LinkedIn: https://linkedin.com

---

**마지막 업데이트**: 2024년 4월 14일  
**버전**: 1.0.0
