'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import useDarkMode from "../../hooks/useDarkMode";

export const ToggleTheme = () => {
    
    const [mounted, setMounted] = useState(false);

    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(()=> {
        setMounted(true);
    }, []);

    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    

    return (
        <button className="rounded-lg dark:bg-blue-600 bg-white border-black dark:border-white"
                onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
            <div>Toggle Theme</div>
        </button>
    )
};