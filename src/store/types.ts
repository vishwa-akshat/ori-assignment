export default interface StoreState {
    page: number;
    imageData: Array<object>;
    setImageData: (photo: Array<object>) => void;
    setPage: (value: number) => void;
    getUrl: () => RequestInfo | URL;
    loadPhotos: () => void;
}
