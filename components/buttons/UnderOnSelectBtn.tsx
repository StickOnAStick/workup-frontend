'use client';
//TODO: Add links when other pages are made;;; Add underbar on only on selected


export default function UnderOnSelectBtn ({
    children,
    active
}:{
    children: React.ReactNode
    active: boolean
}) {


    return (
    
    <div className="relative hover:bg-neutral-700 w-20 h-12 xs:w-28 sm:h-12 rounded-lg flex justify-center items-center hover:cursor-pointer font-bold tracking-wide ">
        
            <div>
            {children}
            </div>
            <span className={`${active ? ' absolute h-[3px] w-full bottom-0 md:bottom-[-4px] bg-blue-500 rounded-md': ''}`}/>
    </div>
    );

}