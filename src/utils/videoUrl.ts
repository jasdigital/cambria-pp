/**
 * Get the appropriate video URL based on environment
 * @param path - The video path (e.g., '/video/example.mp4')
 * @returns The full URL to the video
 */
export const getVideoUrl = (path: string): string => {
  const cdn = import.meta.env.VITE_VIDEO_CDN;
  
  // In production with CDN configured, use CDN
  if (cdn && import.meta.env.PROD) {
    return `${cdn}${path}`;
  }
  
  // In development or production without CDN, use local path
  return path;
};

/**
 * Preload a video for better performance
 * @param path - The video path
 */
export const preloadVideo = (path: string): void => {
  const url = getVideoUrl(path);
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'video';
  link.href = url;
  document.head.appendChild(link);
};
