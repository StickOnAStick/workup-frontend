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
        <div >
            <h2 className='bg-red-800 text-white'>Something went wrong!</h2>
            <button onClick={
                ()=>reset()
                }>
                Reset
            </button>
        </div>
    )
}