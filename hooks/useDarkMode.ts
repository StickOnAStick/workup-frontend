'use client';
import Cookies from 'universal-cookie';
import {useState, useEffect } from 'react';

export default function useDarkMode ()  {
    const cookies = new Cookies();
    const initalMode = cookies.get('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(initalMode);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        cookies.set('darkMode', !darkMode, { path: '/' });
    }

    return [darkMode, toggleDarkMode] as const
}