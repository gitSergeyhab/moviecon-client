const IMAGES_MODE_KEY = "movie-con-loading-images";

class LoadingImagesService {
  static get mode(): boolean {
    return Boolean(window.localStorage.getItem(IMAGES_MODE_KEY));
  }

  static set mode(mode: boolean) {
    window.localStorage.setItem(IMAGES_MODE_KEY, mode ? "1" : "");
  }
}

export default LoadingImagesService;
