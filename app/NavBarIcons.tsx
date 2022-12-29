'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

import { FiHome, FiSearch, FiBriefcase } from 'react-icons/fi';

import UnderOnSelectBtn from "../components/buttons/UnderOnSelectBtn";

export default function NavBarIcons () {
    const pathName = usePathname();

    return (
        <ul className="flex justify-center gap-3 text-white col-span-2 md:col-span-1 order-3 md:order-2 h-full">
                    <li>
                        <UnderOnSelectBtn active={false}>
                            <div>Buisness</div>
                        </UnderOnSelectBtn>
                    </li>
                    <li>
                        {pathName === "/" ? 
                            <Link href="/">
                                <UnderOnSelectBtn active={true}>
                                    <FiHome size={28} color={"#3B82F6"}/>
                                </UnderOnSelectBtn>
                            </Link> : 
                            <Link href="/">
                                <UnderOnSelectBtn active={false}>
                                    <FiHome size={28}/>
                                </UnderOnSelectBtn>
                            </Link>
                        }
                        
                    </li>
                    <li>
                        {pathName === "/search" ? 
                        <Link href="/search">
                            <UnderOnSelectBtn active={true}>
                                <FiSearch size={28} color={"#3B82F6"} />
                            </UnderOnSelectBtn>
                        </Link> 
                        : 
                        <Link href="/search">
                            <UnderOnSelectBtn active={false}>
                                <FiSearch size={28} />
                            </UnderOnSelectBtn>
                        </Link>}
                        
                    </li>
                    
                </ul>
    );
} 