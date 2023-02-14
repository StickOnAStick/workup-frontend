'use client';
import { useState, useRef, useEffect, useImperativeHandle, } from "react";
import React from 'react';

type CreatePostModalProps = {
    user?: string
}

export type CreatePostModalRef = {
    show: () => void;
    hide: () => void;
}

const CreatePostModal: React.ForwardRefRenderFunction<CreatePostModalRef, CreatePostModalProps> 
    = ({user}, ref) => {

        const [isVisible, setIsVisible] = useState<boolean>(false);
        const userDataRef = useRef<CreatePostModalProps>(null);

        useEffect(() => {
            setIsVisible(true);
            return () => {
                setIsVisible(false);    
            }
        }, [])

        const show = () => {
            setIsVisible(true);
        }

        const hide = () => {
            setIsVisible(false);
        }

        useImperativeHandle(
            ref,
            () => ({
                hide,
                show,
            }),
            []
        );

        return (
            <div className={isVisible ? "block" : "hidden"}>
                This is a modal!
                <button onClick={() => setIsVisible(false)}>Remove</button>
            </div>
        )
    }
export default React.forwardRef(CreatePostModal);