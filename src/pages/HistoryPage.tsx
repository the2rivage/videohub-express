import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { VideoGrid } from "@/components/video/VideoGrid";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { mockVideos } from "@/data/mockData";
import { useAuthStore } from "@/store/authStore";

const HistoryPage = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <Clock className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Keep track of what you watch
          </h1>
          <p className="text-muted-foreground mb-4 text-center max-w-md">
            Sign in to access videos you've watched.
          </p>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  // Mock watch history - in real app this would come from database
  const watchHistory = mockVideos.slice(0, 6);

  return (
    <MainLayout>
      <div className="p-4 lg:p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <Clock className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Watch history</h1>
            <p className="text-sm text-muted-foreground">
              Videos you've watched recently
            </p>
          </div>
        </div>

        {watchHistory.length > 0 ? (
          <VideoGrid videos={watchHistory} />
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No watch history yet.</p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default HistoryPage;
