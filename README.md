# Birthday Cake 🎂

생일 축하를 위한 인터랙티브 3D 케이크 웹사이트입니다.

## ✨ 주요 기능

- 🎂 **3D 케이크 애니메이션**: CSS로 구현된 입체적인 케이크
- 🎨 **3가지 테마**: 초콜릿, 크림, 블루베리 테마
- ✏️ **실시간 편집**: 이름과 메시지를 실시간으로 수정
- 🎉 **컨페티 효과**: 생일 축하 분위기를 위한 컨페티 애니메이션
- 📱 **반응형 디자인**: 모바일과 데스크톱에서 최적화
- 🔗 **URL 공유**: 편집된 내용이 URL에 반영되어 공유 가능

## 🚀 배포

- **사이트**: https://hyyrim.github.io/birthday-cake
- **배포 방식**: GitHub Pages + GitHub Actions

## 🛠️ 개발 환경 설정

### 필수 요구사항

- Node.js 18+
- pnpm 8+

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/hyyrim/birthday-cake.git
cd birthday-cake

# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 프로덕션 빌드
pnpm build

# 빌드 미리보기
pnpm preview
```

## 🏗️ 프로젝트 구조

```
src/
├── components/
│   ├── core/          # 핵심 컴포넌트
│   ├── features/      # 기능별 컴포넌트
│   └── ui/           # UI 컴포넌트
├── utils/            # 유틸리티 함수
└── styles/           # 전역 스타일
```

## 🛠️ 기술 스택

- **프론트엔드**: React 19, TypeScript
- **빌드 도구**: Vite
- **스타일링**: CSS Modules
- **패키지 매니저**: pnpm
- **애니메이션**: Canvas Confetti

## 📝 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
