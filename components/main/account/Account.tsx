import { FiUser } from "react-icons/fi";
import Link from "next/link";
export default function Account ({
    className,
}: {
    className?: string 
}) {
    return (
        <div className={className + " group"}>
            <Link href="/login" className="flex flex-col justify-center">
                <FiUser size={28}/>
            </Link>
            <div className="hidden group-hover:block">
                Login
            </div>
        </div>
    );
}