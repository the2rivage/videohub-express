import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  ThumbsUp,
  ThumbsDown,
  Share2,
  Download,
  MoreHorizontal,
  Bell,
  Check,
} from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoPlayer } from "@/components/video/VideoPlayer";
import { VideoCard } from "@/components/video/VideoCard";
import { CommentSection } from "@/components/video/CommentSection";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockVideos, formatViews, formatTimeAgo } from "@/data/mockData";
import { useVideoStore } from "@/store/videoStore";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const WatchPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { likedVideos, subscribedChannels, toggleLike, toggleSubscribe } =
    useVideoStore();
  const { isAuthenticated } = useAuthStore();
  const [showFullDescription, setShowFullDescription] = useState(false);

  const video = mockVideos.find((v) => v.id === id);
  const relatedVideos = mockVideos.filter((v) => v.id !== id).slice(0, 8);

  if (!video) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Video not found
            </h1>
            <p className="text-muted-foreground mb-4">
              The video you're looking for doesn't exist.
            </p>
            <Link to="/">
              <Button>Go back home</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  const isLiked = likedVideos.has(video.id);
  const isSubscribed = subscribedChannels.has(video.channel.id);

  const handleLike = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to like videos",
        variant: "destructive",
      });
      return;
    }
    toggleLike(video.id);
  };

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return;
    }
    toggleSubscribe(video.channel.id);
    toast({
      title: isSubscribed ? "Unsubscribed" : "Subscribed!",
      description: isSubscribed
        ? `You've unsubscribed from ${video.channel.name}`
        : `You've subscribed to ${video.channel.name}`,
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Video link has been copied to clipboard",
    });
  };

  return (
    <MainLayout>
      <div className="max-w-[1800px] mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Video player */}
            <VideoPlayer
              videoUrl={video.videoUrl}
              thumbnail={video.thumbnail}
              title={video.title}
            />

            {/* Video info */}
            <div className="mt-4">
              <h1 className="text-xl font-bold text-foreground leading-tight">
                {video.title}
              </h1>

              {/* Actions bar */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                {/* Channel info */}
                <div className="flex items-center gap-3">
                  <Link to={`/channel/${video.channel.id}`}>
                    <Avatar className="w-10 h-10 hover:ring-2 hover:ring-primary transition-all">
                      <AvatarImage src={video.channel.avatar} />
                      <AvatarFallback>{video.channel.name[0]}</AvatarFallback>
                    </Avatar>
                  </Link>
                  <div>
                    <Link
                      to={`/channel/${video.channel.id}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {video.channel.name}
                    </Link>
                    <p className="text-xs text-muted-foreground">
                      {formatViews(video.channel.subscribers)} subscribers
                    </p>
                  </div>
                  <Button
                    onClick={handleSubscribe}
                    className={cn(
                      "ml-2 rounded-full",
                      isSubscribed
                        ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        : "bg-foreground text-background hover:bg-foreground/90"
                    )}
                  >
                    {isSubscribed ? (
                      <>
                        <Bell className="w-4 h-4 mr-1" />
                        Subscribed
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center bg-secondary rounded-full overflow-hidden">
                    <button
                      onClick={handleLike}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 hover:bg-accent transition-colors",
                        isLiked && "text-primary"
                      )}
                    >
                      <ThumbsUp
                        className={cn("w-5 h-5", isLiked && "fill-current")}
                      />
                      <span className="text-sm font-medium">
                        {formatViews(video.likes + (isLiked ? 1 : 0))}
                      </span>
                    </button>
                    <div className="w-px h-6 bg-border" />
                    <button className="flex items-center px-4 py-2 hover:bg-accent transition-colors">
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>

                  <Button
                    variant="secondary"
                    onClick={handleShare}
                    className="rounded-full"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>

                  <Button variant="secondary" className="rounded-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>

                  <Button variant="secondary" size="icon" className="rounded-full">
                    <MoreHorizontal className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4 bg-secondary/50 rounded-xl p-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <span>{formatViews(video.views)} views</span>
                  <span>•</span>
                  <span>{formatTimeAgo(video.createdAt)}</span>
                </div>
                <p
                  className={cn(
                    "text-sm text-foreground/90",
                    !showFullDescription && "line-clamp-2"
                  )}
                >
                  {video.description}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-sm font-medium text-foreground mt-2 hover:text-primary transition-colors"
                >
                  {showFullDescription ? "Show less" : "...more"}
                </button>
                <div className="flex flex-wrap gap-2 mt-3">
                  {video.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/search?q=${tag}`}
                      className="text-xs text-primary hover:underline"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Comments */}
              <CommentSection videoId={video.id} />
            </div>
          </div>

          {/* Related videos sidebar */}
          <div className="lg:w-96 flex-shrink-0">
            <h3 className="text-base font-medium text-foreground mb-4">
              Related videos
            </h3>
            <div className="space-y-3">
              {relatedVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <VideoCard video={video} variant="horizontal" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WatchPage;
