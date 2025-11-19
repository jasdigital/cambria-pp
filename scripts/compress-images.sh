#!/bin/bash

# Image compression script - Convert images to WebP format
# Requires: imagemagick or cwebp (libwebp)

INPUT_DIR="public/images"
OUTPUT_DIR="public/images/webp"
QUALITY=85  # WebP quality (0-100, default 85)

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🖼️  Starting image compression to WebP...${NC}\n"

# Check if imagemagick or cwebp is installed
if command -v cwebp &> /dev/null; then
    CONVERTER="cwebp"
    echo -e "${GREEN}✓ Using cwebp${NC}"
elif command -v magick &> /dev/null; then
    CONVERTER="magick"
    echo -e "${GREEN}✓ Using ImageMagick${NC}"
elif command -v convert &> /dev/null; then
    CONVERTER="convert"
    echo -e "${GREEN}✓ Using ImageMagick (convert)${NC}"
else
    echo -e "${RED}❌ Error: Neither cwebp nor ImageMagick found${NC}"
    echo -e "${YELLOW}Install one of the following:${NC}"
    echo "  brew install webp           # For cwebp (recommended)"
    echo "  brew install imagemagick    # For ImageMagick"
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Initialize counters
total_files=0
converted_files=0
skipped_files=0
total_original_size=0
total_webp_size=0

# Function to convert image to WebP
convert_to_webp() {
    local input_file="$1"
    local filename=$(basename "$input_file")
    local filename_no_ext="${filename%.*}"
    local output_file="$OUTPUT_DIR/${filename_no_ext}.webp"
    
    # Skip if already WebP
    if [[ "$input_file" == *.webp ]]; then
        echo -e "${YELLOW}⏭️  Skipping: $filename (already WebP)${NC}"
        ((skipped_files++))
        return
    fi
    
    # Skip if output already exists
    if [ -f "$output_file" ]; then
        echo -e "${YELLOW}⏭️  Skipping: $filename (WebP already exists)${NC}"
        ((skipped_files++))
        return
    fi
    
    # Get original file size
    if [[ "$OSTYPE" == "darwin"* ]]; then
        original_size=$(stat -f%z "$input_file")
    else
        original_size=$(stat -c%s "$input_file")
    fi
    
    total_original_size=$((total_original_size + original_size))
    
    echo -e "${BLUE}📷 Converting: $filename${NC}"
    
    # Convert based on available tool
    if [ "$CONVERTER" == "cwebp" ]; then
        cwebp -q $QUALITY "$input_file" -o "$output_file" 2>/dev/null
    elif [ "$CONVERTER" == "magick" ]; then
        magick "$input_file" -quality $QUALITY "$output_file" 2>/dev/null
    else
        convert "$input_file" -quality $QUALITY "$output_file" 2>/dev/null
    fi
    
    if [ $? -eq 0 ]; then
        # Get WebP file size
        if [[ "$OSTYPE" == "darwin"* ]]; then
            webp_size=$(stat -f%z "$output_file")
        else
            webp_size=$(stat -c%s "$output_file")
        fi
        
        total_webp_size=$((total_webp_size + webp_size))
        
        # Calculate compression ratio
        reduction=$((100 - (webp_size * 100 / original_size)))
        
        # Format sizes
        original_kb=$((original_size / 1024))
        webp_kb=$((webp_size / 1024))
        
        echo -e "${GREEN}✓ Converted: $filename${NC}"
        echo -e "  ${original_kb}KB → ${webp_kb}KB (${reduction}% reduction)"
        ((converted_files++))
    else
        echo -e "${RED}✗ Failed: $filename${NC}"
    fi
    
    echo ""
}

# Find and convert all image files
echo -e "${BLUE}Searching for images in: $INPUT_DIR${NC}\n"

# Process common image formats
for ext in jpg jpeg png gif bmp tiff; do
    while IFS= read -r -d '' file; do
        ((total_files++))
        convert_to_webp "$file"
    done < <(find "$INPUT_DIR" -type f -iname "*.$ext" -print0)
done

# Summary
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "${BLUE}           Conversion Summary${NC}"
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "Total files found:     $total_files"
echo -e "Files converted:       ${GREEN}$converted_files${NC}"
echo -e "Files skipped:         ${YELLOW}$skipped_files${NC}"

if [ $converted_files -gt 0 ]; then
    # Calculate total reduction
    total_original_mb=$((total_original_size / 1024 / 1024))
    total_webp_mb=$((total_webp_size / 1024 / 1024))
    total_reduction=$((100 - (total_webp_size * 100 / total_original_size)))
    space_saved=$((total_original_size - total_webp_size))
    space_saved_mb=$((space_saved / 1024 / 1024))
    
    echo -e "Original size:         ${total_original_mb}MB"
    echo -e "WebP size:             ${total_webp_mb}MB"
    echo -e "Total reduction:       ${GREEN}${total_reduction}%${NC}"
    echo -e "Space saved:           ${GREEN}${space_saved_mb}MB${NC}"
fi

echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "\n${GREEN}✅ Conversion complete!${NC}"
echo -e "${BLUE}📁 WebP images saved to: $OUTPUT_DIR${NC}\n"

# Optional: Ask if user wants to replace originals
echo -e "${YELLOW}Replace original images with WebP versions? (y/N)${NC}"
read -r response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
    echo -e "${BLUE}Replacing original images...${NC}"
    
    for webp_file in "$OUTPUT_DIR"/*.webp; do
        if [ -f "$webp_file" ]; then
            filename=$(basename "$webp_file" .webp)
            
            # Find and remove original
            for ext in jpg jpeg png gif bmp tiff; do
                original="$INPUT_DIR/${filename}.$ext"
                if [ -f "$original" ]; then
                    rm "$original"
                    mv "$webp_file" "$INPUT_DIR/"
                    echo -e "${GREEN}✓ Replaced: ${filename}.$ext → ${filename}.webp${NC}"
                    break
                fi
            done
        fi
    done
    
    # Remove webp directory if empty
    rmdir "$OUTPUT_DIR" 2>/dev/null
    
    echo -e "\n${GREEN}✅ Original images replaced!${NC}"
else
    echo -e "\n${BLUE}Original images kept. WebP versions are in: $OUTPUT_DIR${NC}"
fi
