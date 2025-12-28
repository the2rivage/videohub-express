import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Loader2 } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoGrid } from "@/components/video/VideoGrid";
import { useAuthStore } from "@/store/authStore";
import { useVideoStore } from "@/store/videoStore";
import { mockVideos } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, profile, isAuthenticated, logout } = useAuthStore();
  const { likedVideos } = useVideoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(profile?.username || "");
  const [description, setDescription] = useState(profile?.description || "");
  const [isSaving, setIsSaving] = useState(false);

  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const likedVideosList = mockVideos.filter((v) => likedVideos.has(v.id));

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSaving(false);
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile has been saved successfully.",
    });
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Signed out",
      description: "You've been signed out successfully.",
    });
    navigate("/");
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto p-4 lg:p-8">
        {/* Profile header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <div className="relative group">
            <img
              src={profile?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`}
              alt={profile?.username || 'User'}
              className="w-28 h-28 rounded-full object-cover border-4 border-border"
            />
            <button className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Camera className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground">
              {profile?.username || 'User'}
            </h1>
            <p className="text-muted-foreground text-sm mt-1">{user?.email}</p>
            <p className="text-muted-foreground text-sm mt-2 max-w-lg">
              {profile?.description || 'No description yet'}
            </p>
            <div className="flex gap-3 mt-4">
              <Button
                variant="secondary"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit profile"}
              </Button>
              <Button
                variant="outline"
                className="text-destructive hover:text-destructive"
                onClick={handleLogout}
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>

        {/* Edit form */}
        {isEditing && (
          <div className="bg-card border border-border rounded-xl p-6 mb-8 animate-fade-in">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Edit Profile
            </h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-username" className="text-foreground">
                  Username
                </Label>
                <Input
                  id="edit-username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1.5 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="edit-description" className="text-foreground">
                  About
                </Label>
                <Textarea
                  id="edit-description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1.5 bg-background"
                  rows={3}
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save changes"
                  )}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <Tabs defaultValue="liked" className="mt-6">
          <TabsList className="bg-transparent border-b border-border rounded-none w-full justify-start gap-6 h-auto p-0">
            <TabsTrigger
              value="liked"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              Liked videos
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              Watch history
            </TabsTrigger>
            <TabsTrigger
              value="playlists"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 pb-3"
            >
              Playlists
            </TabsTrigger>
          </TabsList>

          <TabsContent value="liked" className="mt-6">
            {likedVideosList.length > 0 ? (
              <VideoGrid videos={likedVideosList} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No liked videos yet. Start exploring!
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <VideoGrid videos={mockVideos.slice(0, 4)} />
          </TabsContent>

          <TabsContent value="playlists" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No playlists created yet.
              </p>
              <Button variant="secondary" className="mt-4">
                Create playlist
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
