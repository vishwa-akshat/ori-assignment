interface imageType {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
}

export default interface StoreState {
    isLoading: boolean;
    page: number;
    searchInput: string | null;
    suggestions: Array<string>;
    imageData: Array<imageType>;
    setImageData: (photo: Array<imageType>) => void;
    setPage: (value: number) => void;
    getUrl: () => RequestInfo | URL;
    loadPhotos: () => void;
    emptyImageData: () => void;
    setSuggestions: (value: string) => void;
    setSearchInput: (value: string | null) => void;
}
