import Image from "next/image";

interface ImageData { 
    COL_ID: string;
    REC_ID: string;
    FILE_NAME: string;
}

async function getImage(ImageData: ImageData) {
    const res = await fetch(
        `http://127.0.0.1:8090/api/files/${ImageData.COL_ID}/${ImageData.REC_ID}/${ImageData.FILE_NAME}`
        );
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
    if(IMG_DATA?.FILE_NAME) image = await getImage(IMG_DATA);

    return (
        <div className="bg-neutral-750 h-fit rounded-lg flex flex-col justify-center text-white overflow-clip border-b border-b-neutral-500">
            <div className="w-full">
                    {image && 
                    <div className="w-full h-auto">
                        <Image src={image.url} width={700} height={525}  style={{objectFit: 'cover', width: '100%', height: 'auto'}}
                            alt="alt grill" placeholder="blur" blurDataURL={image.url}
                            />    
                    </div>           
                    }
               <h3 className="px-3 pt-2 pb-1 font-medium">{title}</h3>
            </div>
        </div>
    )
}