# 🔍 Figma Inspect 완벽 가이드 (Dev Mode 없이)

## 📌 Inspect Panel 활성화

### 방법 1: 기본 Inspect
```
1. Figma 웹/데스크톱 앱 열기
2. 아무 요소나 클릭
3. 우측 패널 → "Inspect" 탭 (Design 탭 옆)
4. 자동으로 CSS 속성 표시
```

### 방법 2: 우클릭 메뉴
```
1. 요소 우클릭
2. "Copy/Paste as" → "Copy as CSS" 선택
   (일부 속성만 복사됨)
```

---

## 🎯 Inspect에서 추출 가능한 정보

### 1️⃣ **Position & Size**
```css
/* Inspect Panel 표시 내용 */
X: 420
Y: 300
W: 600  → width: 600px
H: 115  → height: 115px

/* CSS로 변환 */
.element {
  position: absolute;
  left: 420px;   /* X */
  top: 300px;    /* Y */
  width: 600px;  /* W */
  height: 115px; /* H */
}
```

### 2️⃣ **Typography**
```css
/* Inspect 표시 */
Pretendard
96px / 115px  → font-size / line-height
700           → font-weight

/* CSS 변환 */
.text {
  font-family: 'Pretendard';
  font-size: 96px;
  line-height: 115px;
  font-weight: 700;
}
```

### 3️⃣ **Colors**
```css
/* Inspect 표시 */
Fill: #FF0000     → background: #FF0000
Stroke: #E5E5E5   → border-color: #E5E5E5
Opacity: 80%      → opacity: 0.8

/* 복합 색상 */
rgba(255, 0, 0, 0.8)
```

### 4️⃣ **Layout (Auto Layout)**
```css
/* Inspect 표시 */
Direction: Horizontal  → flex-direction: row
Gap: 16               → gap: 16px
Padding: 20, 20, 20, 20 → padding: 20px

/* CSS 변환 */
.container {
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 20px;
  align-items: center;    /* Align: Center */
  justify-content: space-between; /* Distribute */
}
```

### 5️⃣ **Effects**
```css
/* Inspect 표시 */
Drop shadow:
  X: 0, Y: 4
  Blur: 24
  Color: #000 8%

/* CSS 변환 */
box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
```

### 6️⃣ **Border Radius**
```css
/* Inspect 표시 */
Corner radius: 12  → border-radius: 12px
Individual: 8,8,0,0 → border-radius: 8px 8px 0 0
```

---

## 💡 Inspect Panel 단축키 & 팁

### 필수 단축키
```
Cmd/Ctrl + Click: 깊은 요소 선택
Option/Alt 누른 채 Hover: 간격 측정
Shift + C: Code 속성 복사
Arrow Keys: 인접 요소 이동
```

### 측정 도구 활용
```markdown
1. **간격 측정**
   - Option(Alt) 키 누른 상태로
   - 한 요소에서 다른 요소로 마우스 이동
   - 빨간 선과 함께 픽셀 거리 표시

2. **크기 확인**
   - 요소 선택 시 자동으로 W x H 표시
   - 우측 Inspect에 정확한 수치

3. **색상 추출**
   - I 키: 스포이드 도구
   - 클릭하면 HEX 코드 복사
```

---

## 🛠 수동으로 CSS 추출하기

### Inspect 정보 → CSS 변환 템플릿

```javascript
// 1. Box Model
const cssBox = `
  width: ${W}px;
  height: ${H}px;
  position: absolute;
  left: ${X}px;
  top: ${Y}px;
`;

// 2. Flexbox (Auto Layout)
const cssFlex = `
  display: flex;
  flex-direction: ${direction};
  gap: ${gap}px;
  padding: ${padding}px;
  align-items: ${align};
  justify-content: ${justify};
`;

// 3. Typography
const cssText = `
  font-family: '${fontFamily}';
  font-size: ${fontSize}px;
  line-height: ${lineHeight}px;
  font-weight: ${fontWeight};
  color: ${color};
  text-align: ${textAlign};
`;

// 4. Style
const cssStyle = `
  background: ${fill};
  border: ${strokeWidth}px solid ${stroke};
  border-radius: ${cornerRadius}px;
  opacity: ${opacity};
  box-shadow: ${x}px ${y}px ${blur}px ${shadowColor};
`;
```

---

## 🎨 실전 예제: 버튼 클론하기

### Figma Inspect 정보:
```
W: 160, H: 56
Fill: #FF0000
Corner radius: 8
Text: Pretendard, 18px, 600
Padding: 16, 32
```

### 변환된 CSS:
```css
.button {
  /* Size */
  width: 160px;
  height: 56px;
  
  /* Style */
  background: #FF0000;
  border-radius: 8px;
  border: none;
  
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  
  /* Text */
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
  color: #FFFFFF;
  
  /* Interaction */
  cursor: pointer;
  transition: all 0.2s;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 0, 0, 0.3);
}
```

---

## 🔥 Pro Tips

### 1. **Export 옵션 활용**
```
요소 선택 → 우측 하단 "Export" 섹션
- PNG/JPG/SVG/PDF 선택
- 2x, 3x 배수 설정
- "Export [name]" 클릭
```

### 2. **CSS 일괄 복사**
```
여러 요소 선택 (Shift + Click)
→ Inspect Panel에서 공통 속성 확인
→ 한 번에 CSS 추출
```

### 3. **Component 속성 확인**
```
Component Instance 선택 시
→ Properties 섹션에서 Variants 확인
→ 각 상태별 스타일 파악
```

### 4. **플러그인 추천** (무료)
```
1. "Figma to Code" - HTML/CSS 자동 생성
2. "Design Tokens" - 변수 추출
3. "Measure" - 정확한 간격 측정
4. "CSS Peeper" - 스타일 추출
```

---

## ✅ Inspect Mode 체크리스트

- [ ] 요소 클릭 → Inspect 탭 확인
- [ ] Position (X, Y, W, H) 메모
- [ ] Typography 속성 복사
- [ ] Color 값 추출 (Fill, Stroke)
- [ ] Auto Layout → Flexbox 변환
- [ ] Effects (Shadow, Blur) 확인
- [ ] Corner Radius 적용
- [ ] Padding/Margin 계산
- [ ] Export Assets (이미지, 아이콘)

---

## 🚀 빠른 시작 코드

```html
<!-- HTML 구조 -->
<div class="frame" style="width: 1440px; height: 2116px;">
  <h1 class="title">관악구 지원사업</h1>
  <button class="btn-primary">지원하기</button>
</div>
```

```css
/* Inspect에서 추출한 CSS */
.frame {
  position: relative;
  background: #FFFFFF;
}

.title {
  position: absolute;
  left: 420px;
  top: 300px;
  width: 600px;
  height: 115px;
  
  font-family: 'Pretendard';
  font-size: 96px;
  line-height: 115px;
  font-weight: 700;
  text-align: center;
  color: #000000;
}

.btn-primary {
  width: 160px;
  height: 56px;
  background: #FF0000;
  border-radius: 8px;
  
  /* Inspect에서 본 값 그대로 */
}
```

---

💡 **Remember**: Inspect Panel은 Dev Mode의 80% 기능을 무료로 제공합니다!
"Copy as CSS"만 없을 뿐, 모든 수치는 다 볼 수 있어요! 👍