import Link from "next/link";
import { prependListener } from "process";

//TODO: Add links when other pages are made;;; Add underbar on only on selected

export default function UnderOnSelectBtn ({
    children,
}:{
    children: React.ReactNode
}) {
    return (
    <div className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-lg flex flex-row hover:cursor-pointer font-bold tracking-wide">
        <span className=" border-b border-b-blue-700 ">
            {children}
        </span>
    </div>
    );

}