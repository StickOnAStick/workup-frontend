import '../styles/dist.css'
import React from 'react';
import GlobalNavBar from '../components/main/globalNav/GlobalNavBar';
//import ThemeProvider from './ThemeProvider';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" data-theme="dark">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
        <body className=" bg-neutral-900">
          <nav>
            <GlobalNavBar/>
          </nav>
          <main>
            {children}
          </main>
        </body>
    </html>
  )
}
