import { Video, User, Comment, Category } from "@/types";

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "music", name: "Music" },
  { id: "gaming", name: "Gaming" },
  { id: "education", name: "Education" },
  { id: "tech", name: "Technology" },
  { id: "sports", name: "Sports" },
  { id: "entertainment", name: "Entertainment" },
  { id: "news", name: "News" },
  { id: "comedy", name: "Comedy" },
  { id: "science", name: "Science" },
  { id: "cooking", name: "Cooking" },
  { id: "travel", name: "Travel" },
];

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Building a Complete React Application from Scratch - Full Tutorial",
    description: "Learn how to build a production-ready React application with modern best practices, hooks, and state management.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "45:32",
    views: 1250000,
    likes: 85000,
    dislikes: 1200,
    createdAt: "2024-01-15",
    channel: {
      id: "c1",
      name: "CodeMaster Pro",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      subscribers: 2500000,
    },
    tags: ["react", "javascript", "tutorial", "web development"],
    category: "tech",
  },
  {
    id: "2",
    title: "Lofi Hip Hop Radio - Beats to Relax/Study To 🎵",
    description: "24/7 lofi hip hop radio - relaxing beats for studying, working, and chilling.",
    thumbnail: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "LIVE",
    views: 45000000,
    likes: 980000,
    dislikes: 5000,
    createdAt: "2024-02-01",
    channel: {
      id: "c2",
      name: "Lofi Dreams",
      avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop",
      subscribers: 8500000,
    },
    tags: ["lofi", "music", "study", "relax"],
    category: "music",
  },
  {
    id: "3",
    title: "Epic Gaming Moments Compilation 2024 - Best Plays Ever",
    description: "Watch the most incredible gaming moments from top streamers and pro players.",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "18:45",
    views: 3200000,
    likes: 156000,
    dislikes: 3400,
    createdAt: "2024-01-28",
    channel: {
      id: "c3",
      name: "Gaming Legends",
      avatar: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?w=100&h=100&fit=crop",
      subscribers: 5200000,
    },
    tags: ["gaming", "compilation", "esports", "highlights"],
    category: "gaming",
  },
  {
    id: "4",
    title: "The Future of AI: What to Expect in 2025",
    description: "Deep dive into artificial intelligence trends and predictions for the upcoming year.",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "32:18",
    views: 890000,
    likes: 67000,
    dislikes: 890,
    createdAt: "2024-02-10",
    channel: {
      id: "c4",
      name: "Tech Insights",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop",
      subscribers: 1800000,
    },
    tags: ["AI", "technology", "future", "machine learning"],
    category: "tech",
  },
  {
    id: "5",
    title: "Mastering Python in 30 Days - Complete Beginner Course",
    description: "Comprehensive Python programming course for absolute beginners. Learn coding from zero.",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "8:45:00",
    views: 4500000,
    likes: 245000,
    dislikes: 2100,
    createdAt: "2024-01-05",
    channel: {
      id: "c5",
      name: "Learn Code Daily",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      subscribers: 3200000,
    },
    tags: ["python", "programming", "tutorial", "beginner"],
    category: "education",
  },
  {
    id: "6",
    title: "Street Food Tour: Tokyo's Hidden Gems 🍜",
    description: "Exploring the best street food spots in Tokyo that tourists never find.",
    thumbnail: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "24:56",
    views: 2100000,
    likes: 98000,
    dislikes: 1200,
    createdAt: "2024-02-05",
    channel: {
      id: "c6",
      name: "Food Explorer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
      subscribers: 4100000,
    },
    tags: ["food", "travel", "tokyo", "japan"],
    category: "travel",
  },
  {
    id: "7",
    title: "Champions League Final Highlights - Incredible Match!",
    description: "Full highlights from the thrilling Champions League final with all goals and key moments.",
    thumbnail: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "12:34",
    views: 15000000,
    likes: 520000,
    dislikes: 8900,
    createdAt: "2024-01-20",
    channel: {
      id: "c7",
      name: "Sports Central",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop",
      subscribers: 12000000,
    },
    tags: ["football", "soccer", "champions league", "highlights"],
    category: "sports",
  },
  {
    id: "8",
    title: "Stand-Up Comedy Special: Life in the Digital Age",
    description: "Hilarious take on modern life, social media, and technology from rising comedian star.",
    thumbnail: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "58:22",
    views: 6700000,
    likes: 380000,
    dislikes: 4500,
    createdAt: "2024-02-12",
    channel: {
      id: "c8",
      name: "Comedy Central",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
      subscribers: 9800000,
    },
    tags: ["comedy", "standup", "funny", "entertainment"],
    category: "comedy",
  },
  {
    id: "9",
    title: "Quantum Physics Explained Simply",
    description: "Understanding quantum mechanics without complex math. Science made accessible.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "28:45",
    views: 1800000,
    likes: 125000,
    dislikes: 980,
    createdAt: "2024-01-25",
    channel: {
      id: "c9",
      name: "Science Simplified",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      subscribers: 2900000,
    },
    tags: ["science", "physics", "quantum", "education"],
    category: "science",
  },
  {
    id: "10",
    title: "5 Minute Recipes: Quick & Healthy Meals",
    description: "10 amazing recipes you can make in just 5 minutes. Perfect for busy people!",
    thumbnail: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "15:20",
    views: 8900000,
    likes: 456000,
    dislikes: 3200,
    createdAt: "2024-02-08",
    channel: {
      id: "c10",
      name: "Quick Kitchen",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      subscribers: 7600000,
    },
    tags: ["cooking", "recipes", "food", "quick meals"],
    category: "cooking",
  },
  {
    id: "11",
    title: "Breaking: Major Tech Announcement Changes Everything",
    description: "Live coverage and analysis of the biggest tech announcement of the year.",
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "42:10",
    views: 5400000,
    likes: 198000,
    dislikes: 12000,
    createdAt: "2024-02-14",
    channel: {
      id: "c11",
      name: "Tech News Daily",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop",
      subscribers: 6200000,
    },
    tags: ["news", "technology", "breaking", "announcement"],
    category: "news",
  },
  {
    id: "12",
    title: "Ultimate Guitar Tutorial: Learn Any Song",
    description: "Master techniques that will help you learn any song on guitar quickly.",
    thumbnail: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    duration: "35:48",
    views: 2300000,
    likes: 145000,
    dislikes: 1800,
    createdAt: "2024-01-30",
    channel: {
      id: "c12",
      name: "Guitar Academy",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop",
      subscribers: 3400000,
    },
    tags: ["music", "guitar", "tutorial", "learning"],
    category: "music",
  },
];

export const mockComments: Comment[] = [
  {
    id: "cm1",
    content: "This is absolutely amazing! I've been looking for a tutorial like this for months. Thank you so much! 🙏",
    createdAt: "2024-02-15",
    likes: 2340,
    user: {
      id: "u1",
      username: "TechEnthusiast",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    },
    replies: [
      {
        id: "cm1-r1",
        content: "Glad you found it helpful! More tutorials coming soon.",
        createdAt: "2024-02-15",
        likes: 856,
        user: {
          id: "c1",
          username: "CodeMaster Pro",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        },
      },
    ],
  },
  {
    id: "cm2",
    content: "I implemented this in my project and it works perfectly. The explanation at 12:45 was especially helpful.",
    createdAt: "2024-02-14",
    likes: 1567,
    user: {
      id: "u2",
      username: "DevMaster2024",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=100&h=100&fit=crop",
    },
  },
  {
    id: "cm3",
    content: "Can you do a follow-up video on advanced patterns? This was great but I'd love to see more complex examples.",
    createdAt: "2024-02-13",
    likes: 892,
    user: {
      id: "u3",
      username: "CodeNewbie",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
  },
  {
    id: "cm4",
    content: "The production quality of this channel keeps getting better. Subscribed and turned on notifications! 🔔",
    createdAt: "2024-02-12",
    likes: 2100,
    user: {
      id: "u4",
      username: "WebDevPro",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop",
    },
  },
  {
    id: "cm5",
    content: "Who else is watching this in 2024? Still one of the best tutorials out there!",
    createdAt: "2024-02-11",
    likes: 3456,
    user: {
      id: "u5",
      username: "FutureDev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
  },
];

export const currentUser: User = {
  id: "current-user",
  username: "JohnDoe",
  email: "john@example.com",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop",
  banner: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=300&fit=crop",
  subscribers: 0,
  createdAt: "2024-01-01",
  description: "Just a regular user exploring great content!",
};

export const formatViews = (views: number): string => {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`;
  }
  return views.toString();
};

export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 1) return "1 day ago";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
};
