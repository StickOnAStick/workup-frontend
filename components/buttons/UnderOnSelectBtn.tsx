import Link from "next/link";
import { prependListener } from "process";

//TODO: Add links when other pages are made;;; Add underbar on only on selected

export default function UnderOnSelectBtn ({
    children,
}:{
    children: React.ReactNode
}) {
    return (
    <div className="bg-neutral-800 hover:bg-neutral-700 w-20 h-12  sm:w-28 sm:h-12 rounded-lg flex justify-center items-center hover:cursor-pointer font-bold tracking-wide ">
        <span className=" border-b border-b-blue-700 ">
            {children}
        </span>
    </div>
    );

}