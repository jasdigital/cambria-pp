# Video Deployment Guide

This project uses environment-based video URLs to optimize development and production workflows.

## Environment Configuration

### Development (Local Videos)
- Videos load from `public/video/` directory
- Fast local development without network latency
- Uses `.env.development` (empty `VITE_VIDEO_CDN`)

### Production (S3 CDN)
- Videos load from AWS S3
- Optimized global delivery via CloudFront
- Uses `.env.production` with S3 URL

## Setup Instructions

### 1. AWS S3 Bucket Configuration

The bucket is already created: `grange-presentation`

Update `.env.production` with your S3 URL:
```env
VITE_VIDEO_CDN=https://grange-presentation.s3.eu-west-2.amazonaws.com
```

### 2. Upload Videos to S3

```bash
# Make scripts executable (first time only)
chmod +x scripts/upload-videos.sh scripts/compress-videos.sh

# Upload videos
npm run upload:videos
```

Or manually:
```bash
aws s3 sync ./public/video s3://grange-presentation/video \
  --acl public-read \
  --cache-control "max-age=31536000, immutable" \
  --region eu-west-2
```

### 3. Optional: Compress Videos

To reduce file sizes by 50-70%:

```bash
npm run compress:videos
```

This will create optimized videos in `public/video/optimized/`

## Development Workflow

### Local Development
```bash
npm run dev
```
Uses local videos from `public/video/`

### Production Build
```bash
npm run build
```
Uses S3 CDN URLs from `.env.production`

### Combined Production Build with Upload
```bash
npm run build:production
```
Uploads videos to S3, then builds with production config

## Deployment to AWS Amplify

### Method 1: Git Push (Recommended)
```bash
git add .
git commit -m "Update presentation"
git push origin main
```

Amplify will automatically:
1. Pull the code
2. Run `npm ci`
3. Run `npm run build`
4. Deploy to CDN

### Method 2: Manual Deploy
```bash
# Build locally
npm run build

# Deploy dist folder via Amplify Console
```

## Environment Variables in Amplify

In Amplify Console, add environment variable:
- Key: `VITE_VIDEO_CDN`
- Value: `https://grange-presentation.s3.eu-west-2.amazonaws.com`

## File Structure

```
src/
  utils/
    videoUrl.ts          # Helper function for video URLs
  
scripts/
  upload-videos.sh       # Upload videos to S3
  compress-videos.sh     # Compress videos with ffmpeg

.env.development         # Local development config
.env.production          # Production S3 config
amplify.yml             # Amplify build configuration
```

## Troubleshooting

### Videos not loading in production
1. Check S3 bucket policy allows public read
2. Verify CORS configuration on S3
3. Check `.env.production` has correct S3 URL
4. Ensure videos were uploaded to S3

### Videos not loading in development
1. Verify videos exist in `public/video/`
2. Check `.env.development` has empty or no `VITE_VIDEO_CDN`
3. Clear browser cache

### S3 Upload fails
```bash
# Configure AWS CLI
aws configure

# Test connection
aws s3 ls s3://grange-presentation
```

## Performance Tips

1. **Use CloudFront** for faster global delivery
2. **Compress videos** before uploading
3. **Set proper cache headers** (already configured in scripts)
4. **Use video preloading** for critical content

## Cost Estimation

- S3 Storage: ~$0.023/GB/month
- Data Transfer: ~$0.09/GB
- CloudFront: ~$0.085/GB

Estimated monthly cost: $1-10 depending on traffic
