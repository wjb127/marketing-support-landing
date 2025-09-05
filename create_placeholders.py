from PIL import Image, ImageDraw, ImageFont
import os

# Create placeholder images
placeholders = [
    ('logo.png', (58, 60), '관악구'),
    ('hero-bg.png', (667, 444), 'Hero BG'),
    ('service-1.png', (220, 135), '스마트플레이스'),
    ('service-2.png', (218, 129), '콘텐츠 제작'),
]

for filename, size, text in placeholders:
    img = Image.new('RGB', size, color='#f0f0f0')
    draw = ImageDraw.Draw(img)
    
    # Draw border
    draw.rectangle([0, 0, size[0]-1, size[1]-1], outline='#cccccc', width=2)
    
    # Add text in center
    text_bbox = draw.textbbox((0, 0), text)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    draw.text((x, y), text, fill='#666666')
    
    img.save(f'public/images/{filename}')
    print(f'Created: {filename}')

print('All placeholder images created!')
