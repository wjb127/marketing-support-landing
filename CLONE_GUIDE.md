# 🎯 Figma Dev Mode 완벽 클론 코딩 실전 가이드

## 1️⃣ Dev Mode에서 수치 추출하기

### A. 요소 선택 & 복사
```bash
1. Figma 파일 열기
2. Dev Mode ON (우측 상단)
3. 요소 클릭
4. 우측 패널에서:
   - "Copy as CSS" → 전체 CSS 복사
   - "Copy properties" → 개별 속성 복사
   - "Copy as SVG" → 아이콘/그래픽 복사
```

### B. 반드시 확인할 수치들
```css
/* 1. Position & Size */
position: absolute;
left: 420px;  /* X 좌표 */
top: 300px;   /* Y 좌표 */
width: 600px;
height: 115px;

/* 2. Spacing (Auto Layout) */
display: flex;
gap: 24px;        /* 요소 간 간격 */
padding: 80px 0;  /* 내부 여백 */

/* 3. Typography */
font-family: 'Pretendard';
font-size: 96px;
line-height: 115px;  /* Figma % → px 변환됨 */
font-weight: 700;
letter-spacing: -0.02em;

/* 4. Colors */
background: #FF0000;      /* Solid Color */
background: rgba(255, 0, 0, 0.8);  /* With Opacity */

/* 5. Effects */
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
border-radius: 12px;
backdrop-filter: blur(10px);
```

## 2️⃣ 컴포넌트별 구현 순서

### STEP 1: 구조 파악
```html
<!-- Figma 레이어 구조 그대로 -->
<div class="main-frame">
  <header class="header-section">
    <nav class="navigation">...</nav>
  </header>
  
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-title">관악구 지원사업</h1>
      <p class="hero-subtitle">소상공인과 함께하는 관악구</p>
      <div class="button-group">
        <button class="button-primary">지원하기</button>
        <button class="button-secondary">사업 안내</button>
      </div>
    </div>
  </section>
</div>
```

### STEP 2: Dev Mode CSS 적용
```css
/* Dev Mode에서 복사한 CSS 그대로 사용 */
.hero-title {
  /* Figma에서 복사 */
  position: absolute;
  width: 600px;
  height: 115px;
  left: calc(50% - 600px/2);  /* 중앙 정렬 */
  top: 300px;
  
  font-family: 'Pretendard';
  font-size: 96px;
  line-height: 115px;
  text-align: center;
  color: #000000;
}
```

### STEP 3: Auto Layout → Flexbox 변환
```css
/* Figma Auto Layout */
.button-group {
  /* Dev Mode 제공 값 */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;  /* Figma gap 그대로 */
}
```

## 3️⃣ 픽셀 퍼펙트 검증 프로세스

### A. Perfect Pixel 설정
```javascript
1. Chrome 확장 프로그램 설치
2. Figma 디자인 스크린샷 (Cmd+Shift+4)
   - 반드시 100% 줌 레벨
   - 전체 프레임 캡처
3. Perfect Pixel 실행
4. 이미지 업로드 & 오버레이
5. Opacity 50%로 조정
6. 픽셀 단위 차이 확인
```

### B. Dev Tools 활용
```javascript
// Console에서 실행
// 현재 요소의 정확한 크기 확인
const element = document.querySelector('.hero-title');
const rect = element.getBoundingClientRect();
console.log({
  width: rect.width,
  height: rect.height,
  top: rect.top,
  left: rect.left
});

// Figma 수치와 비교
// 차이가 있다면 CSS 조정
```

## 4️⃣ 자주 발생하는 문제 & 해결법

### 문제 1: 폰트 크기 미세 차이
```css
/* 해결: Figma와 동일한 line-height 사용 */
.text {
  font-size: 96px;
  line-height: 115px; /* % 대신 px 사용 */
  /* line-height: 1.2; ❌ 사용 금지 */
}
```

### 문제 2: Flexbox Gap 미지원 브라우저
```css
/* 해결: Margin으로 대체 */
.container > * + * {
  margin-left: 16px; /* gap: 16px 대체 */
}
```

### 문제 3: 이미지 크기 불일치
```css
/* 해결: 정확한 크기 명시 */
.image {
  width: 440px;  /* Figma 정확한 너비 */
  height: 320px; /* Figma 정확한 높이 */
  object-fit: cover;
  display: block; /* 하단 공백 제거 */
}
```

## 5️⃣ Dev Mode 단축키 & 꿀팁

### 필수 단축키
```
Cmd + Click: 중첩된 요소 선택
Option + Hover: 간격 측정
Shift + Click: 여러 요소 선택
C: 코드 패널 토글
```

### Pro Tips
```markdown
1. **Variable 활용**
   - Figma Variables → CSS Custom Properties
   - 색상, 간격 일괄 관리

2. **Component Properties 확인**
   - Variants 확인
   - States (hover, active) 스타일

3. **Export 설정**
   - 2x, 3x 이미지 export
   - SVG 최적화 옵션

4. **Inspect 모드 활용**
   - 요소 간 정확한 거리
   - Computed 스타일 확인
```

## 6️⃣ 실제 코드 예제

### 완벽한 버튼 클론
```css
/* Figma Dev Mode에서 복사한 그대로 */
.btn-primary {
  /* Auto Layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  
  /* Position and Size */
  width: 160px;
  height: 56px;
  
  /* Style */
  background: #FF0000;
  border-radius: 8px;
  
  /* Typography */
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  
  /* Color */
  color: #FFFFFF;
  
  /* States - Dev Mode에서 확인 */
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #E60000; /* 10% darker */
  transform: translateY(-2px);
  box-shadow: 0px 4px 12px rgba(255, 0, 0, 0.3);
}
```

## ✅ 체크리스트

- [ ] Dev Mode 켜기
- [ ] 모든 수치 CSS로 복사
- [ ] HTML 구조 = Figma 레이어 구조
- [ ] Auto Layout → Flexbox 변환
- [ ] 색상 코드 정확히 일치
- [ ] 폰트 크기/무게/간격 확인
- [ ] Perfect Pixel로 오버레이 테스트
- [ ] 반응형 브레이크포인트 확인
- [ ] Hover/Active 상태 구현
- [ ] 최종 스크린샷 비교

---

💡 **Golden Rule**: Dev Mode가 제공하는 CSS를 그대로 사용하되, 브라우저 호환성만 체크!

🚀 **Next Step**: 이제 Dev Mode 켜고 하나씩 복사해서 붙여넣기!