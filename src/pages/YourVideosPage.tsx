import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { PlaySquare, Upload } from "lucide-react";
import { mockVideos } from "@/data/mockData";
import { useAuthStore } from "@/store/authStore";

const YourVideosPage = () => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <PlaySquare className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Manage your videos
          </h1>
          <p className="text-muted-foreground mb-4 text-center max-w-md">
            Sign in to see and manage your uploaded videos.
          </p>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // In real app, this would fetch user's uploaded videos
  const userVideos: typeof mockVideos = [];

  return (
    <MainLayout>
      <div className="p-4 lg:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <PlaySquare className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Your videos</h1>
              <p className="text-sm text-muted-foreground">
                {userVideos.length} videos uploaded
              </p>
            </div>
          </div>
          <Link to="/upload">
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </Link>
        </div>

        {userVideos.length > 0 ? (
          <VideoGrid videos={userVideos} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
              <Upload className="w-16 h-16 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              No videos uploaded yet
            </h3>
            <p className="text-muted-foreground text-center max-w-md mb-4">
              Share your content with the world! Upload your first video.
            </p>
            <Link to="/upload">
              <Button>Upload your first video</Button>
            </Link>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default YourVideosPage;
