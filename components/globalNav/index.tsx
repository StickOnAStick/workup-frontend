import Image from "next/image";
import logo from '../../public/favicon.ico'
export default function GlobalNavBar () {
    return (
        <div className="bg-neutral-800 h-14 border-b border-b-neutral-600 overflow-hidden relative">
            <div className="flex justify-between center">
            
                {/* Image to go here */}
                <p className="bg-blue-600 rounded-full h-10 w-10"></p>            
                <ul className="flex gap-3 text-white">
                    
                    <li>Home</li>
                    <li>Search</li>
                </ul>

                <div className="text-white">Account</div>
            </div>
        </div>
    );
}