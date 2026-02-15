# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

HTML, CSS, JavaScript, TailwindCSS(CDN)를 활용한 반응형 개발자 웹 이력서 싱글 페이지 프로젝트.
빌드 도구 없이 정적 파일로 구성되며, 브라우저에서 `index.html`을 직접 열어 확인한다.

## 언어 및 커뮤니케이션 규칙

- **기본 응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서화**: 한국어로 작성
- **변수명/함수명**: 영어 (코드 표준 준수)

## 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3** (`css/style.css`): 커스텀 스타일, 애니메이션
- **JavaScript** (`js/script.js`): 인터랙션 (다크모드, 스크롤 효과, 모바일 메뉴)
- **TailwindCSS**: CDN 방식으로 연결 (npm 설치 없음)

## 프로젝트 구조

```
resume_project/
├── index.html          # 메인 페이지 (싱글 페이지)
├── css/
│   └── style.css       # 커스텀 스타일시트
├── js/
│   └── script.js       # 인터랙션 스크립트
├── assets/
│   └── images/         # 이미지 리소스
├── ROADMAP.md          # 개발 로드맵 및 샘플 데이터
└── CLAUDE.md
```

## 개발 규칙

- TailwindCSS 유틸리티 클래스를 우선 사용하고, 커스텀 CSS는 Tailwind로 표현이 어려운 경우에만 `css/style.css`에 작성
- 외부 라이브러리 추가 시 CDN 방식 사용
- 모든 섹션은 반응형(모바일, 태블릿, 데스크탑)으로 구현
- `ROADMAP.md`의 Phase 순서와 샘플 데이터를 참고하여 개발 진행
