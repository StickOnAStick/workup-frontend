'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { FiHome, FiSearch, FiBriefcase, FiMap } from 'react-icons/fi';

import UnderOnSelectBtn from "../../buttons/UnderOnSelectBtn";

export default function NavBarIcons () {
    const pathName = usePathname();

    return (
        <ul className="flex h-full justify-center gap-3 text-white col-span-2 md:col-span-1 order-3 md:order-2 ">
            <li>
                <Link href="/buisness">
                    <UnderOnSelectBtn active={pathName === "/buisness" ? true : false}>
                        <FiBriefcase size={28} color={pathName === "/buisness" ? "#3B82F6" : ""}/>
                    </UnderOnSelectBtn>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <UnderOnSelectBtn active={pathName === "/" ? true : false}>
                        <FiHome size={28} color={pathName === "/" ? "#3B82F6" : ""}/>
                        
                    </UnderOnSelectBtn>
                </Link> 
            </li>
            <li>
                <Link href="/discover">
                    <UnderOnSelectBtn active={pathName === "/discover" ? true : false}>
                        <FiMap size={28} color={pathName === "/discover" ? "#3B82F6" : ""} />
                    </UnderOnSelectBtn>
                </Link> 
            </li>
        </ul>
    );
} 