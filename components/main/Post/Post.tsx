import Image from "next/image";
import TempPostImage from '../../../public/image.jpg'

interface ImageData { 
    COL_ID: string;
    REC_ID: string;
    FILE_NAME: string;
}

async function getImage(ImageData: ImageData){
    const res = await fetch(`http://127.0.0.1:8090/api/files/${ImageData.COL_ID}/${ImageData.REC_ID}/${ImageData.FILE_NAME}`)''
    return res;
    
}

export default async function Post ({
    title,
    IMG_DATA,

}:{
    title?: string,
    IMG_DATA?: ImageData
}) {
    let image = null;
    if(IMG_DATA) image = await getImage(IMG_DATA);
   

    return (
        <div className="bg-yellow-500 h-fit rounded-lg flex flex-col justify-center text-black">
            <h3 className="px-3 pt-2 pb-1">Content:{title}</h3>
            <div className="">
                This is a sample post
               {(IMG_DATA?.FILE_NAME && image) && 
                <Image src={image.url} width={200} height={150} alt="alt grill"/>               
               }
            </div>
            <footer>This is the footer</footer>
        </div>
    )
}