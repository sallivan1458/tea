// hooks/useImagePreloader.ts
import { useState, useEffect } from 'react';

export const useImagePreloader = (imageUrls: string[]) => {
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (imageUrls.length === 0) {
            setImagesLoaded(true);
            return;
        }

        let loadedCount = 0;
        const totalImages = imageUrls.length;

        const loadImage = (url: string): Promise<void> => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    loadedCount++;
                    setProgress((loadedCount / totalImages) * 100);
                    resolve();
                };
                img.onerror = () => {
                    loadedCount++;
                    setProgress((loadedCount / totalImages) * 100);
                    resolve(); // Продолжаем даже при ошибках
                };
                img.src = url;
            });
        };

        Promise.all(imageUrls.map(url => loadImage(url)))
            .then(() => setImagesLoaded(true));

    }, [imageUrls]);

    return { imagesLoaded, progress };
};