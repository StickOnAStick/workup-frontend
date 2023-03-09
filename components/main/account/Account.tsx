import { FiUser } from "react-icons/fi";
import Link from "next/link";
import PocketBase from 'pocketbase';
import Image from "next/image";

async function fetchAvatar(pb: PocketBase) {
    const userId = pb.authStore.model?.id;
    if(userId){
        const fetchAvatar = await pb.collection('users').getOne(userId);
        console.log(fetchAvatar);
    }
}


export default function Account ({
    className,
}: {
    className?: string 
}) {

    const pb = new PocketBase("http://127.0.0.1:8090");
    const signedIn = pb.authStore.isValid;
    console.log(signedIn);
    if(signedIn){
        
        fetchAvatar(pb);
    }

    return (
        <div className={className}>
            <div className=" p-1 sm:p-2 group flex justify-center relative">

                {!signedIn && 
                <Link href="/login">
                    <FiUser size={28}/>
                </Link> 
                } 
                {signedIn && 
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <Image src={'https://127.0.0.1:8090/api/files/'}/>
                    </div>
                </div>
                }

                
                
            </div>
        </div>
    );
}