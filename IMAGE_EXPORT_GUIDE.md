# 🖼️ Figma 이미지 Export & 매핑 가이드

## 📸 이미지 추출 방법 3가지

### 방법 1: Figma에서 직접 Export (권장) ✅

```bash
1. Figma 파일 열기
2. 이미지 요소 선택 (클릭)
3. 우측 패널 하단 "Export" 섹션
4. "+ Export" 클릭
5. 설정:
   - Format: PNG
   - Size: 2x (레티나 디스플레이용)
6. "Export [이미지명]" 클릭
7. 저장 위치: /public/images/
```

### 방법 2: Figma API로 자동 다운로드

```bash
# 1단계: 이미지 URL 가져오기
curl -H "X-Figma-Token: YOUR_FIGMA_TOKEN" \
  "https://api.figma.com/v1/images/mSP5U7usMGW4dz7MsbcGVJ?ids=NODE_ID&format=png&scale=2" \
  > image_urls.json

# 2단계: URL에서 이미지 다운로드
curl -o public/images/hero-bg.png "IMAGE_URL_FROM_RESPONSE"
```

### 방법 3: 스크린샷 (임시)

```bash
1. Figma에서 프레임 선택
2. Cmd + Shift + 4 (Mac) / Windows + Shift + S (Windows)
3. 영역 선택 후 캡처
4. public/images/ 폴더에 저장
```

---

## 🎨 현재 프로젝트에 필요한 이미지

### 1. 관악구 로고
- **Figma 이름**: 관악구CI(세로형)
- **크기**: 58x60px
- **저장 경로**: `/public/images/logo.png`
- **사용 위치**: Header 컴포넌트

### 2. 히어로 배경 이미지 
- **Figma 이름**: CK_ti069a38701
- **크기**: 667x444px
- **저장 경로**: `/public/images/hero-bg.png`
- **사용 위치**: 메인 페이지 히어로 섹션

### 3. 서비스 아이콘들
- **스마트플레이스**: image02 (220x135px)
- **콘텐츠 제작**: image03 (218x129px)
- **저장 경로**: `/public/images/service-1.png`, `service-2.png`

---

## 📝 코드에 이미지 적용하기

### Next.js Image 컴포넌트 사용

```tsx
import Image from 'next/image'

// 1. 로고 이미지
<Image 
  src="/images/logo.png"
  alt="관악구 로고"
  width={58}
  height={60}
  priority // LCP 최적화
/>

// 2. 히어로 배경 이미지
<div className="relative">
  <Image
    src="/images/hero-bg.png"
    alt="히어로 배경"
    fill
    className="object-cover"
    priority
  />
</div>

// 3. 서비스 아이콘
<Image
  src="/images/service-1.png"
  alt="스마트플레이스"
  width={220}
  height={135}
  className="rounded-lg"
/>
```

### 배경 이미지로 사용

```css
.hero-section {
  background-image: url('/images/hero-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

---

## 🚀 빠른 실행 스크립트

```bash
# 1. public/images 폴더 생성
mkdir -p public/images

# 2. Figma에서 이미지 Export 후 저장

# 3. 이미지 최적화 (선택사항)
npx @squoosh/cli --mozjpeg '{"quality":85}' public/images/*.png

# 4. WebP 변환 (선택사항)
npx @squoosh/cli --webp '{"quality":85}' public/images/*.png
```

---

## ⚡ 이미지 최적화 팁

1. **포맷 선택**
   - 사진: JPEG 또는 WebP
   - 로고/아이콘: PNG 또는 SVG
   - 애니메이션: GIF 또는 WebP

2. **크기 최적화**
   - 실제 표시 크기의 2배 (레티나 대응)
   - 최대 너비 제한 (max-width)

3. **로딩 최적화**
   - LCP 이미지: priority 속성
   - 스크롤 아래: lazy loading (기본값)

4. **Next.js 자동 최적화**
   ```tsx
   // next.config.js
   module.exports = {
     images: {
       domains: ['api.figma.com'],
       formats: ['image/avif', 'image/webp'],
     },
   }
   ```

---

## ✅ 체크리스트

- [ ] Figma에서 모든 이미지 Export
- [ ] public/images 폴더에 저장
- [ ] 이미지 파일명 정리 (kebab-case)
- [ ] Next.js Image 컴포넌트로 교체
- [ ] 이미지 크기 최적화
- [ ] WebP 포맷 추가 (선택)
- [ ] alt 텍스트 추가
- [ ] 로딩 우선순위 설정

---

💡 **Pro Tip**: Figma 플러그인 "Image Exporter" 사용하면 한 번에 모든 이미지 Export 가능!