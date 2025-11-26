// src/utils/useImageLoader.ts

import { useEffect, useState } from 'react';

/**
 * Хук для предварительной загрузки массива URL изображений.
 * @param imageUrls Массив строк с URL изображений.
 * @returns boolean true, если все изображения загружены (или произошла ошибка загрузки), иначе false.
 */
const useImageLoader = (imageUrls: string[]): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedCount = 0;
        const totalCount = imageUrls.length;

        if (totalCount === 0) {
            setIsLoaded(true);
            return;
        }

        const handleImageLoad = () => {
            loadedCount += 1;
            if (loadedCount === totalCount) {
                setIsLoaded(true);
            }
        };

        const imageElements: HTMLImageElement[] = [];

        imageUrls.forEach(url => {
            // Создаем объект Image для запуска загрузки
            const img = new Image();
            img.src = url;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad; // Считать загруженным даже при ошибке, чтобы не блокировать страницу
            imageElements.push(img);
        });

        // Функция очистки при размонтировании
        return () => {
            imageElements.forEach(img => {
                img.onload = null;
                img.onerror = null;
            });
        };
    }, [imageUrls]); // Зависимость от списка URL

    return isLoaded;
};

export default useImageLoader;
