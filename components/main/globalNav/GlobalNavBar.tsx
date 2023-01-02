import Account from "../account/Account";
import NavBarIcons from "./NavBarIcons";
export default function GlobalNavBar () {
   
    return (
        <div className="bg-neutral-800 h-28 md:h-14 border-b border-b-neutral-600 inline-block align-middle w-full">
            <div className="py-1 px-3 md:px-5 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-3 md:gap-0 items-center ">
            
                {/* Image to go here */}
                <div className="flex justify-start">
                    <p className=" bg-blue-600 rounded-full h-10 w-10"></p>  
                </div>   

                <NavBarIcons/>

                <Account className={"flex justify-end text-white order-2 md:order-3"}/>
            </div>
        </div>
    );
}