// hooks/useAppPreloader.ts
import { useState, useEffect } from 'react';
import { useImagePreloader } from './useImagePreloader';
import StartLogo from '../assets/StartLogo.webp'
// Список изображений для предзагрузки
const PRELOAD_IMAGES = [
    StartLogo
];

export const useAppPreloader = () => {
    const { imagesLoaded, progress } = useImagePreloader(PRELOAD_IMAGES);
    const [contentLoaded, setContentLoaded] = useState(false);

    // Когда все изображения загружены, разрешаем показ контента
    useEffect(() => {
        if (imagesLoaded) {
            // Небольшая задержка для плавности
            const timer = setTimeout(() => setContentLoaded(true), 300);
            return () => clearTimeout(timer);
        }
    }, [imagesLoaded]);

    return {
        contentLoaded,
        progress: Math.round(progress),
        imagesLoaded
    };
};