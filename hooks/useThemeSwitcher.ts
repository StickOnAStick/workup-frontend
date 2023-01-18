'use client';
//Since we use SSR, cookies will be required. Local stoage can be somewhat functional, but does not cause refresh
//... of other components. This can be overcome by using next refresh; however, this will likely be more costly
// than storing client cookies. Data vs. Power Comp.
import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const activeTheme = theme === 'dark' ? 'light' : 'dark';
    
    useEffect(()=>{
        const root = window.document.documentElement;

        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme',theme);
        

    }, [theme, activeTheme])

    return [activeTheme, setTheme] as const;
};

export default useThemeSwitcher;
