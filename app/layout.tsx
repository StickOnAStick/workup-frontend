'use client';
import '../styles/dist.css'
import React, { useState } from 'react';
import GlobalNavBar from './NavBar';
import Image from 'next/image';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [show, setShow] = useState<Boolean>(false);
  const [profile, setProfile] = useState(false);
  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);

  return (
    <html lang="en">
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
