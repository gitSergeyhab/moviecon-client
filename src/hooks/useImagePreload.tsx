import { useEffect, useState } from "react";

const preloadImages = (images: string[]): Promise<void[]> => {
  return Promise.all(
    images.map((image) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve();
        img.onerror = (err) => reject(err);
      });
    })
  );
};

export const useImagePreload = (
  images: string[],
  isPreloadRequired = false
) => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);
  useEffect(() => {
    if (isPreloadRequired && images.length > 0) {
      preloadImages(images)
        .then(() => setAreImagesLoaded(true))
        .catch((err) => console.error(err));
    }
  }, [isPreloadRequired, images]);
  return { areImagesLoaded };
};
