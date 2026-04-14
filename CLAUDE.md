# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 프로젝트 개요

개발자 웹 이력서 포트폴리오 사이트 프로젝트입니다.
- **기술 스택**: HTML5, CSS3, Tailwind CSS (CDN), Vanilla JavaScript
- **목표**: 반응형 웹 이력서 사이트 구축 및 배포
- **배포 대상**: GitHub Pages / Vercel / Netlify
- **현재 상태**: 다크테마 기반 초기 레이아웃 완성, Phase 1 진행 중

---

## 언어 및 커뮤니케이션 규칙

### 기본 응답 언어
- **Claude의 응답**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성 (마크다운 문서, 이슈 설명 등)

### 코드 작성 규칙
- **변수명/함수명**: 영어 (camelCase 또는 snake_case, 프로그래밍 표준 준수)
- **CSS 클래스명**: 영어 (BEM 또는 kebab-case 규칙)
- **HTML 속성명**: 영어 (표준 HTML 준수)

---

## 프로젝트 구조

```
claude-code-mastery/
├── CLAUDE.md              # 이 파일
├── ROADMAP.md             # 프로젝트 로드맵
├── README.md              # 프로젝트 소개 (작성 예정)
├── index.html             # 메인 페이지
├── css/
│   └── styles.css         # 커스텀 CSS
├── js/
│   └── script.js          # 메인 JavaScript
└── assets/
    ├── images/            # 이미지 파일
    └── fonts/             # 폰트 파일
```

---

## 주요 기능별 구조

### 1. HTML 구조 (index.html)
- **Header**: sticky 네비게이션 바, 로고, 다크모드 토글, 햄버거 메뉴 (모바일)
- **Hero Section**: 프로필 이미지(원형 배지), 자기소개, CTA 버튼
- **Experience**: 경력 사항 섹션
- **Skills**: 기술 스택 (skill-badge 클래스 활용)
- **Portfolio**: 프로젝트 카드 그리드 (필터 기능 포함, data-filter와 data-category 속성 사용)
- **Education**: 학력 및 자격증
- **Contact**: 연락 폼 (이메일 유효성 검사, mailto 링크 생성)
- **Footer**: 저작권, 소셜 링크

### 2. CSS 구조 (Tailwind + 커스텀 CSS)
- **Tailwind CSS**: CDN을 통해 로드 (html.dark 클래스로 다크모드 활성화)
- **커스텀 CSS** (css/styles.css):
  - 글로벌 스타일 및 reset
  - 커스텀 애니메이션: `fadeInUp`, `blink`, `slideInDown`
  - 컴포넌트별 스타일: `.skill-badge`, `.portfolio-item`, `.filter-btn`, `.nav-link` 등
  - 반응형 디자인 (모바일, 태블릿, 데스크톱)
  - 접근성: 포커스 상태, prefers-reduced-motion 지원
  - 프린트 스타일

### 3. JavaScript 기능 (js/script.js)
**핵심 기능:**
- **모바일 메뉴**: 햄버거 메뉴 토글, Escape 키/창 크기 변경 시 자동 닫기
- **다크모드**: localStorage 활용, 기본값은 다크 활성화 (html.dark 클래스)
- **포트폴리오 필터**: data-filter 속성으로 카테고리별 필터링 (all, 카테고리명)
- **스크롤 애니메이션**: Intersection Observer 활용, 요소 진입 시 fadeInUp 효과
- **Header 스크롤 효과**: scrolled 클래스 추가/제거 (50px 이상 스크롤 시)
- **네비게이션 활성화**: 현재 섹션에 따라 nav-link에 색상 적용
- **폼 유효성 검사**: 이메일 정규식 검증, 빈 필드 확인, mailto 링크로 전송
- **이미지 Lazy Loading**: Intersection Observer로 data-src를 src로 전환
- **부드러운 스크롤**: hashbang 링크(#) 클릭 시 scrollIntoView 사용

---

## 개발 명령어

### 빠른 시작
```bash
# 현재 상태: Tailwind CSS는 CDN을 통해 로드됨 (tailwind.config.js는 향후 npm 마이그레이션용)

# 1. 로컬 개발 서버 실행 (권장)
python -m http.server 8000
# 또는
npx live-server

# 2. 브라우저에서 접속
# http://localhost:8000
```

### Tailwind CSS 마이그레이션 (향후 예정)
현재는 Tailwind CSS CDN 사용 중입니다. npm 기반 빌드로 마이그레이션할 경우:
```bash
# npm 초기화 (이미 되어있으면 스킵)
npm init -y

# Tailwind CSS 의존성 설치
npm install -D tailwindcss postcss autoprefixer

# 이미 존재하는 tailwind.config.js 확인 후 postcss.config.js 생성
# npx tailwindcss init -p

# 개발 모드로 CSS 컴파일
npm run dev
```

### 배포
```bash
# GitHub Pages 배포
git push origin main

# Vercel 배포
vercel

# Netlify 배포
netlify deploy
```

---

## 개발 단계별 체크리스트

각 Phase는 ROADMAP.md에 상세히 기술되어 있습니다.

**진행 상황 추적**:
- ROADMAP.md의 체크박스를 업데이트하며 진행
- 각 Phase 완료 시 커밋 생성
- 커밋 메시지: `[Phase X] 섹션명: 기능 설명`

---

## 파일 수정 규칙

### 커밋 메시지 형식
```
[Phase X] 섹션명: 작업 내용

상세 설명 (필요 시)
```

예시:
```
[Phase 2] 네비게이션: 반응형 메뉴 구현

- 햄버거 메뉴 추가
- 모바일 320px 이상 대응
- 스무스 스크롤 기능 구현
```

### CSS 작성 가이드
- Tailwind CSS 유틸리티 클래스 최우선 사용
- 커스텀 CSS는 필요한 경우만 css/styles.css에 작성
- CSS 주석: 한국어로 작용 목적 설명
- 애니메이션 클래스 또는 @keyframes는 styles.css에 정의
- 반응형 디자인: Tailwind의 `sm:`, `md:`, `lg:`, `xl:` 사용, 필요시 CSS 미디어 쿼리 활용

### JavaScript 작성 가이드
- Vanilla JavaScript 사용 (외부 라이브러리 최소화)
- 함수 단위 주석: 한국어로 역할 설명 (`// ========== 섹션명 ==========` 형식)
- 변수명: 영어 (명확한 의도 표현, camelCase 사용)
- DOM 요소 선택: 상단에 `getElementById`, `querySelectorAll` 등으로 미리 선택
- 이벤트 리스너: 요소 선택 후 `.addEventListener()` 으로 등록
- 데이터 속성 사용: `data-filter`, `data-category` 등으로 요소 분류 및 필터링

---

## 디자인 시스템

### 색상 팔레트 (다크테마)
- **배경**: `bg-zinc-950` (검은색, #0a0a0a)
- **서브 배경**: `bg-zinc-900`, `bg-zinc-800`
- **테두리**: `border-zinc-800`, `border-zinc-700`
- **텍스트**: `text-white` (주), `text-zinc-400` (보조), `text-zinc-300` (중간)
- **액센트**: `text-blue-600` (활성 네비게이션), 흰색 배경 (CTA 버튼)
- **호버**: 흰색 배경, 검은색 텍스트로 반전

### 레이아웃 제약
- **최대 너비**: `max-w-3xl` (768px) - 모든 주요 섹션
- **여백**: `px-4 sm:px-6 lg:px-8` (반응형 패딩)

### 타이포그래피
- **제목**: `font-bold`, 크기 변화 `text-3xl md:text-4xl` 등
- **본문**: `text-lg md:text-xl`, `leading-relaxed`
- **라벨**: `font-semibold`

---

## 배포 전 체크리스트

- [ ] 모든 링크 작동 확인
- [ ] 반응형 테스트 (모바일/태블릿/데스크톱)
- [ ] 크로스 브라우저 테스트 (Chrome, Firefox, Safari, Edge)
- [ ] 이미지 최적화 및 로딩 확인
- [ ] SEO 메타 태그 설정
- [ ] 성능 최적화 (Lighthouse 80점 이상)
- [ ] 최종 프로덕션 빌드 테스트

---

## 참고 자료

- [ROADMAP.md](./ROADMAP.md) - 프로젝트 개발 로드맵
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [MDN Web Docs - HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

---

## 주의사항 및 팁

### 주의할 점
- **다크모드 기본값**: 현재 `<html class="dark">` 로 항상 다크모드 활성화 (Escape 키로 활성/비활성 토글 가능)
- **이메일 기본값**: `mailto:kim@example.com` - 배포 전 실제 이메일 주소로 변경 필요
- **이미지 Lazy Loading**: `<img data-src="..." >` 형식 사용, `src` 속성 대신 `data-src` 사용
- **포트폴리오 필터**: `data-filter` 속성값과 `data-category` 값이 정확히 일치해야 필터링 작동
- **Header 높이**: sticky header가 콘텐츠를 덮을 수 있으므로, 앵커링크 이동 시 상단 여백 확인 필요

### 성능 팁
- Tailwind CSS CDN 사용 중: 프로덕션 배포 전 npm 기반 빌드로 마이그레이션 권장 (최적화 및 캐싱)
- Intersection Observer 활용: 스크롤 애니메이션이 성능 효율적으로 처리됨
- 이미지 포맷: WebP 지원하는 브라우저용 format 태그 고려

### 새 섹션 추가 시
1. HTML에 `<section id="섹션명">` 추가
2. 네비게이션 링크 추가 (`<a href="#섹션명">`)
3. JavaScript에서 관련 DOM 요소 선택 (필요시)
4. Intersection Observer에 `.fade-in` 클래스가 자동으로 애니메이션 처리

---

## 마지막 업데이트

- **업데이트일**: 2026-04-14
- **프로젝트 상태**: Phase 1 진행 중 - 초기 레이아웃 및 인터랙션 완성
