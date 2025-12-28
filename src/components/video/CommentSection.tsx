import { useState } from "react";
import { ThumbsUp, MessageSquare, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockComments, formatTimeAgo } from "@/data/mockData";
import { useAuthStore } from "@/store/authStore";
import { formatViews } from "@/data/mockData";

interface CommentSectionProps {
  videoId: string;
  commentCount?: number;
}

export const CommentSection = ({ videoId, commentCount = 0 }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { user, profile, isAuthenticated } = useAuthStore();

  const handleSubmit = () => {
    if (newComment.trim()) {
      // In real app, this would call an API
      console.log("Submitting comment:", newComment);
      setNewComment("");
      setShowInput(false);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        {formatViews(commentCount || mockComments.length)} Comments
      </h3>

      {/* Add comment */}
      <div className="flex gap-3 mb-6">
        <Avatar className="w-10 h-10">
          <AvatarImage src={profile?.avatar_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id}`} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          {showInput ? (
            <>
              <Textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="bg-transparent border-0 border-b border-border rounded-none px-0 focus-visible:ring-0 resize-none"
                rows={2}
              />
              <div className="flex justify-end gap-2 mt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowInput(false);
                    setNewComment("");
                  }}
                >
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSubmit}
                  disabled={!newComment.trim() || !isAuthenticated}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Comment
                </Button>
              </div>
            </>
          ) : (
            <button
              onClick={() => isAuthenticated ? setShowInput(true) : null}
              className="w-full text-left text-muted-foreground text-sm border-b border-border pb-2 hover:border-foreground transition-colors"
            >
              {isAuthenticated ? "Add a comment..." : "Sign in to comment"}
            </button>
          )}
        </div>
      </div>

      {/* Comments list */}
      <div className="space-y-4">
        {mockComments.map((comment) => (
          <div key={comment.id} className="flex gap-3 animate-fade-in">
            <Avatar className="w-10 h-10 flex-shrink-0">
              <AvatarImage src={comment.user.avatar} />
              <AvatarFallback>{comment.user.username[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">
                  @{comment.user.username}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formatTimeAgo(comment.createdAt)}
                </span>
              </div>
              <p className="text-sm text-foreground/90 mt-1">{comment.content}</p>
              <div className="flex items-center gap-4 mt-2">
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-xs">{formatViews(comment.likes)}</span>
                </button>
                <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs">Reply</span>
                </button>
              </div>

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-3 space-y-3">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-3">
                      <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarImage src={reply.user.avatar} />
                        <AvatarFallback>{reply.user.username[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-primary">
                            @{reply.user.username}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {formatTimeAgo(reply.createdAt)}
                          </span>
                        </div>
                        <p className="text-sm text-foreground/90 mt-1">
                          {reply.content}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                            <ThumbsUp className="w-3 h-3" />
                            <span className="text-xs">{formatViews(reply.likes)}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
