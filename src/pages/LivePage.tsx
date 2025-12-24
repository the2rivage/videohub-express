import { MainLayout } from "@/components/layout/MainLayout";
import { Radio } from "lucide-react";

const LivePage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 animate-pulse">
          <Radio className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Live Streaming</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Live streaming feature coming soon. Stay tuned for real-time content!
        </p>
      </div>
    </MainLayout>
  );
};

export default LivePage;
