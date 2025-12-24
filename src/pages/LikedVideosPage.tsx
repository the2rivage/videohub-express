import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { ThumbsUp } from "lucide-react";
import { mockVideos } from "@/data/mockData";
import { useAuthStore } from "@/store/authStore";
import { useVideoStore } from "@/store/videoStore";

const LikedVideosPage = () => {
  const { isAuthenticated } = useAuthStore();
  const { likedVideos } = useVideoStore();

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <ThumbsUp className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Save your favorite videos
          </h1>
          <p className="text-muted-foreground mb-4 text-center max-w-md">
            Sign in to see videos you've liked.
          </p>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  const likedVideosList = mockVideos.filter((v) => likedVideos.has(v.id));

  return (
    <MainLayout>
      <div className="p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <ThumbsUp className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Liked videos</h1>
            <p className="text-sm text-muted-foreground">
              {likedVideosList.length} videos
            </p>
          </div>
        </div>

        {likedVideosList.length > 0 ? (
          <VideoGrid videos={likedVideosList} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No liked videos yet. Start exploring!
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default LikedVideosPage;
