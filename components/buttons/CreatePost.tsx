'use client';
import {  FormEvent, useState } from 'react';
import PocketBase from 'pocketbase';
import { useRouter } from 'next/navigation';

interface Form {
    owner: string,
    comentary: string,
    id:  string | null,
    image: File | null;

}

const CreatePost = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    
    const pb = new PocketBase("http://localhost:8090/");
    const router = useRouter();


    async function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const target = event.target as typeof event.target & {
            comentary: {value: string},
            image: { files: FileList }
        };

        const userId = pb.authStore.model?.id;

        if(userId && pb.authStore.isValid){
            const image = target.image.files[0];
            
            const formData:any = new FormData();
            formData.append('owner', userId)
            formData.append('comentary', target.comentary.value);
            formData.append('image', image);


            //console.log("Data: \n", image);

            const createRecord = await pb.collection('posts').create(formData)
            .then(
                (response) =>  {
                    console.log(response);
                    router.refresh();
                }
            ).then((data)=> {
                setModalOpen(false);
                setShowError(false);
                console.log("Sucess!", data);
            }).catch((e) => {
                setShowError(true);
                console.log("Error: ", e);
            });
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="postModal" className="btn" onClick={()=>setModalOpen(true)}>CreatePost</label>
            
            {modalOpen && (
                <>
                <input type="checkbox" id="postModal" className="modal-toggle"/>
                <label className="modal cursor-pointer" htmlFor="postModal">
                    <label className="modal-box relative flex flex-col">
                        <h3 className=" font-bold text-3xl mb-4">Create Post</h3>
                        <div className='justify-center flex-col flex gap-2'>
                            <input type="text" name="comentary" placeholder="Title" className="input input-bordered w-full max-w-xs"/>
                            <input type="file" name='image' className="file-input file-input-bordered file-input-primary w-full max-w-xs" accept='image/*'/>
                            <input type="submit" value="Submit" className="btn"/>
                        </div>
                        
                        {showError && (
                            <div className="alert alert-error shadow-lg">
                            <div>
                              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              <span>Error! Could not upload to Reputable!</span>
                            </div>
                          </div>
                        )}

                    </label>
                </label>
                </>
            )}
        </form>
    );
}

export default CreatePost;