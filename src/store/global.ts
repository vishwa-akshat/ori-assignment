import { create } from "zustand";

import StoreState from "./types";

export const useStore = create<StoreState>((set, get) => ({
    page: 1,
    imageData: [],
    getUrl: () => {
        return `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${
            import.meta.env.VITE_API_KEY
        }&page=${get().page}&per_page=9&format=json&nojsoncallback=1`;
    },
    setImageData: (photo) =>
        set((state) => ({ imageData: [...state.imageData, ...photo] })),
    setPage: (value) => set({ page: value }),
    loadPhotos: async () => {
        const response = await fetch(get().getUrl());
        const json = await response.json();
        const datap = await json.photos;
        const photo = await datap.photo;
        get().setImageData(photo);
    },
}));
