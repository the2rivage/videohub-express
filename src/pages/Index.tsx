import { MainLayout } from "@/components/layout/MainLayout";
import { CategoryFilter } from "@/components/video/CategoryFilter";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useVideoStore } from "@/store/videoStore";

const Index = () => {
  const { getFilteredVideos, searchQuery, selectedCategory } = useVideoStore();
  const videos = getFilteredVideos();

  return (
    <MainLayout>
      <div className="p-4 lg:p-6">
        {/* Category filter */}
        <div className="sticky top-14 z-30 bg-background/95 backdrop-blur-md py-2 -mx-4 px-4 lg:-mx-6 lg:px-6">
          <CategoryFilter />
        </div>

        {/* Results info */}
        {(searchQuery || selectedCategory !== "all") && (
          <div className="mb-4">
            <h2 className="text-lg font-medium text-foreground">
              {searchQuery && `Search results for "${searchQuery}"`}
              {selectedCategory !== "all" && !searchQuery && (
                <span className="capitalize">{selectedCategory}</span>
              )}
            </h2>
            <p className="text-sm text-muted-foreground">
              {videos.length} {videos.length === 1 ? "video" : "videos"} found
            </p>
          </div>
        )}

        {/* Video grid */}
        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-foreground mb-2">
              No videos found
            </h3>
            <p className="text-muted-foreground text-center max-w-md">
              We couldn't find any videos matching your criteria. Try a different
              search term or category.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Index;
