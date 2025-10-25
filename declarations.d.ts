declare module 'react-date-range/dist/styles.css';
declare module 'react-date-range/dist/theme/default.css';

declare module '*.svg' {
    import { ReactElement, SVGProps } from 'react';
    const content: (props: SVGProps<SVGElement>) => ReactElement;
    export default content;
}


// declare module '*.png';
// declare module '*.jpg';
// declare module '*.jpeg';
// declare module '*.gif';


declare module 'payment' {
    export const fns: {
        cardType(value: string): string;
        validateCardNumber(value: string): boolean;
        validateCardExpiry(month: string, year?: string): boolean;
        validateCardCVC(cvc: string, type?: string): boolean;
        formatCardNumber(value: string): string;
        formatCardExpiry(value: string): string;
        formatCardCVC(value: string): string;
    };
}