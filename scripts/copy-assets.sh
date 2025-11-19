#!/bin/bash

echo "📦 Copying public assets (excluding videos)..."

# Create dist directory if it doesn't exist
mkdir -p dist

# Copy images
if [ -d "public/images" ]; then
  echo "📷 Copying images..."
  mkdir -p dist/images
  cp -r public/images/* dist/images/
fi

# Copy keywords
if [ -d "public/keywords" ]; then
  echo "📊 Copying keywords..."
  mkdir -p dist/keywords
  cp -r public/keywords/* dist/keywords/
fi

# Copy any other files in public root (excluding video folder)
for item in public/*; do
  if [ -f "$item" ]; then
    echo "📄 Copying $(basename "$item")..."
    cp "$item" dist/
  fi
done

echo "✅ Assets copied (videos excluded)"
echo "📦 Build size:"
du -sh dist
