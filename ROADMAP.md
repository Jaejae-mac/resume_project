# 개발자 웹 이력서 - 개발 로드맵

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS를 활용한 반응형 개발자 웹 이력서 프로젝트

## 기술 스택

| 기술 | 용도 |
|------|------|
| HTML5 | 시맨틱 마크업, 페이지 구조 |
| CSS3 | 커스텀 스타일링, 애니메이션 |
| JavaScript | 인터랙션, 다크모드, 스크롤 효과 |
| TailwindCSS (CDN) | 유틸리티 기반 빠른 스타일링 |

## 이력서 섹션 구성

1. **Header** - 이름, 직함, 연락처, 프로필 사진
2. **About Me** - 자기소개 및 핵심 역량 요약
3. **Skills** - 기술 스택 (프로그레스 바 시각화)
4. **Experience** - 경력 사항 (타임라인 형태)
5. **Projects** - 주요 프로젝트 (카드 레이아웃)
6. **Education** - 학력 사항
7. **Contact** - 연락처 및 소셜 링크
8. **Footer** - 저작권 표시

---

## 개발 단계

### Phase 1: 프로젝트 초기 설정

- [ ] 프로젝트 폴더 구조 생성
- [ ] `index.html` 기본 구조 작성
- [ ] TailwindCSS CDN 연결
- [ ] `style.css` 커스텀 스타일 파일 생성
- [ ] `script.js` 스크립트 파일 생성
- [ ] 파비콘 및 메타 태그 설정

```
resume_project/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── images/
└── ROADMAP.md
```

### Phase 2: Header & Navigation

- [ ] 고정 네비게이션 바 구현
- [ ] 로고 또는 이름 표시
- [ ] 섹션별 앵커 링크 메뉴
- [ ] 모바일 햄버거 메뉴
- [ ] 스크롤 시 네비게이션 스타일 변경

### Phase 3: Hero / Header 섹션

- [ ] 프로필 영역 레이아웃 (이름, 직함, 한 줄 소개)
- [ ] 프로필 이미지 (원형 클리핑)
- [ ] 연락처 정보 (이메일, 전화번호, GitHub, LinkedIn)
- [ ] CTA 버튼 (이력서 다운로드 / 연락하기)

### Phase 4: About Me 섹션

- [ ] 자기소개 텍스트 작성
- [ ] 핵심 역량 키워드 뱃지
- [ ] 간단한 인적 사항 (경력 연수, 위치 등)

### Phase 5: Skills 섹션

- [ ] 기술 스택 카테고리 분류 (Frontend, Backend, Tools)
- [ ] 프로그레스 바 또는 태그 형태로 숙련도 표시
- [ ] 스크롤 시 애니메이션 효과

### Phase 6: Experience 섹션

- [ ] 타임라인 UI 구현
- [ ] 회사명, 직책, 기간, 업무 내용 표시
- [ ] 반응형 타임라인 레이아웃

### Phase 7: Projects 섹션

- [ ] 프로젝트 카드 그리드 레이아웃
- [ ] 프로젝트명, 설명, 사용 기술, 링크 표시
- [ ] 호버 효과 (카드 확대, 오버레이)

### Phase 8: Education & Contact 섹션

- [ ] 학력 사항 리스트
- [ ] 연락처 폼 또는 정보 표시
- [ ] 소셜 미디어 아이콘 링크

### Phase 9: Footer

- [ ] 저작권 표시
- [ ] 맨 위로 가기 버튼

### Phase 10: 인터랙션 & 마무리

- [ ] 다크모드 토글 구현
- [ ] 스크롤 애니메이션 (Intersection Observer)
- [ ] 부드러운 스크롤 (smooth scroll)
- [ ] 반응형 디자인 최종 점검 (모바일, 태블릿, 데스크탑)
- [ ] 접근성(a11y) 검토
- [ ] 성능 최적화 및 배포

---

## 샘플 이력서 데이터

```
이름: 홍길동
직함: 풀스택 웹 개발자
이메일: gildong@example.com
전화: 010-1234-5678
GitHub: github.com/gildong
위치: 서울특별시

자기소개:
  3년차 웹 개발자로 React, Node.js 기반의 웹 서비스 개발 경험이 있습니다.
  사용자 경험을 중시하며, 클린 코드를 지향합니다.

기술:
  - Frontend: HTML, CSS, JavaScript, React, TailwindCSS
  - Backend: Node.js, Express, Python
  - Database: MySQL, MongoDB
  - Tools: Git, Docker, AWS, Figma

경력:
  - (주)테크스타트 | 프론트엔드 개발자 | 2022.03 - 현재
    - React 기반 SaaS 플랫폼 개발
    - 성능 최적화로 페이지 로딩 속도 40% 개선

  - (주)웹솔루션 | 주니어 개발자 | 2020.06 - 2022.02
    - 기업 웹사이트 및 관리자 페이지 개발
    - RESTful API 설계 및 구현

프로젝트:
  - TaskFlow: 팀 협업 프로젝트 관리 도구 (React, Node.js, MongoDB)
  - WeatherNow: 실시간 날씨 대시보드 (JavaScript, OpenWeather API)
  - DevBlog: 개인 기술 블로그 (Next.js, MDX)

학력:
  - 한국대학교 컴퓨터공학과 학사 졸업 (2016 - 2020)
```

---

## 진행 순서

> Phase 1 → 2 → 3 순서대로 진행하며, 각 Phase 완료 후 다음 단계로 넘어갑니다.
> 각 단계에서 반응형 디자인을 함께 적용합니다.
