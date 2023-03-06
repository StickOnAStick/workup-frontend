'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Form {
    owner: string,
    comentary: string,
    id: string | null,
    image: File | null;

}

const CreatePost = () => {

    const [formData, setFormData] = useState<Form>({owner: '', comentary: '', image: null, id: null });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value, files} = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value,
        }));
    }
    
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();

        const form = new FormData();
        form.append('commentary', formData.comentary);
        if(formData.image){
            form.append('image', formData.image);
        }

        fetch('http://127.0.0.1:8090/api/collections/posts/records',{
            method: 'POST',
            body: form,
        })
        .then((response)=> response.json())
        .then((data)=> {
            console.log("Success! ", data);
        })
        .catch((e)=>{
            console.log("Error: ", e);
        });
    }



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="postModal" className="btn">CreatePost</label>
                
            <input type="checkbox" id="postModal" className="modal-toggle"/>
            <label className="modal cursor-pointer" htmlFor="postModal">
                <label className="modal-box relative">
                    <h3 className=" font-bold">Create Post</h3>
                    <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" onChange={handleChange} />
                    <input type="file" name='file' className="file-input file-input-bordered file-input-primary w-full max-w-xs" onChange={handleChange}/>
                    <input type="submit" value="Submit" className="btn"/>
                </label>
            </label>
        </form>
    );
}

export default CreatePost;