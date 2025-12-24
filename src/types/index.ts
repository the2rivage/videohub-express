export interface User {
  id: string;
  username: string;
  email: string;
  avatar: string;
  banner?: string;
  subscribers: number;
  createdAt: string;
  description?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  views: number;
  likes: number;
  dislikes: number;
  createdAt: string;
  channel: {
    id: string;
    name: string;
    avatar: string;
    subscribers: number;
  };
  tags: string[];
  category: string;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  likes: number;
  user: {
    id: string;
    username: string;
    avatar: string;
  };
  replies?: Comment[];
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}
