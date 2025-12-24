import { Video } from "@/types";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  variant?: "default" | "horizontal" | "compact";
}

export const VideoGrid = ({ videos, variant = "default" }: VideoGridProps) => {
  if (variant === "horizontal" || variant === "compact") {
    return (
      <div className="space-y-3">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <VideoCard video={video} variant={variant} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <VideoCard video={video} variant={variant} />
        </div>
      ))}
    </div>
  );
};
