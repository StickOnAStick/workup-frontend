'use client';
import { useRouter } from "next/navigation";
import Link from "next/link";
import PocketBase from 'pocketbase'
import {useState} from 'react';
import { LoginData } from "../../types/UserData/LoginData";

export default function Login () {
    const router = useRouter();
    const [loginData, setLoginData] = useState<LoginData>({email: "", pass: ""});
    
    const pb = new PocketBase('http://127.0.0.1:8090')
    
    const onSubmit = async () => {
        console.log(loginData)
        await pb.collection('users')
        .authWithPassword(loginData.email, loginData.pass)
        .then(()=>{
            if(pb.authStore.isValid){
                console.log("Login successful. Auth valid: " + pb.authStore.isValid);
                router.push('/');
            }
        }).catch((error)=>{
            console.log("Error occured:\n" + error)
        })
    }

    return (
        <div className="flex h-[calc(100vh-6rem)] justify-center text-white items-center">
            <div className="bg-neutral-800 px-5 py-8 rounded-lg border border-white">
                <span className="font-bold tracking-wide text-xl flex justify-center mb-6">Login</span>
                <div className="my-3 flex justify-between gap-4">
                    <input type="email" placeholder="Email" value={loginData.email}
                    onChange={(e)=>{setLoginData({
                        ...loginData,
                        email: e.target.value
                    })}}
                        className="rounded-md text-black font-semibold text-xl py-1 px-2 " ></input>
                </div>
                <div>
                    <input type="password" placeholder="Password" value={loginData.pass} 
                    onChange={(e)=>{setLoginData({
                        ...loginData, pass: e.target.value
                    })}}
                        className="rounded-md text-black text-xl py-1 px-2 font-semibold"></input>
                </div>

                <div className="flex justify-around my-4">
                    <Link href="/" className="px-3 py-1 bg-neutral-100 text-black rounded-lg font-semibold text-md active:scale-110">
                        Back
                    </Link>
                    <button onClick={onSubmit}
                    className="px-3 py-1 bg-blue-500 rounded-lg font-semibold text-md active:scale-110">
                        Submit
                    </button>
                </div>

                <div className="mt-3 flex flex-col">
                    <span>Don&apos;t have an account?</span>
                    <span>
                        <Link href="/register" className=" decoration-slate-400 underline font-semibold">
                            Sign Up here
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}