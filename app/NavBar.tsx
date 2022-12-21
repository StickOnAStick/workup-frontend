import UnderOnSelectBtn from "../components/buttons/UnderOnSelectBtn";
export default function GlobalNavBar () {
    return (
        <div className="bg-neutral-800 h-14 border-b border-b-neutral-600 p-1">
            <div className="bg-slate-800 grid md:grid-cols-3 md:grid-rows-1 items-center grid-cols-2 grid-rows-2">
            
                {/* Image to go here */}
                <div className="flex justify-start">
                    <p className=" bg-blue-600 rounded-full h-10 w-10"></p>  
                    
                </div>   

                <ul className="flex justify-center gap-3 text-white col-span-2 md:col-span-1 bg-red-400 order-3 md:order-2">
                    <li>
                        <UnderOnSelectBtn>1</UnderOnSelectBtn>
                    </li>
                    <li>
                        <UnderOnSelectBtn>Home</UnderOnSelectBtn>
                    </li>
                    <li>
                        <UnderOnSelectBtn>3</UnderOnSelectBtn>
                    </li>
                    
                </ul>

                <div className="flex justify-end text-white bg-purple-400 order-2 md:order-3">Account</div>
            </div>
        </div>
    );
}