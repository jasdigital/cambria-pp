# Quick Start Guide

## Development (Local)
```bash
npm run dev
```
- Videos load from `public/video/`
- No S3 required

## Upload Videos to S3
```bash
./scripts/upload-videos.sh
```
Or:
```bash
npm run upload:videos
```

## Production Build
```bash
npm run build
```
- Videos load from S3: `https://grange-presentation.s3.eu-west-2.amazonaws.com/video/`

## Deploy to Amplify
```bash
git add .
git commit -m "Your message"
git push origin main
```
Amplify auto-deploys from GitHub

## Environment Variables

### .env.development (Local)
```
VITE_VIDEO_CDN=
```

### .env.production (S3)
```
VITE_VIDEO_CDN=https://grange-presentation.s3.eu-west-2.amazonaws.com
```

## Common Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run upload:videos` - Upload videos to S3
- `npm run compress:videos` - Compress videos with ffmpeg
- `npm run build:production` - Upload videos + build

## How It Works
The `getVideoUrl()` helper automatically switches between:
- **Development**: `/video/filename.mp4` (local)
- **Production**: `https://grange-presentation.s3.eu-west-2.amazonaws.com/video/filename.mp4` (S3)

## Sharing the Presentation
Just send the Amplify URL or GitHub repo link. Videos are served from S3 CDN for fast global delivery.
