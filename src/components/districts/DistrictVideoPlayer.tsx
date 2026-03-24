import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

// Video Player Component
interface VideoPlayerProps {
  videoUrl?: string;
  districtName: string;
  className?: string;
}

export function DistrictVideoPlayer({ videoUrl, districtName, className }: VideoPlayerProps) {
  if (!videoUrl) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center h-64 md:h-96 bg-gradient-to-br from-[#fff8ec] to-[#ffe6c9] rounded-lg border-2 border-dashed border-[#ffd8a7]',
          className
        )}
      >
        <Play className='h-16 w-16 text-[#ffb347] mb-4 opacity-50' />
        <p className='text-[#6b4525] text-lg font-medium'>
          Chưa có video giới thiệu
        </p>
      </div>
    );
  }

  // Helper to format embed URLs for external providers
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      if (url.includes('embed/')) return url;
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (url.includes('drive.google.com')) {
      // Convert standard Drive share links to preview embed links
      return url
        .replace(/\/view.*$/, '/preview')
        .replace(/\/edit.*$/, '/preview');
    }

    return url;
  };

  const isExternal =
    videoUrl.includes('youtube.com') ||
    videoUrl.includes('youtu.be') ||
    videoUrl.includes('drive.google.com');

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg shadow-2xl bg-black',
        className
      )}
      style={
        !className?.includes('h-') ? { paddingBottom: '56.25%' } : undefined
      }
    >
      {isExternal ? (
        <iframe
          className='absolute top-0 left-0 w-full h-full border-0'
          src={embedUrl}
          title={`Video giới thiệu ${districtName}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      ) : (
        <video
          className='absolute top-0 left-0 w-full h-full object-contain'
          controls
          preload='metadata'
        >
          <source src={videoUrl} type='video/mp4' />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      )}
    </div>
  );
}

