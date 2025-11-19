#!/bin/bash

# Configuration
S3_BUCKET="grange-presentation"
VIDEO_DIR="public/video"
AWS_REGION="eu-west-2"

echo "🎥 Uploading videos to S3..."

# Upload videos with proper caching headers
aws s3 sync "$VIDEO_DIR" "s3://$S3_BUCKET/video" \
  --acl public-read \
  --cache-control "max-age=31536000, immutable" \
  --metadata-directive REPLACE \
  --exclude "*.DS_Store" \
  --exclude ".gitkeep" \
  --region "$AWS_REGION"

echo "✅ Videos uploaded successfully!"
echo "📍 Location: s3://$S3_BUCKET/video"
echo "🌐 URL: https://$S3_BUCKET.s3.$AWS_REGION.amazonaws.com/video"
