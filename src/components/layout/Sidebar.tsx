import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Compass,
  Clock,
  ThumbsUp,
  PlaySquare,
  Flame,
  Music2,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Film,
  Radio,
  Settings,
  HelpCircle,
  Flag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/authStore";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const mainLinks = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Compass, label: "Explore", path: "/explore" },
  { icon: Flame, label: "Trending", path: "/trending" },
];

const libraryLinks = [
  { icon: Clock, label: "History", path: "/history" },
  { icon: PlaySquare, label: "Your videos", path: "/your-videos" },
  { icon: ThumbsUp, label: "Liked videos", path: "/liked" },
];

const exploreLinks = [
  { icon: Flame, label: "Trending", path: "/trending" },
  { icon: Music2, label: "Music", path: "/category/music" },
  { icon: Gamepad2, label: "Gaming", path: "/category/gaming" },
  { icon: Newspaper, label: "News", path: "/category/news" },
  { icon: Trophy, label: "Sports", path: "/category/sports" },
  { icon: Lightbulb, label: "Learning", path: "/category/education" },
  { icon: Shirt, label: "Fashion", path: "/category/fashion" },
  { icon: Film, label: "Movies", path: "/category/entertainment" },
  { icon: Radio, label: "Live", path: "/live" },
];

const settingsLinks = [
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: Flag, label: "Report", path: "/report" },
  { icon: HelpCircle, label: "Help", path: "/help" },
];

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  const NavLink = ({
    icon: Icon,
    label,
    path,
  }: {
    icon: React.ElementType;
    label: string;
    path: string;
  }) => {
    const isActive = location.pathname === path;
    return (
      <Link
        to={path}
        onClick={onClose}
        className={cn(
          "sidebar-link",
          isActive && "sidebar-link-active"
        )}
      >
        <Icon className="h-5 w-5 flex-shrink-0" />
        <span className={cn(!isOpen && "hidden lg:hidden")}>{label}</span>
      </Link>
    );
  };

  const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h3
      className={cn(
        "px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider",
        !isOpen && "hidden"
      )}
    >
      {children}
    </h3>
  );

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-14 h-[calc(100vh-3.5rem)] bg-sidebar z-40 transition-all duration-300 border-r border-sidebar-border",
          isOpen ? "w-60" : "w-0 lg:w-[72px]",
          !isOpen && "overflow-hidden lg:overflow-visible"
        )}
      >
        <ScrollArea className="h-full">
          <div className="py-2 px-2">
            {/* Main Links */}
            <div className="space-y-1">
              {mainLinks.map((link) => (
                <NavLink key={link.path} {...link} />
              ))}
            </div>

            <div className="my-3 border-t border-sidebar-border" />

            {/* Library - Only show if authenticated */}
            {isAuthenticated && (
              <>
                <SectionTitle>Library</SectionTitle>
                <div className="space-y-1">
                  {libraryLinks.map((link) => (
                    <NavLink key={link.path} {...link} />
                  ))}
                </div>

                <div className="my-3 border-t border-sidebar-border" />
              </>
            )}

            {/* Explore */}
            <SectionTitle>Explore</SectionTitle>
            <div className="space-y-1">
              {exploreLinks.map((link) => (
                <NavLink key={link.path + link.label} {...link} />
              ))}
            </div>

            <div className="my-3 border-t border-sidebar-border" />

            {/* Settings */}
            <div className="space-y-1">
              {settingsLinks.map((link) => (
                <NavLink key={link.path} {...link} />
              ))}
            </div>

            {/* Footer */}
            <div
              className={cn(
                "mt-4 px-3 py-4 text-xs text-muted-foreground space-y-2",
                !isOpen && "hidden"
              )}
            >
              <p>© 2024 ViewTube</p>
              <p className="text-[10px]">
                A video streaming platform demo
              </p>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};
