import Link from "next/link";
import UnderOnSelectBtn from "../components/buttons/UnderOnSelectBtn";
import { FiHome } from 'react-icons/fi';
export default function GlobalNavBar () {
    return (
        <div className="bg-neutral-800 h-28 md:h-14 border-b border-b-neutral-600 inline-block align-middle w-full">
            <div className="py-1 px-3 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 md:gap-0 items-center ">
            
                {/* Image to go here */}
                <div className="flex justify-start">
                    <p className=" bg-blue-600 rounded-full h-10 w-10"></p>  
                </div>   

                <ul className="flex justify-center gap-3 text-white col-span-2 md:col-span-1 order-3 md:order-2 h-full">
                    <li>
                        <UnderOnSelectBtn>
                            <div>Buisness</div>
                        </UnderOnSelectBtn>
                    </li>
                    <li>
                        <Link href="/">
                            <UnderOnSelectBtn>
                                <FiHome/>
                                
                            </UnderOnSelectBtn>
                        </Link>
                    </li>
                    <li>
                        <Link href="/search">
                            <UnderOnSelectBtn>
                                Search
                            </UnderOnSelectBtn>
                        </Link>
                    </li>
                    
                </ul>

                <div className="flex justify-end text-white order-2 md:order-3">Account</div>
            </div>
        </div>
    );
}