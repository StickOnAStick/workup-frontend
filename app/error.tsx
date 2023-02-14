'use client';

import {useEffect} from 'react';

export default function Error({
    error,
    reset
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(()=>{
        console.error(error);
    }, [error]);

    return (
        <div className=' text-white flex justify-center'>
            <div className='flex flex-col justify-center w-1/2 bg-red-500 h-fit rounded-md'>
                <h2 >Something went wrong!</h2>
                <button
                className=' bg-yellow-400 w-16 rounded-lg'
                onClick={
                    ()=>reset()
                    }>
                    Reset
                </button>
            </div>
        </div>
    )
}