import { create } from 'zustand';
import { Video } from '@/types';
import { mockVideos } from '@/data/mockData';

interface VideoState {
  videos: Video[];
  selectedCategory: string;
  searchQuery: string;
  likedVideos: Set<string>;
  subscribedChannels: Set<string>;
  setCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  toggleLike: (videoId: string) => void;
  toggleSubscribe: (channelId: string) => void;
  getFilteredVideos: () => Video[];
}

export const useVideoStore = create<VideoState>((set, get) => ({
  videos: mockVideos,
  selectedCategory: 'all',
  searchQuery: '',
  likedVideos: new Set(),
  subscribedChannels: new Set(),

  setCategory: (category) => set({ selectedCategory: category }),

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleLike: (videoId) =>
    set((state) => {
      const newLikedVideos = new Set(state.likedVideos);
      if (newLikedVideos.has(videoId)) {
        newLikedVideos.delete(videoId);
      } else {
        newLikedVideos.add(videoId);
      }
      return { likedVideos: newLikedVideos };
    }),

  toggleSubscribe: (channelId) =>
    set((state) => {
      const newSubscribedChannels = new Set(state.subscribedChannels);
      if (newSubscribedChannels.has(channelId)) {
        newSubscribedChannels.delete(channelId);
      } else {
        newSubscribedChannels.add(channelId);
      }
      return { subscribedChannels: newSubscribedChannels };
    }),

  getFilteredVideos: () => {
    const { videos, selectedCategory, searchQuery } = get();
    let filtered = videos;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((video) => video.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (video) =>
          video.title.toLowerCase().includes(query) ||
          video.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          video.channel.name.toLowerCase().includes(query)
      );
    }

    return filtered;
  },
}));
