import { ToggleTheme } from "../../buttons/ToggleTheme";
import Account from "../account/Account";
import NavBarIcons from "./NavBarIcons";
export default function GlobalNavBar () {
   
    return (
        <div className="bg-slate-300 dark:bg-neutral-900 h-24 md:h-14 border-b border-b-neutral-600 inline-block align-middle w-full">
            <div className="py-1 px-3 md:px-5 grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 gap-0 md:gap-0 items-center ">
            
                {/* Image to go here */}
                <div className="flex justify-start">
                    <p className=" bg-blue-600 rounded-full h-10 w-10"></p>  
                </div>   

                <NavBarIcons/>

                
                <div className={"flex justify-end text-white order-2 md:order-3"}>
                    <ToggleTheme/>
                    <Account />
                </div>
            </div>
        </div>
    );
}