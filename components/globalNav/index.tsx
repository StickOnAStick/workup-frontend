import Image from "next/image";
import logo from '../../public/favicon.ico'
export default function GlobalNavBar () {
    return (
        <div className="bg-neutral-800 h-14 border-b border-b-neutral-300 flex justify-between">
            
            <Image src={logo} width={48} height={48} alt="logo"/>
            
            <ul className="flex gap-3 text-white">
                <li>Home</li>
                <li>Search</li>
            </ul>

             <div className="text-white">Account</div>
        </div>
    );
}