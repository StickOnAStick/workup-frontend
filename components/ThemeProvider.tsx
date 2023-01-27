import React from "react";
import useDarkMode  from "../hooks/useDarkMode";

export default function ThemeProvider ({
    children,
  }: {
    children: React.ReactNode
  }) {

    const [darkModeEnabled] = useDarkMode();

    return (
        <div className={`${darkModeEnabled ? 'dark' : 'light'}`}>
            {children}
        </div>
    );
}