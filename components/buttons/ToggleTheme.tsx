'use client';
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

export const ToggleTheme = () => {
    const [theme, setTheme] = useThemeSwitcher();

    return (
        <button className="rounded-lg dark:bg-blue-600 bg-white border-black dark:border-white"
                onClick={()=> setTheme(theme)}>
            <div>Toggle Theme</div>
        </button>
    )
}