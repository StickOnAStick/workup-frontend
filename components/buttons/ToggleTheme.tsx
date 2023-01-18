'use client';
import { setSyntheticLeadingComments } from "typescript";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

export const ToggleTheme = () => {
    
    const setTheme = () => {
        document.documentElement.dataset.theme = "dark" ? "light" : "dark";
    };

    return (
        <button className="rounded-lg dark:bg-blue-600 bg-white border-black dark:border-white"
                onClick={()=> setTheme()}>
            <div>Toggle Theme</div>
        </button>
    )
};