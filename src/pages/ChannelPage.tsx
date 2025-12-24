import { useParams, Link } from "react-router-dom";
import { Bell, Check, Play } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockVideos, formatViews } from "@/data/mockData";
import { useVideoStore } from "@/store/videoStore";
import { useAuthStore } from "@/store/authStore";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ChannelPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const { subscribedChannels, toggleSubscribe } = useVideoStore();
  const { isAuthenticated } = useAuthStore();

  // Get channel info from first video (mock data)
  const channelVideos = mockVideos.filter((v) => v.channel.id === id);
  const channel = channelVideos[0]?.channel || mockVideos[0].channel;
  const isSubscribed = subscribedChannels.has(channel.id);

  const handleSubscribe = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to subscribe",
        variant: "destructive",
      });
      return;
    }
    toggleSubscribe(channel.id);
    toast({
      title: isSubscribed ? "Unsubscribed" : "Subscribed!",
      description: isSubscribed
        ? `You've unsubscribed from ${channel.name}`
        : `You've subscribed to ${channel.name}`,
    });
  };

  // Use all videos for demo purposes
  const videos = channelVideos.length > 0 ? channelVideos : mockVideos.slice(0, 6);

  return (
    <MainLayout>
      {/* Banner */}
      <div className="relative h-32 sm:h-48 lg:h-56 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=300&fit=crop)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Channel info */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 relative z-10">
          <img
            src={channel.avatar}
            alt={channel.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-background object-cover"
          />
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {channel.name}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              @{channel.name.toLowerCase().replace(/\s/g, "")} •{" "}
              {formatViews(channel.subscribers)} subscribers •{" "}
              {videos.length} videos
            </p>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl line-clamp-2">
              Welcome to our channel! We create amazing content about technology,
              programming, and more. Subscribe to stay updated!
            </p>
          </div>
          <Button
            onClick={handleSubscribe}
            className={cn(
              "rounded-full",
              isSubscribed
                ? "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                : "bg-foreground text-background hover:bg-foreground/90"
            )}
          >
            {isSubscribed ? (
              <>
                <Bell className="w-4 h-4 mr-2" />
                Subscribed
                <Check className="w-4 h-4 ml-1" />
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="videos" className="mt-6">
          <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start gap-6 h-auto p-0">
            <TabsTrigger
              value="videos"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              Videos
            </TabsTrigger>
            <TabsTrigger
              value="playlists"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              Playlists
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="videos" className="mt-6">
            {/* Featured video */}
            {videos[0] && (
              <div className="mb-8">
                <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                  <Play className="w-5 h-5 text-primary" />
                  Featured Video
                </h3>
                <Link
                  to={`/watch/${videos[0].id}`}
                  className="block group relative rounded-xl overflow-hidden aspect-video max-w-2xl"
                >
                  <img
                    src={videos[0].thumbnail}
                    alt={videos[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {videos[0].title}
                    </h4>
                    <p className="text-sm text-white/80">
                      {formatViews(videos[0].views)} views •{" "}
                      {videos[0].duration}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* All videos */}
            <h3 className="text-lg font-medium text-foreground mb-4">
              All Videos
            </h3>
            <VideoGrid videos={videos} />
          </TabsContent>

          <TabsContent value="playlists" className="mt-6">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
                <Play className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No playlists yet
              </h3>
              <p className="text-muted-foreground">
                This channel hasn't created any playlists.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="about" className="mt-6">
            <div className="max-w-2xl space-y-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Description
                </h3>
                <p className="text-muted-foreground">
                  Welcome to {channel.name}! We create high-quality content
                  about technology, programming, and digital creativity. Our
                  mission is to educate and inspire our viewers through
                  engaging videos and tutorials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-foreground">
                      {formatViews(channel.subscribers)}
                    </p>
                    <p className="text-sm text-muted-foreground">Subscribers</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <p className="text-2xl font-bold text-foreground">
                      {videos.length}
                    </p>
                    <p className="text-sm text-muted-foreground">Videos</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Links
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="text-primary hover:underline text-sm"
                  >
                    Website
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:underline text-sm"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-primary hover:underline text-sm"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ChannelPage;
