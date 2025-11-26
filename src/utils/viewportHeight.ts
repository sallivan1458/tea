export const setAppHeight = () => {
    // Получаем текущую высоту области просмотра в пикселях
    const vh = window.innerHeight * 0.01;
    // Устанавливаем значение этой переменной в корневом элементе CSS (html)
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};