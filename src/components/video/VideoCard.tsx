import { Link } from "react-router-dom";
import { Video } from "@/types";
import { formatViews, formatTimeAgo } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  video: Video;
  variant?: "default" | "horizontal" | "compact";
}

export const VideoCard = ({ video, variant = "default" }: VideoCardProps) => {
  if (variant === "horizontal") {
    return (
      <Link
        to={`/watch/${video.id}`}
        className="flex gap-2 group video-card-hover rounded-lg"
      >
        <div className="relative flex-shrink-0 w-40 aspect-video rounded-lg overflow-hidden bg-muted">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
            {video.duration}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1">
            {video.channel.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {formatViews(video.views)} views • {formatTimeAgo(video.createdAt)}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to={`/watch/${video.id}`}
        className="flex gap-2 group p-2 rounded-lg hover:bg-accent transition-colors"
      >
        <div className="relative flex-shrink-0 w-28 aspect-video rounded overflow-hidden bg-muted">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-0.5 right-0.5 bg-black/80 text-white text-[10px] px-1 rounded">
            {video.duration}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xs font-medium text-foreground line-clamp-2">
            {video.title}
          </h3>
          <p className="text-[10px] text-muted-foreground mt-0.5">
            {video.channel.name}
          </p>
          <p className="text-[10px] text-muted-foreground">
            {formatViews(video.views)} views
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/watch/${video.id}`}
      className="group video-card-hover rounded-xl overflow-hidden"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-black/85 text-white text-xs font-medium px-1.5 py-0.5 rounded">
          {video.duration}
        </span>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      {/* Info */}
      <div className="flex gap-3 mt-3">
        <Link
          to={`/channel/${video.channel.id}`}
          onClick={(e) => e.stopPropagation()}
          className="flex-shrink-0"
        >
          <img
            src={video.channel.avatar}
            alt={video.channel.name}
            className="w-9 h-9 rounded-full object-cover hover:ring-2 hover:ring-primary transition-all"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
            {video.title}
          </h3>
          <Link
            to={`/channel/${video.channel.id}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors mt-1 block"
          >
            {video.channel.name}
          </Link>
          <p className="text-xs text-muted-foreground">
            {formatViews(video.views)} views • {formatTimeAgo(video.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};
