'use client';
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import PocketBase, { Record } from 'pocketbase';
import Image from "next/image";
import { useEffect, useState } from 'react';


async function fetchAvatar(pb: PocketBase) {
    const userId = pb.authStore.model?.id;
    if(userId){
        const fetchAvatar = await pb.collection('users').getOne(userId)
        return fetchAvatar;
    }
    return undefined;
}


export default function Account ({
    className,
}: {
    className?: string 
}) {
    const [userInfo, setUserInfo] = useState<Record>();
    const pb = new PocketBase("http://127.0.0.1:8090");
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const response = await fetchAvatar(pb);
            if (response != undefined) {
                setUserInfo(response);
                setSignedIn(true);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={className}>
            <div className=" p-1 sm:p-2 group flex justify-center relative">
                {!signedIn && 
                    <Link href="/login">
                        <FiUser size={28}/>
                    </Link> 
                } 
                {signedIn && userInfo && 
                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <Image src={`https://127.0.0.1:8090/api/files/${userInfo?.collectionId}/${userInfo?.id}/${userInfo.avatar}`} alt="avatar" width={50} height={50}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
