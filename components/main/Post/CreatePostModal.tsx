
export type CreatePostModalRef = {
    show: () => void;
    hide: () => void;
}

const CreatePostModal: React.ForwardRefRenderFunction<CreatePostModalRef> = (
    _,
    ref
) => {
    return (
        <div>
            This is the create a a post modal.
        </div>
    )
}