import { MainLayout } from "@/components/layout/MainLayout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { mockVideos } from "@/data/mockData";
import { Flame } from "lucide-react";

const TrendingPage = () => {
  // Sort by views for "trending" effect
  const trendingVideos = [...mockVideos].sort((a, b) => b.views - a.views);

  return (
    <MainLayout>
      <div className="p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Trending</h1>
            <p className="text-sm text-muted-foreground">
              Most popular videos right now
            </p>
          </div>
        </div>

        <VideoGrid videos={trendingVideos} />
      </div>
    </MainLayout>
  );
};

export default TrendingPage;
