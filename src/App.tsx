import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import Index from "./pages/Index";
import WatchPage from "./pages/WatchPage";
import ChannelPage from "./pages/ChannelPage";
import UploadPage from "./pages/UploadPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import ExplorePage from "./pages/ExplorePage";
import TrendingPage from "./pages/TrendingPage";
import HistoryPage from "./pages/HistoryPage";
import LikedVideosPage from "./pages/LikedVideosPage";
import YourVideosPage from "./pages/YourVideosPage";
import LivePage from "./pages/LivePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import ReportPage from "./pages/ReportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Routes>
      {/* Main pages */}
      <Route path="/" element={<Index />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/trending" element={<TrendingPage />} />
      
      {/* Video routes */}
      <Route path="/watch/:id" element={<WatchPage />} />
      <Route path="/channel/:id" element={<ChannelPage />} />
      <Route path="/upload" element={<UploadPage />} />
      
      {/* Category routes */}
      <Route path="/category/:category" element={<ExplorePage />} />
      
      {/* User library routes (protected) */}
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/liked" element={<LikedVideosPage />} />
      <Route path="/your-videos" element={<YourVideosPage />} />
      
      {/* Live */}
      <Route path="/live" element={<LivePage />} />
      
      {/* Auth routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      
      {/* Settings & Support */}
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/report" element={<ReportPage />} />
      
      {/* Catch-all 404 - must be last */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
