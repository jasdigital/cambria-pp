#!/bin/bash

INPUT_DIR="public/video"
OUTPUT_DIR="public/video/optimized"

mkdir -p "$OUTPUT_DIR"

echo "🎬 Compressing videos..."

for file in "$INPUT_DIR"/*.{mp4,mov}; do
  [ -f "$file" ] || continue
  
  filename=$(basename "$file")
  output="$OUTPUT_DIR/${filename%.*}.mp4"
  
  if [ -f "$output" ]; then
    echo "⏭️  Skipping $filename (already compressed)"
    continue
  fi
  
  echo "📹 Compressing $filename..."
  
  ffmpeg -i "$file" \
    -vcodec libx264 \
    -crf 28 \
    -preset medium \
    -vf "scale='min(1280,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" \
    -movflags +faststart \
    -y "$output"
  
  echo "✅ Compressed: $filename"
done

echo "🎉 All videos compressed!"
echo "📁 Output directory: $OUTPUT_DIR"
