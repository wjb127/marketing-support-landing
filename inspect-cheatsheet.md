# 🚀 Inspect 패널 5분 마스터

## 화면 구성
```
┌─────────────────────────────────────┐
│         Figma Canvas                │
│                                     │
│     [선택한 요소]                   │ ← 클릭!
│                                     │
└─────────────────────────────────────┘
                                    
            우측 패널 ↓
┌─────────────────────────────────────┐
│  Design | Inspect | Export          │ ← 여기!
├─────────────────────────────────────┤
│  📏 Position & Size                 │
│  X: 420  Y: 300                     │
│  W: 600  H: 115                     │
├─────────────────────────────────────┤
│  🎨 Fill                            │
│  #FF0000                            │
├─────────────────────────────────────┤
│  📝 Typography                      │
│  Pretendard                         │
│  96px / 115px / 700                 │
├─────────────────────────────────────┤
│  📦 Layout                          │
│  Gap: 16                            │
│  Padding: 20                        │
└─────────────────────────────────────┘
```

## 🔥 즉시 사용 가능한 CSS 변환

### Inspect 보이는 값 → CSS 복사용

```css
/* 1. Position & Size 섹션 */
X: 420  →  left: 420px;
Y: 300  →  top: 300px;
W: 600  →  width: 600px;
H: 115  →  height: 115px;

/* 2. Fill 섹션 */
#FF0000  →  background: #FF0000;
80%      →  opacity: 0.8;

/* 3. Typography 섹션 */
Pretendard        →  font-family: 'Pretendard';
96px              →  font-size: 96px;
115px (or 120%)   →  line-height: 115px;
700               →  font-weight: 700;

/* 4. Stroke 섹션 */
#E5E5E5           →  border-color: #E5E5E5;
2                 →  border-width: 2px;

/* 5. Effects 섹션 */
Drop shadow       →  box-shadow:
  X: 0, Y: 4          0px 4px
  Blur: 24            24px
  #000 8%             rgba(0, 0, 0, 0.08);

/* 6. Border Radius */
12  →  border-radius: 12px;
```

## 💪 Option(Alt) 키 활용 - 간격 측정

```
1. 요소 A 선택
2. Option(Mac) / Alt(PC) 누르고
3. 요소 B에 마우스 올리기
4. 빨간선 + 픽셀 거리 표시!

예시: [버튼] ←--16px--→ [버튼]
```

## 🎯 실전 예제

### Figma에서 버튼 선택 시:
```
Inspect Panel:
├─ W: 160, H: 56
├─ Fill: #FF0000
├─ Corner: 8
├─ Text: 18px/24px/600
└─ Padding: 16, 32
```

### 바로 쓰는 CSS:
```css
button {
  width: 160px;
  height: 56px;
  background: #FF0000;
  border-radius: 8px;
  padding: 16px 32px;
  
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
}
```

## ⚡ 단축키 모음
- `C` - Code 패널 토글
- `Option + 마우스` - 간격 측정
- `I` - 색상 스포이드
- `Cmd + Click` - 깊은 요소 선택

끝! 이제 Inspect만으로 클론 코딩 가능! 🎉