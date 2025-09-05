# 🖼️ Figma 이미지 수동 추출 가이드

## ✅ 현재 설정된 이미지 파일들

| 용도 | 파일명 | 크기 | 위치 | 상태 |
|------|--------|------|------|------|
| 관악구 로고 | `/images/logo.png` | 58x60px | Header | ✅ Placeholder |
| 히어로 배경 | `/images/hero-bg.png` | 667x444px | Hero Section | ✅ Placeholder |
| 서비스 1 | `/images/service-1.png` | 220x135px | Service Card | ✅ Placeholder |
| 서비스 2 | `/images/service-2.png` | 218x129px | Service Card | ✅ Placeholder |
| 메인 프레임 | `/images/main-frame.png` | Full Design | Reference | ✅ Downloaded |

## 📝 수동으로 Figma에서 이미지 Export 하는 방법

### 1단계: Figma 파일 열기
```
https://www.figma.com/design/mSP5U7usMGW4dz7MsbcGVJ/관악구
```

### 2단계: 각 이미지 Export

#### 1. 관악구 로고 (logo.png)
```
1. Figma에서 "관악구CI(세로형)" 찾기
2. 요소 선택 (클릭)
3. 우측 패널 하단 "Export" 섹션
4. "+ Export" 클릭
5. 설정:
   - Format: PNG
   - Size: 2x
6. "Export logo" 클릭
7. 저장: public/images/logo.png 로 덮어쓰기
```

#### 2. 히어로 배경 (hero-bg.png)
```
1. Figma에서 "CK_ti069a38701" 이미지 찾기
2. 요소 선택
3. Export 설정:
   - Format: PNG 또는 JPG
   - Size: 2x
4. 저장: public/images/hero-bg.png 로 덮어쓰기
```

#### 3. 서비스 아이콘 1 (service-1.png)
```
1. Figma에서 "image02" 찾기 (스마트플레이스)
2. Export → PNG, 2x
3. 저장: public/images/service-1.png 로 덮어쓰기
```

#### 4. 서비스 아이콘 2 (service-2.png)
```
1. Figma에서 "image03" 찾기 (콘텐츠 제작)
2. Export → PNG, 2x
3. 저장: public/images/service-2.png 로 덮어쓰기
```

## 🚀 빠른 Export 팁

### Option 1: 한번에 여러 이미지 Export
```
1. Shift + 클릭으로 여러 요소 선택
2. Export 섹션에서 한 번에 설정
3. "Export 4 layers" 클릭
```

### Option 2: 플러그인 사용
```
1. Figma 플러그인 메뉴 열기 (Cmd/Ctrl + /)
2. "Image Exporter" 검색
3. 플러그인 실행
4. 모든 이미지 자동 감지 및 Export
```

## 🔄 이미지 교체 후 확인 사항

1. **브라우저에서 확인**
   ```bash
   # 개발 서버가 실행 중인지 확인
   npm run dev
   
   # 브라우저 열기
   http://localhost:3000
   ```

2. **이미지가 제대로 로드되는지 확인**
   - 개발자 도구 > Network 탭
   - 이미지 404 에러 없는지 확인

3. **캐시 초기화**
   ```bash
   # 강제 새로고침
   Cmd + Shift + R (Mac)
   Ctrl + Shift + R (Windows)
   ```

## 📍 현재 코드에서 이미지 사용 위치

### Header.tsx
```tsx
<Image
  src="/images/logo.png"  // ← 관악구 로고
  alt="관악구 로고"
  width={58}
  height={60}
  priority
/>
```

### page.tsx (Hero Section)
```tsx
style={{ 
  backgroundImage: 'url(/images/hero-bg.png)', // ← 히어로 배경
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}}
```

### page.tsx (Service Cards)
```tsx
<Image
  src="/images/service-1.png"  // ← 스마트플레이스
  alt="스마트플레이스"
  fill
  className="object-contain"
/>

<Image
  src="/images/service-2.png"  // ← 콘텐츠 제작
  alt="콘텐츠 제작"
  fill
  className="object-contain"
/>
```

## ⚠️ 주의사항

1. **파일명 정확히 맞추기**
   - logo.png (로고.png ❌)
   - hero-bg.png (hero_bg.png ❌)

2. **경로 확인**
   - 모든 이미지는 `public/images/` 폴더에
   - 코드에서는 `/images/` 경로로 참조

3. **파일 크기 최적화**
   - 2MB 이하로 유지
   - 필요시 압축 도구 사용

## 🎯 완료 체크리스트

- [ ] logo.png - 관악구 로고 Export
- [ ] hero-bg.png - 히어로 배경 Export  
- [ ] service-1.png - 스마트플레이스 아이콘 Export
- [ ] service-2.png - 콘텐츠 제작 아이콘 Export
- [ ] 브라우저에서 모든 이미지 로드 확인
- [ ] 404 에러 없는지 확인

---

💡 **Tip**: Figma에서 이미지가 벡터인 경우 SVG로 Export하면 크기가 작고 품질이 좋습니다!