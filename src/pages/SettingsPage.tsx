import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Settings, User, Bell, Shield, Eye, Globe } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

const SettingsPage = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
          <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
            <Settings className="w-12 h-12 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground mb-4 text-center max-w-md">
            Sign in to access your settings.
          </p>
          <Link to="/login">
            <Button>Sign in</Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto p-4 lg:p-6">
        <h1 className="text-2xl font-bold text-foreground mb-6">Settings</h1>

        <div className="space-y-6">
          {/* Account Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Account</h2>
            </div>
            <div className="space-y-4">
              <Link
                to="/profile"
                className="flex items-center justify-between py-2 hover:bg-accent rounded-lg px-2 -mx-2 transition-colors"
              >
                <span className="text-foreground">Edit profile</span>
                <span className="text-muted-foreground">→</span>
              </Link>
              <div className="flex items-center justify-between py-2">
                <span className="text-foreground">Email notifications</span>
                <Switch />
              </div>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Push notifications</p>
                  <p className="text-sm text-muted-foreground">Get notified about new videos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Subscription updates</p>
                  <p className="text-sm text-muted-foreground">When channels you subscribe to upload</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Privacy Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Privacy</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Keep watch history</p>
                  <p className="text-sm text-muted-foreground">Save videos you watch</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Private subscriptions</p>
                  <p className="text-sm text-muted-foreground">Hide your subscriptions from others</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Playback Section */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-muted-foreground" />
              <h2 className="text-lg font-semibold text-foreground">Playback</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Autoplay</p>
                  <p className="text-sm text-muted-foreground">Automatically play next video</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="text-foreground">Captions</p>
                  <p className="text-sm text-muted-foreground">Show captions when available</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingsPage;
