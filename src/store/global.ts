import { create } from "zustand";

import StoreState from "./types";

export const useStore = create<StoreState>((set, get) => ({
    isLoading: false,
    page: 1,
    imageData: [],
    searchInput: null,
    suggestions: [],
    setSuggestions: (value) => {
        if (get().suggestions.indexOf(value) === -1) {
            set((state) => ({ suggestions: [...state.suggestions, value] }));
        }
    },
    setSearchInput: (input) => set({ searchInput: input }),
    getUrl: () => {
        if (get().searchInput === null) {
            return `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${
                import.meta.env.VITE_API_KEY
            }&page=${get().page}&per_page=9&format=json&nojsoncallback=1`;
        }
        return `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${
            import.meta.env.VITE_API_KEY
        }&text=${get().searchInput}&page=${
            get().page
        }&per_page=9&format=json&nojsoncallback=1`;
    },
    setImageData: (photo) =>
        set((state) => ({ imageData: [...state.imageData, ...photo] })),
    emptyImageData: () => set({ imageData: [] }),
    setPage: (value) => set({ page: value }),
    loadPhotos: async () => {
        set({ isLoading: true });
        const response = await fetch(get().getUrl());
        const json = await response.json();
        const datap = await json.photos;
        const photo = await datap.photo;
        get().setImageData(photo);
        set({ isLoading: false });
    },
}));
