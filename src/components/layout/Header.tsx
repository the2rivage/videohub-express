import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Upload, Bell, Menu, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/authStore";
import { useVideoStore } from "@/store/videoStore";

interface HeaderProps {
  onMenuToggle: () => void;
}

export const Header = ({ onMenuToggle }: HeaderProps) => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const { setSearchQuery } = useVideoStore();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchValue);
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background/95 backdrop-blur-md border-b border-border flex items-center justify-between px-4">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="text-foreground hover:bg-accent"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center gap-1">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-5 h-5 text-primary-foreground"
            >
              <path
                d="M9.5 8.5L15.5 12L9.5 15.5V8.5Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:block">
            ViewTube
          </span>
        </Link>
      </div>

      {/* Center section - Search */}
      <form
        onSubmit={handleSearch}
        className="flex-1 max-w-xl mx-4 hidden sm:flex"
      >
        <div className="flex w-full">
          <Input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="input-search rounded-l-full rounded-r-none border-r-0 w-full bg-background"
          />
          <Button
            type="submit"
            variant="secondary"
            className="rounded-l-none rounded-r-full px-6 border border-border border-l-0 bg-secondary hover:bg-accent"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </form>

      {/* Right section */}
      <div className="flex items-center gap-2">
        {/* Mobile search button */}
        <Button
          variant="ghost"
          size="icon"
          className="sm:hidden text-foreground hover:bg-accent"
        >
          <Search className="h-5 w-5" />
        </Button>

        {isAuthenticated ? (
          <>
            <Link to="/upload">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:bg-accent"
              >
                <Upload className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:bg-accent relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <img
                    src={user?.avatar}
                    alt={user?.username}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-card border-border"
              >
                <div className="flex items-center gap-3 p-3">
                  <img
                    src={user?.avatar}
                    alt={user?.username}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {user?.username}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem asChild>
                  <Link
                    to={`/channel/${user?.id}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <User className="h-4 w-4" />
                    Your channel
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-border" />
                <DropdownMenuItem
                  onClick={logout}
                  className="flex items-center gap-2 cursor-pointer text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link to="/login">
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              <User className="h-4 w-4 mr-2" />
              Sign in
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
