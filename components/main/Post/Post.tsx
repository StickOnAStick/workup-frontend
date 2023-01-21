import Image from "next/image";
import TempPostImage from '../../../public/df4.jpg'

export default function Post () {
    return (
        <div className="bg-neutral-700 h-fit rounded-lg flex flex-col justify-center">
            <h3 className="px-3 pt-2 pb-1">This is the head</h3>
            <div className="">
                This is a sample post
                <Image src={TempPostImage} width={500} height={500} alt="Spirit"/>
            </div>
            <footer>This is the footer</footer>
        </div>
    )
}