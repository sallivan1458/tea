// hooks/useViewportHeight.ts
import { useEffect, useState } from 'react';

export const useViewportHeight = (): number => {
    const [vh, setVh] = useState<number>(0);

    useEffect(() => {
        const setRealHeight = (): void => {
            const height = window.innerHeight;
            setVh(height);

            // Также устанавливаем в CSS переменную для использования в styled-components
            document.documentElement.style.setProperty('--vh', `${height}px`);
        };

        setRealHeight();

        let timeoutId: number;
        const handleResize = (): void => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(setRealHeight, 150);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleResize);

        return (): void => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('orientationchange', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    return vh;
};