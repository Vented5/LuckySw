import { useEffect } from "react";

export function useClickOutside<T extends HTMLElement>(
    ref: React.RefObject<T>,
    onOutsideClick: () => void
) {
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (!ref.current) return;

            if (!ref.current.contains(e.target as Node)) {
                onOutsideClick();
            }
        }
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
        
    }, [ref, onOutsideClick]);
}