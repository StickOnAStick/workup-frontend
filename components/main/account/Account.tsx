import { FiUser } from "react-icons/fi";
import Link from "next/link";
export default function Account ({
    className,
}: {
    className?: string 
}) {
    return (
        <div className={className}>
            <div className=" p-1 sm:p-2 group flex justify-center relative">
                <Link href="/login">
                    <FiUser size={28}/>
                </Link>
                <div className="hidden group-focus:hidden group-hover:flex absolute bottom-[-55%] bg-neutral-400 rounded-md font-bold px-1 ">
                    Login
                </div>
            </div>
        </div>
    );
}